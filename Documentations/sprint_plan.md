# WellQC+ — 3-Month Development Sprint Plan

> **Project:** WellQC+ — AI-Powered Well Log Quality Assurance Platform
> **Team:** 2 Software Engineers · 3 Data Analysts · 3 Cloud Engineers
> **Timeline:** 3 Months (12 Weeks) · 6 × 2-Week Sprints
> **Methodology:** Agile Scrum with 2-week sprint cycles

---

## Team Reference

| ID | Role | Short Name |
|----|------|------------|
| SE1 | Software Engineer 1 — Core Engine Lead | **SE1** |
| SE2 | Software Engineer 2 — Frontend & API Lead | **SE2** |
| DA1 | Data Analyst 1 — Petrophysical Domain Expert | **DA1** |
| DA2 | Data Analyst 2 — Missing Value & Imputation | **DA2** |
| DA3 | Data Analyst 3 — Analytics & Reporting | **DA3** |
| CE1 | Cloud Engineer 1 — Infrastructure & CI/CD | **CE1** |
| CE2 | Cloud Engineer 2 — Database & ORM | **CE2** |
| CE3 | Cloud Engineer 3 — Python Microservice & Security | **CE3** |

---

## Sprint Overview (12-Week Arc)

```
Month 1                        Month 2                        Month 3
─────────────────────────────────────────────────────────────────────
Sprint 1         Sprint 2      Sprint 3        Sprint 4      Sprint 5         Sprint 6
Wk 1–2          Wk 3–4        Wk 5–6          Wk 7–8        Wk 9–10          Wk 11–12
Discovery &     Foundation    Core Engine &   Advanced      QA, Security     Production
Architecture    & Setup       LAS Pipeline    Features      & Compliance     Launch
```

---

---

# 🔵 SPRINT 1 — Discovery & Architecture

**Duration:** Week 1–2
**Theme:** Define the problem, agree on technology, lay the architectural foundation

---

## Sprint Goal

> Produce a shared understanding of what WellQC+ does, why it exists, and how it will be built. By the end of Sprint 1, every team member knows their domain and the technical architecture is locked.

---

## Sprint 1 Tickets

### DA1 — Petrophysical Requirements Workshop
**WQC-001** *(Story Points: 5)*
- Compile list of all standard log curves: GR, RHOB, NPHI, DT, RT, CALI, PEF, SP
- Define physical min/max limits for each curve from API RP 40 and SLB Log Interpretation Charts
- Document standard mnemonic aliases (`GAMMA` → `GR`, `DEN` → `RHOB`, `CNL` → `NPHI`, etc.)
- Deliver: `STANDARD_CURVES` constant table (input for `standardiser.ts`)
- **Output used in:** [`src/lib/las/standardiser.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/lib/las/standardiser.ts)

---

### DA2 — Missing Value Research Brief
**WQC-002** *(Story Points: 3)*
- Document the 4 root causes of missing data in well logs:
  - Casing shoe transitions
  - Borehole washout / cave-in (correlated with high Caliper readings)
  - Telemetry dropout (large contiguous null blocks across all channels)
  - Off-bottom survey window (missing at start/stop logging depths)
- Deliver: Written brief shared with SE1 — becomes the basis for `imputation-engine.ts`

---

### DA3 — KPI Framework Definition
**WQC-003** *(Story Points: 2)*
- Define the 8 dashboard KPI cards: Total Wells, LAS Files Uploaded, Average Quality Score, Curves Analysed, Errors Detected, Missing Curves, Anomalies Found, Cleaned Today
- Define the 7-day rolling trend dimensions: avgScore, filesUploaded, anomalies
- Define Field Performance grouping logic (by `fieldName`)

---

### SE1 — Technology Decision & Architecture Design
**WQC-004** *(Story Points: 8)*
- Evaluate and lock the full-stack technology decisions:
  - **Frontend/API:** Next.js 15 App Router (TypeScript)
  - **Styling:** Tailwind CSS
  - **Database ORM:** Prisma
  - **Database:** PostgreSQL (Neon — serverless, pooled)
  - **Hosting:** Vercel
  - **Python service:** FastAPI + `lasio` + `scikit-learn`
- Produce architecture diagram:
  ```
  Browser → HTTPS → Vercel (Next.js) → Prisma → Neon PostgreSQL
                                      ↓
                               Python FastAPI Microservice
  ```
- Decide file structure (`src/app/`, `src/lib/las/`, `src/components/`, `prisma/`)

---

### SE2 — Project Initialisation & Toolchain
**WQC-005** *(Story Points: 5)*
- Run `npx create-next-app@latest` with TypeScript, Tailwind, App Router
- Set up ESLint, Prettier, `tsconfig.json` with `@/` path alias
- Add `package.json` scripts: `dev`, `build`, `lint`, `db:push`, `db:studio`
- Add `.gitignore` (ensure `.env`, `*.db`, `.next/` are excluded)
- Push initial empty project to Git repository
- **Produces:** [`package.json`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/package.json), [`tsconfig.json`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/tsconfig.json)

---

### CE1 — Cloud Environment Setup
**WQC-006** *(Story Points: 5)*
- Create Vercel project, link to GitHub repository
- Configure Vercel environment variables: `DATABASE_URL`, `DIRECT_URL`, `AUTH_SECRET`
- Set up CI/CD: every push to `main` triggers `npm run build` on Vercel
- Verify first deployment reaches `https://*.vercel.app`

---

### CE2 — Database Provisioning
**WQC-007** *(Story Points: 5)*
- Provision Neon PostgreSQL database (`neondb`) on AWS us-east-1
- Create pooled (`-pooler`) and direct connection strings
- Add `DATABASE_URL` and `DIRECT_URL` to `.env` and Vercel environment
- Install Prisma: `npm install prisma @prisma/client`
- Run `npx prisma init` — create skeleton `schema.prisma`

---

### CE3 — Python Service Skeleton
**WQC-008** *(Story Points: 3)*
- Create `services/python_parser/` directory
- Create `requirements.txt`: `fastapi`, `uvicorn`, `lasio`, `pandas`, `numpy`, `scikit-learn`
- Write skeleton `main.py` with health-check endpoint `GET /health`
- Document how to run locally: `uvicorn main:app --reload`

---

## Sprint 1 Definition of Done

- [ ] Technology choices locked and communicated to all 8 team members
- [ ] Git repository created with initial Next.js project
- [ ] Vercel project live at a public `https://` URL (empty shell is fine)
- [ ] Neon PostgreSQL provisioned and connection strings tested
- [ ] Physical curve limits table drafted by DA1
- [ ] Missing value brief written by DA2

---

---

# 🟢 SPRINT 2 — Foundation & Database Schema

**Duration:** Week 3–4
**Theme:** Build the data model, authentication, and application shell

---

## Sprint Goal

> By the end of Sprint 2, a user can register, log in, and see the application shell. The complete database schema is live on Neon PostgreSQL.

---

## Sprint 2 Tickets

### CE2 — Full Prisma Schema Design & Migration
**WQC-009** *(Story Points: 8)*
Design and push the complete database schema to Neon:
- **`User`** — `id`, `email`, `passwordHash`, `role`, `department`, `ndaAcceptedAt`, `avatarUrl`
- **`Well`** — `id`, `apiNo` (unique), `name`, `operatorName`, `fieldName`, `basin`, `country`, `latitude`, `longitude`, `tdFt`, `qualityScore`, `qualityGrade`, `ownerId → User`
- **`Field`** — `id`, `name` (unique), `basin`, `country`
- **`Operator`** — `id`, `name` (unique), `code`, `contactEmail`
- **`LASFile`** — `id`, `wellId → Well`, `originalName`, `fileSizeKb`, `lasVersion`, `startDepth`, `stopDepth`, `nullValue`, `rawHeader`, `uploadedById → User`
- **`Curve`** — `id`, `lasFileId → LASFile`, `originalMnemonic`, `standardMnemonic`, `unit`, `nullCount`, `totalPoints`, `nullPercentage`, `minVal`, `maxVal`, `meanVal`, `dataJson`
- **`QualityReport`** — `id`, `wellId`, `lasFileId`, `overallScore`, `qualityGrade`, `completenessScore`, `consistencyScore`, `anomalyCount`, `aiSummary`, `recommendations`, `reportJson`
- **`Anomaly`** — `id`, `qualityReportId`, `curveId`, `curveMnemonic`, `depthStart`, `depthEnd`, `anomalyType`, `severity`, `description`, `suggestedCorrection`, `status`
- **`ActivityLog`** — `id`, `userId`, `userName`, `action`, `targetType`, `targetId`, `details`, `ipAddress`
- **`APIToken`** — `id`, `token` (unique), `userId`, `lastUsedAt`
- Run `npx prisma db push` to apply schema to Neon
- **Produces:** [`prisma/schema.prisma`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/prisma/schema.prisma)

---

### SE1 — Authentication Library
**WQC-010** *(Story Points: 8)*
Build the complete auth stack in [`src/lib/auth.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/lib/auth.ts):
- `hashPassword(password)` — `scrypt` with 16-byte random salt, returns `salt:hash`
- `verifyPassword(password, storedHash)` — `timingSafeEqual` constant-time compare
- `createSession(user)` — base64url payload + HMAC-SHA256 signature, 7-day expiry
- `readSession(token)` — verify signature, check expiry, return `SessionUser | null`
- `getCurrentUser()` — reads `wellqc_session` cookie from `next/headers`
- Set `AUTH_SECRET` in `.env` (64-char random string)

---

### SE2 — Login & Register Pages + API Routes
**WQC-011** *(Story Points: 8)*
- Build `POST /api/auth/login` — verify password, set `httpOnly` session cookie
- Build `POST /api/auth/register` — validate email uniqueness, hash password, create user
- Build `POST /api/auth/logout` — clear cookie
- Build `GET /api/auth/me` — return current session user
- Build `/login` page — email + password form with loading state and error messages
- Build `/register` page — name, email, password, role selector, department
- **Produces:** [`src/app/api/auth/`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/api/auth), [`src/app/login/`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/login), [`src/app/register/`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/register)

---

### SE2 — Route Protection Middleware
**WQC-012** *(Story Points: 3)*
Build [`middleware.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/middleware.ts) at the project root:
- Public paths: `/login`, `/register`
- Any unauthenticated request → redirect to `/login`
- Authenticated user hitting `/login` → redirect to `/dashboard`
- Matcher excludes: `api/`, `_next/`, `favicon.ico`

---

### SE2 — Application Shell & Navigation
**WQC-013** *(Story Points: 8)*
Build the persistent application shell:
- [`app-shell.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/components/layout/app-shell.tsx) — main layout wrapper with sidebar + header
- [`sidebar.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/components/ui/sidebar.tsx) — navigation links: Dashboard, Upload, Wells, QA Engine, Standardisation, Analytics, Reports, Comparison, Activity, Admin
- [`header.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/components/ui/header.tsx) — page title, user avatar, role badge, notification bell, logout button
- Responsive: mobile slide-out drawer navigation
- Dark subsurface oil-field design theme (deep navy, petroleum green, amber accents)

---

### CE1 — CI/CD Pipeline & Branch Strategy
**WQC-014** *(Story Points: 3)*
- Set up GitHub branch strategy: `main` (production) → `develop` (staging) → feature branches
- Vercel: `main` → production deployment, `develop` → preview deployment
- Add GitHub Actions workflow: `npm run build` + `npx tsc --noEmit` on every PR

---

### CE2 — Database Singleton & Seed Script
**WQC-015** *(Story Points: 3)*
- Build [`src/lib/db.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/lib/db.ts) — Prisma singleton (prevents connection pool exhaustion in dev HMR)
- Write [`prisma/seed.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/prisma/seed.ts) — seed 1 admin user for demo purposes

---

## Sprint 2 Definition of Done

- [ ] User can register and log in — session cookie stored, verified on each request
- [ ] Unauthenticated requests redirect to `/login` via middleware
- [ ] Full database schema deployed to Neon PostgreSQL (verified via Prisma Studio)
- [ ] Application shell renders with sidebar navigation on all routes
- [ ] Vercel preview deployment for `develop` branch is live

---

---

# 🟡 SPRINT 3 — Core Engine & LAS Pipeline

**Duration:** Week 5–6
**Theme:** Build the LAS parsing pipeline, quality scoring engine, and well management

---

## Sprint Goal

> By the end of Sprint 3, a user can upload a LAS file, parse it, receive a quality score with anomalies, and view the well in the database.

---

## Sprint 3 Tickets

### SE1 — LAS Parser Engine
**WQC-016** *(Story Points: 13)*
Build [`src/lib/las/parser.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/lib/las/parser.ts):
- Parse all 4 LAS 2.0 sections: `~VERSION`, `~WELL`, `~CURVE`, `~ASCII`
- Extract `wellInfo`: `wellName`, `company`, `field`, `apiUwi`, `startDepth`, `stopDepth`, `step`, `nullValue`, `depthUnit`, `latitude`, `longitude`
- Extract `curves[]`: `mnemonic`, `unit`, `description`
- Extract `data{}`: `depth[]` + per-curve `number[]` arrays
- Null value detection: replace `-999.25`, `-9999`, `NaN`, blank with `null`
- Handle LAS 2.0 WRAP mode (multi-line depth step)
- Return `ParsedLAS` typed object

---

### DA1 — Mnemonic Standardiser Dictionary
**WQC-017** *(Story Points: 5)*
Build the curve alias mapping table for [`src/lib/las/standardiser.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/lib/las/standardiser.ts):
- For each standard curve (GR, RHOB, NPHI, DT, RT, CALI, etc.), list all known aliases
- Example: `GR` aliases → `['GAMMA', 'GAMMA_RAY', 'GRD', 'GRC', 'GRN', 'NGAM', 'NAT_GAMMA']`
- Include `minPhysical`, `maxPhysical`, `unit` for each curve
- `standardiseMnemonic(raw, unit)` → `{ standardMnemonic, confidence, matchedName }`
- Confidence scoring: 1.0 exact · 0.85 alias · 0.60 unit-based · 0.40 partial · 0.20 unknown

---

### SE1 — Quality Scoring Engine
**WQC-018** *(Story Points: 13)*
Build [`src/lib/las/quality-engine.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/lib/las/quality-engine.ts):

**Anomaly detection (per curve):**
- **A. Physical Limit Check** — flag values outside `stdDef.minPhysical / maxPhysical` as `IMPOSSIBLE_VALUE` / `CRITICAL`
- **B. Spike Detection** — Z-score > 4.5σ AND sudden reversal (prev → curr → next) → `EXTREME_SPIKE` / `WARNING`
- **C. Flatline Sensor** — > 25 consecutive identical values → `FLATLINE` / `WARNING`
- **D. Null Cluster** — > 15% null in a 50-sample window → `NULL_CLUSTER` / `INFO`

**Well-level anomaly detection:**
- **E. Depth Gap** — gap in depth array > 5× step size → `DEPTH_GAP` / `WARNING`
- **F. Duplicate Depth** — repeated depth values → `DUPLICATE_DEPTH` / `INFO`
- **G. Unit Mismatch** — curve unit doesn't match standard → `UNIT_MISMATCH` / `INFO`
- **H. Missing Standard Curves** — GR, RHOB, NPHI, DT absent → listed in report

**Scoring formula:**
```
Curve Health = 100 − (Physical×30 + Spike×20 + Flatline×15 + Null×25 + Unit×10)
Overall Score = (0.50 × avgCurveHealth) + (0.30 × completeness) + (0.20 × consistency)
```
Grades: ≥90 EXCELLENT · ≥75 GOOD · ≥50 POOR · >0 CRITICAL

---

### SE1 — AI Recommendation Engine
**WQC-019** *(Story Points: 8)*
Build [`src/lib/las/ai-analyzer.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/lib/las/ai-analyzer.ts):
- Rule-based expert system (no external API dependency — runs fully in-process)
- Input: `ParsedLAS` + `QualityAnalysisResult`
- Output: `{ summary: string, recommendations: string[], riskLevel, confidence }`
- Recommendations driven by anomaly type and severity combinations
- Risk: LOW / MEDIUM / HIGH / CRITICAL based on Overall Score

---

### SE1 — LAS Exporter
**WQC-020** *(Story Points: 8)*
Build [`src/lib/las/exporter.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/lib/las/exporter.ts):
- `buildCleanedDataExport(las, qa)` — produces cleaned LAS 2.0, CSV, curve data
- Remove duplicate depth rows (`getUniqueDepthIndexes`)
- Replace physically impossible values and spikes with null marker
- Convert non-standard units to standard equivalents (e.g., g/cc → kg/m³)
- Regenerate valid LAS 2.0 header with all 4 sections
- Export curves using standardised mnemonics

---

### SE2 — LAS Upload Workspace
**WQC-021** *(Story Points: 8)*
Build [`src/app/upload/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/upload):
- Drag-and-drop LAS file zone with visual feedback
- Parse and preview file contents client-side before upload
- Display curve list, depth range, null percentage per curve
- "Commit to Database" button → `POST /api/las` with file content
- Show quality score, grade, and anomaly count after commit
- Navigate to well detail page on success

---

### SE2 — Well Management API + Pages
**WQC-022** *(Story Points: 8)*
- `GET /api/wells` → list wells `WHERE ownerId = user.id`
- `POST /api/wells` → create well manually
- `GET /api/wells/[id]` → well detail scoped to `ownerId`
- `DELETE /api/wells/[id]` → cascading delete (owner verified first)
- [`src/app/wells/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/wells) — sortable, filterable well inventory
- [`src/app/wells/[id]/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/wells) — well detail with curves, anomalies, AI summary

---

### CE2 — LAS Commit Transaction (Database Persistence Layer)
**WQC-023** *(Story Points: 8)*
Build [`src/app/api/las/route.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/api/las/route.ts):
- Atomically (via `db.$transaction()`): upsert Operator, Field, Well; create LASFile, Curves, QualityReport, Anomalies, ActivityLog
- Cross-tenant guard: `existingWell.ownerId !== user.id` → throw error
- 30-second transaction timeout for large files

---

### DA1 + DA2 — Test LAS File Library
**WQC-024** *(Story Points: 5)*
- Collect 5–10 Niger Delta LAS files covering different quality grades
- Document expected quality score range for each file
- Test parser against each — verify null detection, depth extraction
- Add 2 synthetic files to `src/lib/sample-las-files.ts` for in-app demos

---

## Sprint 3 Definition of Done

- [ ] LAS file uploads, parses, and commits to PostgreSQL in < 30 seconds
- [ ] Quality score (0–100) returned for every commit with anomaly list
- [ ] AI summary and recommendations generated
- [ ] Well list shows only the logged-in user's wells
- [ ] Well detail page shows curves, score, anomalies, AI summary

---

---

# 🟠 SPRINT 4 — Advanced Features & Visualisation

**Duration:** Week 7–8
**Theme:** Dashboard, analytics, log viewer, imputation benchmarking, reports

---

## Sprint Goal

> By the end of Sprint 4, the platform has a fully functional command dashboard, petrophysical log viewer, imputation benchmarking, and export capabilities.

---

## Sprint 4 Tickets

### SE2 — Command Dashboard
**WQC-025** *(Story Points: 8)*
Build `GET /api/dashboard` (all owner-scoped queries) + [`src/app/dashboard/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/dashboard):
- 8 KPI cards with trend indicators
- 7-day rolling quality trend line chart
- Field performance bar chart
- Problem Wells panel (bottom 5 wells)
- Recent Activity feed (last 5 `ActivityLog` entries)

---

### SE1 — Multi-Track Petrophysical Log Viewer
**WQC-026** *(Story Points: 13)*
Build [`src/components/well-log/log-viewer.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/components/well-log/log-viewer.tsx):
- Classic Borehole Log Paper view: depth track + GR (green) + RT (log scale) + DT/RHOB/NPHI
- MISSING GAP grey overlay on null value zones
- Anomaly depth markers (coloured tick marks)
- Dark Subsurface view: navy background, petroleum green curves
- Controls: depth range slider, track toggles, zoom, view mode switcher

---

### DA2 — Imputation Root Cause Diagnostics + Benchmarking Engine
**WQC-027 / WQC-028** *(Story Points: 21)*
Build [`src/lib/las/imputation-engine.ts`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/lib/las/imputation-engine.ts):
- `detectMissingValueCauses()` — classify null origin: Casing Shoe, Washout, Telemetry, Off-Bottom
- `benchmarkImputationMethods()` — 5 methods (KNN, Linear, Median, Spline, Drop) cross-validated
- Metrics: RMSE, MAE, R², Variance Preservation, Execution Time
- Recommended strategy table per curve type (GR→KNN, DT→Spline, RT→Median, CALI→Linear)

---

### SE2 — Imputation Benchmark Modal + QA Engine Page
**WQC-029 / WQC-031** *(Story Points: 10)*
- [`imputation-benchmark-modal.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/components/well-log/imputation-benchmark-modal.tsx): curve selector, root cause panel, metrics table, best method highlighted
- [`src/app/qa-engine/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/qa-engine): QA thresholds, stakeholder alignment banner, link to benchmarks
- [`src/app/standardisation/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/standardisation): mnemonic override table

---

### DA3 — Analytics + Reports Pages
**WQC-030** *(Story Points: 8)*
- `GET /api/analytics` — operator comparison, anomaly distribution (owner-scoped)
- [`src/app/analytics/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/analytics) — bar + pie charts
- [`src/app/reports/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/reports) — PDF (jsPDF), Excel (XLSX), CSV (PapaParse) export

---

### CE3 — Python FastAPI Microservice
**WQC-032** *(Story Points: 8)*
Build [`services/python_parser/main.py`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/services/python_parser):
- `POST /parse` — `lasio` parsing
- `POST /quality` — `pandas` statistical checks
- `POST /impute/knn` — `scikit-learn` `KNNImputer`
- `POST /impute/benchmark` — all 5 methods, return metrics JSON

---

## Sprint 4 Definition of Done

- [ ] Dashboard renders 8 KPIs from live database data
- [ ] Multi-track log viewer renders GR, RT, DT, RHOB, NPHI with depth grid and missing gaps
- [ ] Imputation benchmark modal shows RMSE/MAE/R² for 5 methods
- [ ] PDF report exports successfully
- [ ] Python microservice health check returns 200 OK

---

---

# 🔴 SPRINT 5 — QA, Security & Compliance

**Duration:** Week 9–10
**Theme:** Security hardening, NDA gate, cross-tenant audit, activity log, bug fixes

---

## Sprint Goal

> WellQC+ is hardened for multi-tenant use. NDA acceptance is enforced. Data isolation is audited. Activity log is complete.

---

## Sprint 5 Tickets

### CE3 — NDA Acceptance Gate
**WQC-033** *(Story Points: 5)*
- Build `/nda` page with Data Processing Agreement text and "I Accept" button
- `PATCH /api/auth/me` → set `ndaAcceptedAt = now()`
- Redirect to `/nda` if current user's `ndaAcceptedAt` is null

---

### CE3 — Full Security Hardening Audit
**WQC-034** *(Story Points: 8)*
- Verify `.env` never committed to Git
- Confirm every API route calls `getCurrentUser()` and returns 401 if null
- Test cross-tenant: User B calls `GET /api/wells/[User-A-well-id]` → must return 404
- Test LAS upload cross-tenant guard: `existingWell.ownerId !== user.id` → throws error
- Verify cookie flags: `httpOnly: true`, `sameSite: lax`, `secure: true` in production

---

### SE2 — Activity Audit Trail + Well Comparison
**WQC-036 / WQC-037** *(Story Points: 10)*
- [`src/app/activity/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/activity): audit log with action filter, CSV export, read-only for non-Admin
- [`src/app/comparison/page.tsx`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/src/app/comparison): side-by-side QA metric comparison for any 2 wells

---

### CE1 — Performance Testing
**WQC-038** *(Story Points: 5)*
- Load test: 10 concurrent LAS uploads
- Measure p50/p95 response times for `/api/las`, `/api/wells`, `/api/dashboard`
- Verify Neon PgBouncer connection pool holds under concurrency
- Set Vercel function timeout to 60s

---

### DA3 — Expert QA Validation on Real Data
**WQC-039** *(Story Points: 8)*
- Upload 10 real Niger Delta LAS files to staging environment
- DA1 reviews scores and signs off on quality engine accuracy
- DA2 validates imputation benchmark RMSE values on real curves
- Document discrepancies for SE1 calibration

---

### CE2 — Database Backup & Recovery
**WQC-040** *(Story Points: 3)*
- Configure Neon PITR (7-day retention)
- Document recovery steps
- Test restoration to staging branch

---

## Sprint 5 Definition of Done

- [ ] NDA page live; users without `ndaAcceptedAt` are blocked
- [ ] Cross-tenant test passes at API level (not just UI)
- [ ] Activity audit trail page live with all action types logged
- [ ] Performance test p95 < 10s for LAS commit
- [ ] Quality engine accuracy signed off by DA1

---

---

# 🟣 SPRINT 6 — Production Launch

**Duration:** Week 11–12
**Theme:** Go-live, stakeholder demo, final documentation

---

## Sprint Goal

> WellQC+ is live on a public `https://` domain. Stakeholder demo is ready. Documentation is complete.

---

## Sprint 6 Tickets

### CE1 — Production Go-Live
**WQC-041** *(Story Points: 5)*
- `vercel --prod` deployment from `main` branch
- Custom domain with SSL certificate
- Smoke test all routes on production URL

---

### CE2 — Production Database
**WQC-042** *(Story Points: 3)*
- Final `npx prisma db push` to production Neon
- Seed demo admin account for stakeholder presentation
- Verify PgBouncer pooling active in production

---

### DA3 — Demo Dataset & Walkthrough Script
**WQC-043** *(Story Points: 5)*
- Upload 6 pre-validated Niger Delta LAS files (1 EXCELLENT, 2 GOOD, 2 POOR, 1 CRITICAL)
- Prepare 7-step demo walkthrough narrative for stakeholder presentation
- Rehearse with all 8 team members

---

### SE1 + SE2 — Final UI Polish
**WQC-044** *(Story Points: 5)*
- Responsive layout review: 375px / 768px / 1440px
- Loading skeleton states on all data-fetching pages
- Empty state messages ("No wells yet — upload your first LAS file")
- Page `<title>` and meta descriptions on all routes

---

### All — README & Documentation
**WQC-045** *(Story Points: 5)*
Update [`README.md`](file:///c:/Users/Ekwebelam%20C%20Williams/Desktop/WellQC+/README.md):
- Project overview, tech stack, local setup, `.env` reference
- Quality scoring formula documentation
- API endpoint reference table
- LAS format notes

---

### CE3 — Python Service Production Deployment
**WQC-046** *(Story Points: 5)*
- Write `Dockerfile` for FastAPI service
- Deploy to Railway or Google Cloud Run
- Set `PYTHON_SERVICE_URL` in Vercel environment
- Verify `/health` on production URL

---

### All — Retrospective
**WQC-047** *(Story Points: 2)*
- Sprint retrospective: what went well, blockers, improvements
- Document technical debt items
- Final team roles document update for presentation

---

## Sprint 6 Definition of Done

- [ ] WellQC+ live at `https://` with valid SSL
- [ ] All 7 demo steps walkable without errors on production
- [ ] README complete and accurate
- [ ] Python service responding on production URL
- [ ] Presentation rehearsed by full team

---

---

## 📊 Complete Sprint Summary

| Sprint | Weeks | Theme | Key Deliverables |
|--------|-------|-------|-----------------|
| **Sprint 1** | 1–2 | Discovery & Architecture | Tech stack locked · Vercel + Neon live · Git repo |
| **Sprint 2** | 3–4 | Foundation & Database | Full auth · RBAC · Prisma schema · App shell |
| **Sprint 3** | 5–6 | Core Engine & LAS Pipeline | Parser · QA engine · AI analyzer · Exporter · Well CRUD |
| **Sprint 4** | 7–8 | Advanced Features | Dashboard · Log viewer · Imputation · Analytics · Reports |
| **Sprint 5** | 9–10 | QA, Security & Compliance | NDA gate · Cross-tenant audit · Activity log · Load test |
| **Sprint 6** | 11–12 | Production Launch | Go-live · Demo dataset · Documentation · Retrospective |

---

## 📦 Story Points by Role (3 Months)

| Role | Sprint Focus | Approx. Total |
|------|-------------|---------------|
| SE1 | Parser, QA engine, AI analyzer, exporter, log viewer | **68 pts** |
| SE2 | Auth, UI pages, API routes, dashboard, modal, reports | **72 pts** |
| DA1 | Petrophysical rules, mnemonic dictionary, QA validation | **30 pts** |
| DA2 | Missing value research, root cause diagnostics, benchmarking | **34 pts** |
| DA3 | KPI framework, analytics, reports, demo dataset | **28 pts** |
| CE1 | Vercel deployment, CI/CD, performance testing | **18 pts** |
| CE2 | Neon provisioning, Prisma schema, DB singleton, backups | **32 pts** |
| CE3 | Python service, auth security, NDA gate, containerisation | **29 pts** |
| **Total** | **47 tickets** | **~311 story points** |

---

## 🔑 Full Technology Stack

| Layer | Technology | Sprint Decided |
|-------|-----------|---------------|
| Framework | Next.js 15 App Router | Sprint 1 |
| Language | TypeScript (strict) | Sprint 1 |
| Styling | Tailwind CSS | Sprint 1 |
| Database ORM | Prisma | Sprint 1 |
| Database | Neon PostgreSQL (AWS us-east-1) | Sprint 1 |
| Authentication | `scrypt` + HMAC-SHA256 session tokens | Sprint 2 |
| Charts | Recharts | Sprint 4 |
| PDF Export | jsPDF | Sprint 4 |
| Excel Export | SheetJS (XLSX) | Sprint 4 |
| CSV Export | PapaParse | Sprint 4 |
| Python ML Service | FastAPI + lasio + pandas + scikit-learn | Sprint 4 |
| App Hosting | Vercel (HTTPS auto-provisioned) | Sprint 1 |
| Python Hosting | Railway / Google Cloud Run | Sprint 6 |

---

> **WellQC+ v2.4.0-Enterprise** · Niger Delta Subsurface Analytics Platform
> 3-month sprint plan · 8-person team · 6 sprints · 47 tickets · ~311 story points
