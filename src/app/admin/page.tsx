"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { Users, Key, Webhook, RefreshCw } from "lucide-react";

interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
}

export default function AdminPanelPage() {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [activeTab, setActiveTab] = useState<"USERS" | "TOKENS" | "WEBHOOKS">("USERS");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadUsers() {
      try {
        const response = await fetch("/api/admin/users", { cache: "no-store" });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to load users.");
        }

        if (!cancelled) {
          setUsers(data.users || []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unable to load users.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40">
                Module 10 - Enterprise Administration
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Admin & System Access Control Center
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Database-backed user, token, and webhook administration.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 border-b border-wellqc-border pb-3 overflow-x-auto">
          <TabButton
            active={activeTab === "USERS"}
            onClick={() => setActiveTab("USERS")}
            icon={<Users className="w-4 h-4" />}
            label={`Users & RBAC Roles (${users.length})`}
          />
          <TabButton
            active={activeTab === "TOKENS"}
            onClick={() => setActiveTab("TOKENS")}
            icon={<Key className="w-4 h-4" />}
            label="API Access Tokens"
          />
          <TabButton
            active={activeTab === "WEBHOOKS"}
            onClick={() => setActiveTab("WEBHOOKS")}
            icon={<Webhook className="w-4 h-4" />}
            label="System Webhook Dispatches"
          />
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-200 rounded-xl px-4 py-3 text-xs font-mono">
            {error}
          </div>
        )}

        {activeTab === "USERS" && (
          <div className="bg-wellqc-panel border border-wellqc-border rounded-2xl overflow-hidden shadow-xl">
            {isLoading ? (
              <div className="p-8 text-center text-cyan-300 text-xs font-mono flex items-center justify-center">
                <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                Loading users from database...
              </div>
            ) : users.length === 0 ? (
              <div className="p-8 text-center text-xs text-wellqc-muted font-mono">
                No database users found yet.
              </div>
            ) : (
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
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-wellqc-card/60 transition-colors">
                        <td className="p-4 font-bold text-white">{user.name}</td>
                        <td className="p-4 text-slate-400">{user.email}</td>
                        <td className="p-4 text-slate-300">{user.department}</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                            {user.role}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-emerald-400 font-bold text-[11px]">{user.status}</span>
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
            )}
          </div>
        )}

        {activeTab === "TOKENS" && (
          <AdminEmptyPanel
            title="Active Enterprise API Authentication Tokens"
            action="+ Generate API Token"
            message="API token records will appear here after token creation is connected."
          />
        )}

        {activeTab === "WEBHOOKS" && (
          <AdminEmptyPanel
            title="Configured Webhook Endpoints"
            action="+ Register Webhook"
            message="Webhook endpoint records will appear here after webhook registration is connected."
          />
        )}
      </div>
    </AppShell>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap ${
        active ? "bg-purple-600/20 text-purple-300 border border-purple-500/40" : "text-slate-400 hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function AdminEmptyPanel({ title, action, message }: { title: string; action: string; message: string }) {
  return (
    <div className="bg-wellqc-panel border border-wellqc-border p-6 rounded-2xl space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-wellqc-border">
        <h3 className="text-base font-bold text-white">{title}</h3>
        <button className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold">
          {action}
        </button>
      </div>
      <div className="p-4 bg-wellqc-card border border-wellqc-border rounded-xl text-wellqc-muted">
        {message}
      </div>
    </div>
  );
}
