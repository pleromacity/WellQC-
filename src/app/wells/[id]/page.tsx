"use client";

import { use } from "react";
import { AppShell } from "@/components/layout/app-shell";
import Link from "next/link";
import { WellLogViewer } from "@/components/well-log/log-viewer";
import { SAMPLE_LAS_FILES } from "@/lib/sample-las-files";
import { parseLASContent } from "@/lib/las/parser";
import { analyzeWellLogQuality } from "@/lib/las/quality-engine";
import { generateAIAnalysis } from "@/lib/las/ai-analyzer";
import {
  ArrowLeft,
  Database,
  Award,
  Layers,
  MapPin,
  Building2,
  FileText,
  Sparkles,
  Download,
  AlertTriangle,
} from "lucide-react";

export default function WellDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  // Parse sample LAS for interactive deep inspection
  const sampleObj = SAMPLE_LAS_FILES[0];
  const parsedLAS = parseLASContent(sampleObj.content);
  const qaResult = analyzeWellLogQuality(parsedLAS);
  const aiOutput = generateAIAnalysis(parsedLAS, qaResult);

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Back Link */}
        <div>
          <Link
            href="/wells"
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Well Master Index</span>
          </Link>
        </div>

        {/* Well Title Banner */}
        <div className="bg-wellqc-panel border border-wellqc-border p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <h1 className="text-2xl font-black text-white font-mono">WOLFCAMP_PROD_01</h1>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold badge-excellent">
                94 / 100 EXCELLENT
              </span>
            </div>
            <p className="text-xs text-wellqc-muted font-mono">
              API/UWI: 42-389-34190-00 | Operator: ExxonMobil | Field: Wolfcamp Permian | Basin: Delaware Basin
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/reports"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-wellqc-card border border-wellqc-border hover:border-cyan-500/50 text-cyan-300 font-semibold text-xs transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Export PDF Audit Report</span>
            </Link>
          </div>
        </div>

        {/* Technical Specs Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-wellqc-muted">Latitude / Longitude</span>
            <div className="text-sm font-bold text-white font-mono">31.7500° N, -103.5000° W</div>
          </div>
          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-wellqc-muted">Elevation (KB)</span>
            <div className="text-sm font-bold text-white font-mono">2,850 FT</div>
          </div>
          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-wellqc-muted">Total Depth (TD)</span>
            <div className="text-sm font-bold text-white font-mono">14,200 FT</div>
          </div>
          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-1">
            <span className="text-[10px] font-mono uppercase text-wellqc-muted">Active Curve Suite</span>
            <div className="text-sm font-bold text-cyan-400 font-mono">7 Log Channels</div>
          </div>
        </div>

        {/* AI Insight Box */}
        <div className="p-4 bg-wellqc-card border border-cyan-500/30 rounded-xl space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>AI Petrophysical Summary</span>
          </div>
          <p className="text-xs text-slate-300 font-mono">{aiOutput.summary}</p>
        </div>

        {/* Interactive Multi-Track Log Viewer */}
        <WellLogViewer
          wellName="WOLFCAMP_PROD_01"
          depthUnit={parsedLAS.wellInfo.depthUnit}
          startDepth={parsedLAS.wellInfo.startDepth}
          stopDepth={parsedLAS.wellInfo.stopDepth}
          curvesData={parsedLAS.data}
          anomalies={qaResult.anomalies}
        />
      </div>
    </AppShell>
  );
}
