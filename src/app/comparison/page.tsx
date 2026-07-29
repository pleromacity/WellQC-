"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { GitCompare, Database, CheckCircle2, ArrowRight } from "lucide-react";
import { WellLogViewer } from "@/components/well-log/log-viewer";
import { parseLASContent } from "@/lib/las/parser";
import { analyzeWellLogQuality } from "@/lib/las/quality-engine";
import { SAMPLE_LAS_FILES } from "@/lib/sample-las-files";

export default function ComparisonPage() {
  const [well1, setWell1] = useState("WOLFCAMP_PROD_01");
  const [well2, setWell2] = useState("MISSISSIPPI_CANYON_block544");

  const sample1 = parseLASContent(SAMPLE_LAS_FILES[0].content);
  const qa1 = analyzeWellLogQuality(sample1);

  const sample2 = parseLASContent(SAMPLE_LAS_FILES[1].content);
  const qa2 = analyzeWellLogQuality(sample2);

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-500/20 text-cyan-300 border border-cyan-500/40">
                Bonus Feature — Well-to-Well Log Comparison
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Side-by-Side Petrophysical Curve Log Comparison
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Compare log response curves, depth calibrations, and quality scores between adjacent offset wells.
            </p>
          </div>
        </div>

        {/* Well Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-wellqc-panel border border-wellqc-border p-4 rounded-xl space-y-2">
            <label className="block text-xs font-mono text-cyan-400 font-bold">Select Primary Well (Offset A):</label>
            <select
              value={well1}
              onChange={(e) => setWell1(e.target.value)}
              className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2.5 text-xs text-white font-mono"
            >
              <option value="WOLFCAMP_PROD_01">WOLFCAMP_PROD_01 (Permian Basin - Score: 94)</option>
              <option value="FORTIES_ALPHA_09">FORTIES_ALPHA_09 (North Sea - Score: 91)</option>
            </select>
          </div>

          <div className="bg-wellqc-panel border border-wellqc-border p-4 rounded-xl space-y-2">
            <label className="block text-xs font-mono text-amber-400 font-bold">Select Comparison Well (Offset B):</label>
            <select
              value={well2}
              onChange={(e) => setWell2(e.target.value)}
              className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2.5 text-xs text-white font-mono"
            >
              <option value="MISSISSIPPI_CANYON_block544">MISSISSIPPI_CANYON_block544 (GOM - Score: 86)</option>
              <option value="NIGER_DELTA_BLK12_04">NIGER_DELTA_BLK12_04 (Niger Delta - Score: 48)</option>
            </select>
          </div>
        </div>

        {/* Side-by-side Log Track Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="p-3 bg-wellqc-card border border-cyan-500/40 rounded-xl flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-cyan-300">{well1}</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                Quality: {qa1.overallScore}/100 ({qa1.qualityGrade})
              </span>
            </div>
            <WellLogViewer
              wellName={well1}
              depthUnit={sample1.wellInfo.depthUnit}
              startDepth={sample1.wellInfo.startDepth}
              stopDepth={sample1.wellInfo.stopDepth}
              curvesData={sample1.data}
              anomalies={qa1.anomalies}
            />
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-wellqc-card border border-amber-500/40 rounded-xl flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-amber-300">{well2}</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-bold">
                Quality: {qa2.overallScore}/100 ({qa2.qualityGrade})
              </span>
            </div>
            <WellLogViewer
              wellName={well2}
              depthUnit={sample2.wellInfo.depthUnit}
              startDepth={sample2.wellInfo.startDepth}
              stopDepth={sample2.wellInfo.stopDepth}
              curvesData={sample2.data}
              anomalies={qa2.anomalies}
            />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
