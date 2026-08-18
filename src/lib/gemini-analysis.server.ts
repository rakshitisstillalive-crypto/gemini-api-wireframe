import type { AnalysisReport } from "@/lib/analysis-types";
import { SYSTEM_PROMPT } from "@/lib/analysis-prompt";

const GEMINI_MODEL = "gemini-1.5-flash";

export type AnalyzeRequest = { imageDataUrl: string; note?: string | undefined };

export class AnalysisError extends Error {
  status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.status = status;
  }
}

function parseDataUrl(dataUrl: string): { mimeType: string; data: string } {
  const match = /^data:([^;,]+);base64,(.+)$/i.exec(dataUrl.trim());
  if (!match) throw new AnalysisError("Please upload a valid image file.", 400);
  return { mimeType: match[1] ?? "image/jpeg", data: match[2] ?? "" };
}

function extractReport(raw: string): AnalysisReport {
  const cleaned = raw
    .trim()
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/, "")
    .trim();
  try {
    return JSON.parse(cleaned) as AnalysisReport;
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(cleaned.slice(start, end + 1)) as AnalysisReport;
    }
    throw new AnalysisError("The analysis engine returned an unreadable report. Please retry.", 502);
  }
}

/** Calls the Google Gemini API and returns a structured agronomy report. */
export async function analyzeWithGemini(input: AnalyzeRequest): Promise<AnalysisReport> {
  const apiKey = process.env["GEMINI_API_KEY"] ?? process.env["GOOGLE_API_KEY"];
  if (!apiKey) throw new AnalysisError("AI is not configured. Missing GEMINI_API_KEY.", 500);

  if (!input?.imageDataUrl || input.imageDataUrl.length < 20) {
    throw new AnalysisError("An image is required.", 400);
  }
  const note = typeof input.note === "string" ? input.note.slice(0, 500) : undefined;
  const image = parseDataUrl(input.imageDataUrl);

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [
          {
            role: "user",
            parts: [
              {
                text: note
                  ? `Analyse this sample. Grower note: ${note}`
                  : "Analyse this sample and return the JSON report.",
              },
              { inlineData: { mimeType: image.mimeType, data: image.data } },
            ],
          },
        ],
        generationConfig: { responseMimeType: "application/json", temperature: 0.4 },
      }),
    },
  );

  if (response.status === 429) {
    throw new AnalysisError("Too many requests — please try again shortly.", 429);
  }
  if (!response.ok) {
    const body = await response.text();
    console.error("Gemini API error", response.status, body);
    throw new AnalysisError("The analysis engine could not process this image.", 502);
  }

  const payload = (await response.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const raw = payload.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
  if (!raw) throw new AnalysisError("The analysis engine returned an empty report.", 502);
  return extractReport(raw);
}
