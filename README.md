# WellQC+ 🛢️

> **Enterprise-Grade AI-Powered Well Log Quality Assurance Platform**

WellQC+ is a full-stack cloud platform that automatically validates, cleans, standardises, and analyses **LAS (Log ASCII Standard)** well log files before consumption by petrophysicists and geoscientists. Styled after industry software from SLB, Palantir Foundry, and Microsoft Fabric, it provides complete automated QA/QC workflows, interactive log track rendering, AI anomaly detection, standardisation management, and enterprise reporting.

---

## ✨ Features

### 🗂️ LAS Parsing & Standardisation
- Native **TypeScript LAS 2.0/3.0 parser** — extracts `~V`, `~W`, `~C`, `~P`, `~A` header sections, depth arrays, null values, units, and curve data matrices
- **Automated Mnemonic Standardisation** — maps raw logging mnemonics (e.g., `GAMMA`, `DEN`, `CNL`, `ILD`, `AC`, `HCAL`) to standard API mnemonics (`GR`, `RHOB`, `NPHI`, `RT`, `DT`, `CALI`, `PEF`, `SP`, `MSFL`, `LLS`) with confidence scoring
- Optional **Python FastAPI microservice** for high-throughput `lasio` + `scikit-learn` processing

### 🧠 AI Quality Engine
- Computes **Completeness Score**, **Consistency Score**, and **Overall Quality Score (0–100)**
- Assigns quality grades: `EXCELLENT`, `GOOD`, `POOR`, `CRITICAL`
- Detects anomalies including:
  - Missing values & null ratio spikes
  - Non-monotonic depth sequences & depth gaps
  - Physical boundary violations (e.g. RHOB < 1.0 or > 3.2 g/cc, NPHI < -0.05)
  - Extreme Z-score spikes (> 4.5σ)
  - Flatline sensors (> 25 consecutive identical steps)
- **AI Summary Engine** — generates natural-language interval recommendations

### 📊 Interactive Petrophysical Log Viewer
- Multi-track log curve viewer rendering:
  - **Track 1**: Gamma Ray (GR) & SP
  - **Track 2**: Deep Resistivity (RT)
  - **Track 3**: Density (RHOB) vs Porosity (NPHI) crossover
  - **Anomaly Ribbon**: Depth-indexed flags with interactive tooltips

### 🏢 Enterprise Platform Modules
| Module | Description |
|---|---|
| **Command Dashboard** | 8 KPI telemetry cards, 7-day rolling quality trend, field performance breakdown |
| **Well Management** | Full CRUD asset management with coordinates, curve inventory & quality history |
| **LAS Upload Workspace** | Drag-and-drop uploader with real-time parsing, pre-check QA scoring & DB commit |
| **Curve Standardisation Dictionary** | Alias mapping dictionary & manual override controls |
| **QA Rule Engine Inspector** | Threshold tuning & live batch evaluation |
| **Basin Analytics** | Operator comparison charts, error frequency & anomaly distribution |
| **Well Comparison** | Side-by-side log curve comparison across wells |
| **Reports & Downloads** | PDF executive certificates, Excel workbooks, CSV audit logs & cleaned LAS exports |
| **Activity & Audit Trail** | Immutable action log for compliance |
| **Admin Panel** | RBAC role simulator, API tokens & webhook dispatch configuration |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | ^15.0.3 | Full-stack React framework with App Router & Turbopack |
| [React](https://react.dev/) | ^19.0.0 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | ^5.6.3 | Type-safe development across the entire codebase |
| [Tailwind CSS](https://tailwindcss.com/) | ^3.4.15 | Utility-first CSS with enterprise dark theme |
| [Framer Motion](https://www.framer.com/motion/) | ^11.11.17 | Smooth animations & micro-interactions |
| [Lucide React](https://lucide.dev/) | ^0.460.0 | Consistent icon system |
| [Recharts](https://recharts.org/) | ^2.13.3 | Petrophysical chart and log track rendering |

### Forms & Validation
| Technology | Version | Purpose |
|---|---|---|
| [React Hook Form](https://react-hook-form.com/) | ^7.53.2 | Performant form state management |
| [Zod](https://zod.dev/) | ^3.23.8 | Schema validation & type inference |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | ^3.9.0 | Zod integration with React Hook Form |

### Database & ORM
| Technology | Version | Purpose |
|---|---|---|
| [Prisma ORM](https://www.prisma.io/) | ^5.22.0 | Type-safe database access & schema management |
| SQLite (default) | — | Zero-config local database (swappable to PostgreSQL via env var) |

### Data Processing & Exports
| Technology | Version | Purpose |
|---|---|---|
| [PapaParse](https://www.papaparse.com/) | ^5.4.1 | CSV parsing & export |
| [jsPDF](https://github.com/parallax/jsPDF) | ^2.5.2 | PDF report generation |
| [jspdf-autotable](https://github.com/simonbengtsson/jsPDF-AutoTable) | ^3.8.4 | Structured table rendering in PDFs |
| [XLSX](https://sheetjs.com/) | ^0.18.5 | Excel workbook export |
| [date-fns](https://date-fns.org/) | ^4.1.0 | Date formatting & manipulation |
| clsx + tailwind-merge | ^2.1.1 / ^2.5.4 | Conditional class utilities |

### Backend Microservice (Optional)
| Technology | Purpose |
|---|---|
| Python 3 | Runtime for advanced petrophysical analytics |
| FastAPI | High-performance REST API for LAS batch processing |
| lasio | Industry-standard Python LAS file reader |
| scikit-learn | ML-based anomaly detection pipeline |
| pandas | Curve data manipulation & statistical analysis |

### Dev Tools
| Technology | Version | Purpose |
|---|---|---|
| PostCSS | ^8.4.49 | CSS transformation pipeline |
| Autoprefixer | ^10.4.20 | Cross-browser CSS compatibility |
| ts-node | ^10.9.2 | TypeScript execution for Prisma seed scripts |

---

## 📁 Project Structure

```
WellQC+/
├── prisma/
│   ├── schema.prisma          # Database schema (12+ models)
│   └── seed.ts                # Sample data: 6 wells across Permian, GoM, North Sea
├── services/
│   └── python_parser/
│       └── main.py            # Optional FastAPI LAS microservice
└── src/
    ├── app/
    │   ├── dashboard/         # Command centre dashboard
    │   ├── wells/             # Well management & detail view
    │   ├── upload/            # LAS drag-and-drop upload workspace
    │   ├── standardisation/   # Mnemonic dictionary & override UI
    │   ├── qa-engine/         # QA rule inspector & threshold tuning
    │   ├── analytics/         # Basin & operator analytics
    │   ├── comparison/        # Well-to-well comparison
    │   ├── reports/           # PDF/Excel/CSV/LAS export centre
    │   ├── activity/          # Audit trail
    │   └── admin/             # RBAC, API tokens & webhooks
    ├── components/
    │   ├── ui/                # Header, sidebar, shared components
    │   └── well-log/          # Interactive log track viewer
    └── lib/
        └── las/
            ├── parser.ts          # LAS 2.0/3.0 TypeScript parser
            ├── standardiser.ts    # Mnemonic standardisation engine
            ├── quality-engine.ts  # QA scoring & anomaly detection
            └── ai-analyzer.ts     # AI natural-language summary engine
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18
- **npm** or **pnpm**

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Set up the database
npm run prisma:generate
npm run prisma:push

# 3. Seed with sample well data
npm run prisma:seed
```

### Running Locally

```bash
npm run dev
```

Open http://localhost:3000 to view the application.

### Optional: Python Microservice

```bash
cd services/python_parser
pip install fastapi uvicorn lasio pandas scikit-learn
uvicorn main:app --reload --port 8000
```

---

## 📜 Database Schema

The Prisma schema defines **12 core entities**:

```
User · Well · Field · Operator · LASFile · Curve
CurveStandardisation · QualityReport · Anomaly
ActivityLog · APIToken · Webhook
```

The default provider is **SQLite** for zero-config local development. To switch to PostgreSQL for production, update the `provider` in `prisma/schema.prisma` and set `DATABASE_URL` in your `.env` file.

---

## 📊 Supported LAS Mnemonics

| Standard Mnemonic | Description |
|---|---|
| GR | Gamma Ray |
| RHOB | Bulk Density |
| NPHI | Neutron Porosity |
| DT | Acoustic Transit Time |
| RT | True Resistivity |
| CALI | Caliper |
| PEF | Photoelectric Factor |
| SP | Spontaneous Potential |
| ILD | Induction Log Deep |
| MSFL / LLS / LLD | Shallow / Medium / Deep Laterolog |

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 📄 License

This project is private and proprietary. All rights reserved © WilliamsConcepts.
