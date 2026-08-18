import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import type { AnalysisReport } from "@/lib/analysis-types";
import { SYSTEM_PROMPT } from "@/lib/analysis-prompt";

const InputSchema = z.object({
  imageDataUrl: z.string().min(20),
  note: z.string().max(500).optional(),
});

export const analyzeImage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<AnalysisReport> => {
    const openaiKey = process.env["OPENAI_API_KEY"];
    const lovableKey = process.env["LOVABLE_API_KEY"];
    if (!openaiKey && !lovableKey) throw new Error("AI is not configured.");

    const endpoint = openaiKey
      ? "https://api.openai.com/v1/chat/completions"
      : "https://ai.gateway.lovable.dev/v1/chat/completions";
    const model = openaiKey ? "gpt-4o" : "google/gemini-3.1-pro-preview";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey ?? lovableKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [

          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: data.note
                  ? `Analyse this sample. Grower note: ${data.note}`
                  : "Analyse this sample and return the JSON report.",
              },
              { type: "image_url", image_url: { url: data.imageDataUrl } },
            ],
          },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (response.status === 429) throw new Error("Too many requests — please try again shortly.");
    if (response.status === 402)
      throw new Error("AI credits exhausted. Please top up your workspace credits.");
    if (!response.ok) {
      console.error("AI gateway error", response.status, await response.text());
      throw new Error("The analysis engine could not process this image.");
    }

    const payload = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const raw = payload.choices?.[0]?.message?.content ?? "";
    const cleaned = raw
      .trim()
      .replace(/^```(?:json)?/i, "")
      .replace(/```$/, "");

    try {
      return JSON.parse(cleaned) as AnalysisReport;
    } catch {
      const start = cleaned.indexOf("{");
      const end = cleaned.lastIndexOf("}");
      if (start >= 0 && end > start) {
        return JSON.parse(cleaned.slice(start, end + 1)) as AnalysisReport;
      }
      throw new Error("The analysis engine returned an unreadable report. Please retry.");
    }
  });
