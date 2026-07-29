# Implementation Plan - WellQC+ AI-Powered Well Log Quality Assurance Platform

WellQC+ is an enterprise-grade cloud platform designed to automatically validate, clean, standardise, and analyse LAS (Log ASCII Standard) well log files before consumption by petrophysicists and geoscientists. Styled after software from SLB, Palantir, and Microsoft Fabric, it provides full automated QA/QC workflows, interactive log track rendering, AI anomaly detection, standardisation management, reporting, and enterprise RBAC.

## User Review Required

> [!IMPORTANT]
> **Data Persistence Strategy**: We will implement Prisma ORM configured to work with SQLite out-of-the-box (with seamless switching to PostgreSQL via environment variable), ensuring immediate execution without requiring local PostgreSQL background service dependencies while keeping full enterprise schema definitions.

> [!TIP]
> **Built-in TypeScript LAS Engine + Optional Python Service**: We will include a high-performance native TypeScript LAS 2.0/3.0 parser engine in Next.js for instant zero-latency processing, along with a standalone Python FastAPI microservice script in `services/python_parser` for advanced pandas/scikit-learn petrophysical analytics.

## Open Questions

1. Are there any specific proprietary LAS curve mnemonics or regional basin aliases (e.g., West Africa, Gulf of Mexico, North Sea) you would like prioritised in the default dictionary? *(Default will cover standard API mnemonics: GR, RHOB, NPHI, DT, RT, CALI, PEF, SP, ILD, MSFL, LLD, LLS, DEPTH)*.

## Proposed Changes

### Core Infrastructure & App Architecture

#### [NEW] [package.json](file:///c:/Users/Ekwebelam/Desktop/WellQC+/package.json)
- Define dependencies for Next.js 15, React 19, TypeScript, Tailwind CSS v4 / PostCSS, Prisma, Lucide-React, Recharts, Framer Motion, Clsx, Tailwind Merge, jsPDF, XLSX, Papaparse, Zod.

#### [NEW] [prisma/schema.prisma](file:///c:/Users/Ekwebelam/Desktop/WellQC+/prisma/schema.prisma)
- Prisma schema with models: `User`, `Role`, `Permission`, `Well`, `Field`, `Operator`, `LASFile`, `Curve`, `CurveStandardisation`, `QualityReport`, `Anomaly`, `ActivityLog`, `APIToken`, `Webhook`.

#### [NEW] [prisma/seed.ts](file:///c:/Users/Ekwebelam/Desktop/WellQC+/prisma/seed.ts)
- Comprehensive seed data with 6 realistic wells across Permian, Gulf of Mexico, Niger Delta, and North Sea basins, complete with pre-loaded LAS files, curve channels, anomalies, quality scores, and multi-role user accounts.

---

### LAS Log Parsing & Quality Engine

#### [NEW] [src/lib/las/parser.ts](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/lib/las/parser.ts)
- Robust LAS 2.0/3.0 text parser extracting `~V`, `~W`, `~C`, `~P`, `~A` sections, handling header metadata, units, comments, depth steps, and float matrix data.

#### [NEW] [src/lib/las/standardiser.ts](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/lib/las/standardiser.ts)
- Automated mnemonic matching against standard petrophysical dictionaries (GR, RHOB, NPHI, DT, RT, CALI, PEF, SP, etc.) with alias map & confidence scoring.

#### [NEW] [src/lib/las/quality-engine.ts](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/lib/las/quality-engine.ts)
- Complete QA algorithm computing Completeness, Consistency, Anomaly Severity, Overall Quality Score (0–100), Grade assignment, and detailed anomaly flags (nulls, gaps, negative porosity, impossible density, extreme spikes, flatlines).

#### [NEW] [src/lib/las/exporter.ts](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/lib/las/exporter.ts)
- Generate downloadable cleaned LAS and CSV data immediately after validation, including standardised curve mnemonics, duplicate depth row removal, common unit conversion, null replacement, physical limit filtering, and single-point despiking.

#### [NEW] [src/lib/las/ai-analyzer.ts](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/lib/las/ai-analyzer.ts)
- Rule-assisted natural language AI summary generator and interval recommendation engine.

---

### UI Component System & Dark Enterprise Theme

#### [NEW] [src/app/globals.css](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/globals.css)
- Sleek SLB/Palantir-inspired dark mode styling, custom scrollbars, glowing status badges, glassmorphism cards, grid backgrounds, and petrophysical log track styles.

#### [NEW] [src/components/ui/header.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/components/ui/header.tsx)
#### [NEW] [src/components/ui/sidebar.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/components/ui/sidebar.tsx)
#### [NEW] [src/components/well-log/log-viewer.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/components/well-log/log-viewer.tsx)
- Multi-track canvas/Recharts petrophysical log curve viewer rendering Depth vs GR, Resistivity, Density-Porosity crossover with interactive anomaly marker callouts.

---

### Application Modules & Pages

#### [NEW] [src/app/dashboard/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/dashboard/page.tsx)
- Executive Enterprise Dashboard featuring KPI cards, Quality Trend chart, Field Performance breakdown, Top Problem Wells, and Recent Activity Feed.

#### [NEW] [src/app/wells/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/wells/page.tsx)
#### [NEW] [src/app/wells/[id]/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/wells/[id]/page.tsx)
- Well management list, filter, detail view with coordinates map preview, curve inventory, and quality history.

#### [NEW] [src/app/upload/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/upload/page.tsx)
- Drag & Drop LAS file uploader with real-time parsing, header metadata preview, quality pre-check, automated standardisation mapping before committing, and cleaned LAS/CSV download after the validation check completes.

#### [NEW] [src/app/standardisation/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/standardisation/page.tsx)
- Global and well-specific mnemonic mapping table with manual override controls and dictionary management.

#### [NEW] [src/app/qa-engine/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/qa-engine/page.tsx)
- Quality Engine rule configuration, threshold settings, and live batch evaluation.

#### [NEW] [src/app/analytics/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/analytics/page.tsx)
- Deep-dive analytics dashboard for operator comparisons, error frequencies, curve utilization, and basin quality benchmarks.

#### [NEW] [src/app/comparison/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/comparison/page.tsx)
- Well-to-Well log curve comparison module for side-by-side quality and interval evaluation.

#### [NEW] [src/app/reports/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/reports/page.tsx)
- Audit report generator with PDF, CSV, and cleaned LAS export capabilities using the same cleaned-data exporter as the upload validation workflow.

#### [NEW] [src/app/admin/page.tsx](file:///c:/Users/Ekwebelam/Desktop/WellQC+/src/app/admin/page.tsx)
- Enterprise RBAC management (Users, Roles, Permissions), audit logs, system settings, API keys, and Webhook dispatch configurations.

#### [NEW] [services/python_parser/main.py](file:///c:/Users/Ekwebelam/Desktop/WellQC+/services/python_parser/main.py)
- Standalone FastAPI Python service microservice for high-throughput lasio and scikit-learn anomaly detection processing.

## Verification Plan

### Automated Tests & Validation
- Run TypeScript build check (`npm run build` or `npx tsc --noEmit`) to ensure 100% type safety.
- Execute Prisma database generation & seed script (`npx prisma db push` and `npx prisma db seed`) to verify database integrity.
- Run LAS parser test suite validating LAS 2.0 files, header extraction, curve data matrix parsing, standardisation mapping, and quality score calculation.

### Manual Verification
- Upload test LAS file via UI, verify drag-and-drop, instant metadata extraction, curve alias matching, cleaned LAS/CSV download after validation, despiking anomaly detection, and PDF/LAS export generation.
- Test interactive log track viewer, role switching (Admin vs Petrophysicist vs Viewer), and admin user permission management.
