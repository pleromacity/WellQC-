"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";
import { ZoomIn, ZoomOut, RotateCcw, AlertTriangle, Eye } from "lucide-react";

interface LogViewerProps {
  wellName: string;
  depthUnit: string;
  startDepth: number;
  stopDepth: number;
  curvesData: {
    depth: number[];
    curves: Record<string, number[]>;
  };
  anomalies?: {
    depthStart: number;
    depthEnd: number;
    curveMnemonic: string;
    anomalyType: string;
    severity: string;
    description: string;
  }[];
}

export function WellLogViewer({
  wellName,
  depthUnit,
  startDepth,
  stopDepth,
  curvesData,
  anomalies = [],
}: LogViewerProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState<"ALL" | "GAMMA" | "RESISTIVITY" | "POROSITY">("ALL");

  // Transform depth array and curves into chart rows
  const depthArr = curvesData.depth || [];
  const chartData = depthArr.map((d, idx) => {
    const row: Record<string, number | null> = { depth: d };
    for (const [key, arr] of Object.entries(curvesData.curves)) {
      const val = arr[idx];
      row[key] = val === -999.25 || isNaN(val) ? null : val;
    }
    return row;
  });

  return (
    <div className="bg-wellqc-panel border border-wellqc-border rounded-xl p-5 shadow-2xl space-y-4">
      {/* Log Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-wellqc-border">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-base font-bold text-white font-mono">{wellName} — Multi-Track Petrophysical Viewer</h3>
          </div>
          <p className="text-xs text-wellqc-muted font-mono mt-0.5">
            Depth Interval: {startDepth} – {stopDepth} {depthUnit} | Sample Count: {depthArr.length}
          </p>
        </div>

        {/* View Controls & Filter Toggles */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-wellqc-card border border-wellqc-border rounded-lg p-1 text-xs font-mono">
            <button
              onClick={() => setSelectedTrack("ALL")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedTrack === "ALL" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              All Tracks
            </button>
            <button
              onClick={() => setSelectedTrack("GAMMA")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedTrack === "GAMMA" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Track 1 (GR)
            </button>
            <button
              onClick={() => setSelectedTrack("RESISTIVITY")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedTrack === "RESISTIVITY" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Track 2 (Resistivity)
            </button>
            <button
              onClick={() => setSelectedTrack("POROSITY")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedTrack === "POROSITY" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Track 3 (RHOB/NPHI)
            </button>
          </div>

          <div className="flex items-center space-x-1 bg-wellqc-card border border-wellqc-border rounded-lg p-1">
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
              className="p-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.5))}
              className="p-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Multi-Track Canvas Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ transform: `scaleY(${zoomLevel})`, transformOrigin: 'top center' }}>
        {/* TRACK 1: Gamma Ray & SP */}
        {(selectedTrack === "ALL" || selectedTrack === "GAMMA") && (
          <div className="bg-wellqc-card/60 border border-wellqc-border rounded-xl p-3">
            <div className="flex items-center justify-between pb-2 border-b border-wellqc-border mb-2">
              <span className="text-xs font-bold text-emerald-400 font-mono">TRACK 1: GR / SP</span>
              <span className="text-[10px] font-mono text-slate-400">0 – 150 GAPI</span>
            </div>
            <div className="h-80 w-full log-track-grid rounded-lg">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#233252" />
                  <XAxis dataKey="depth" stroke="#94a3b8" tick={{ fontSize: 10 }} label={{ value: `Depth (${depthUnit})`, position: 'insideBottom', offset: -5, fill: '#94a3b8', fontSize: 10 }} />
                  <YAxis stroke="#94a3b8" tick={{ fontSize: 10 }} domain={[0, 150]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#131b2e", borderColor: "#233252", fontSize: "11px", color: "#fff" }}
                  />
                  <Area type="monotone" dataKey="GR" stroke="#10b981" fill="rgba(16, 185, 129, 0.15)" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* TRACK 2: Deep Resistivity RT */}
        {(selectedTrack === "ALL" || selectedTrack === "RESISTIVITY") && (
          <div className="bg-wellqc-card/60 border border-wellqc-border rounded-xl p-3">
            <div className="flex items-center justify-between pb-2 border-b border-wellqc-border mb-2">
              <span className="text-xs font-bold text-cyan-400 font-mono">TRACK 2: RESISTIVITY (RT)</span>
              <span className="text-[10px] font-mono text-slate-400">0.1 – 200 OHMM</span>
            </div>
            <div className="h-80 w-full log-track-grid rounded-lg">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#233252" />
                  <XAxis dataKey="depth" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                  <YAxis stroke="#94a3b8" tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#131b2e", borderColor: "#233252", fontSize: "11px", color: "#fff" }}
                  />
                  <Line type="monotone" dataKey="RT" stroke="#06b6d4" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="ILD" stroke="#3b82f6" strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* TRACK 3: Density RHOB & Porosity NPHI */}
        {(selectedTrack === "ALL" || selectedTrack === "POROSITY") && (
          <div className="bg-wellqc-card/60 border border-wellqc-border rounded-xl p-3">
            <div className="flex items-center justify-between pb-2 border-b border-wellqc-border mb-2">
              <span className="text-xs font-bold text-amber-400 font-mono">TRACK 3: DENSITY / POROSITY</span>
              <span className="text-[10px] font-mono text-slate-400">RHOB (g/cc) vs NPHI (v/v)</span>
            </div>
            <div className="h-80 w-full log-track-grid rounded-lg">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#233252" />
                  <XAxis dataKey="depth" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                  <YAxis stroke="#94a3b8" tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#131b2e", borderColor: "#233252", fontSize: "11px", color: "#fff" }}
                  />
                  <Line type="monotone" dataKey="RHOB" stroke="#ef4444" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="NPHI" stroke="#f59e0b" strokeWidth={2} strokeDasharray="3 3" dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>

      {/* Anomaly Callout Overlay Ribbon */}
      {anomalies.length > 0 && (
        <div className="p-3 bg-wellqc-dark/80 border border-amber-500/30 rounded-xl space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400">
              <AlertTriangle className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>Flagged Anomaly Depth Intervals ({anomalies.length})</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Automated QA Markers</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {anomalies.map((an, i) => (
              <div
                key={i}
                className="px-2.5 py-1 rounded-md bg-wellqc-panel border border-wellqc-border text-[11px] font-mono flex items-center space-x-2 text-slate-200"
              >
                <span className={`w-2 h-2 rounded-full ${an.severity === 'CRITICAL' ? 'bg-red-500' : 'bg-amber-400'}`} />
                <span className="font-bold text-cyan-300">{an.curveMnemonic}</span>
                <span>@{an.depthStart} {depthUnit}</span>
                <span className="text-slate-400">({an.anomalyType})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
