"use client";

import { useState } from "react";
import { Search, Bell, Shield, User, ChevronDown, Check, Globe } from "lucide-react";

interface HeaderProps {
  currentRole: string;
  onRoleChange: (newRole: string) => void;
  currentUser: {
    name: string;
    email: string;
    department: string;
  };
}

export function Header({ currentRole, onRoleChange, currentUser }: HeaderProps) {
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const roles = [
    { id: "ADMIN", name: "Administrator", color: "text-purple-400 border-purple-500/40 bg-purple-500/10" },
    { id: "PETROPHYSICIST", name: "Petrophysicist", color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10" },
    { id: "DATA_ENGINEER", name: "Data Engineer", color: "text-blue-400 border-blue-500/40 bg-blue-500/10" },
    { id: "GEOSCIENTIST", name: "Geoscientist", color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
    { id: "VIEWER", name: "Viewer / Auditor", color: "text-slate-400 border-slate-500/40 bg-slate-500/10" },
  ];

  const activeRoleObj = roles.find((r) => r.id === currentRole) || roles[1];

  return (
    <header className="h-16 bg-wellqc-panel/80 backdrop-blur-md border-b border-wellqc-border px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Global Search Bar */}
      <div className="flex items-center space-x-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search wells, API/UWI numbers, operators, fields, or log curves..."
            className="w-full bg-wellqc-card border border-wellqc-border rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono"
          />
        </div>
      </div>

      {/* Right Toolbar Controls */}
      <div className="flex items-center space-x-4">
        {/* Workspace Region Selector */}
        <div className="hidden lg:flex items-center space-x-2 text-xs text-wellqc-muted px-3 py-1 rounded-md bg-wellqc-card/40 border border-wellqc-border font-mono">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>Global Basin Portal</span>
        </div>

        {/* RBAC Role Switcher */}
        <div className="relative">
          <button
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-semibold font-mono transition-all ${activeRoleObj.color}`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Role: {activeRoleObj.name}</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </button>

          {roleDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-wellqc-card border border-wellqc-border rounded-xl shadow-2xl p-1.5 z-50">
              <div className="px-3 py-2 text-[10px] font-mono text-slate-400 border-b border-wellqc-border uppercase tracking-wider">
                Simulate Role Access (RBAC)
              </div>
              <div className="py-1 space-y-0.5">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      onRoleChange(r.id);
                      setRoleDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                      currentRole === r.id
                        ? "bg-blue-600/20 text-cyan-300 font-semibold"
                        : "text-slate-300 hover:bg-wellqc-panel hover:text-white"
                    }`}
                  >
                    <span>{r.name}</span>
                    {currentRole === r.id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-wellqc-card rounded-lg transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-wellqc-card border border-wellqc-border rounded-xl shadow-2xl p-3 z-50">
              <div className="flex items-center justify-between pb-2 border-b border-wellqc-border text-xs font-semibold text-white">
                <span>Recent System Alerts</span>
                <span className="text-[10px] font-mono text-cyan-400">3 New</span>
              </div>
              <div className="py-2 space-y-2 text-xs">
                <div className="p-2 rounded-lg bg-wellqc-panel/60 border border-amber-500/30">
                  <div className="font-semibold text-amber-400">RHOB Spike Warning</div>
                  <div className="text-slate-400 text-[11px]">WOLFCAMP_PROD_01 density anomaly at 10,010 ft.</div>
                </div>
                <div className="p-2 rounded-lg bg-wellqc-panel/60 border border-emerald-500/30">
                  <div className="font-semibold text-emerald-400">Standardisation Completed</div>
                  <div className="text-slate-400 text-[11px]">7 curves mapped for MISSISSIPPI_CANYON.</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3 pl-2 border-l border-wellqc-border">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
            {currentUser.name.charAt(0)}
          </div>
          <div className="hidden md:block text-left">
            <div className="text-xs font-semibold text-slate-100">{currentUser.name}</div>
            <div className="text-[10px] text-wellqc-muted font-mono">{currentUser.department}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
