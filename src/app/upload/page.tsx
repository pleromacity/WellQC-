"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import Link from "next/link";
import { parseLASContent, ParsedLAS } from "@/lib/las/parser";
import { analyzeWellLogQuality, QualityAnalysisResult } from "@/lib/las/quality-engine";
import { generateAIAnalysis, AIAnalysisOutput } from "@/lib/las/ai-analyzer";
import { standardiseMnemonic } from "@/lib/las/standardiser";
import { buildCleanedDataExport } from "@/lib/las/exporter";
import { SAMPLE_LAS_FILES, SampleLASFile } from "@/lib/sample-las-files";
import { WellLogViewer } from "@/components/well-log/log-viewer";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Layers,
  Award,
  Database,
  ArrowRight,
  Download,
  Info,
  RefreshCw,
} from "lucide-react";

function downloadTextFile(fileName: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

export default function LASUploadPage() {
  const [dragActive, setDragActive] = useState(false);
  const [rawText, setRawText] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [parsedLAS, setParsedLAS] = useState<ParsedLAS | null>(null);
  const [qaResult, setQaResult] = useState<QualityAnalysisResult | null>(null);
  const [aiOutput, setAiOutput] = useState<AIAnalysisOutput | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [savedWell, setSavedWell] = useState<{ id: string; name: string; qualityScore: number } | null>(null);

  const processFileContent = (content: string, name: string) => {
    setIsProcessing(true);
    setSavedSuccess(false);
    setSaveError("");
    setSavedWell(null);
    try {
      const parsed = parseLASContent(content);
      const qa = analyzeWellLogQuality(parsed);
      const ai = generateAIAnalysis(parsed, qa);

      setRawText(content);
      setFileName(name);
      setParsedLAS(parsed);
      setQaResult(qa);
      setAiOutput(ai);
    } catch (err) {
      console.error("LAS Parsing Error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target?.result as string;
      processFileContent(text, file.name);
    };
    reader.readAsText(file);
  };

  const handleSampleClick = (sample: SampleLASFile) => {
    processFileContent(sample.content, sample.name);
  };

  const handleCleanedDataDownload = (format: "las" | "csv") => {
    if (!parsedLAS || !qaResult) return;

    const cleanedExport = buildCleanedDataExport(parsedLAS, qaResult);

    if (format === "las") {
      downloadTextFile(
        `${cleanedExport.fileStem}_cleaned.las`,
        cleanedExport.lasContent,
        "application/octet-stream;charset=utf-8",
      );
      return;
    }

    downloadTextFile(`${cleanedExport.fileStem}_cleaned.csv`, cleanedExport.csvContent, "text/csv;charset=utf-8");
  };

  const handleCommitToDatabase = async () => {
    if (!rawText || !parsedLAS || !qaResult) return;

    setIsSaving(true);
    setSaveError("");

    try {
      const response = await fetch("/api/las", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName, content: rawText }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to commit this LAS file.");
      }

      setSavedSuccess(true);
      setSavedWell(result.well);
    } catch (error) {
      setSavedSuccess(false);
      setSaveError(error instanceof Error ? error.message : "Unable to commit this LAS file.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                Module 03 — Ingestion & QA
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              LAS File Upload & Quality Ingestion Workspace
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Drag & drop raw LAS 2.0 / 3.0 well log files for real-time header extraction, curve standardisation, and AI anomaly detection.
            </p>
          </div>

          {/* Quick Demo Sample Files Bar */}
          <div className="flex items-center space-x-2 bg-wellqc-card border border-wellqc-border p-2 rounded-xl">
            <span className="text-xs font-mono text-slate-400 font-bold px-2">Load Sample:</span>
            {SAMPLE_LAS_FILES.map((sample) => (
              <button
                key={sample.id}
                onClick={() => handleSampleClick(sample)}
                className="px-3 py-1.5 rounded-lg bg-wellqc-panel hover:bg-cyan-500/20 border border-wellqc-border hover:border-cyan-500/50 text-xs font-mono text-cyan-300 font-semibold transition-all"
              >
                {sample.name.split('.')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Drag & Drop Upload Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
            const file = e.dataTransfer.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (evt) => {
                const text = evt.target?.result as string;
                processFileContent(text, file.name);
              };
              reader.readAsText(file);
            }
          }}
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
            dragActive
              ? "border-cyan-400 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20"
              : "border-wellqc-border hover:border-cyan-500/40 bg-wellqc-panel/40"
          }`}
        >
          <input
            type="file"
            accept=".las,.txt"
            onChange={handleFileUpload}
            className="hidden"
            id="las-file-input"
          />
          <label htmlFor="las-file-input" className="cursor-pointer block space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
              <UploadCloud className="w-7 h-7" />
            </div>
            <div>
              <span className="text-base font-bold text-white">Drag and drop your raw LAS file here</span>
              <p className="text-xs text-wellqc-muted font-mono mt-1">
                Supports LAS 2.0 & 3.0 ASCII well log files (.las, .txt up to 20MB)
              </p>
            </div>
          </label>
        </div>

        {/* Live Processing Indicator */}
        {isProcessing && (
          <div className="p-6 bg-wellqc-panel border border-cyan-500/40 rounded-2xl text-center space-y-3">
            <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mx-auto" />
            <div className="text-sm font-bold text-white font-mono">Extracting LAS Headers & Executing Petrophysical QA Rules...</div>
          </div>
        )}

        {/* PARSED RESULTS WORKSPACE */}
        {parsedLAS && qaResult && aiOutput && !isProcessing && (
          <div className="space-y-6">
            {/* Top Ingestion Quality Score Banner */}
            <div className="bg-wellqc-panel border border-wellqc-border rounded-2xl p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-2 space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-black text-white font-mono">{parsedLAS.wellInfo.wellName}</span>
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                    qaResult.qualityGrade === 'EXCELLENT' ? 'badge-excellent' :
                    qaResult.qualityGrade === 'GOOD' ? 'badge-good' :
                    qaResult.qualityGrade === 'POOR' ? 'badge-poor' : 'badge-critical'
                  }`}>
                    {qaResult.qualityGrade} QUALITY
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  Company: {parsedLAS.wellInfo.company} | Field: {parsedLAS.wellInfo.field} | API: {parsedLAS.wellInfo.apiUwi}
                </p>
                <p className="text-xs text-wellqc-muted font-mono">
                  Depth Interval: {parsedLAS.wellInfo.startDepth} – {parsedLAS.wellInfo.stopDepth} {parsedLAS.wellInfo.depthUnit} (Step: {parsedLAS.wellInfo.step})
                </p>
              </div>

              <div className="text-center p-4 bg-wellqc-card border border-wellqc-border rounded-xl">
                <span className="text-xs font-mono uppercase text-wellqc-muted">Well Quality Score</span>
                <div className={`text-4xl font-black font-mono mt-1 ${
                  qaResult.overallScore >= 90 ? 'text-emerald-400' :
                  qaResult.overallScore >= 75 ? 'text-cyan-400' :
                  qaResult.overallScore >= 50 ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {qaResult.overallScore} / 100
                </div>
              </div>

              <div className="space-y-2 text-right">
                <button
                  onClick={handleCommitToDatabase}
                  disabled={savedSuccess || isSaving}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
                >
                  {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
                  <span>
                    {isSaving ? "Saving..." : savedSuccess ? "Saved to Database ✓" : "Commit Well to Database"}
                  </span>
                </button>
                {saveError && (
                  <div className="text-left text-[11px] text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2 font-mono">
                    {saveError}
                  </div>
                )}
                {savedWell && (
                  <Link
                    href={`/wells/${savedWell.id}`}
                    className="block text-center text-[11px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2 font-mono hover:border-emerald-400"
                  >
                    View saved well: {savedWell.name} ({savedWell.qualityScore}/100)
                  </Link>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleCleanedDataDownload("las")}
                    className="flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] font-mono transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Cleaned LAS</span>
                  </button>
                  <button
                    onClick={() => handleCleanedDataDownload("csv")}
                    className="flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-wellqc-card hover:bg-cyan-500/20 border border-wellqc-border hover:border-cyan-500/50 text-cyan-300 font-bold text-[11px] font-mono transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Cleaned CSV</span>
                  </button>
                </div>
              </div>
            </div>

            {/* AI Summary Banner */}
            <div className="p-5 bg-gradient-to-r from-wellqc-panel via-wellqc-card to-wellqc-panel border border-cyan-500/30 rounded-2xl space-y-3 shadow-xl">
              <div className="flex items-center space-x-2 text-sm font-bold text-cyan-300">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span>AI Automated Petrophysical Interpretation & Recommendations</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-mono bg-wellqc-dark/50 p-3 rounded-xl border border-wellqc-border">
                {aiOutput.summary}
              </p>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-wellqc-muted uppercase font-bold">Recommended Actions:</span>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 font-mono">
                  {aiOutput.recommendations.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Multi-Track Log Viewer */}
            <WellLogViewer
              wellName={parsedLAS.wellInfo.wellName}
              depthUnit={parsedLAS.wellInfo.depthUnit}
              startDepth={parsedLAS.wellInfo.startDepth}
              stopDepth={parsedLAS.wellInfo.stopDepth}
              curvesData={parsedLAS.data}
              anomalies={qaResult.anomalies}
            />

            {/* Curve Standardisation & Health Breakdown Table */}
            <div className="bg-wellqc-panel border border-wellqc-border rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-wellqc-border">
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Curve Standardisation & Quality Inventory</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">{qaResult.curveSummaries.length} Channels Detected</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-wellqc-card border-b border-wellqc-border text-slate-400 uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Raw Mnemonic</th>
                      <th className="p-3">Standard Name</th>
                      <th className="p-3">Unit</th>
                      <th className="p-3">Null %</th>
                      <th className="p-3">Range (Min – Max)</th>
                      <th className="p-3">Health Score</th>
                      <th className="p-3">Anomalies</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-wellqc-border text-slate-200">
                    {qaResult.curveSummaries.map((c, i) => {
                      const std = standardiseMnemonic(c.mnemonic, c.unit);
                      return (
                        <tr key={i} className="hover:bg-wellqc-card/50 transition-colors">
                          <td className="p-3 font-bold text-white">{c.mnemonic}</td>
                          <td className="p-3 text-cyan-300">
                            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                              {std.standardMnemonic} ({std.matchedName})
                            </span>
                          </td>
                          <td className="p-3 text-slate-400">{c.unit || "—"}</td>
                          <td className="p-3">{c.nullPercentage.toFixed(1)}%</td>
                          <td className="p-3">
                            {c.minVal !== null ? `${c.minVal.toFixed(2)} – ${c.maxVal?.toFixed(2)}` : "All Null"}
                          </td>
                          <td className="p-3 font-bold">
                            <span className={c.healthScore >= 90 ? 'text-emerald-400' : c.healthScore >= 75 ? 'text-cyan-400' : 'text-amber-400'}>
                              {c.healthScore}/100
                            </span>
                          </td>
                          <td className="p-3">
                            {c.anomalies.length > 0 ? (
                              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px]">
                                {c.anomalies.length} Flags
                              </span>
                            ) : (
                              <span className="text-emerald-400 text-[10px]">Clean ✓</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
