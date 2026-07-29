export interface WellListItem {
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
  depthUnit: string;
  status: string;
  qualityScore: number;
  qualityGrade: string;
  latestLasFileName: string | null;
  latestLasFileId: string | null;
  latestReportId: string | null;
  curveCount: number;
  pointCount: number;
  anomalyCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityListItem {
  id: string;
  userName: string;
  userRole: string;
  action: string;
  target: string;
  details: string;
  timestamp: string;
  ip: string;
}

export interface DashboardSummary {
  totalWells: number;
  lasFilesUploaded: number;
  averageQualityScore: number;
  averageQualityGrade: string;
  curvesAnalysed: number;
  errorsDetected: number;
  missingCurves: number;
  anomaliesFound: number;
  cleanedTodayLabel: string;
  uploadedToday: number;
  trend: Array<{
    date: string;
    avgScore: number;
    filesUploaded: number;
    anomalies: number;
  }>;
  fieldPerformance: Array<{
    field: string;
    score: number;
    wells: number;
    status: string;
  }>;
  problemWells: Array<{
    id: string;
    name: string;
    api: string;
    score: number;
    grade: string;
    issue: string;
  }>;
  recentActivity: ActivityListItem[];
}

export interface WellDetailResponse {
  well: WellListItem;
  aiSummary: string;
  recommendations: string[];
  curvesData: {
    depth: number[];
    curves: Record<string, number[]>;
  };
  anomalies: Array<{
    curveMnemonic: string;
    depthStart: number;
    depthEnd: number;
    anomalyType: string;
    severity: "CRITICAL" | "WARNING" | "INFO";
    description: string;
    suggestedCorrection: string;
  }>;
}
