"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Sliders,
  Play,
  RotateCcw,
} from "lucide-react";

export default function QAEnginePage() {
  const [nullThreshold, setNullThreshold] = useState("10");
  const [spikeSensitivity, setSpikeSensitivity] = useState("4.5");
  const [flatlineSteps, setFlatlineSteps] = useState("25");
  const [evaluated, setEvaluated] = useState(false);

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Module 05 & 06 — Rule Engine & AI Anomaly Detection
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Data Quality Engine & Threshold Configuration
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Tune mathematical boundary parameters, statistical Z-score thresholds, flatline step counts, and AI interpretability rules.
            </p>
          </div>

          <button
            onClick={() => setEvaluated(true)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/20"
          >
            <Play className="w-4 h-4" />
            <span>Run Quality Engine Test</span>
          </button>
        </div>

        {/* Threshold Form & Live Rule Parameters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-wellqc-panel border border-wellqc-border p-5 rounded-2xl space-y-4 font-mono text-xs">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Statistical & Spike Sensitivity</span>
            </h3>
            <div>
              <label className="block text-slate-400 mb-1">Max Null Value Limit (%)</label>
              <input
                type="number"
                value={nullThreshold}
                onChange={(e) => setNullThreshold(e.target.value)}
                className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2.5 text-white"
              />
              <span className="text-[10px] text-wellqc-muted mt-1 block">Flag curve if missing points exceed this %</span>
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Spike Z-Score Multiplier (σ)</label>
              <input
                type="number"
                step="0.1"
                value={spikeSensitivity}
                onChange={(e) => setSpikeSensitivity(e.target.value)}
                className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2.5 text-white"
              />
              <span className="text-[10px] text-wellqc-muted mt-1 block">Z-Score cutoff for despiking algorithm</span>
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Stuck Sensor Flatline Limit (Steps)</label>
              <input
                type="number"
                value={flatlineSteps}
                onChange={(e) => setFlatlineSteps(e.target.value)}
                className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2.5 text-white"
              />
              <span className="text-[10px] text-wellqc-muted mt-1 block">Consecutive identical readings triggering sensor flag</span>
            </div>
          </div>

          {/* Active Rule Cards */}
          <div className="md:col-span-2 bg-wellqc-panel border border-wellqc-border p-5 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold text-white font-mono flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Active Petrophysical Quality Inspection Rules</span>
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-wellqc-card border border-wellqc-border space-y-1">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>RULE 01: Bulk Density Physical Limit Check</span>
                  <span className="text-emerald-400 text-[10px]">ACTIVE</span>
                </div>
                <p className="text-slate-400 text-[11px]">Validates RHOB is strictly within 1.00 – 3.20 g/cc range.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-wellqc-card border border-wellqc-border space-y-1">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>RULE 02: Neutron Porosity Negative Limit Check</span>
                  <span className="text-emerald-400 text-[10px]">ACTIVE</span>
                </div>
                <p className="text-slate-400 text-[11px]">Flags NPHI &lt; -0.05 v/v or &gt; 0.60 v/v as impossible porosity.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-wellqc-card border border-wellqc-border space-y-1">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>RULE 03: Monotonic Depth Step & Gap Inspector</span>
                  <span className="text-emerald-400 text-[10px]">ACTIVE</span>
                </div>
                <p className="text-slate-400 text-[11px]">Detects duplicate depth records or unannounced depth skips &gt; 3x step value.</p>
              </div>
            </div>

            {evaluated && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 font-mono text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>QA Rule Engine re-calibrated successfully across 68 active basin wells!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
