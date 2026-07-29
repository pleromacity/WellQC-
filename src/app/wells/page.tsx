"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import Link from "next/link";
import {
  Database,
  Plus,
  Search,
  Filter,
  MapPin,
  Building2,
  Globe,
  Activity,
  ChevronRight,
  Trash2,
  Edit,
  Eye,
} from "lucide-react";

interface WellRecord {
  id: string;
  apiNo: string;
  name: string;
  operatorName: string;
  fieldName: string;
  basin: string;
  country: string;
  latitude: number;
  longitude: number;
  elevFt: number;
  tdFt: number;
  status: string;
  qualityScore: number;
  qualityGrade: string;
}

const INITIAL_WELLS: WellRecord[] = [
  {
    id: "w-1",
    apiNo: "42-389-34190-00",
    name: "WOLFCAMP_PROD_01",
    operatorName: "ExxonMobil",
    fieldName: "Wolfcamp Permian",
    basin: "Delaware Basin",
    country: "USA",
    latitude: 31.750,
    longitude: -103.500,
    elevFt: 2850,
    tdFt: 14200,
    status: "ACTIVE",
    qualityScore: 94,
    qualityGrade: "EXCELLENT",
  },
  {
    id: "w-2",
    apiNo: "60-812-90123-00",
    name: "MISSISSIPPI_CANYON_block544",
    operatorName: "Shell Offshore",
    fieldName: "Mississippi Canyon GOM",
    basin: "Gulf of Mexico",
    country: "USA",
    latitude: 28.210,
    longitude: -89.420,
    elevFt: 85,
    tdFt: 22400,
    status: "DRILLING",
    qualityScore: 86,
    qualityGrade: "GOOD",
  },
  {
    id: "w-3",
    apiNo: "UK-21-04A-09",
    name: "FORTIES_ALPHA_09",
    operatorName: "Chevron",
    fieldName: "Forties Field",
    basin: "North Sea Basin",
    country: "UK",
    latitude: 57.750,
    longitude: 0.950,
    elevFt: 140,
    tdFt: 11800,
    status: "ACTIVE",
    qualityScore: 91,
    qualityGrade: "EXCELLENT",
  },
  {
    id: "w-4",
    apiNo: "NG-54-90122-00",
    name: "NIGER_DELTA_BLK12_04",
    operatorName: "Chevron",
    fieldName: "Niger Delta Deepwater",
    basin: "Niger Delta Basin",
    country: "Nigeria",
    latitude: 4.320,
    longitude: 6.180,
    elevFt: 45,
    tdFt: 16500,
    status: "SHUT_IN",
    qualityScore: 48,
    qualityGrade: "CRITICAL",
  },
];

export default function WellManagementPage() {
  const [wells, setWells] = useState<WellRecord[]>(INITIAL_WELLS);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // New Well Form State
  const [newWellName, setNewWellName] = useState("");
  const [newApiNo, setNewApiNo] = useState("");
  const [newOperator, setNewOperator] = useState("ExxonMobil");
  const [newField, setNewField] = useState("Wolfcamp Permian");
  const [newBasin, setNewBasin] = useState("Delaware Basin");
  const [newCountry, setNewCountry] = useState("USA");
  const [newTd, setNewTd] = useState("12000");

  const filteredWells = wells.filter((w) => {
    const matchesSearch =
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.apiNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.operatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.fieldName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || w.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateWell = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWellName || !newApiNo) return;
    const created: WellRecord = {
      id: `w-${Date.now()}`,
      name: newWellName,
      apiNo: newApiNo,
      operatorName: newOperator,
      fieldName: newField,
      basin: newBasin,
      country: newCountry,
      latitude: 31.5,
      longitude: -103.2,
      elevFt: 2500,
      tdFt: parseFloat(newTd) || 12000,
      status: "ACTIVE",
      qualityScore: 90,
      qualityGrade: "EXCELLENT",
    };
    setWells([created, ...wells]);
    setIsCreateOpen(false);
    setNewWellName("");
    setNewApiNo("");
  };

  const handleDeleteWell = (id: string) => {
    setWells(wells.filter((w) => w.id !== id));
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-500/20 text-cyan-300 border border-cyan-500/40">
                Module 02 — Well Master Index
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Enterprise Well Asset Management
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Centralised repository of wells across global basins, operator assignments, coordinates, and QA health benchmarks.
            </p>
          </div>

          <button
            onClick={() => setIsCreateOpen(true)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Well Asset</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-wellqc-panel border border-wellqc-border p-4 rounded-xl">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter wells by Name, API/UWI number, Operator, or Field..."
              className="w-full bg-wellqc-card border border-wellqc-border rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="flex items-center space-x-2 text-xs font-mono">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-slate-400">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-wellqc-card border border-wellqc-border rounded-lg px-3 py-1.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-cyan-500"
              >
                <option value="ALL">All Statuses</option>
                <option value="ACTIVE">Active</option>
                <option value="DRILLING">Drilling</option>
                <option value="SHUT_IN">Shut In</option>
              </select>
            </div>
          </div>
        </div>

        {/* Create Well Modal */}
        {isCreateOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-wellqc-panel border border-wellqc-border rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-wellqc-border">
                <h3 className="text-base font-bold text-white font-mono">Create Well Asset Entry</h3>
                <button onClick={() => setIsCreateOpen(false)} className="text-slate-400 hover:text-white text-sm">✕</button>
              </div>

              <form onSubmit={handleCreateWell} className="space-y-3 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 mb-1">Well Name *</label>
                  <input
                    type="text"
                    required
                    value={newWellName}
                    onChange={(e) => setNewWellName(e.target.value)}
                    placeholder="e.g. PERMIAN_NORTH_12"
                    className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">API / UWI Number *</label>
                  <input
                    type="text"
                    required
                    value={newApiNo}
                    onChange={(e) => setNewApiNo(e.target.value)}
                    placeholder="e.g. 42-389-99881-00"
                    className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Operator</label>
                    <input
                      type="text"
                      value={newOperator}
                      onChange={(e) => setNewOperator(e.target.value)}
                      className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Field Name</label>
                    <input
                      type="text"
                      value={newField}
                      onChange={(e) => setNewField(e.target.value)}
                      className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2 text-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Basin</label>
                    <input
                      type="text"
                      value={newBasin}
                      onChange={(e) => setNewBasin(e.target.value)}
                      className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Total Depth (FT)</label>
                    <input
                      type="number"
                      value={newTd}
                      onChange={(e) => setNewTd(e.target.value)}
                      className="w-full bg-wellqc-card border border-wellqc-border rounded-lg p-2 text-white"
                    />
                  </div>
                </div>
                <div className="pt-3 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsCreateOpen(false)}
                    className="px-4 py-2 rounded-lg bg-wellqc-card text-slate-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold"
                  >
                    Save Asset
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Wells Grid Table */}
        <div className="bg-wellqc-panel border border-wellqc-border rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-wellqc-card border-b border-wellqc-border text-slate-400 uppercase text-[10px]">
                <tr>
                  <th className="p-4">Well Asset Name</th>
                  <th className="p-4">API / UWI</th>
                  <th className="p-4">Operator</th>
                  <th className="p-4">Field & Basin</th>
                  <th className="p-4">Country</th>
                  <th className="p-4">Total Depth</th>
                  <th className="p-4">Quality Score</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-wellqc-border text-slate-200">
                {filteredWells.map((w) => (
                  <tr key={w.id} className="hover:bg-wellqc-card/60 transition-colors">
                    <td className="p-4 font-bold text-white">
                      <Link href={`/wells/${w.id}`} className="hover:text-cyan-400 flex items-center space-x-2">
                        <Database className="w-4 h-4 text-cyan-400" />
                        <span>{w.name}</span>
                      </Link>
                    </td>
                    <td className="p-4 text-slate-400">{w.apiNo}</td>
                    <td className="p-4 text-cyan-300 font-semibold">{w.operatorName}</td>
                    <td className="p-4">
                      <div>{w.fieldName}</div>
                      <div className="text-[10px] text-wellqc-muted">{w.basin}</div>
                    </td>
                    <td className="p-4 text-slate-400">{w.country}</td>
                    <td className="p-4">{w.tdFt.toLocaleString()} FT</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                        w.qualityScore >= 90 ? 'badge-excellent' :
                        w.qualityScore >= 75 ? 'badge-good' :
                        w.qualityScore >= 50 ? 'badge-poor' : 'badge-critical'
                      }`}>
                        {w.qualityScore}/100 ({w.qualityGrade})
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <Link
                        href={`/wells/${w.id}`}
                        className="p-1.5 rounded-lg bg-wellqc-card hover:bg-cyan-500/20 text-cyan-300 inline-block transition-colors"
                        title="View Well Log Details"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDeleteWell(w.id)}
                        className="p-1.5 rounded-lg bg-wellqc-card hover:bg-red-500/20 text-red-400 inline-block transition-colors"
                        title="Delete Well"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
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
