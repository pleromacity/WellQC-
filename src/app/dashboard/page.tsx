"use client";

import { AppShell } from "@/components/layout/app-shell";
import Link from "next/link";
import {
  Database,
  UploadCloud,
  Award,
  Activity,
  AlertTriangle,
  FileQuestion,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Layers,
  MapPin,
  Clock,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const QUALITY_TREND_DATA = [
  { date: "Jul 21", avgScore: 82, filesUploaded: 12, anomalies: 14 },
  { date: "Jul 22", avgScore: 85, filesUploaded: 18, anomalies: 9 },
  { date: "Jul 23", avgScore: 89, filesUploaded: 15, anomalies: 6 },
  { date: "Jul 24", avgScore: 84, filesUploaded: 22, anomalies: 18 },
  { date: "Jul 25", avgScore: 91, filesUploaded: 19, anomalies: 4 },
  { date: "Jul 26", avgScore: 88, filesUploaded: 25, anomalies: 11 },
  { date: "Jul 27", avgScore: 93, filesUploaded: 30, anomalies: 3 },
];

const FIELD_PERFORMANCE = [
  { field: "Wolfcamp Permian", score: 94, wells: 18, status: "Excellent" },
  { field: "Mississippi Canyon", score: 86, wells: 12, status: "Good" },
  { field: "Forties North Sea", score: 91, wells: 14, status: "Excellent" },
  { field: "Niger Delta Deep", score: 72, wells: 9, status: "Poor" },
  { field: "Bakken Shale", score: 88, wells: 15, status: "Good" },
];

const PROBLEM_WELLS = [
  { name: "NIGER_DELTA_BLK12_04", api: "NG-54-901", score: 48, grade: "CRITICAL", issue: "Severe density spike & 4 missing curves" },
  { name: "MISSISSIPPI_CANYON_544", api: "60-812-901", score: 68, grade: "POOR", issue: "Stuck sensor flatline across 120ft interval" },
  { name: "DELAWARE_SOUTH_09", api: "42-389-990", score: 74, grade: "POOR", issue: "Unit mismatch in GR (EU vs GAPI)" },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                Live Subsurface Telemetry
              </span>
              <span className="text-xs text-wellqc-muted font-mono">Updated 2 mins ago</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Petrophysical Quality Control Command Center
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Automated LAS file validation, curve standardisation, and AI anomaly detection across active basins.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/upload"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Upload LAS Log File</span>
            </Link>
          </div>
        </div>

        {/* 8 Enterprise KPI Telemetry Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-2 relative overflow-hidden group hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider">Total Wells</span>
              <Database className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">68</div>
            <div className="flex items-center space-x-1 text-[11px] text-emerald-400 font-mono">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+6 new wells this week</span>
            </div>
          </div>

          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-2 relative overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider">LAS Files Uploaded</span>
              <UploadCloud className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">248</div>
            <div className="flex items-center space-x-1 text-[11px] text-emerald-400 font-mono">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+30 files processed today</span>
            </div>
          </div>

          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-2 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider">Avg Quality Score</span>
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-emerald-400 font-mono">93 / 100</div>
            <div className="flex items-center space-x-1 text-[11px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm" />
              <span>Grade: Excellent Quality</span>
            </div>
          </div>

          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-2 relative overflow-hidden group hover:border-purple-500/50 transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider">Curves Analysed</span>
              <Layers className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">1,842</div>
            <div className="flex items-center space-x-1 text-[11px] text-slate-400 font-mono">
              <span>98.2% standardised</span>
            </div>
          </div>

          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-2 relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider">Errors Detected</span>
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-amber-400 font-mono">14</div>
            <div className="flex items-center space-x-1 text-[11px] text-amber-400 font-mono">
              <ArrowDownRight className="w-3.5 h-3.5" />
              <span>-28% error reduction</span>
            </div>
          </div>

          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-2 relative overflow-hidden group hover:border-red-500/50 transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider">Missing Curves</span>
              <FileQuestion className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-2xl font-black text-red-400 font-mono">6</div>
            <div className="flex items-center space-x-1 text-[11px] text-slate-400 font-mono">
              <span>Flagged for synthesis</span>
            </div>
          </div>

          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-2 relative overflow-hidden group hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider">Anomalies Found</span>
              <Activity className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-black text-cyan-400 font-mono">32</div>
            <div className="flex items-center space-x-1 text-[11px] text-slate-400 font-mono">
              <span>Spikes, flatlines & gaps</span>
            </div>
          </div>

          <div className="bg-wellqc-card border border-wellqc-border p-4 rounded-xl space-y-2 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider">Data Cleaned Today</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">4.2 GB</div>
            <div className="flex items-center space-x-1 text-[11px] text-emerald-400 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% auto-standardised</span>
            </div>
          </div>
        </div>

        {/* Analytics Section: Quality Trend & Field Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quality Score Trend Area Chart */}
          <div className="lg:col-span-2 bg-wellqc-panel border border-wellqc-border rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-wellqc-border">
              <div>
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>Platform Quality Trend & Ingestion Volume</span>
                </h3>
                <p className="text-xs text-wellqc-muted font-mono">
                  7-Day rolling average Well Log Quality Score vs uploaded LAS file count.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-blue-500/10 text-cyan-300 border border-cyan-500/30">
                Live Data
              </span>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={QUALITY_TREND_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="scoreColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#233252" />
                  <XAxis dataKey="date" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} domain={[60, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: "#131b2e", borderColor: "#233252", fontSize: "12px" }} />
                  <Area type="monotone" dataKey="avgScore" name="Avg Quality Score" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#scoreColor)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Field Performance Breakdown */}
          <div className="bg-wellqc-panel border border-wellqc-border rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-wellqc-border">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Field Performance</span>
              </h3>
              <Link href="/analytics" className="text-xs text-cyan-400 hover:underline font-mono">
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {FIELD_PERFORMANCE.map((f, i) => (
                <div key={i} className="p-3 rounded-lg bg-wellqc-card border border-wellqc-border space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">{f.field}</span>
                    <span className={`font-mono font-bold ${f.score >= 90 ? 'text-emerald-400' : f.score >= 80 ? 'text-cyan-400' : 'text-amber-400'}`}>
                      {f.score}/100
                    </span>
                  </div>
                  <div className="w-full bg-wellqc-dark h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${f.score >= 90 ? 'bg-emerald-400' : f.score >= 80 ? 'bg-cyan-400' : 'bg-amber-400'}`}
                      style={{ width: `${f.score}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>{f.wells} Active Wells</span>
                    <span className="uppercase">{f.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Problem Wells & Recent Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Problem Wells */}
          <div className="bg-wellqc-panel border border-wellqc-border rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-wellqc-border">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <h3 className="text-base font-bold text-white">Top Problem Wells (Action Required)</h3>
              </div>
              <span className="text-xs text-red-400 font-mono font-bold">3 Critical</span>
            </div>

            <div className="space-y-3">
              {PROBLEM_WELLS.map((pw, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-wellqc-card border border-red-500/20 hover:border-red-500/40 transition-all flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm text-slate-100 font-mono">{pw.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                        {pw.grade}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono">{pw.issue}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-red-400 font-mono">{pw.score}/100</div>
                    <Link
                      href="/upload"
                      className="text-[11px] text-cyan-400 hover:underline font-semibold flex items-center space-x-1 justify-end"
                    >
                      <span>Fix Log</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-wellqc-panel border border-wellqc-border rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-wellqc-border">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Recent Activity Feed</h3>
              </div>
              <Link href="/activity" className="text-xs text-cyan-400 hover:underline font-mono">
                View Audit Trail
              </Link>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-wellqc-card/60 border border-wellqc-border">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5" />
                <div className="flex-1">
                  <div className="font-semibold text-slate-200">Alexandre Dubois (Petrophysicist) uploaded WOLFCAMP_PROD_01.las</div>
                  <div className="text-wellqc-muted text-[11px] font-mono">Score: 94/100 | Standardised 7 curves | 10 mins ago</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-wellqc-card/60 border border-wellqc-border">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5" />
                <div className="flex-1">
                  <div className="font-semibold text-slate-200">Auto-Standardisation Engine applied GR → Gamma Ray</div>
                  <div className="text-wellqc-muted text-[11px] font-mono">100% confidence match across 14 curves | 25 mins ago</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-wellqc-card/60 border border-wellqc-border">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5" />
                <div className="flex-1">
                  <div className="font-semibold text-slate-200">AI Anomaly Flagged on MISSISSIPPI_CANYON_544</div>
                  <div className="text-wellqc-muted text-[11px] font-mono">Flatline sensor detected between 18,520 - 18,640 ft | 1 hr ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
