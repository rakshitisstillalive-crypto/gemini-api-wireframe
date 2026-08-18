// Vercel serverless function: POST /api/analyze
// Body: { imageDataUrl: string, note?: string } -> AnalysisReport JSON
import { analyzeWithGemini, AnalysisError } from "../src/lib/gemini-analysis.server";

export const config = { maxDuration: 60 };

export default async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = (await req.json()) as { imageDataUrl?: string; note?: string };
    const report = await analyzeWithGemini({
      imageDataUrl: body.imageDataUrl ?? "",
      note: body.note,
    });
    return Response.json(report, { headers: { "Access-Control-Allow-Origin": "*" } });
  } catch (error) {
    const status = error instanceof AnalysisError ? error.status : 500;
    const message = error instanceof Error ? error.message : "Analysis failed.";
    return Response.json({ error: message }, { status });
  }
}
