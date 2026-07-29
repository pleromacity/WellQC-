"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import {
  Settings,
  Users,
  Shield,
  Key,
  Webhook,
  Plus,
  Trash2,
  CheckCircle2,
  Lock,
} from "lucide-react";

interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
}

const INITIAL_USERS: UserRecord[] = [
  { id: "u-1", name: "Dr. Sarah Jenkins", email: "admin@wellqc.com", role: "ADMIN", department: "Enterprise Data Management", status: "ACTIVE" },
  { id: "u-2", name: "Alexandre Dubois", email: "petro@wellqc.com", role: "PETROPHYSICIST", department: "Subsurface Evaluation", status: "ACTIVE" },
  { id: "u-3", name: "Marcus Vance", email: "data@wellqc.com", role: "DATA_ENGINEER", department: "Data Pipeline Ops", status: "ACTIVE" },
  { id: "u-[#", name: "Elena Rostova", email: "geo@wellqc.com", role: "GEOSCIENTIST", department: "Exploration Geology", status: "ACTIVE" },
];

export default function AdminPanelPage() {
  const [users, setUsers] = useState<UserRecord[]>(INITIAL_USERS);
  const [activeTab, setActiveTab] = useState<"USERS" | "TOKENS" | "WEBHOOKS">("USERS");

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40">
                Module 10 — Enterprise Administration
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Admin & System Access Control Center
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Manage user accounts, RBAC roles, API authentication keys, and real-time webhook event subscriptions.
            </p>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex items-center space-x-2 border-b border-wellqc-border pb-3">
          <button
            onClick={() => setActiveTab("USERS")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === "USERS" ? "bg-purple-600/20 text-purple-300 border border-purple-500/40" : "text-slate-400 hover:text-white"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Users & RBAC Roles ({users.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("TOKENS")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === "TOKENS" ? "bg-purple-600/20 text-purple-300 border border-purple-500/40" : "text-slate-400 hover:text-white"
            }`}
          >
            <Key className="w-4 h-4" />
            <span>API Access Tokens</span>
          </button>
          <button
            onClick={() => setActiveTab("WEBHOOKS")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === "WEBHOOKS" ? "bg-purple-600/20 text-purple-300 border border-purple-500/40" : "text-slate-400 hover:text-white"
            }`}
          >
            <Webhook className="w-4 h-4" />
            <span>System Webhook Dispatches</span>
          </button>
        </div>

        {/* Tab 1: Users & Roles Table */}
        {activeTab === "USERS" && (
          <div className="bg-wellqc-panel border border-wellqc-border rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-wellqc-card border-b border-wellqc-border text-slate-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-4">User Name</th>
                    <th className="p-4">Email Address</th>
                    <th className="p-4">Department</th>
                    <th className="p-4">Assigned Role</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-wellqc-border text-slate-200">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-wellqc-card/60 transition-colors">
                      <td className="p-4 font-bold text-white">{u.name}</td>
                      <td className="p-4 text-slate-400">{u.email}</td>
                      <td className="p-4 text-slate-300">{u.department}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                          {u.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-emerald-400 font-bold text-[11px]">ACTIVE ✓</span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="px-3 py-1 rounded bg-wellqc-card hover:bg-purple-500/20 text-purple-300 text-xs border border-wellqc-border">
                          Edit Role
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: API Access Tokens */}
        {activeTab === "TOKENS" && (
          <div className="bg-wellqc-panel border border-wellqc-border p-6 rounded-2xl space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-wellqc-border">
              <h3 className="text-base font-bold text-white">Active Enterprise API Authentication Tokens</h3>
              <button className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold">
                + Generate API Token
              </button>
            </div>
            <div className="p-4 bg-wellqc-card border border-wellqc-border rounded-xl flex items-center justify-between">
              <div>
                <div className="font-bold text-white text-sm">SLB Techlog Pipeline Token</div>
                <div className="text-wellqc-muted text-xs">token_live_wqc_99a8b7c6d5e4...</div>
              </div>
              <span className="text-emerald-400 text-xs">Active</span>
            </div>
          </div>
        )}

        {/* Tab 3: Webhooks */}
        {activeTab === "WEBHOOKS" && (
          <div className="bg-wellqc-panel border border-wellqc-border p-6 rounded-2xl space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-wellqc-border">
              <h3 className="text-base font-bold text-white">Configured Webhook Endpoints</h3>
              <button className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold">
                + Register Webhook
              </button>
            </div>
            <div className="p-4 bg-wellqc-card border border-wellqc-border rounded-xl flex items-center justify-between">
              <div>
                <div className="font-bold text-white text-sm">https://api.petro-analytics.com/v1/well-events</div>
                <div className="text-wellqc-muted text-xs">Subscribed Events: las.uploaded, qa.completed, anomaly.flagged</div>
              </div>
              <span className="text-emerald-400 text-xs">Connected (200 OK)</span>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
