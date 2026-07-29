"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { WellDetailResponse, WellListItem } from "@/lib/api-types";
import {
  FileSpreadsheet,
  Download,
  FileText,
  RefreshCw,
  Database,
} from "lucide-react";

function downloadTextFile(fileName: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

export default function ReportsPage() {
  const [wells, setWells] = useState<WellListItem[]>([]);
  const [selectedWellId, setSelectedWellId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadWells() {
      try {
        const response = await fetch("/api/wells", { cache: "no-store" });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to load saved wells.");
        }

        const loadedWells: WellListItem[] = data.wells || [];
        if (!cancelled) {
          setWells(loadedWells);
          setSelectedWellId((current) => current || loadedWells[0]?.id || "");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unable to load saved wells.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadWells();

    return () => {
      cancelled = true;
    };
  }, []);

  const selectedWell = wells.find((well) => well.id === selectedWellId);
  const canExport = Boolean(selectedWellId && selectedWell?.latestLasFileId);

  const loadDetail = async () => {
    if (!selectedWellId) {
      throw new Error("Select a committed well first.");
    }

    const response = await fetch(`/api/wells/${selectedWellId}`, { cache: "no-store" });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unable to load selected well.");
    }

    return data as WellDetailResponse;
  };

  const generatePDFReport = async () => {
    await runExport(async () => {
      const detail = await loadDetail();
      const doc = new jsPDF();
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("WellQC+ | Well Log Quality Assurance Report", 14, 20);

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Well Name: ${detail.well.name}`, 14, 28);
      doc.text(`API/UWI: ${detail.well.apiNo}`, 14, 34);
      doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 40);
      doc.text(`Platform Grade: ${detail.well.qualityGrade} (${detail.well.qualityScore} / 100)`, 14, 46);

      doc.line(14, 52, 196, 52);

      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("Committed LAS Summary", 14, 62);

      (doc as any).autoTable({
        startY: 68,
        head: [["Property", "Value"]],
        body: [
          ["Operator", detail.well.operatorName],
          ["Field", detail.well.fieldName],
          ["Basin", detail.well.basin],
          ["Latest LAS", detail.well.latestLasFileName || "None"],
          ["Curve Count", String(detail.well.curveCount)],
          ["Point Count", detail.well.pointCount.toLocaleString()],
          ["Anomaly Count", String(detail.well.anomalyCount)],
        ],
        headStyles: { fillColor: [19, 27, 46] },
      });

      const finalY = (doc as any).lastAutoTable?.finalY || 120;
      doc.setFont("helvetica", "bold");
      doc.text("AI Summary", 14, finalY + 12);
      doc.setFont("helvetica", "normal");
      doc.text(doc.splitTextToSize(detail.aiSummary, 180), 14, finalY + 20);

      doc.save(`${fileStem(detail.well.name)}_QA_Audit_Report.pdf`);
    });
  };

  const generateExcelReport = async () => {
    await runExport(async () => {
      const detail = await loadDetail();
      const curveNames = Object.keys(detail.curvesData.curves);
      const summaryRows = [
        ["Well Log Quality Audit Report - WellQC+"],
        ["Well Asset", detail.well.name],
        ["API/UWI", detail.well.apiNo],
        ["Overall Score", `${detail.well.qualityScore} / 100`],
        ["Grade", detail.well.qualityGrade],
        ["Latest LAS", detail.well.latestLasFileName || ""],
        ["Anomaly Count", detail.well.anomalyCount],
      ];

      const dataRows = [
        ["DEPTH", ...curveNames],
        ...detail.curvesData.depth.map((depth, index) => [
          depth,
          ...curveNames.map((curveName) => detail.curvesData.curves[curveName]?.[index] ?? -999.25),
        ]),
      ];

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(summaryRows), "QA Summary");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(dataRows), "Cleaned Curves");
      XLSX.writeFile(wb, `${fileStem(detail.well.name)}_QA_Report.xlsx`);
    });
  };

  const generateCleanedLASExport = async () => {
    await runExport(async () => {
      const detail = await loadDetail();
      downloadTextFile(
        `${fileStem(detail.well.name)}_cleaned.las`,
        buildLasFromDetail(detail),
        "application/octet-stream;charset=utf-8",
      );
    });
  };

  const runExport = async (callback: () => Promise<void>) => {
    if (!canExport) {
      setError("Select a well with a committed LAS file before exporting.");
      return;
    }

    setIsExporting(true);
    setError("");

    try {
      await callback();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Export failed.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                Module 07 - Reports & Downloads
              </span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Petrophysical Audit Reports & Cleaned LAS Export
            </h1>
            <p className="text-xs text-wellqc-muted font-mono mt-0.5">
              Export reports and cleaned LAS files from wells committed through the validation workflow.
            </p>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-200 rounded-xl px-4 py-3 text-xs font-mono">
            {error}
          </div>
        )}

        <div className="bg-wellqc-panel border border-wellqc-border p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs font-mono w-full">
            <span className="text-slate-400">Select committed well:</span>
            <select
              value={selectedWellId}
              onChange={(e) => setSelectedWellId(e.target.value)}
              disabled={isLoading || wells.length === 0}
              className="flex-1 bg-wellqc-card border border-wellqc-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono font-bold"
            >
              {wells.length === 0 ? (
                <option value="">No committed wells available</option>
              ) : (
                wells.map((well) => (
                  <option key={well.id} value={well.id}>
                    {well.name} ({well.apiNo}) - {well.latestLasFileName || "no LAS"}
                  </option>
                ))
              )}
            </select>
          </div>
          {isLoading && <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />}
        </div>

        {wells.length === 0 && !isLoading ? (
          <div className="bg-wellqc-panel border border-wellqc-border rounded-2xl p-8 text-center space-y-3">
            <Database className="w-8 h-8 text-cyan-400 mx-auto" />
            <h2 className="text-base font-bold text-white">No saved LAS reports yet</h2>
            <p className="text-xs text-wellqc-muted font-mono">
              Upload a LAS file, validate it, and commit it to the database before exporting reports.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ExportCard
              icon={<FileText className="w-6 h-6" />}
              color="cyan"
              title="PDF Executive Certificate"
              description="Formal printable QA summary document for the selected committed well."
              buttonLabel="Download PDF Report"
              onClick={generatePDFReport}
              disabled={!canExport || isExporting}
            />
            <ExportCard
              icon={<FileSpreadsheet className="w-6 h-6" />}
              color="emerald"
              title="Excel Audit Workbook"
              description="Workbook containing QA summary and saved curve data rows."
              buttonLabel="Download Excel (.xlsx)"
              onClick={generateExcelReport}
              disabled={!canExport || isExporting}
            />
            <ExportCard
              icon={<Download className="w-6 h-6" />}
              color="purple"
              title="Cleaned Standardised LAS File"
              description="LAS 2.0 file reconstructed from committed standardised curves."
              buttonLabel={isExporting ? "Preparing..." : "Download Cleaned LAS"}
              onClick={generateCleanedLASExport}
              disabled={!canExport || isExporting}
            />
          </div>
        )}
      </div>
    </AppShell>
  );
}

function ExportCard({
  icon,
  color,
  title,
  description,
  buttonLabel,
  onClick,
  disabled,
}: {
  icon: React.ReactNode;
  color: "cyan" | "emerald" | "purple";
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
  disabled: boolean;
}) {
  const colors = {
    cyan: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
    emerald: "bg-emerald-500 hover:bg-emerald-400 text-slate-950",
    purple: "bg-purple-600 hover:bg-purple-500 text-white",
  };

  return (
    <div className="bg-wellqc-panel border border-wellqc-border p-6 rounded-2xl space-y-4 text-center">
      <div className="w-12 h-12 rounded-2xl bg-wellqc-card border border-wellqc-border flex items-center justify-center mx-auto text-cyan-400">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-bold text-white font-mono">{title}</h3>
        <p className="text-xs text-wellqc-muted font-mono mt-1">{description}</p>
      </div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-2.5 rounded-xl font-bold text-xs font-mono shadow-lg transition-all disabled:opacity-50 ${colors[color]}`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

function buildLasFromDetail(detail: WellDetailResponse) {
  const curveNames = Object.keys(detail.curvesData.curves);
  const depthUnit = detail.well.depthUnit || "FT";
  const nullValue = -999.25;
  const firstDepth = detail.curvesData.depth[0] ?? 0;
  const lastDepth = detail.curvesData.depth[detail.curvesData.depth.length - 1] ?? firstDepth;

  const lines = [
    "~VERSION INFORMATION",
    "VERS.                 2.0 : CWLS LOG ASCII STANDARD - VERSION 2.0",
    "WRAP.                  NO : ONE LINE PER DEPTH STEP",
    "~WELL INFORMATION",
    `# Cleaned LAS exported from committed WellQC+ database record on ${new Date().toISOString()}`,
    formatHeaderLine("STRT", depthUnit, firstDepth, "START DEPTH"),
    formatHeaderLine("STOP", depthUnit, lastDepth, "STOP DEPTH"),
    formatHeaderLine("NULL", "", nullValue, "NULL VALUE"),
    formatHeaderLine("WELL", "", detail.well.name, "WELL NAME"),
    formatHeaderLine("COMP", "", detail.well.operatorName, "COMPANY"),
    formatHeaderLine("FLD", "", detail.well.fieldName, "FIELD"),
    formatHeaderLine("CTRY", "", detail.well.country, "COUNTRY"),
    formatHeaderLine("API", "", detail.well.apiNo, "API / UWI"),
    "~CURVE INFORMATION",
    formatCurveLine("DEPT", depthUnit, "1 MEASURED DEPTH"),
    ...curveNames.map((curveName, index) => formatCurveLine(curveName, "", `${index + 2} STANDARDISED CURVE`)),
    "~ASCII",
    ...detail.curvesData.depth.map((depth, index) =>
      [
        formatNumber(depth),
        ...curveNames.map((curveName) => formatNumber(detail.curvesData.curves[curveName]?.[index] ?? nullValue)),
      ]
        .map((value) => value.padStart(12))
        .join(" "),
    ),
  ];

  return `${lines.join("\n")}\n`;
}

function formatHeaderLine(mnemonic: string, unit: string, value: string | number, description: string) {
  const formattedValue = typeof value === "number" ? formatNumber(value) : value;
  return `${mnemonic}.${unit.padEnd(8)} ${String(formattedValue).padStart(16)} : ${description}`;
}

function formatCurveLine(mnemonic: string, unit: string, description: string) {
  return `${mnemonic}.${unit.padEnd(8)} : ${description}`;
}

function formatNumber(value: number) {
  if (!Number.isFinite(value)) return "-999.25";
  const fixed = Math.abs(value) >= 1000 ? value.toFixed(4) : value.toFixed(5);
  return fixed.replace(/\.?0+$/, "");
}

function fileStem(value: string) {
  return value
    .trim()
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9_-]+/gi, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80) || "well_log";
}
