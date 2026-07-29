(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$compare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCompare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-compare.js [app-client] (ecmascript) <export default as GitCompare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Sidebar(param) {
    let { currentRole } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const navItems = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        },
        {
            label: "Well Management",
            href: "/wells",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
        },
        {
            label: "LAS Upload & QA",
            href: "/upload",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"],
            highlight: true
        },
        {
            label: "Standardisation",
            href: "/standardisation",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"]
        },
        {
            label: "Quality Engine",
            href: "/qa-engine",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
        },
        {
            label: "Analytics",
            href: "/analytics",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        },
        {
            label: "Well Comparison",
            href: "/comparison",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$compare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCompare$3e$__["GitCompare"]
        },
        {
            label: "Audit Reports",
            href: "/reports",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"]
        },
        {
            label: "Activity Logs",
            href: "/activity",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
        }
    ];
    if (currentRole === "ADMIN") {
        navItems.push({
            label: "Admin Panel",
            href: "/admin",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 bg-wellqc-panel border-r border-wellqc-border flex flex-col h-screen sticky top-0 z-30 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-wellqc-border flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/dashboard",
                    className: "flex items-center space-x-3 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-cyan-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-wellqc-dark rounded-[7px] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    className: "w-5 h-5 text-cyan-400 animate-pulse-glow"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sidebar.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sidebar.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/sidebar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent",
                                    children: [
                                        "WellQC",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cyan-400 font-black",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/sidebar.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/sidebar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[10px] uppercase font-mono tracking-widest text-wellqc-muted",
                                    children: "Petrophysical QA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sidebar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/sidebar.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/upload",
                    className: "w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600/30 to-cyan-500/20 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 text-xs font-semibold shadow-md shadow-cyan-500/10 transition-all hover:translate-y-[-1px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-4 h-4 text-cyan-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sidebar.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Ingest & Validate LAS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sidebar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/sidebar.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4 text-cyan-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/sidebar.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-2 space-y-1 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pb-1 text-[10px] font-mono uppercase tracking-wider text-wellqc-muted font-bold",
                        children: "Platform Navigation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sidebar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    navItems.map((item)=>{
                        const Icon = item.icon;
                        const isActive = pathname === item.href || item.href !== "/dashboard" && pathname.startsWith(item.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ".concat(isActive ? "bg-blue-600/20 text-cyan-300 border border-cyan-500/40 shadow-sm" : "text-slate-400 hover:text-slate-100 hover:bg-wellqc-card/60"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-4 h-4 ".concat(isActive ? "text-cyan-400" : "text-slate-400")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/sidebar.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/sidebar.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/sidebar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                item.highlight && !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-cyan-400 animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sidebar.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/src/components/ui/sidebar.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t border-wellqc-border bg-wellqc-dark/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between text-xs text-wellqc-muted font-mono",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sidebar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Engine Ready"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sidebar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/sidebar.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-slate-500",
                            children: "v2.4.0-Enterprise"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/sidebar.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/sidebar.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Header(param) {
    let { currentRole, onRoleChange, currentUser } = param;
    _s();
    const [roleDropdownOpen, setRoleDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notificationsOpen, setNotificationsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const roles = [
        {
            id: "ADMIN",
            name: "Administrator",
            color: "text-purple-400 border-purple-500/40 bg-purple-500/10"
        },
        {
            id: "PETROPHYSICIST",
            name: "Petrophysicist",
            color: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10"
        },
        {
            id: "DATA_ENGINEER",
            name: "Data Engineer",
            color: "text-blue-400 border-blue-500/40 bg-blue-500/10"
        },
        {
            id: "GEOSCIENTIST",
            name: "Geoscientist",
            color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10"
        },
        {
            id: "VIEWER",
            name: "Viewer / Auditor",
            color: "text-slate-400 border-slate-500/40 bg-slate-500/10"
        }
    ];
    const activeRoleObj = roles.find((r)=>r.id === currentRole) || roles[1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-16 bg-wellqc-panel/80 backdrop-blur-md border-b border-wellqc-border px-6 flex items-center justify-between sticky top-0 z-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4 flex-1 max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/header.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search wells, API/UWI numbers, operators, fields, or log curves...",
                            className: "w-full bg-wellqc-card border border-wellqc-border rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/header.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/header.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/header.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center space-x-2 text-xs text-wellqc-muted px-3 py-1 rounded-md bg-wellqc-card/40 border border-wellqc-border font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "w-3.5 h-3.5 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/header.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Global Basin Portal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/header.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/header.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setRoleDropdownOpen(!roleDropdownOpen),
                                className: "flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-semibold font-mono transition-all ".concat(activeRoleObj.color),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Role: ",
                                            activeRoleObj.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3.5 h-3.5 opacity-70"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/header.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            roleDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 mt-2 w-56 bg-wellqc-card border border-wellqc-border rounded-xl shadow-2xl p-1.5 z-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-3 py-2 text-[10px] font-mono text-slate-400 border-b border-wellqc-border uppercase tracking-wider",
                                        children: "Simulate Role Access (RBAC)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-1 space-y-0.5",
                                        children: roles.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    onRoleChange(r.id);
                                                    setRoleDropdownOpen(false);
                                                },
                                                className: "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ".concat(currentRole === r.id ? "bg-blue-600/20 text-cyan-300 font-semibold" : "text-slate-300 hover:bg-wellqc-panel hover:text-white"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: r.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/header.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this),
                                                    currentRole === r.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-3.5 h-3.5 text-cyan-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/header.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 46
                                                    }, this)
                                                ]
                                            }, r.id, true, {
                                                fileName: "[project]/src/components/ui/header.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/header.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/header.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setNotificationsOpen(!notificationsOpen),
                                className: "p-2 text-slate-400 hover:text-slate-100 hover:bg-wellqc-card rounded-lg transition-colors relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/header.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            notificationsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 mt-2 w-80 bg-wellqc-card border border-wellqc-border rounded-xl shadow-2xl p-3 z-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between pb-2 border-b border-wellqc-border text-xs font-semibold text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Recent System Alerts"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/header.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono text-cyan-400",
                                                children: "3 New"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/header.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-2 space-y-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg bg-wellqc-panel/60 border border-amber-500/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-amber-400",
                                                        children: "RHOB Spike Warning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/header.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-400 text-[11px]",
                                                        children: "WOLFCAMP_PROD_01 density anomaly at 10,010 ft."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/header.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/header.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg bg-wellqc-panel/60 border border-emerald-500/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-emerald-400",
                                                        children: "Standardisation Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/header.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-400 text-[11px]",
                                                        children: "7 curves mapped for MISSISSIPPI_CANYON."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/header.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/header.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/header.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/header.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3 pl-2 border-l border-wellqc-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md",
                                children: currentUser.name.charAt(0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/header.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-slate-100",
                                        children: currentUser.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-wellqc-muted font-mono",
                                        children: currentUser.department
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/header.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/header.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/header.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/header.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/header.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Header, "0jj63ZFfos+pwWRXzCv7qvrJaPY=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/app-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/header.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AppShell(param) {
    let { children } = param;
    _s();
    const [currentRole, setCurrentRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("PETROPHYSICIST");
    const [currentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "Alexandre Dubois",
        email: "alexandre.dubois@petro-analytics.com",
        department: "Global Subsurface QA"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-wellqc-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                currentRole: currentRole
            }, void 0, false, {
                fileName: "[project]/src/components/layout/app-shell.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                        currentRole: currentRole,
                        onRoleChange: setCurrentRole,
                        currentUser: currentUser
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/app-shell.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-6 overflow-y-auto bg-gradient-to-b from-wellqc-dark via-wellqc-dark to-[#080b11]",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/app-shell.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/app-shell.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/app-shell.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(AppShell, "YfYLimRIwUNeZCtpwbwoZc9XrEE=");
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/las/parser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseLASContent",
    ()=>parseLASContent
]);
function parseLASContent(content) {
    var _wellItems_STRT, _wellItems_STOP, _wellItems_STEP, _wellItems_NULL, _wellItems_STRT1, _wellItems_STOP1, _wellItems_WELL, _wellItems_NAME, _wellItems_COMP, _wellItems_FLD, _wellItems_LOC, _wellItems_CTRY, _wellItems_CNTY, _wellItems_STAT, _wellItems_API, _wellItems_UWI, _wellItems_SRVC, _wellItems_DATE, _wellItems_LATI, _wellItems_LONG, _versionItems_VERS, _versionItems_WRAP;
    const lines = content.split(/\r?\n/);
    let currentSection = null;
    const versionItems = {};
    const wellItems = {};
    const curveMetas = [];
    const headerLines = [];
    const asciiLines = [];
    for (const line of lines){
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) {
            if (currentSection !== '~A' && currentSection !== '~ASCII') {
                headerLines.push(line);
            }
            continue;
        }
        // Check for section headers (e.g. ~VERSION, ~WELL, ~CURVE, ~PARAMETER, ~ASCII)
        if (trimmed.startsWith('~')) {
            const sectionName = trimmed.split(/\s+/)[0].toUpperCase();
            if (sectionName.startsWith('~V')) currentSection = '~V';
            else if (sectionName.startsWith('~W')) currentSection = '~W';
            else if (sectionName.startsWith('~C')) currentSection = '~C';
            else if (sectionName.startsWith('~P')) currentSection = '~P';
            else if (sectionName.startsWith('~O')) currentSection = '~O';
            else if (sectionName.startsWith('~A')) currentSection = '~A';
            else currentSection = sectionName;
            if (currentSection !== '~A') headerLines.push(line);
            continue;
        }
        if (currentSection !== '~A') {
            headerLines.push(line);
        }
        // Parse header line format: MNEM.UNIT VALUE : DESCRIPTION
        if (currentSection === '~V' || currentSection === '~W') {
            const parsedItem = parseHeaderLine(trimmed);
            if (parsedItem) {
                if (currentSection === '~V') versionItems[parsedItem.mnemonic] = parsedItem;
                if (currentSection === '~W') wellItems[parsedItem.mnemonic] = parsedItem;
            }
        } else if (currentSection === '~C') {
            const parsedCurve = parseCurveHeaderLine(trimmed);
            if (parsedCurve) {
                curveMetas.push(parsedCurve);
            }
        } else if (currentSection === '~A') {
            asciiLines.push(trimmed);
        }
    }
    // Parse well parameters with safe fallbacks
    const startDepth = parseFloat(((_wellItems_STRT = wellItems['STRT']) === null || _wellItems_STRT === void 0 ? void 0 : _wellItems_STRT.value) || '0');
    const stopDepth = parseFloat(((_wellItems_STOP = wellItems['STOP']) === null || _wellItems_STOP === void 0 ? void 0 : _wellItems_STOP.value) || '0');
    const step = parseFloat(((_wellItems_STEP = wellItems['STEP']) === null || _wellItems_STEP === void 0 ? void 0 : _wellItems_STEP.value) || '0.5');
    const nullValue = parseFloat(((_wellItems_NULL = wellItems['NULL']) === null || _wellItems_NULL === void 0 ? void 0 : _wellItems_NULL.value) || '-999.25');
    const depthUnit = ((_wellItems_STRT1 = wellItems['STRT']) === null || _wellItems_STRT1 === void 0 ? void 0 : _wellItems_STRT1.unit) || ((_wellItems_STOP1 = wellItems['STOP']) === null || _wellItems_STOP1 === void 0 ? void 0 : _wellItems_STOP1.unit) || 'FT';
    const wellName = ((_wellItems_WELL = wellItems['WELL']) === null || _wellItems_WELL === void 0 ? void 0 : _wellItems_WELL.value) || ((_wellItems_NAME = wellItems['NAME']) === null || _wellItems_NAME === void 0 ? void 0 : _wellItems_NAME.value) || 'UNKNOWN_WELL';
    const company = ((_wellItems_COMP = wellItems['COMP']) === null || _wellItems_COMP === void 0 ? void 0 : _wellItems_COMP.value) || 'UNKNOWN_OPERATOR';
    const field = ((_wellItems_FLD = wellItems['FLD']) === null || _wellItems_FLD === void 0 ? void 0 : _wellItems_FLD.value) || 'UNKNOWN_FIELD';
    const location = ((_wellItems_LOC = wellItems['LOC']) === null || _wellItems_LOC === void 0 ? void 0 : _wellItems_LOC.value) || '';
    const country = ((_wellItems_CTRY = wellItems['CTRY']) === null || _wellItems_CTRY === void 0 ? void 0 : _wellItems_CTRY.value) || ((_wellItems_CNTY = wellItems['CNTY']) === null || _wellItems_CNTY === void 0 ? void 0 : _wellItems_CNTY.value) || 'USA';
    const state = ((_wellItems_STAT = wellItems['STAT']) === null || _wellItems_STAT === void 0 ? void 0 : _wellItems_STAT.value) || '';
    const apiUwi = ((_wellItems_API = wellItems['API']) === null || _wellItems_API === void 0 ? void 0 : _wellItems_API.value) || ((_wellItems_UWI = wellItems['UWI']) === null || _wellItems_UWI === void 0 ? void 0 : _wellItems_UWI.value) || "API-".concat(Math.floor(1000000000 + Math.random() * 9000000000));
    const serviceCompany = ((_wellItems_SRVC = wellItems['SRVC']) === null || _wellItems_SRVC === void 0 ? void 0 : _wellItems_SRVC.value) || 'SLB';
    const date = ((_wellItems_DATE = wellItems['DATE']) === null || _wellItems_DATE === void 0 ? void 0 : _wellItems_DATE.value) || new Date().toISOString().split('T')[0];
    const lat = parseFloat(((_wellItems_LATI = wellItems['LATI']) === null || _wellItems_LATI === void 0 ? void 0 : _wellItems_LATI.value) || '0') || undefined;
    const lon = parseFloat(((_wellItems_LONG = wellItems['LONG']) === null || _wellItems_LONG === void 0 ? void 0 : _wellItems_LONG.value) || '0') || undefined;
    // Parse Matrix ASCII Data
    const depthValues = [];
    const curvesData = {};
    curveMetas.forEach((c)=>{
        curvesData[c.mnemonic] = [];
    });
    for (const line of asciiLines){
        const tokens = line.trim().split(/\s+/).map((t)=>parseFloat(t));
        if (tokens.length >= curveMetas.length && !isNaN(tokens[0])) {
            depthValues.push(tokens[0]);
            curveMetas.forEach((c, idx)=>{
                const val = tokens[idx];
                curvesData[c.mnemonic].push(isNaN(val) ? nullValue : val);
            });
        }
    }
    return {
        version: ((_versionItems_VERS = versionItems['VERS']) === null || _versionItems_VERS === void 0 ? void 0 : _versionItems_VERS.value) || '2.0',
        wrap: (((_versionItems_WRAP = versionItems['WRAP']) === null || _versionItems_WRAP === void 0 ? void 0 : _versionItems_WRAP.value) || 'NO').toUpperCase().startsWith('Y'),
        wellInfo: {
            wellName,
            company,
            field,
            location,
            country,
            state,
            apiUwi,
            serviceCompany,
            date,
            startDepth,
            stopDepth,
            step,
            nullValue,
            depthUnit,
            latitude: lat,
            longitude: lon
        },
        curves: curveMetas,
        data: {
            depth: depthValues,
            curves: curvesData
        },
        rawHeader: headerLines.join('\n'),
        totalPoints: depthValues.length
    };
}
function parseHeaderLine(line) {
    const colonIndex = line.indexOf(':');
    const mainPart = colonIndex !== -1 ? line.substring(0, colonIndex) : line;
    const description = colonIndex !== -1 ? line.substring(colonIndex + 1).trim() : '';
    const periodIndex = mainPart.indexOf('.');
    if (periodIndex === -1) return null;
    const mnemonic = mainPart.substring(0, periodIndex).trim().toUpperCase();
    const rest = mainPart.substring(periodIndex + 1).trim();
    const firstSpaceIndex = rest.search(/\s/);
    let unit = '';
    let value = '';
    if (firstSpaceIndex !== -1) {
        unit = rest.substring(0, firstSpaceIndex).trim();
        value = rest.substring(firstSpaceIndex + 1).trim();
    } else {
        unit = rest;
    }
    return {
        mnemonic,
        unit,
        value,
        description
    };
}
function parseCurveHeaderLine(line) {
    const item = parseHeaderLine(line);
    if (!item) return null;
    return {
        mnemonic: item.mnemonic,
        unit: item.unit,
        code: item.value || item.mnemonic,
        description: item.description
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/las/standardiser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STANDARD_CURVES",
    ()=>STANDARD_CURVES,
    "standardiseMnemonic",
    ()=>standardiseMnemonic
]);
const STANDARD_CURVES = {
    DEPTH: {
        standardMnemonic: 'DEPT',
        name: 'Measured Depth',
        category: 'DEPTH',
        standardUnit: 'FT',
        acceptableUnits: [
            'FT',
            'M',
            'FEET',
            'METERS'
        ],
        aliases: [
            'DEPT',
            'DEPTH',
            'MD',
            'TVD',
            'DEPT_FT',
            'DEPT_M'
        ],
        minPhysical: 0,
        maxPhysical: 50000,
        description: 'Measured depth along borehole trajectory'
    },
    GR: {
        standardMnemonic: 'GR',
        name: 'Gamma Ray',
        category: 'GAMMA',
        standardUnit: 'GAPI',
        acceptableUnits: [
            'GAPI',
            'API',
            'EU',
            'CPS'
        ],
        aliases: [
            'GR',
            'GAMMA',
            'GRC',
            'GAM',
            'GR_CORR',
            'GRR',
            'SGR',
            'ECGR',
            'HGR'
        ],
        minPhysical: 0,
        maxPhysical: 500,
        description: 'Natural gamma ray radiation log'
    },
    RHOB: {
        standardMnemonic: 'RHOB',
        name: 'Bulk Density',
        category: 'DENSITY',
        standardUnit: 'G/CC',
        acceptableUnits: [
            'G/CC',
            'G/CM3',
            'KGM3',
            'G/C3'
        ],
        aliases: [
            'RHOB',
            'DEN',
            'RHOZ',
            'BDEN',
            'ZDEN',
            'RHO',
            'RHOB_CORR',
            'RHO8'
        ],
        minPhysical: 1.0,
        maxPhysical: 3.2,
        description: 'Formation bulk density log'
    },
    NPHI: {
        standardMnemonic: 'NPHI',
        name: 'Neutron Porosity',
        category: 'POROSITY',
        standardUnit: 'V/V',
        acceptableUnits: [
            'V/V',
            'PU',
            '%',
            'DECIMAL',
            'M3/M3'
        ],
        aliases: [
            'NPHI',
            'NEUT',
            'CNL',
            'NPOR',
            'TNPH',
            'PHIN',
            'NPHI_LS',
            'NPLC',
            'NPR'
        ],
        minPhysical: -0.05,
        maxPhysical: 0.60,
        description: 'Thermal neutron porosity log'
    },
    DT: {
        standardMnemonic: 'DT',
        name: 'Sonic Travel Time',
        category: 'SONIC',
        standardUnit: 'US/F',
        acceptableUnits: [
            'US/F',
            'US/FT',
            'US/M',
            'US/MET'
        ],
        aliases: [
            'DT',
            'DTCO',
            'AC',
            'DTC',
            'SONI',
            'DELTA_T',
            'DTC1',
            'DT35'
        ],
        minPhysical: 40,
        maxPhysical: 200,
        description: 'Compressional wave acoustic travel time'
    },
    RT: {
        standardMnemonic: 'RT',
        name: 'True Deep Resistivity',
        category: 'RESISTIVITY',
        standardUnit: 'OHMM',
        acceptableUnits: [
            'OHMM',
            'OHM.M',
            'OHM-M',
            'OHMS'
        ],
        aliases: [
            'RT',
            'ILD',
            'LLD',
            'RD',
            'RES_DEEP',
            'AT90',
            'RDEP',
            'HDRS',
            'R40O',
            'AO90'
        ],
        minPhysical: 0.05,
        maxPhysical: 5000,
        description: 'Deep un-invaded formation resistivity'
    },
    CALI: {
        standardMnemonic: 'CALI',
        name: 'Caliper',
        category: 'CALIPER',
        standardUnit: 'IN',
        acceptableUnits: [
            'IN',
            'INCH',
            'MM',
            'CM'
        ],
        aliases: [
            'CALI',
            'CAL',
            'HCAL',
            'CALS',
            'CALP',
            'BS',
            'CLP',
            'HDAR'
        ],
        minPhysical: 4.0,
        maxPhysical: 30.0,
        description: 'Borehole diameter measurement log'
    },
    PEF: {
        standardMnemonic: 'PEF',
        name: 'Photoelectric Factor',
        category: 'OTHER',
        standardUnit: 'B/E',
        acceptableUnits: [
            'B/E',
            'BARN/ELECTRON',
            'B/ELECT',
            'PE'
        ],
        aliases: [
            'PEF',
            'PE',
            'PEFZ',
            'PEFL',
            'PEF8'
        ],
        minPhysical: 0.5,
        maxPhysical: 15.0,
        description: 'Photoelectric absorption index log'
    },
    SP: {
        standardMnemonic: 'SP',
        name: 'Spontaneous Potential',
        category: 'POTENTIAL',
        standardUnit: 'MV',
        acceptableUnits: [
            'MV',
            'VOLTS',
            'MILLIVOLTS'
        ],
        aliases: [
            'SP',
            'SPC',
            'SPO',
            'SP_CORR'
        ],
        minPhysical: -250,
        maxPhysical: 250,
        description: 'Spontaneous electrical potential log'
    },
    MSFL: {
        standardMnemonic: 'MSFL',
        name: 'Micro-spherical Focused Resistivity',
        category: 'RESISTIVITY',
        standardUnit: 'OHMM',
        acceptableUnits: [
            'OHMM',
            'OHM.M'
        ],
        aliases: [
            'MSFL',
            'RXO',
            'MICRO',
            'RFOC',
            'RMFL'
        ],
        minPhysical: 0.05,
        maxPhysical: 2000,
        description: 'Flushed zone micro-resistivity'
    },
    LLS: {
        standardMnemonic: 'LLS',
        name: 'Shallow Resistivity',
        category: 'RESISTIVITY',
        standardUnit: 'OHMM',
        acceptableUnits: [
            'OHMM',
            'OHM.M'
        ],
        aliases: [
            'LLS',
            'ILM',
            'RS',
            'RES_SHAL',
            'AT20',
            'RLA2'
        ],
        minPhysical: 0.05,
        maxPhysical: 2000,
        description: 'Shallow invaded zone resistivity'
    }
};
function standardiseMnemonic(rawMnemonic) {
    let rawUnit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const cleanMnem = rawMnemonic.trim().toUpperCase();
    const cleanUnit = rawUnit.trim().toUpperCase();
    // Exact match against standard keys
    if (STANDARD_CURVES[cleanMnem]) {
        const std = STANDARD_CURVES[cleanMnem];
        return {
            originalMnemonic: rawMnemonic,
            standardMnemonic: std.standardMnemonic,
            matchedName: std.name,
            confidence: 1.0,
            isAutoMatched: true,
            standardUnit: std.standardUnit,
            unitMismatch: cleanUnit ? !std.acceptableUnits.includes(cleanUnit) : false,
            category: std.category
        };
    }
    // Alias lookup matching
    for (const [key, std] of Object.entries(STANDARD_CURVES)){
        for (const alias of std.aliases){
            if (cleanMnem === alias || cleanMnem.startsWith(alias) || alias.startsWith(cleanMnem)) {
                const confidence = cleanMnem === alias ? 0.95 : 0.82;
                return {
                    originalMnemonic: rawMnemonic,
                    standardMnemonic: std.standardMnemonic,
                    matchedName: std.name,
                    confidence,
                    isAutoMatched: true,
                    standardUnit: std.standardUnit,
                    unitMismatch: cleanUnit ? !std.acceptableUnits.includes(cleanUnit) : false,
                    category: std.category
                };
            }
        }
    }
    // Fallback match for custom curves (e.g., TEMP, ROP, TORQ, CWD)
    return {
        originalMnemonic: rawMnemonic,
        standardMnemonic: cleanMnem,
        matchedName: "Custom Curve (".concat(cleanMnem, ")"),
        confidence: 0.50,
        isAutoMatched: false,
        standardUnit: cleanUnit || 'UNKN',
        unitMismatch: false,
        category: 'OTHER'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/las/quality-engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeWellLogQuality",
    ()=>analyzeWellLogQuality
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$standardiser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/las/standardiser.ts [app-client] (ecmascript)");
;
function analyzeWellLogQuality(las) {
    const depthArray = las.data.depth;
    const nullValue = las.wellInfo.nullValue;
    const totalPoints = depthArray.length;
    const anomalies = [];
    const curveSummaries = [];
    // 1. Check Depth Sequence & Gaps
    let duplicateDepthCount = 0;
    for(let i = 1; i < depthArray.length; i++){
        const dPrev = depthArray[i - 1];
        const dCurr = depthArray[i];
        const step = dCurr - dPrev;
        if (Math.abs(step) < 0.0001) {
            duplicateDepthCount++;
            if (duplicateDepthCount <= 5) {
                anomalies.push({
                    curveMnemonic: 'DEPT',
                    depthStart: dCurr,
                    depthEnd: dCurr,
                    anomalyType: 'DUPLICATE_DEPTH',
                    severity: 'CRITICAL',
                    description: "Duplicate depth value detected at ".concat(dCurr, " ").concat(las.wellInfo.depthUnit),
                    suggestedCorrection: 'Remove duplicate depth index row.'
                });
            }
        } else if (step > Math.abs(las.wellInfo.step) * 3) {
            anomalies.push({
                curveMnemonic: 'DEPT',
                depthStart: dPrev,
                depthEnd: dCurr,
                anomalyType: 'DEPTH_GAP',
                severity: 'WARNING',
                description: "Unexplained depth gap of ".concat((dCurr - dPrev).toFixed(2), " ").concat(las.wellInfo.depthUnit, " between ").concat(dPrev, " and ").concat(dCurr),
                suggestedCorrection: 'Perform linear depth interpolation or verify raw tool telemetry log.'
            });
        }
    }
    // 2. Track Standard Curves Inventory
    const presentStandardMnemonics = new Set();
    const expectedKeyCurves = [
        'GR',
        'RHOB',
        'NPHI',
        'DT',
        'RT',
        'CALI'
    ];
    // 3. Process Each Log Curve Channel
    for (const cMeta of las.curves){
        const rawValues = las.data.curves[cMeta.mnemonic] || [];
        const stdRes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$standardiser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["standardiseMnemonic"])(cMeta.mnemonic, cMeta.unit);
        if (stdRes.standardMnemonic !== 'UNKNOWN') {
            presentStandardMnemonics.add(stdRes.standardMnemonic);
        }
        if (stdRes.unitMismatch) {
            anomalies.push({
                curveMnemonic: cMeta.mnemonic,
                depthStart: las.wellInfo.startDepth,
                depthEnd: las.wellInfo.stopDepth,
                anomalyType: 'UNIT_MISMATCH',
                severity: 'WARNING',
                description: "Curve ".concat(cMeta.mnemonic, " unit '").concat(cMeta.unit, "' does not match standard unit '").concat(stdRes.standardUnit, "'"),
                suggestedCorrection: "Convert unit from ".concat(cMeta.unit, " to ").concat(stdRes.standardUnit, ".")
            });
        }
        // Filter non-null values
        const validPoints = [];
        let nullCount = 0;
        rawValues.forEach((v, idx)=>{
            if (v === nullValue || Math.abs(v - nullValue) < 0.01 || isNaN(v)) {
                nullCount++;
            } else {
                validPoints.push({
                    depth: depthArray[idx],
                    val: v,
                    idx
                });
            }
        });
        const nullPercentage = totalPoints > 0 ? nullCount / totalPoints * 100 : 0;
        const curveAnomalies = [];
        // Calculate statistical metrics
        let minVal = null;
        let maxVal = null;
        let meanVal = null;
        if (validPoints.length > 0) {
            const vals = validPoints.map((p)=>p.val);
            minVal = Math.min(...vals);
            maxVal = Math.max(...vals);
            const sum = vals.reduce((a, b)=>a + b, 0);
            meanVal = sum / vals.length;
            // Variance & StdDev
            const variance = vals.reduce((a, b)=>a + Math.pow(b - meanVal, 2), 0) / vals.length;
            const stdDev = Math.sqrt(variance);
            const stdDef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$standardiser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_CURVES"][stdRes.standardMnemonic];
            // A. Physical Limit Checks
            if (stdDef) {
                validPoints.forEach((p)=>{
                    if (p.val < stdDef.minPhysical || p.val > stdDef.maxPhysical) {
                        if (curveAnomalies.filter((a)=>a.anomalyType === 'IMPOSSIBLE_VALUE').length < 4) {
                            curveAnomalies.push({
                                curveMnemonic: cMeta.mnemonic,
                                depthStart: p.depth,
                                depthEnd: p.depth,
                                anomalyType: 'IMPOSSIBLE_VALUE',
                                severity: 'CRITICAL',
                                description: "Physically impossible value ".concat(p.val.toFixed(2), " ").concat(cMeta.unit, " at depth ").concat(p.depth, " (expected ").concat(stdDef.minPhysical, "–").concat(stdDef.maxPhysical, ")"),
                                suggestedCorrection: "Clip value to physical limits or flag as null (".concat(nullValue, ").")
                            });
                        }
                    }
                });
            }
            // B. Spike Detection (Z-Score > 4.0 or sudden jump)
            if (stdDev > 0.001) {
                for(let i = 1; i < validPoints.length - 1; i++){
                    const pPrev = validPoints[i - 1];
                    const pCurr = validPoints[i];
                    const pNext = validPoints[i + 1];
                    const diffPrev = Math.abs(pCurr.val - pPrev.val);
                    const diffNext = Math.abs(pCurr.val - pNext.val);
                    if (diffPrev > 4.5 * stdDev && diffNext > 4.5 * stdDev) {
                        if (curveAnomalies.filter((a)=>a.anomalyType === 'EXTREME_SPIKE').length < 5) {
                            curveAnomalies.push({
                                curveMnemonic: cMeta.mnemonic,
                                depthStart: pCurr.depth,
                                depthEnd: pCurr.depth,
                                anomalyType: 'EXTREME_SPIKE',
                                severity: 'WARNING',
                                description: "Unrealistic spike value ".concat(pCurr.val.toFixed(2), " detected at depth ").concat(pCurr.depth, " ").concat(las.wellInfo.depthUnit),
                                suggestedCorrection: 'Apply median despiking filter across 5-point window.'
                            });
                        }
                    }
                }
            }
            // C. Flatline Sensor Detection (> 25 consecutive identical points)
            let flatlineLength = 1;
            let flatlineStartDepth = validPoints[0].depth;
            for(let i = 1; i < validPoints.length; i++){
                if (Math.abs(validPoints[i].val - validPoints[i - 1].val) < 0.00001) {
                    flatlineLength++;
                } else {
                    if (flatlineLength > 25) {
                        curveAnomalies.push({
                            curveMnemonic: cMeta.mnemonic,
                            depthStart: flatlineStartDepth,
                            depthEnd: validPoints[i - 1].depth,
                            anomalyType: 'FLATLINE',
                            severity: 'WARNING',
                            description: "Stuck/flatline sensor output detected over ".concat(flatlineLength, " steps (").concat(flatlineStartDepth, " to ").concat(validPoints[i - 1].depth, " ").concat(las.wellInfo.depthUnit, ")"),
                            suggestedCorrection: 'Mark flatline depth interval as unreliable sensor telemetry.'
                        });
                    }
                    flatlineLength = 1;
                    flatlineStartDepth = validPoints[i].depth;
                }
            }
        }
        // Health Score calculation for curve (100 - penalties)
        let penalty = nullPercentage * 0.5;
        curveAnomalies.forEach((a)=>{
            penalty += a.severity === 'CRITICAL' ? 15 : 8;
        });
        const healthScore = Math.max(0, Math.min(100, Math.round(100 - penalty)));
        let status = 'EXCELLENT';
        if (healthScore < 50) status = 'CRITICAL';
        else if (healthScore < 75) status = 'POOR';
        else if (healthScore < 90) status = 'GOOD';
        curveSummaries.push({
            mnemonic: cMeta.mnemonic,
            standardMnemonic: stdRes.standardMnemonic,
            unit: cMeta.unit,
            nullCount,
            totalPoints,
            nullPercentage,
            minVal,
            maxVal,
            meanVal,
            healthScore,
            status,
            anomalies: curveAnomalies
        });
        anomalies.push(...curveAnomalies);
    }
    // 4. Missing Key Standard Curves
    const missingStandardCurves = expectedKeyCurves.filter((c)=>!presentStandardMnemonics.has(c));
    // 5. Compute Aggregate Quality Scores
    const completenessScore = Math.max(0, Math.round(100 - (missingStandardCurves.length * 12 + anomalies.filter((a)=>a.anomalyType === 'NULL_CLUSTER').length * 5)));
    const avgCurveHealth = curveSummaries.length > 0 ? curveSummaries.reduce((sum, c)=>sum + c.healthScore, 0) / curveSummaries.length : 50;
    const criticalCount = anomalies.filter((a)=>a.severity === 'CRITICAL').length;
    const warningCount = anomalies.filter((a)=>a.severity === 'WARNING').length;
    const consistencyPenalty = criticalCount * 12 + warningCount * 4;
    const consistencyScore = Math.max(0, Math.round(100 - consistencyPenalty));
    const overallScore = Math.max(0, Math.min(100, Math.round(avgCurveHealth * 0.5 + completenessScore * 0.3 + consistencyScore * 0.2)));
    let qualityGrade = 'EXCELLENT';
    if (overallScore < 50) qualityGrade = 'CRITICAL';
    else if (overallScore < 75) qualityGrade = 'POOR';
    else if (overallScore < 90) qualityGrade = 'GOOD';
    return {
        overallScore,
        qualityGrade,
        completenessScore,
        consistencyScore,
        anomalyCount: anomalies.length,
        criticalCount,
        warningCount,
        curveSummaries,
        anomalies,
        missingStandardCurves
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/las/ai-analyzer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateAIAnalysis",
    ()=>generateAIAnalysis
]);
function generateAIAnalysis(las, qaResult) {
    const wellName = las.wellInfo.wellName;
    const unit = las.wellInfo.depthUnit;
    const criticalAnomalies = qaResult.anomalies.filter((a)=>a.severity === 'CRITICAL');
    const warningAnomalies = qaResult.anomalies.filter((a)=>a.severity === 'WARNING');
    const flaggedIntervals = [];
    const recommendations = [];
    // Group anomalies into interval buckets
    qaResult.anomalies.forEach((a)=>{
        flaggedIntervals.push({
            startDepth: a.depthStart,
            endDepth: a.depthEnd,
            curveMnemonic: a.curveMnemonic,
            issue: a.description,
            recommendation: a.suggestedCorrection
        });
    });
    // Construct structured AI natural language text
    let summary = "Automated petrophysical QA inspection for ".concat(wellName, " (").concat(las.wellInfo.startDepth, "–").concat(las.wellInfo.stopDepth, " ").concat(unit, "). ");
    if (qaResult.qualityGrade === 'EXCELLENT') {
        summary += "Log quality is benchmarked as EXCELLENT with an overall score of ".concat(qaResult.overallScore, "/100. High data fidelity across key petrophysical channels. ");
    } else if (qaResult.qualityGrade === 'GOOD') {
        summary += "Log quality is rated GOOD (".concat(qaResult.overallScore, "/100). Data is suitable for reservoir evaluation following minor curve standardisation and despiking. ");
    } else if (qaResult.qualityGrade === 'POOR') {
        summary += "Log quality is POOR (".concat(qaResult.overallScore, "/100). Significant anomalies detected including ").concat(criticalAnomalies.length, " critical flags and ").concat(warningAnomalies.length, " sensor warnings. ");
    } else {
        summary += "CRITICAL WARNING: Well log score is ".concat(qaResult.overallScore, "/100. Multiple physical threshold violations, severe noise, or sensor failures were detected. ");
    }
    // Highlight key curve specific anomalies
    if (criticalAnomalies.length > 0) {
        const firstCrit = criticalAnomalies[0];
        summary += "Notably, curve ".concat(firstCrit.curveMnemonic, " contains ").concat(firstCrit.description.toLowerCase(), " near ").concat(firstCrit.depthStart, " ").concat(unit, ". ");
    }
    if (qaResult.missingStandardCurves.length > 0) {
        summary += "Missing core standard curves: ".concat(qaResult.missingStandardCurves.join(', '), ". ");
        recommendations.push("Import or synthesise missing curves (".concat(qaResult.missingStandardCurves.join(', '), ") prior to porosity/water saturation calculations."));
    }
    if (criticalAnomalies.some((a)=>a.anomalyType === 'IMPOSSIBLE_VALUE')) {
        recommendations.push('Apply physical boundary clipping to density (RHOB: 1.0–3.2 g/cc) and neutron porosity (NPHI: -0.05–0.60 v/v).');
    }
    if (warningAnomalies.some((a)=>a.anomalyType === 'EXTREME_SPIKE')) {
        recommendations.push('Execute automated median filtering despiking routine on affected depth intervals before reservoir zoning.');
    }
    if (warningAnomalies.some((a)=>a.anomalyType === 'FLATLINE')) {
        recommendations.push('Review tool calibration logs for stuck sensor intervals flagged in RHOB/NPHI.');
    }
    if (recommendations.length === 0) {
        recommendations.push('Log suite is fully validated. Ready for automated petrophysical workflow ingestion.');
    }
    let riskRating = 'LOW';
    if (qaResult.overallScore < 50) riskRating = 'CRITICAL';
    else if (qaResult.overallScore < 75) riskRating = 'HIGH';
    else if (qaResult.overallScore < 90) riskRating = 'MEDIUM';
    const confidenceScore = Number((0.85 + qaResult.overallScore / 100 * 0.12).toFixed(2));
    return {
        summary,
        recommendations,
        riskRating,
        confidenceScore,
        flaggedIntervals: flaggedIntervals.slice(0, 10)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/sample-las-files.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SAMPLE_LAS_FILES",
    ()=>SAMPLE_LAS_FILES
]);
const SAMPLE_LAS_FILES = [
    {
        id: 'sample-wolfcamp',
        name: 'WOLFCAMP_PROD_01.las',
        field: 'Wolfcamp Permian',
        operator: 'ExxonMobil',
        depthRange: '10,000 - 10,200 FT',
        content: "~VERSION INFORMATION\nVERS.                      2.0 : CWLS LOG ASCII STANDARD -VERSION 2.0\nWRAP.                       NO : ONE LINE PER DEPTH STEP\n~WELL INFORMATION\nSTRT.FT                  10000.0000 : START DEPTH\nSTOP.FT                  10200.0000 : STOP DEPTH\nSTEP.FT                      0.5000 : STEP VALUE\nNULL.                     -999.2500 : NULL VALUE\nWELL.                WOLFCAMP_PROD_01 : WELL NAME\nCOMP.             EXXONMOBIL PERMIAN : COMPANY\nFLD.                  WOLFCAMP SHALE : FIELD\nLOC.                     SEC 14 T2N  : LOCATION\nCNTY.                         REEVES : COUNTY\nSTAT.                          TEXAS : STATE\nCTRY.                            USA : COUNTRY\nAPI.                  42-389-34190-00 : API NUMBER\nLATI.                     31.7500000 : LATITUDE\nLONG.                   -103.5000000 : LONGITUDE\nDATE.                     2025-04-12 : LOG DATE\n~CURVE INFORMATION\nDEPT.FT                              : 1  MEASURED DEPTH\nGR.GAPI                              : 2  GAMMA RAY\nRHOB.G/CC                            : 3  BULK DENSITY\nNPHI.V/V                             : 4  NEUTRON POROSITY\nRT.OHMM                              : 5  DEEP RESISTIVITY\nCALI.IN                              : 6  CALIPER\nDT.US/F                              : 7  SONIC TRAVEL TIME\n~PARAMETER INFORMATION\n~ASCII\n10000.0   45.2   2.55   0.14   18.5   8.50   68.2\n10000.5   46.1   2.54   0.14   19.2   8.50   67.9\n10001.0   48.3   2.56   0.13   20.1   8.48   68.5\n10001.5   52.0   2.58   0.12   22.4   8.50   69.1\n10002.0   65.4   2.50   0.18   14.2   8.52   72.0\n10002.5   78.9   2.45   0.21   11.5   8.55   75.4\n10003.0   92.1   2.40   0.24    8.9   8.60   79.8\n10003.5  105.3   2.36   0.26    6.4   8.62   83.1\n10004.0  112.0   2.34   0.28    5.2   8.65   86.0\n10004.5   98.4   2.38   0.25    7.1   8.60   81.2\n10005.0   82.1   2.44   0.21   10.8   8.55   76.0\n10005.5   64.0   2.51   0.16   15.9   8.50   71.1\n10006.0   51.2   2.55   0.14   19.5   8.48   68.0\n10006.5   47.8   2.56   0.13   21.0   8.50   67.5\n10007.0   44.2   2.57   0.12   23.5   8.50   66.8\n10007.5   43.1   2.57   0.12   24.1   8.50   66.5\n10008.0   42.8   2.58   0.11   25.0   8.50   66.0\n10008.5   45.0   2.56   0.13   22.8   8.50   67.2\n10009.0   58.2   2.48   0.19   13.5   8.52   73.4\n10009.5   88.5   2.39   0.25    7.8   8.60   80.5\n10010.0  125.4   2.32   0.31    3.9   8.70   92.0\n10010.5  142.1   0.85   0.45    2.1   9.10  105.0\n10011.0  135.0   2.30   0.33    3.1   8.80   94.5\n10011.5   95.2   2.42   0.22    9.1   8.58   78.2\n10012.0   62.1   2.52   0.15   16.8   8.50   70.1\n10012.5   48.5   2.55   0.13   20.5   8.49   67.8\n10013.0   46.0   2.56   0.12   22.0   8.50   67.0\n"
    },
    {
        id: 'sample-gom',
        name: 'MISSISSIPPI_CANYON_block544.las',
        field: 'Mississippi Canyon GOM',
        operator: 'Shell Offshore',
        depthRange: '18,500 - 18,700 FT',
        content: "~VERSION INFORMATION\nVERS.                      2.0 : CWLS LOG ASCII STANDARD -VERSION 2.0\nWRAP.                       NO : ONE LINE PER DEPTH STEP\n~WELL INFORMATION\nSTRT.FT                  18500.0000 : START DEPTH\nSTOP.FT                  18700.0000 : STOP DEPTH\nSTEP.FT                      0.5000 : STEP VALUE\nNULL.                     -999.2500 : NULL VALUE\nWELL.       MISSISSIPPI_CANYON_block544 : WELL NAME\nCOMP.                   SHELL OFFSHORE : COMPANY\nFLD.                MISSISSIPPI CANYON : FIELD\nLOC.                     BLOCK 544     : LOCATION\nCTRY.                            USA : COUNTRY\nAPI.                  60-812-90123-00 : API NUMBER\nLATI.                     28.2100000 : LATITUDE\nLONG.                    -89.4200000 : LONGITUDE\nDATE.                     2025-06-01 : LOG DATE\n~CURVE INFORMATION\nDEPT.FT                              : 1  MEASURED DEPTH\nGAMMA.GAPI                           : 2  GAMMA RAY\nDEN.G/CC                             : 3  BULK DENSITY\nCNL.V/V                              : 4  NEUTRON POROSITY\nILD.OHMM                             : 5  DEEP RESISTIVITY\nCAL.IN                               : 6  CALIPER\n~ASCII\n18500.0   38.5   2.60   0.09   45.0   8.40\n18500.5   39.1   2.60   0.09   46.2   8.40\n18501.0   40.2   2.59   0.10   44.8   8.40\n18501.5   55.4   2.52   0.16   18.5   8.42\n18502.0   82.1   2.43   0.22    8.2   8.50\n18502.5  110.5   2.35   0.29    3.5   8.65\n18503.0  128.0   2.31   0.34    2.1   8.80\n18503.5  134.2   2.29   0.36    1.8   8.90\n18504.0  118.5   2.33   0.31    2.9   8.75\n18504.5   89.0   2.41   0.23    7.4   8.55\n18505.0   58.2   2.51   0.15   17.2   8.42\n18505.5   42.1   2.58   0.10   38.0   8.40\n"
    },
    {
        id: 'sample-forties',
        name: 'FORTIES_ALPHA_09.las',
        field: 'Forties Field',
        operator: 'Chevron',
        depthRange: '3,200 - 3,400 M',
        content: "~VERSION INFORMATION\nVERS.                      2.0 : CWLS LOG ASCII STANDARD -VERSION 2.0\nWRAP.                       NO : ONE LINE PER DEPTH STEP\n~WELL INFORMATION\nSTRT.M                    3200.0000 : START DEPTH\nSTOP.M                    3400.0000 : STOP DEPTH\nSTEP.M                       0.1524 : STEP VALUE\nNULL.                     -999.2500 : NULL VALUE\nWELL.                 FORTIES_ALPHA_09 : WELL NAME\nCOMP.                    CHEVRON UK : COMPANY\nFLD.                   FORTIES FIELD : FIELD\nCTRY.                             UK : COUNTRY\nAPI.                  UK-21-04A-09    : API NUMBER\nLATI.                     57.7500000 : LATITUDE\nLONG.                      0.9500000 : LONGITUDE\nDATE.                     2025-02-18 : LOG DATE\n~CURVE INFORMATION\nDEPT.M                               : 1  MEASURED DEPTH\nGRC.GAPI                             : 2  GAMMA RAY\nZDEN.G/CC                            : 3  BULK DENSITY\nTNPH.V/V                             : 4  NEUTRON POROSITY\nRD.OHMM                              : 5  DEEP RESISTIVITY\nHCAL.IN                              : 6  CALIPER\nAC.US/M                              : 7  SONIC TRAVEL TIME\n~ASCII\n3200.0000   52.1   2.51   0.16   14.2   8.45  220.5\n3200.1524   53.5   2.50   0.17   13.8   8.45  222.0\n3200.3048   68.2   2.44   0.21    9.5   8.50  235.1\n3200.4572   95.4   2.37   0.27    4.8   8.62  255.4\n3200.6096  118.0   2.32   0.33    2.4   8.75  278.0\n"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/well-log/log-viewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WellLogViewer",
    ()=>WellLogViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function WellLogViewer(param) {
    let { wellName, depthUnit, startDepth, stopDepth, curvesData, anomalies = [] } = param;
    _s();
    const [zoomLevel, setZoomLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedTrack, setSelectedTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    // Transform depth array and curves into chart rows
    const depthArr = curvesData.depth || [];
    const chartData = depthArr.map((d, idx)=>{
        const row = {
            depth: d
        };
        for (const [key, arr] of Object.entries(curvesData.curves)){
            const val = arr[idx];
            row[key] = val === -999.25 || isNaN(val) ? null : val;
        }
        return row;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-wellqc-panel border border-wellqc-border rounded-xl p-5 shadow-2xl space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-wellqc-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-white font-mono",
                                        children: [
                                            wellName,
                                            " — Multi-Track Petrophysical Viewer"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-wellqc-muted font-mono mt-0.5",
                                children: [
                                    "Depth Interval: ",
                                    startDepth,
                                    " – ",
                                    stopDepth,
                                    " ",
                                    depthUnit,
                                    " | Sample Count: ",
                                    depthArr.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-wellqc-card border border-wellqc-border rounded-lg p-1 text-xs font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedTrack("ALL"),
                                        className: "px-2.5 py-1 rounded-md transition-colors ".concat(selectedTrack === "ALL" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-white"),
                                        children: "All Tracks"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedTrack("GAMMA"),
                                        className: "px-2.5 py-1 rounded-md transition-colors ".concat(selectedTrack === "GAMMA" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-white"),
                                        children: "Track 1 (GR)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedTrack("RESISTIVITY"),
                                        className: "px-2.5 py-1 rounded-md transition-colors ".concat(selectedTrack === "RESISTIVITY" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-white"),
                                        children: "Track 2 (Resistivity)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedTrack("POROSITY"),
                                        className: "px-2.5 py-1 rounded-md transition-colors ".concat(selectedTrack === "POROSITY" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-white"),
                                        children: "Track 3 (RHOB/NPHI)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-1 bg-wellqc-card border border-wellqc-border rounded-lg p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setZoomLevel((z)=>Math.min(z + 0.25, 2.5)),
                                        className: "p-1.5 text-slate-300 hover:text-cyan-400 transition-colors",
                                        title: "Zoom In",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setZoomLevel((z)=>Math.max(z - 0.25, 0.5)),
                                        className: "p-1.5 text-slate-300 hover:text-cyan-400 transition-colors",
                                        title: "Zoom Out",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setZoomLevel(1),
                                        className: "p-1.5 text-slate-300 hover:text-cyan-400 transition-colors",
                                        title: "Reset Zoom",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                style: {
                    transform: "scaleY(".concat(zoomLevel, ")"),
                    transformOrigin: 'top center'
                },
                children: [
                    (selectedTrack === "ALL" || selectedTrack === "GAMMA") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-wellqc-card/60 border border-wellqc-border rounded-xl p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-2 border-b border-wellqc-border mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-emerald-400 font-mono",
                                        children: "TRACK 1: GR / SP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-slate-400",
                                        children: "0 – 150 GAPI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-80 w-full log-track-grid rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                        data: chartData,
                                        margin: {
                                            top: 10,
                                            right: 10,
                                            left: 10,
                                            bottom: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                stroke: "#233252"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "depth",
                                                stroke: "#94a3b8",
                                                tick: {
                                                    fontSize: 10
                                                },
                                                label: {
                                                    value: "Depth (".concat(depthUnit, ")"),
                                                    position: 'insideBottom',
                                                    offset: -5,
                                                    fill: '#94a3b8',
                                                    fontSize: 10
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                stroke: "#94a3b8",
                                                tick: {
                                                    fontSize: 10
                                                },
                                                domain: [
                                                    0,
                                                    150
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    backgroundColor: "#131b2e",
                                                    borderColor: "#233252",
                                                    fontSize: "11px",
                                                    color: "#fff"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                                type: "monotone",
                                                dataKey: "GR",
                                                stroke: "#10b981",
                                                fill: "rgba(16, 185, 129, 0.15)",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    (selectedTrack === "ALL" || selectedTrack === "RESISTIVITY") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-wellqc-card/60 border border-wellqc-border rounded-xl p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-2 border-b border-wellqc-border mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-cyan-400 font-mono",
                                        children: "TRACK 2: RESISTIVITY (RT)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-slate-400",
                                        children: "0.1 – 200 OHMM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-80 w-full log-track-grid rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                        data: chartData,
                                        margin: {
                                            top: 10,
                                            right: 10,
                                            left: 10,
                                            bottom: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                stroke: "#233252"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "depth",
                                                stroke: "#94a3b8",
                                                tick: {
                                                    fontSize: 10
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                stroke: "#94a3b8",
                                                tick: {
                                                    fontSize: 10
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    backgroundColor: "#131b2e",
                                                    borderColor: "#233252",
                                                    fontSize: "11px",
                                                    color: "#fff"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "RT",
                                                stroke: "#06b6d4",
                                                strokeWidth: 2,
                                                dot: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "ILD",
                                                stroke: "#3b82f6",
                                                strokeWidth: 1.5,
                                                strokeDasharray: "4 4",
                                                dot: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    (selectedTrack === "ALL" || selectedTrack === "POROSITY") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-wellqc-card/60 border border-wellqc-border rounded-xl p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-2 border-b border-wellqc-border mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-amber-400 font-mono",
                                        children: "TRACK 3: DENSITY / POROSITY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-slate-400",
                                        children: "RHOB (g/cc) vs NPHI (v/v)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-80 w-full log-track-grid rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                        data: chartData,
                                        margin: {
                                            top: 10,
                                            right: 10,
                                            left: 10,
                                            bottom: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                stroke: "#233252"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "depth",
                                                stroke: "#94a3b8",
                                                tick: {
                                                    fontSize: 10
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                stroke: "#94a3b8",
                                                tick: {
                                                    fontSize: 10
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    backgroundColor: "#131b2e",
                                                    borderColor: "#233252",
                                                    fontSize: "11px",
                                                    color: "#fff"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "RHOB",
                                                stroke: "#ef4444",
                                                strokeWidth: 2,
                                                dot: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "NPHI",
                                                stroke: "#f59e0b",
                                                strokeWidth: 2,
                                                strokeDasharray: "3 3",
                                                dot: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            anomalies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-wellqc-dark/80 border border-amber-500/30 rounded-xl space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 text-xs font-bold text-amber-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-4 h-4 text-amber-400 animate-bounce"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Flagged Anomaly Depth Intervals (",
                                            anomalies.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-slate-400",
                                children: "Automated QA Markers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 pt-1",
                        children: anomalies.map((an, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2.5 py-1 rounded-md bg-wellqc-panel border border-wellqc-border text-[11px] font-mono flex items-center space-x-2 text-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full ".concat(an.severity === 'CRITICAL' ? 'bg-red-500' : 'bg-amber-400')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-cyan-300",
                                        children: an.curveMnemonic
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "@",
                                            an.depthStart,
                                            " ",
                                            depthUnit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: [
                                            "(",
                                            an.anomalyType,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/well-log/log-viewer.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/well-log/log-viewer.tsx",
                lineNumber: 210,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/well-log/log-viewer.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(WellLogViewer, "drUOVEhIL71lqJ+plNhbkkFnuKc=");
_c = WellLogViewer;
var _c;
__turbopack_context__.k.register(_c, "WellLogViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/upload/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LASUploadPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$app$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/app-shell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/las/parser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$quality$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/las/quality-engine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$ai$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/las/ai-analyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$standardiser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/las/standardiser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$las$2d$files$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-las-files.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$well$2d$log$2f$log$2d$viewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/well-log/log-viewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function LASUploadPage() {
    _s();
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rawText, setRawText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [parsedLAS, setParsedLAS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [qaResult, setQaResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aiOutput, setAiOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedSuccess, setSavedSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const processFileContent = (content, name)=>{
        setIsProcessing(true);
        setSavedSuccess(false);
        try {
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$parser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseLASContent"])(content);
            const qa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$quality$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeWellLogQuality"])(parsed);
            const ai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$ai$2d$analyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAIAnalysis"])(parsed, qa);
            setRawText(content);
            setFileName(name);
            setParsedLAS(parsed);
            setQaResult(qa);
            setAiOutput(ai);
        } catch (err) {
            console.error("LAS Parsing Error:", err);
        } finally{
            setIsProcessing(false);
        }
    };
    const handleFileUpload = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt)=>{
            var _evt_target;
            const text = (_evt_target = evt.target) === null || _evt_target === void 0 ? void 0 : _evt_target.result;
            processFileContent(text, file.name);
        };
        reader.readAsText(file);
    };
    const handleSampleClick = (sample)=>{
        processFileContent(sample.content, sample.name);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$app$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center justify-between gap-4 bg-wellqc-panel/60 border border-wellqc-border p-5 rounded-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40",
                                        children: "Module 03 — Ingestion & QA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/upload/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-black text-white tracking-tight mt-1",
                                    children: "LAS File Upload & Quality Ingestion Workspace"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-wellqc-muted font-mono mt-0.5",
                                    children: "Drag & drop raw LAS 2.0 / 3.0 well log files for real-time header extraction, curve standardisation, and AI anomaly detection."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 bg-wellqc-card border border-wellqc-border p-2 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-mono text-slate-400 font-bold px-2",
                                    children: "Load Sample:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$las$2d$files$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_LAS_FILES"].map((sample)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSampleClick(sample),
                                        className: "px-3 py-1.5 rounded-lg bg-wellqc-panel hover:bg-cyan-500/20 border border-wellqc-border hover:border-cyan-500/50 text-xs font-mono text-cyan-300 font-semibold transition-all",
                                        children: sample.name.split('.')[0]
                                    }, sample.id, false, {
                                        fileName: "[project]/src/app/upload/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/upload/page.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onDragOver: (e)=>{
                        e.preventDefault();
                        setDragActive(true);
                    },
                    onDragLeave: ()=>setDragActive(false),
                    onDrop: (e)=>{
                        var _e_dataTransfer_files;
                        e.preventDefault();
                        setDragActive(false);
                        const file = (_e_dataTransfer_files = e.dataTransfer.files) === null || _e_dataTransfer_files === void 0 ? void 0 : _e_dataTransfer_files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = (evt)=>{
                                var _evt_target;
                                const text = (_evt_target = evt.target) === null || _evt_target === void 0 ? void 0 : _evt_target.result;
                                processFileContent(text, file.name);
                            };
                            reader.readAsText(file);
                        }
                    },
                    className: "border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ".concat(dragActive ? "border-cyan-400 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20" : "border-wellqc-border hover:border-cyan-500/40 bg-wellqc-panel/40"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".las,.txt",
                            onChange: handleFileUpload,
                            className: "hidden",
                            id: "las-file-input"
                        }, void 0, false, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "las-file-input",
                            className: "cursor-pointer block space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/upload/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-bold text-white",
                                            children: "Drag and drop your raw LAS file here"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-wellqc-muted font-mono mt-1",
                                            children: "Supports LAS 2.0 & 3.0 ASCII well log files (.las, .txt up to 20MB)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/upload/page.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-wellqc-panel border border-cyan-500/40 rounded-2xl text-center space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "w-8 h-8 text-cyan-400 animate-spin mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-bold text-white font-mono",
                            children: "Extracting LAS Headers & Executing Petrophysical QA Rules..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/upload/page.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this),
                parsedLAS && qaResult && aiOutput && !isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-wellqc-panel border border-wellqc-border rounded-2xl p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-black text-white font-mono",
                                                    children: parsedLAS.wellInfo.wellName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2.5 py-0.5 rounded text-xs font-mono font-bold ".concat(qaResult.qualityGrade === 'EXCELLENT' ? 'badge-excellent' : qaResult.qualityGrade === 'GOOD' ? 'badge-good' : qaResult.qualityGrade === 'POOR' ? 'badge-poor' : 'badge-critical'),
                                                    children: [
                                                        qaResult.qualityGrade,
                                                        " QUALITY"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-300 font-mono",
                                            children: [
                                                "Company: ",
                                                parsedLAS.wellInfo.company,
                                                " | Field: ",
                                                parsedLAS.wellInfo.field,
                                                " | API: ",
                                                parsedLAS.wellInfo.apiUwi
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-wellqc-muted font-mono",
                                            children: [
                                                "Depth Interval: ",
                                                parsedLAS.wellInfo.startDepth,
                                                " – ",
                                                parsedLAS.wellInfo.stopDepth,
                                                " ",
                                                parsedLAS.wellInfo.depthUnit,
                                                " (Step: ",
                                                parsedLAS.wellInfo.step,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-4 bg-wellqc-card border border-wellqc-border rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-mono uppercase text-wellqc-muted",
                                            children: "Well Quality Score"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl font-black font-mono mt-1 ".concat(qaResult.overallScore >= 90 ? 'text-emerald-400' : qaResult.overallScore >= 75 ? 'text-cyan-400' : qaResult.overallScore >= 50 ? 'text-amber-400' : 'text-red-400'),
                                            children: [
                                                qaResult.overallScore,
                                                " / 100"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSavedSuccess(true),
                                        disabled: savedSuccess,
                                        className: "w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/upload/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: savedSuccess ? "Saved to Database ✓" : "Commit Well to Database"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/upload/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/upload/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 bg-gradient-to-r from-wellqc-panel via-wellqc-card to-wellqc-panel border border-cyan-500/30 rounded-2xl space-y-3 shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2 text-sm font-bold text-cyan-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5 text-cyan-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "AI Automated Petrophysical Interpretation & Recommendations"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-200 leading-relaxed font-mono bg-wellqc-dark/50 p-3 rounded-xl border border-wellqc-border",
                                    children: aiOutput.summary
                                }, void 0, false, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-mono text-wellqc-muted uppercase font-bold",
                                            children: "Recommended Actions:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc list-inside text-xs text-slate-300 space-y-1 font-mono",
                                            children: aiOutput.recommendations.map((rec, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: rec
                                                }, i, false, {
                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$well$2d$log$2f$log$2d$viewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WellLogViewer"], {
                            wellName: parsedLAS.wellInfo.wellName,
                            depthUnit: parsedLAS.wellInfo.depthUnit,
                            startDepth: parsedLAS.wellInfo.startDepth,
                            stopDepth: parsedLAS.wellInfo.stopDepth,
                            curvesData: parsedLAS.data,
                            anomalies: qaResult.anomalies
                        }, void 0, false, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-wellqc-panel border border-wellqc-border rounded-2xl p-5 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between pb-3 border-b border-wellqc-border",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    className: "w-4 h-4 text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-bold text-white",
                                                    children: "Curve Standardisation & Quality Inventory"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400 font-mono",
                                            children: [
                                                qaResult.curveSummaries.length,
                                                " Channels Detected"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/upload/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left text-xs font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-wellqc-card border-b border-wellqc-border text-slate-400 uppercase text-[10px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Raw Mnemonic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/upload/page.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Standard Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/upload/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Unit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/upload/page.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Null %"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/upload/page.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Range (Min – Max)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/upload/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Health Score"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/upload/page.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3",
                                                            children: "Anomalies"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/upload/page.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/upload/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-wellqc-border text-slate-200",
                                                children: qaResult.curveSummaries.map((c, i)=>{
                                                    var _c_maxVal;
                                                    const std = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$las$2f$standardiser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["standardiseMnemonic"])(c.mnemonic, c.unit);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-wellqc-card/50 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 font-bold text-white",
                                                                children: c.mnemonic
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/upload/page.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 text-cyan-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30",
                                                                    children: [
                                                                        std.standardMnemonic,
                                                                        " (",
                                                                        std.matchedName,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/upload/page.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 text-slate-400",
                                                                children: c.unit || "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/upload/page.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: [
                                                                    c.nullPercentage.toFixed(1),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/upload/page.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: c.minVal !== null ? "".concat(c.minVal.toFixed(2), " – ").concat((_c_maxVal = c.maxVal) === null || _c_maxVal === void 0 ? void 0 : _c_maxVal.toFixed(2)) : "All Null"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/upload/page.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 font-bold",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: c.healthScore >= 90 ? 'text-emerald-400' : c.healthScore >= 75 ? 'text-cyan-400' : 'text-amber-400',
                                                                    children: [
                                                                        c.healthScore,
                                                                        "/100"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/upload/page.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: c.anomalies.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px]",
                                                                    children: [
                                                                        c.anomalies.length,
                                                                        " Flags"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-400 text-[10px]",
                                                                    children: "Clean ✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/upload/page.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/upload/page.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/app/upload/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/upload/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/upload/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/upload/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/upload/page.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/upload/page.tsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/upload/page.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/upload/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(LASUploadPage, "0CC5V5+EbF+GU3HTz0YiNo9S2Jk=");
_c = LASUploadPage;
var _c;
__turbopack_context__.k.register(_c, "LASUploadPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d84d996e._.js.map