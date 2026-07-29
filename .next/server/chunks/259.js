"use strict";exports.id=259,exports.ids=[259],exports.modules={6382:(a,b,c)=>{function d(a){let b=a.split(/\r?\n/),c=null,d={},f={},g=[],h=[],i=[];for(let a of b){let b=a.trim();if(!b||b.startsWith("#")){"~A"!==c&&"~ASCII"!==c&&h.push(a);continue}if(b.startsWith("~")){let d=b.split(/\s+/)[0].toUpperCase();"~A"!==(c=d.startsWith("~V")?"~V":d.startsWith("~W")?"~W":d.startsWith("~C")?"~C":d.startsWith("~P")?"~P":d.startsWith("~O")?"~O":d.startsWith("~A")?"~A":d)&&h.push(a);continue}if("~A"!==c&&h.push(a),"~V"===c||"~W"===c){let a=e(b);a&&("~V"===c&&(d[a.mnemonic]=a),"~W"===c&&(f[a.mnemonic]=a))}else if("~C"===c){let a=function(a){let b=e(a);return b?{mnemonic:b.mnemonic,unit:b.unit,code:b.value||b.mnemonic,description:b.description}:null}(b);a&&g.push(a)}else"~A"===c&&i.push(b)}let j=parseFloat(f.STRT?.value||"0"),k=parseFloat(f.STOP?.value||"0"),l=parseFloat(f.STEP?.value||"0.5"),m=parseFloat(f.NULL?.value||"-999.25"),n=f.STRT?.unit||f.STOP?.unit||"FT",o=f.WELL?.value||f.NAME?.value||"UNKNOWN_WELL",p=f.COMP?.value||"UNKNOWN_OPERATOR",q=f.FLD?.value||"UNKNOWN_FIELD",r=f.LOC?.value||"",s=f.CTRY?.value||f.CNTY?.value||"USA",t=f.STAT?.value||"",u=f.API?.value||f.UWI?.value||`API-${Math.floor(1e9+9e9*Math.random())}`,v=f.SRVC?.value||"SLB",w=f.DATE?.value||new Date().toISOString().split("T")[0],x=parseFloat(f.LATI?.value||"0")||void 0,y=parseFloat(f.LONG?.value||"0")||void 0,z=[],A={};for(let a of(g.forEach(a=>{A[a.mnemonic]=[]}),i)){let b=a.trim().split(/\s+/).map(a=>parseFloat(a));b.length>=g.length&&!isNaN(b[0])&&(z.push(b[0]),g.forEach((a,c)=>{let d=b[c];A[a.mnemonic].push(isNaN(d)?m:d)}))}return{version:d.VERS?.value||"2.0",wrap:(d.WRAP?.value||"NO").toUpperCase().startsWith("Y"),wellInfo:{wellName:o,company:p,field:q,location:r,country:s,state:t,apiUwi:u,serviceCompany:v,date:w,startDepth:j,stopDepth:k,step:l,nullValue:m,depthUnit:n,latitude:x,longitude:y},curves:g,data:{depth:z,curves:A},rawHeader:h.join("\n"),totalPoints:z.length}}function e(a){let b=a.indexOf(":"),c=-1!==b?a.substring(0,b):a,d=-1!==b?a.substring(b+1).trim():"",e=c.indexOf(".");if(-1===e)return null;let f=c.substring(0,e).trim().toUpperCase(),g=c.substring(e+1).trim(),h=g.search(/\s/),i="",j="";return -1!==h?(i=g.substring(0,h).trim(),j=g.substring(h+1).trim()):i=g,{mnemonic:f,unit:i,value:j,description:d}}c.d(b,{h:()=>d})},66679:(a,b,c)=>{c.d(b,{B:()=>e,X:()=>d});let d={DEPTH:{standardMnemonic:"DEPT",name:"Measured Depth",category:"DEPTH",standardUnit:"FT",acceptableUnits:["FT","M","FEET","METERS"],aliases:["DEPT","DEPTH","MD","TVD","DEPT_FT","DEPT_M"],minPhysical:0,maxPhysical:5e4,description:"Measured depth along borehole trajectory"},GR:{standardMnemonic:"GR",name:"Gamma Ray",category:"GAMMA",standardUnit:"GAPI",acceptableUnits:["GAPI","API","EU","CPS"],aliases:["GR","GAMMA","GRC","GAM","GR_CORR","GRR","SGR","ECGR","HGR"],minPhysical:0,maxPhysical:500,description:"Natural gamma ray radiation log"},RHOB:{standardMnemonic:"RHOB",name:"Bulk Density",category:"DENSITY",standardUnit:"G/CC",acceptableUnits:["G/CC","G/CM3","KGM3","G/C3"],aliases:["RHOB","DEN","RHOZ","BDEN","ZDEN","RHO","RHOB_CORR","RHO8"],minPhysical:1,maxPhysical:3.2,description:"Formation bulk density log"},NPHI:{standardMnemonic:"NPHI",name:"Neutron Porosity",category:"POROSITY",standardUnit:"V/V",acceptableUnits:["V/V","PU","%","DECIMAL","M3/M3"],aliases:["NPHI","NEUT","CNL","NPOR","TNPH","PHIN","NPHI_LS","NPLC","NPR"],minPhysical:-.05,maxPhysical:.6,description:"Thermal neutron porosity log"},DT:{standardMnemonic:"DT",name:"Sonic Travel Time",category:"SONIC",standardUnit:"US/F",acceptableUnits:["US/F","US/FT","US/M","US/MET"],aliases:["DT","DTCO","AC","DTC","SONI","DELTA_T","DTC1","DT35"],minPhysical:40,maxPhysical:200,description:"Compressional wave acoustic travel time"},RT:{standardMnemonic:"RT",name:"True Deep Resistivity",category:"RESISTIVITY",standardUnit:"OHMM",acceptableUnits:["OHMM","OHM.M","OHM-M","OHMS"],aliases:["RT","ILD","LLD","RD","RES_DEEP","AT90","RDEP","HDRS","R40O","AO90"],minPhysical:.05,maxPhysical:5e3,description:"Deep un-invaded formation resistivity"},CALI:{standardMnemonic:"CALI",name:"Caliper",category:"CALIPER",standardUnit:"IN",acceptableUnits:["IN","INCH","MM","CM"],aliases:["CALI","CAL","HCAL","CALS","CALP","BS","CLP","HDAR"],minPhysical:4,maxPhysical:30,description:"Borehole diameter measurement log"},PEF:{standardMnemonic:"PEF",name:"Photoelectric Factor",category:"OTHER",standardUnit:"B/E",acceptableUnits:["B/E","BARN/ELECTRON","B/ELECT","PE"],aliases:["PEF","PE","PEFZ","PEFL","PEF8"],minPhysical:.5,maxPhysical:15,description:"Photoelectric absorption index log"},SP:{standardMnemonic:"SP",name:"Spontaneous Potential",category:"POTENTIAL",standardUnit:"MV",acceptableUnits:["MV","VOLTS","MILLIVOLTS"],aliases:["SP","SPC","SPO","SP_CORR"],minPhysical:-250,maxPhysical:250,description:"Spontaneous electrical potential log"},MSFL:{standardMnemonic:"MSFL",name:"Micro-spherical Focused Resistivity",category:"RESISTIVITY",standardUnit:"OHMM",acceptableUnits:["OHMM","OHM.M"],aliases:["MSFL","RXO","MICRO","RFOC","RMFL"],minPhysical:.05,maxPhysical:2e3,description:"Flushed zone micro-resistivity"},LLS:{standardMnemonic:"LLS",name:"Shallow Resistivity",category:"RESISTIVITY",standardUnit:"OHMM",acceptableUnits:["OHMM","OHM.M"],aliases:["LLS","ILM","RS","RES_SHAL","AT20","RLA2"],minPhysical:.05,maxPhysical:2e3,description:"Shallow invaded zone resistivity"}};function e(a,b=""){let c=a.trim().toUpperCase(),f=b.trim().toUpperCase();if(d[c]){let b=d[c];return{originalMnemonic:a,standardMnemonic:b.standardMnemonic,matchedName:b.name,confidence:1,isAutoMatched:!0,standardUnit:b.standardUnit,unitMismatch:!!f&&!b.acceptableUnits.includes(f),category:b.category}}for(let[b,e]of Object.entries(d))for(let b of e.aliases)if(c===b||c.startsWith(b)||b.startsWith(c)){let d=c===b?.95:.82;return{originalMnemonic:a,standardMnemonic:e.standardMnemonic,matchedName:e.name,confidence:d,isAutoMatched:!0,standardUnit:e.standardUnit,unitMismatch:!!f&&!e.acceptableUnits.includes(f),category:e.category}}return{originalMnemonic:a,standardMnemonic:c,matchedName:`Custom Curve (${c})`,confidence:.5,isAutoMatched:!1,standardUnit:f||"UNKN",unitMismatch:!1,category:"OTHER"}}},83496:(a,b,c)=>{c.d(b,{V:()=>r});var d=c(21124),e=c(38301),f=c(6077),g=c(18234),h=c(57495),i=c(59296),j=c(16803),k=c(11767),l=c(57188),m=c(83043),n=c(33872),o=c(31851),p=c(9212),q=c(16945);function r({wellName:a,depthUnit:b,startDepth:c,stopDepth:r,curvesData:s,anomalies:t=[]}){let[u,v]=(0,e.useState)(1),[w,x]=(0,e.useState)("ALL"),y=s.depth||[],z=y.map((a,b)=>{let c={depth:a};for(let[a,d]of Object.entries(s.curves)){let e=d[b];c[a]=-999.25===e||isNaN(e)?null:e}return c});return(0,d.jsxs)("div",{className:"bg-wellqc-panel border border-wellqc-border rounded-xl p-5 shadow-2xl space-y-4",children:[(0,d.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-wellqc-border",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,d.jsx)("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"}),(0,d.jsxs)("h3",{className:"text-base font-bold text-white font-mono",children:[a," — Multi-Track Petrophysical Viewer"]})]}),(0,d.jsxs)("p",{className:"text-xs text-wellqc-muted font-mono mt-0.5",children:["Depth Interval: ",c," – ",r," ",b," | Sample Count: ",y.length]})]}),(0,d.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,d.jsxs)("div",{className:"flex items-center bg-wellqc-card border border-wellqc-border rounded-lg p-1 text-xs font-mono",children:[(0,d.jsx)("button",{onClick:()=>x("ALL"),className:`px-2.5 py-1 rounded-md transition-colors ${"ALL"===w?"bg-cyan-500/20 text-cyan-300 font-bold":"text-slate-400 hover:text-white"}`,children:"All Tracks"}),(0,d.jsx)("button",{onClick:()=>x("GAMMA"),className:`px-2.5 py-1 rounded-md transition-colors ${"GAMMA"===w?"bg-cyan-500/20 text-cyan-300 font-bold":"text-slate-400 hover:text-white"}`,children:"Track 1 (GR)"}),(0,d.jsx)("button",{onClick:()=>x("RESISTIVITY"),className:`px-2.5 py-1 rounded-md transition-colors ${"RESISTIVITY"===w?"bg-cyan-500/20 text-cyan-300 font-bold":"text-slate-400 hover:text-white"}`,children:"Track 2 (Resistivity)"}),(0,d.jsx)("button",{onClick:()=>x("POROSITY"),className:`px-2.5 py-1 rounded-md transition-colors ${"POROSITY"===w?"bg-cyan-500/20 text-cyan-300 font-bold":"text-slate-400 hover:text-white"}`,children:"Track 3 (RHOB/NPHI)"})]}),(0,d.jsxs)("div",{className:"flex items-center space-x-1 bg-wellqc-card border border-wellqc-border rounded-lg p-1",children:[(0,d.jsx)("button",{onClick:()=>v(a=>Math.min(a+.25,2.5)),className:"p-1.5 text-slate-300 hover:text-cyan-400 transition-colors",title:"Zoom In",children:(0,d.jsx)(n.A,{className:"w-4 h-4"})}),(0,d.jsx)("button",{onClick:()=>v(a=>Math.max(a-.25,.5)),className:"p-1.5 text-slate-300 hover:text-cyan-400 transition-colors",title:"Zoom Out",children:(0,d.jsx)(o.A,{className:"w-4 h-4"})}),(0,d.jsx)("button",{onClick:()=>v(1),className:"p-1.5 text-slate-300 hover:text-cyan-400 transition-colors",title:"Reset Zoom",children:(0,d.jsx)(p.A,{className:"w-4 h-4"})})]})]})]}),(0,d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",style:{transform:`scaleY(${u})`,transformOrigin:"top center"},children:[("ALL"===w||"GAMMA"===w)&&(0,d.jsxs)("div",{className:"bg-wellqc-card/60 border border-wellqc-border rounded-xl p-3",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between pb-2 border-b border-wellqc-border mb-2",children:[(0,d.jsx)("span",{className:"text-xs font-bold text-emerald-400 font-mono",children:"TRACK 1: GR / SP"}),(0,d.jsx)("span",{className:"text-[10px] font-mono text-slate-400",children:"0 – 150 GAPI"})]}),(0,d.jsx)("div",{className:"h-80 w-full log-track-grid rounded-lg",children:(0,d.jsx)(f.u,{width:"100%",height:"100%",children:(0,d.jsxs)(g.X,{data:z,margin:{top:10,right:10,left:10,bottom:10},children:[(0,d.jsx)(h.d,{strokeDasharray:"3 3",stroke:"#233252"}),(0,d.jsx)(i.W,{dataKey:"depth",stroke:"#94a3b8",tick:{fontSize:10},label:{value:`Depth (${b})`,position:"insideBottom",offset:-5,fill:"#94a3b8",fontSize:10}}),(0,d.jsx)(j.h,{stroke:"#94a3b8",tick:{fontSize:10},domain:[0,150]}),(0,d.jsx)(k.m,{contentStyle:{backgroundColor:"#131b2e",borderColor:"#233252",fontSize:"11px",color:"#fff"}}),(0,d.jsx)(l.G,{type:"monotone",dataKey:"GR",stroke:"#10b981",fill:"rgba(16, 185, 129, 0.15)",strokeWidth:2})]})})})]}),("ALL"===w||"RESISTIVITY"===w)&&(0,d.jsxs)("div",{className:"bg-wellqc-card/60 border border-wellqc-border rounded-xl p-3",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between pb-2 border-b border-wellqc-border mb-2",children:[(0,d.jsx)("span",{className:"text-xs font-bold text-cyan-400 font-mono",children:"TRACK 2: RESISTIVITY (RT)"}),(0,d.jsx)("span",{className:"text-[10px] font-mono text-slate-400",children:"0.1 – 200 OHMM"})]}),(0,d.jsx)("div",{className:"h-80 w-full log-track-grid rounded-lg",children:(0,d.jsx)(f.u,{width:"100%",height:"100%",children:(0,d.jsxs)(g.X,{data:z,margin:{top:10,right:10,left:10,bottom:10},children:[(0,d.jsx)(h.d,{strokeDasharray:"3 3",stroke:"#233252"}),(0,d.jsx)(i.W,{dataKey:"depth",stroke:"#94a3b8",tick:{fontSize:10}}),(0,d.jsx)(j.h,{stroke:"#94a3b8",tick:{fontSize:10}}),(0,d.jsx)(k.m,{contentStyle:{backgroundColor:"#131b2e",borderColor:"#233252",fontSize:"11px",color:"#fff"}}),(0,d.jsx)(m.N,{type:"monotone",dataKey:"RT",stroke:"#06b6d4",strokeWidth:2,dot:!1}),(0,d.jsx)(m.N,{type:"monotone",dataKey:"ILD",stroke:"#3b82f6",strokeWidth:1.5,strokeDasharray:"4 4",dot:!1})]})})})]}),("ALL"===w||"POROSITY"===w)&&(0,d.jsxs)("div",{className:"bg-wellqc-card/60 border border-wellqc-border rounded-xl p-3",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between pb-2 border-b border-wellqc-border mb-2",children:[(0,d.jsx)("span",{className:"text-xs font-bold text-amber-400 font-mono",children:"TRACK 3: DENSITY / POROSITY"}),(0,d.jsx)("span",{className:"text-[10px] font-mono text-slate-400",children:"RHOB (g/cc) vs NPHI (v/v)"})]}),(0,d.jsx)("div",{className:"h-80 w-full log-track-grid rounded-lg",children:(0,d.jsx)(f.u,{width:"100%",height:"100%",children:(0,d.jsxs)(g.X,{data:z,margin:{top:10,right:10,left:10,bottom:10},children:[(0,d.jsx)(h.d,{strokeDasharray:"3 3",stroke:"#233252"}),(0,d.jsx)(i.W,{dataKey:"depth",stroke:"#94a3b8",tick:{fontSize:10}}),(0,d.jsx)(j.h,{stroke:"#94a3b8",tick:{fontSize:10}}),(0,d.jsx)(k.m,{contentStyle:{backgroundColor:"#131b2e",borderColor:"#233252",fontSize:"11px",color:"#fff"}}),(0,d.jsx)(m.N,{type:"monotone",dataKey:"RHOB",stroke:"#ef4444",strokeWidth:2,dot:!1}),(0,d.jsx)(m.N,{type:"monotone",dataKey:"NPHI",stroke:"#f59e0b",strokeWidth:2,strokeDasharray:"3 3",dot:!1})]})})})]})]}),t.length>0&&(0,d.jsxs)("div",{className:"p-3 bg-wellqc-dark/80 border border-amber-500/30 rounded-xl space-y-2",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between",children:[(0,d.jsxs)("div",{className:"flex items-center space-x-2 text-xs font-bold text-amber-400",children:[(0,d.jsx)(q.A,{className:"w-4 h-4 text-amber-400 animate-bounce"}),(0,d.jsxs)("span",{children:["Flagged Anomaly Depth Intervals (",t.length,")"]})]}),(0,d.jsx)("span",{className:"text-[10px] font-mono text-slate-400",children:"Automated QA Markers"})]}),(0,d.jsx)("div",{className:"flex flex-wrap gap-2 pt-1",children:t.map((a,c)=>(0,d.jsxs)("div",{className:"px-2.5 py-1 rounded-md bg-wellqc-panel border border-wellqc-border text-[11px] font-mono flex items-center space-x-2 text-slate-200",children:[(0,d.jsx)("span",{className:`w-2 h-2 rounded-full ${"CRITICAL"===a.severity?"bg-red-500":"bg-amber-400"}`}),(0,d.jsx)("span",{className:"font-bold text-cyan-300",children:a.curveMnemonic}),(0,d.jsxs)("span",{children:["@",a.depthStart," ",b]}),(0,d.jsxs)("span",{className:"text-slate-400",children:["(",a.anomalyType,")"]})]},c))})]})]})}},92447:(a,b,c)=>{c.d(b,{a:()=>e});var d=c(66679);function e(a){let b=a.data.depth,c=a.wellInfo.nullValue,e=b.length,f=[],g=[],h=0;for(let c=1;c<b.length;c++){let d=b[c-1],e=b[c],g=e-d;1e-4>Math.abs(g)?++h<=5&&f.push({curveMnemonic:"DEPT",depthStart:e,depthEnd:e,anomalyType:"DUPLICATE_DEPTH",severity:"CRITICAL",description:`Duplicate depth value detected at ${e} ${a.wellInfo.depthUnit}`,suggestedCorrection:"Remove duplicate depth index row."}):g>3*Math.abs(a.wellInfo.step)&&f.push({curveMnemonic:"DEPT",depthStart:d,depthEnd:e,anomalyType:"DEPTH_GAP",severity:"WARNING",description:`Unexplained depth gap of ${(e-d).toFixed(2)} ${a.wellInfo.depthUnit} between ${d} and ${e}`,suggestedCorrection:"Perform linear depth interpolation or verify raw tool telemetry log."})}let i=new Set;for(let h of a.curves){let j=a.data.curves[h.mnemonic]||[],k=(0,d.B)(h.mnemonic,h.unit);"UNKNOWN"!==k.standardMnemonic&&i.add(k.standardMnemonic),k.unitMismatch&&f.push({curveMnemonic:h.mnemonic,depthStart:a.wellInfo.startDepth,depthEnd:a.wellInfo.stopDepth,anomalyType:"UNIT_MISMATCH",severity:"WARNING",description:`Curve ${h.mnemonic} unit '${h.unit}' does not match standard unit '${k.standardUnit}'`,suggestedCorrection:`Convert unit from ${h.unit} to ${k.standardUnit}.`});let l=[],m=0;j.forEach((a,d)=>{a===c||.01>Math.abs(a-c)||isNaN(a)?m++:l.push({depth:b[d],val:a,idx:d})});let n=e>0?m/e*100:0,o=[],p=null,q=null,r=null;if(l.length>0){let b=l.map(a=>a.val);p=Math.min(...b),q=Math.max(...b),r=b.reduce((a,b)=>a+b,0)/b.length;let e=Math.sqrt(b.reduce((a,b)=>a+Math.pow(b-r,2),0)/b.length),f=d.X[k.standardMnemonic];if(f&&l.forEach(a=>{(a.val<f.minPhysical||a.val>f.maxPhysical)&&o.filter(a=>"IMPOSSIBLE_VALUE"===a.anomalyType).length<4&&o.push({curveMnemonic:h.mnemonic,depthStart:a.depth,depthEnd:a.depth,anomalyType:"IMPOSSIBLE_VALUE",severity:"CRITICAL",description:`Physically impossible value ${a.val.toFixed(2)} ${h.unit} at depth ${a.depth} (expected ${f.minPhysical}–${f.maxPhysical})`,suggestedCorrection:`Clip value to physical limits or flag as null (${c}).`})}),e>.001)for(let b=1;b<l.length-1;b++){let c=l[b-1],d=l[b],f=l[b+1],g=Math.abs(d.val-c.val),i=Math.abs(d.val-f.val);g>4.5*e&&i>4.5*e&&o.filter(a=>"EXTREME_SPIKE"===a.anomalyType).length<5&&o.push({curveMnemonic:h.mnemonic,depthStart:d.depth,depthEnd:d.depth,anomalyType:"EXTREME_SPIKE",severity:"WARNING",description:`Unrealistic spike value ${d.val.toFixed(2)} detected at depth ${d.depth} ${a.wellInfo.depthUnit}`,suggestedCorrection:"Apply median despiking filter across 5-point window."})}let g=1,i=l[0].depth;for(let b=1;b<l.length;b++)1e-5>Math.abs(l[b].val-l[b-1].val)?g++:(g>25&&o.push({curveMnemonic:h.mnemonic,depthStart:i,depthEnd:l[b-1].depth,anomalyType:"FLATLINE",severity:"WARNING",description:`Stuck/flatline sensor output detected over ${g} steps (${i} to ${l[b-1].depth} ${a.wellInfo.depthUnit})`,suggestedCorrection:"Mark flatline depth interval as unreliable sensor telemetry."}),g=1,i=l[b].depth)}let s=.5*n;o.forEach(a=>{s+="CRITICAL"===a.severity?15:8});let t=Math.max(0,Math.min(100,Math.round(100-s))),u="EXCELLENT";t<50?u="CRITICAL":t<75?u="POOR":t<90&&(u="GOOD"),g.push({mnemonic:h.mnemonic,standardMnemonic:k.standardMnemonic,unit:h.unit,nullCount:m,totalPoints:e,nullPercentage:n,minVal:p,maxVal:q,meanVal:r,healthScore:t,status:u,anomalies:o}),f.push(...o)}let j=["GR","RHOB","NPHI","DT","RT","CALI"].filter(a=>!i.has(a)),k=Math.max(0,Math.round(100-(12*j.length+5*f.filter(a=>"NULL_CLUSTER"===a.anomalyType).length))),l=g.length>0?g.reduce((a,b)=>a+b.healthScore,0)/g.length:50,m=f.filter(a=>"CRITICAL"===a.severity).length,n=f.filter(a=>"WARNING"===a.severity).length,o=Math.max(0,Math.round(100-(12*m+4*n))),p=Math.max(0,Math.min(100,Math.round(.5*l+.3*k+.2*o))),q="EXCELLENT";return p<50?q="CRITICAL":p<75?q="POOR":p<90&&(q="GOOD"),{overallScore:p,qualityGrade:q,completenessScore:k,consistencyScore:o,anomalyCount:f.length,criticalCount:m,warningCount:n,curveSummaries:g,anomalies:f,missingStandardCurves:j}}},96741:(a,b,c)=>{c.d(b,{G:()=>d});let d=[{id:"sample-wolfcamp",name:"WOLFCAMP_PROD_01.las",field:"Wolfcamp Permian",operator:"ExxonMobil",depthRange:"10,000 - 10,200 FT",content:`~VERSION INFORMATION
VERS.                      2.0 : CWLS LOG ASCII STANDARD -VERSION 2.0
WRAP.                       NO : ONE LINE PER DEPTH STEP
~WELL INFORMATION
STRT.FT                  10000.0000 : START DEPTH
STOP.FT                  10200.0000 : STOP DEPTH
STEP.FT                      0.5000 : STEP VALUE
NULL.                     -999.2500 : NULL VALUE
WELL.                WOLFCAMP_PROD_01 : WELL NAME
COMP.             EXXONMOBIL PERMIAN : COMPANY
FLD.                  WOLFCAMP SHALE : FIELD
LOC.                     SEC 14 T2N  : LOCATION
CNTY.                         REEVES : COUNTY
STAT.                          TEXAS : STATE
CTRY.                            USA : COUNTRY
API.                  42-389-34190-00 : API NUMBER
LATI.                     31.7500000 : LATITUDE
LONG.                   -103.5000000 : LONGITUDE
DATE.                     2025-04-12 : LOG DATE
~CURVE INFORMATION
DEPT.FT                              : 1  MEASURED DEPTH
GR.GAPI                              : 2  GAMMA RAY
RHOB.G/CC                            : 3  BULK DENSITY
NPHI.V/V                             : 4  NEUTRON POROSITY
RT.OHMM                              : 5  DEEP RESISTIVITY
CALI.IN                              : 6  CALIPER
DT.US/F                              : 7  SONIC TRAVEL TIME
~PARAMETER INFORMATION
~ASCII
10000.0   45.2   2.55   0.14   18.5   8.50   68.2
10000.5   46.1   2.54   0.14   19.2   8.50   67.9
10001.0   48.3   2.56   0.13   20.1   8.48   68.5
10001.5   52.0   2.58   0.12   22.4   8.50   69.1
10002.0   65.4   2.50   0.18   14.2   8.52   72.0
10002.5   78.9   2.45   0.21   11.5   8.55   75.4
10003.0   92.1   2.40   0.24    8.9   8.60   79.8
10003.5  105.3   2.36   0.26    6.4   8.62   83.1
10004.0  112.0   2.34   0.28    5.2   8.65   86.0
10004.5   98.4   2.38   0.25    7.1   8.60   81.2
10005.0   82.1   2.44   0.21   10.8   8.55   76.0
10005.5   64.0   2.51   0.16   15.9   8.50   71.1
10006.0   51.2   2.55   0.14   19.5   8.48   68.0
10006.5   47.8   2.56   0.13   21.0   8.50   67.5
10007.0   44.2   2.57   0.12   23.5   8.50   66.8
10007.5   43.1   2.57   0.12   24.1   8.50   66.5
10008.0   42.8   2.58   0.11   25.0   8.50   66.0
10008.5   45.0   2.56   0.13   22.8   8.50   67.2
10009.0   58.2   2.48   0.19   13.5   8.52   73.4
10009.5   88.5   2.39   0.25    7.8   8.60   80.5
10010.0  125.4   2.32   0.31    3.9   8.70   92.0
10010.5  142.1   0.85   0.45    2.1   9.10  105.0
10011.0  135.0   2.30   0.33    3.1   8.80   94.5
10011.5   95.2   2.42   0.22    9.1   8.58   78.2
10012.0   62.1   2.52   0.15   16.8   8.50   70.1
10012.5   48.5   2.55   0.13   20.5   8.49   67.8
10013.0   46.0   2.56   0.12   22.0   8.50   67.0
`},{id:"sample-gom",name:"MISSISSIPPI_CANYON_block544.las",field:"Mississippi Canyon GOM",operator:"Shell Offshore",depthRange:"18,500 - 18,700 FT",content:`~VERSION INFORMATION
VERS.                      2.0 : CWLS LOG ASCII STANDARD -VERSION 2.0
WRAP.                       NO : ONE LINE PER DEPTH STEP
~WELL INFORMATION
STRT.FT                  18500.0000 : START DEPTH
STOP.FT                  18700.0000 : STOP DEPTH
STEP.FT                      0.5000 : STEP VALUE
NULL.                     -999.2500 : NULL VALUE
WELL.       MISSISSIPPI_CANYON_block544 : WELL NAME
COMP.                   SHELL OFFSHORE : COMPANY
FLD.                MISSISSIPPI CANYON : FIELD
LOC.                     BLOCK 544     : LOCATION
CTRY.                            USA : COUNTRY
API.                  60-812-90123-00 : API NUMBER
LATI.                     28.2100000 : LATITUDE
LONG.                    -89.4200000 : LONGITUDE
DATE.                     2025-06-01 : LOG DATE
~CURVE INFORMATION
DEPT.FT                              : 1  MEASURED DEPTH
GAMMA.GAPI                           : 2  GAMMA RAY
DEN.G/CC                             : 3  BULK DENSITY
CNL.V/V                              : 4  NEUTRON POROSITY
ILD.OHMM                             : 5  DEEP RESISTIVITY
CAL.IN                               : 6  CALIPER
~ASCII
18500.0   38.5   2.60   0.09   45.0   8.40
18500.5   39.1   2.60   0.09   46.2   8.40
18501.0   40.2   2.59   0.10   44.8   8.40
18501.5   55.4   2.52   0.16   18.5   8.42
18502.0   82.1   2.43   0.22    8.2   8.50
18502.5  110.5   2.35   0.29    3.5   8.65
18503.0  128.0   2.31   0.34    2.1   8.80
18503.5  134.2   2.29   0.36    1.8   8.90
18504.0  118.5   2.33   0.31    2.9   8.75
18504.5   89.0   2.41   0.23    7.4   8.55
18505.0   58.2   2.51   0.15   17.2   8.42
18505.5   42.1   2.58   0.10   38.0   8.40
`},{id:"sample-forties",name:"FORTIES_ALPHA_09.las",field:"Forties Field",operator:"Chevron",depthRange:"3,200 - 3,400 M",content:`~VERSION INFORMATION
VERS.                      2.0 : CWLS LOG ASCII STANDARD -VERSION 2.0
WRAP.                       NO : ONE LINE PER DEPTH STEP
~WELL INFORMATION
STRT.M                    3200.0000 : START DEPTH
STOP.M                    3400.0000 : STOP DEPTH
STEP.M                       0.1524 : STEP VALUE
NULL.                     -999.2500 : NULL VALUE
WELL.                 FORTIES_ALPHA_09 : WELL NAME
COMP.                    CHEVRON UK : COMPANY
FLD.                   FORTIES FIELD : FIELD
CTRY.                             UK : COUNTRY
API.                  UK-21-04A-09    : API NUMBER
LATI.                     57.7500000 : LATITUDE
LONG.                      0.9500000 : LONGITUDE
DATE.                     2025-02-18 : LOG DATE
~CURVE INFORMATION
DEPT.M                               : 1  MEASURED DEPTH
GRC.GAPI                             : 2  GAMMA RAY
ZDEN.G/CC                            : 3  BULK DENSITY
TNPH.V/V                             : 4  NEUTRON POROSITY
RD.OHMM                              : 5  DEEP RESISTIVITY
HCAL.IN                              : 6  CALIPER
AC.US/M                              : 7  SONIC TRAVEL TIME
~ASCII
3200.0000   52.1   2.51   0.16   14.2   8.45  220.5
3200.1524   53.5   2.50   0.17   13.8   8.45  222.0
3200.3048   68.2   2.44   0.21    9.5   8.50  235.1
3200.4572   95.4   2.37   0.27    4.8   8.62  255.4
3200.6096  118.0   2.32   0.33    2.4   8.75  278.0
`}]}};