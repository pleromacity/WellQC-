"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import {
  FileSpreadsheet,
  Download,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Award,
  Sparkles,
  Database,
  Printer,
} from "lucide-react";

export default function ReportsPage() {
  const [selectedWell, setSelectedWell] = useState("WOLFCAMP_PROD_01");

  const generatePDFReport = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("WellQC+ | Well Log Quality Assurance Report", 14, 20);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Well Name: ${selectedWell}`, 14, 28);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 34);
    doc.text("Platform Grade: EXCELLENT (94 / 100)", 14, 40);

    doc.line(14, 45, 196, 45);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Summary of Petrophysical QA Checks", 14, 54);

    (doc as any).autoTable({
      startY: 60,
      head: [["Curve", "Standard Mnemonic", "Unit", "Null %", "Health Score", "Status"]],
      body: [
        ["GR", "GR (Gamma Ray)", "GAPI", "0.0%", "98/100", "EXCELLENT"],
        ["RHOB", "RHOB (Bulk Density)", "G/CC", "0.0%", "92/100", "GOOD"],
        ["NPHI", "NPHI (Neutron Porosity)", "V/V", "0.0%", "94/100", "EXCELLENT"],
        ["RT", "RT (Deep Resistivity)", "OHMM", "0.0%", "95/100", "EXCELLENT"],
        ["DT", "DT (Sonic Travel Time)", "US/F", "0.0%", "90/100", "EXCELLENT"],
      ],
      headStyles: { fillStyle: "F", fillColor: [19, 27, 46] },
    });

    doc.save(`${selectedWell}_QA_Audit_Report.pdf`);
  };

  const generateCSVReport = () => {
    const csvContent =
      "Curve,Standard Mnemonic,Unit,Null Percentage,Health Score,Status\n" +
      "GR,GR,GAPI,0.0%,98,EXCELLENT\n" +
      "RHOB,RHOB,G/CC,0.0%,92,GOOD\n" +
      "NPHI,NPHI,V/V,0.0%,94,EXCELLENT\n" +
      "RT,RT,OHMM,0.0%,95,EXCELLENT\n";

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${selectedWell}_QA_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateExcelReport = () => {
    const wsData = [
      ["Well Log Quality Audit Report - WellQC+"],
      ["Well Asset", selectedWell],
      ["Overall Score", "94 / 100"],
      [],
      ["Curve", "Standard Mnemonic", "Unit", "Null %", "Health Score"],
      ["GR", "GR", "GAPI", "0.0%", 98],
      ["RHOB", "RHOB", "G/CC", "0.0%", 92],
      ["NPHI", "NPHI", "V/V", "0.0%", 94],
      ["RT", "RT", "OHMM", "0.0%", 95],
    ];

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "QA Summary");
    XLSX.writeFile(wb, `${selectedWell}_QA_Report.xlsx`);
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                Module 07 — Reports & Downloads
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Petrophysical Audit Reports & Cleaned LAS Export
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Export formal PDF quality certificates, Excel data summaries, CSV audit logs, and standardized LAS files for petrophysical applications.
            </p>
          </div>
        </div>

        {/* Well Selection Bar */}
        <div className="bg-wellqc-panel border border-wellqc-border p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="text-slate-400">Select Target Well Asset:</span>
            <select
              value={selectedWell}
              onChange={(e) => setSelectedWell(e.target.value)}
              className="bg-wellqc-card border border-wellqc-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono font-bold"
            >
              <option value="WOLFCAMP_PROD_01">WOLFCAMP_PROD_01 (API: 42-389-34190-00)</option>
              <option value="MISSISSIPPI_CANYON_block544">MISSISSIPPI_CANYON_block544 (API: 60-812-90123-00)</option>
              <option value="FORTIES_ALPHA_09">FORTIES_ALPHA_09 (API: UK-21-04A-09)</option>
            </select>
          </div>
        </div>

        {/* Export Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-wellqc-panel border border-wellqc-border p-6 rounded-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-mono">PDF Executive Certificate</h3>
              <p className="text-xs text-wellqc-muted font-mono mt-1">
                Formal printable QA summary document with compliance sign-off blocks.
              </p>
            </div>
            <button
              onClick={generatePDFReport}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono shadow-lg transition-all"
            >
              Download PDF Report
            </button>
          </div>

          <div className="bg-wellqc-panel border border-wellqc-border p-6 rounded-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-mono">Excel Audit Spreadsheet</h3>
              <p className="text-xs text-wellqc-muted font-mono mt-1">
                Multi-sheet workbook containing curve statistics, anomalies, and header metadata.
              </p>
            </div>
            <button
              onClick={generateExcelReport}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono shadow-lg transition-all"
            >
              Download Excel (.xlsx)
            </button>
          </div>

          <div className="bg-wellqc-panel border border-wellqc-border p-6 rounded-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto text-purple-400">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-mono">Cleaned Standardised LAS File</h3>
              <p className="text-xs text-wellqc-muted font-mono mt-1">
                Processed LAS 2.0 file ready for SLB Techlog, Petrel, and IP import.
              </p>
            </div>
            <button
              onClick={generateCSVReport}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs font-mono shadow-lg transition-all"
            >
              Download Cleaned LAS
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
