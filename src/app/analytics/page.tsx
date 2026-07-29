"use client";

import { AppShell } from "@/components/layout/app-shell";
import {
  BarChart3,
  PieChart as PieIcon,
  TrendingUp,
  MapPin,
  Building2,
  AlertTriangle,
  Layers,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const OPERATOR_SCORES = [
  { operator: "ExxonMobil", score: 94, files: 42 },
  { operator: "Chevron", score: 91, files: 38 },
  { operator: "Shell", score: 86, files: 31 },
  { operator: "BP", score: 88, files: 29 },
  { operator: "Equinor", score: 92, files: 24 },
];

const ANOMALY_DISTRIBUTION = [
  { name: "Extreme Spikes", value: 38, color: "#f59e0b" },
  { name: "Impossible Values", value: 24, color: "#ef4444" },
  { name: "Sensor Flatline", value: 18, color: "#06b6d4" },
  { name: "Depth Gaps", value: 12, color: "#3b82f6" },
  { name: "Unit Mismatch", value: 8, color: "#8b5cf6" },
];

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-500/20 text-cyan-300 border border-cyan-500/40">
                Module 08 — Basin & Operator Analytics
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Petrophysical Analytics & Operator Benchmarks
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Cross-well analytics, error frequency breakdown, and operator log quality rankings.
            </p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Operator Quality Benchmark */}
          <div className="bg-wellqc-panel border border-wellqc-border p-5 rounded-2xl space-y-4">
            <h3 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>Operator Average Log Quality Score</span>
            </h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={OPERATOR_SCORES} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#233252" />
                  <XAxis dataKey="operator" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} domain={[0, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: "#131b2e", borderColor: "#233252", fontSize: "12px" }} />
                  <Bar dataKey="score" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Anomaly Distribution Donut */}
          <div className="bg-wellqc-panel border border-wellqc-border p-5 rounded-2xl space-y-4">
            <h3 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <PieIcon className="w-4 h-4 text-amber-400" />
              <span>Common Error & Anomaly Type Frequency</span>
            </h3>
            <div className="h-72 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ANOMALY_DISTRIBUTION}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {ANOMALY_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#131b2e", borderColor: "#233252", fontSize: "12px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-mono">
              {ANOMALY_DISTRIBUTION.map((entry, index) => (
                <div key={index} className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-slate-300">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
