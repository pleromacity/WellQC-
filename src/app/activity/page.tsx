"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { History, User, Search, Shield, Filter, Clock } from "lucide-react";

interface ActivityRecord {
  id: string;
  userName: string;
  userRole: string;
  action: string;
  target: string;
  details: string;
  timestamp: string;
  ip: string;
}

const INITIAL_ACTIVITIES: ActivityRecord[] = [
  {
    id: "act-1",
    userName: "Alexandre Dubois",
    userRole: "PETROPHYSICIST",
    action: "UPLOAD_LAS",
    target: "WOLFCAMP_PROD_01.las",
    details: "Uploaded and validated LAS 2.0 log suite. Quality score computed: 94/100.",
    timestamp: "10 mins ago",
    ip: "192.168.1.45",
  },
  {
    id: "act-2",
    userName: "System Agent",
    userRole: "SYSTEM",
    action: "AUTO_STANDARDISE",
    target: "7 Curves",
    details: "Auto-matched 7 mnemonics (GR, RHOB, NPHI, RT, DT, CALI) to standard API dictionary.",
    timestamp: "25 mins ago",
    ip: "127.0.0.1",
  },
  {
    id: "act-3",
    userName: "Dr. Sarah Jenkins",
    userRole: "ADMIN",
    action: "UPDATE_USER_ROLE",
    target: "Marcus Vance",
    details: "Assigned DATA_ENGINEER role permissions for Delaware Basin project team.",
    timestamp: "1 hr ago",
    ip: "10.0.4.12",
  },
  {
    id: "act-4",
    userName: "Alexandre Dubois",
    userRole: "PETROPHYSICIST",
    action: "EXPORT_REPORT",
    target: "FORTIES_ALPHA_09.pdf",
    details: "Generated formal PDF petrophysical quality audit certificate.",
    timestamp: "3 hrs ago",
    ip: "192.168.1.45",
  },
];

export default function ActivityLogPage() {
  const [activities] = useState<ActivityRecord[]>(INITIAL_ACTIVITIES);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = activities.filter(
    (a) =>
      a.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-500/20 text-cyan-300 border border-cyan-500/40">
                Module 09 — Audit Trail & Security
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Platform Activity & Audit Logs
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Immutable logging of all user logins, LAS uploads, curve standardisations, QA rule evaluations, and admin actions.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-wellqc-panel border border-wellqc-border p-4 rounded-xl flex items-center space-x-4">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search audit trail by User, Action, or Target..."
            className="w-full bg-wellqc-card border border-wellqc-border rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
          />
        </div>

        {/* Table */}
        <div className="bg-wellqc-panel border border-wellqc-border rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-wellqc-card border-b border-wellqc-border text-slate-400 uppercase text-[10px]">
                <tr>
                  <th className="p-4">Timestamp</th>
                  <th className="p-4">User Name</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Action</th>
                  <th className="p-4">Target Asset</th>
                  <th className="p-4">Details</th>
                  <th className="p-4">IP Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-wellqc-border text-slate-200">
                {filtered.map((a) => (
                  <tr key={a.id} className="hover:bg-wellqc-card/60 transition-colors">
                    <td className="p-4 text-wellqc-muted font-bold">{a.timestamp}</td>
                    <td className="p-4 font-bold text-white">{a.userName}</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
                        {a.userRole}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-cyan-400">{a.action}</td>
                    <td className="p-4 text-slate-300">{a.target}</td>
                    <td className="p-4 text-slate-400">{a.details}</td>
                    <td className="p-4 text-wellqc-muted">{a.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
