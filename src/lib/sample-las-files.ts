export interface SampleLASFile {
  id: string;
  name: string;
  field: string;
  operator: string;
  depthRange: string;
  content: string;
}

export const SAMPLE_LAS_FILES: SampleLASFile[] = [
  {
    id: 'sample-wolfcamp',
    name: 'WOLFCAMP_PROD_01.las',
    field: 'Wolfcamp Permian',
    operator: 'ExxonMobil',
    depthRange: '10,000 - 10,200 FT',
    content: `~VERSION INFORMATION
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
`,
  },
  {
    id: 'sample-gom',
    name: 'MISSISSIPPI_CANYON_block544.las',
    field: 'Mississippi Canyon GOM',
    operator: 'Shell Offshore',
    depthRange: '18,500 - 18,700 FT',
    content: `~VERSION INFORMATION
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
`,
  },
  {
    id: 'sample-forties',
    name: 'FORTIES_ALPHA_09.las',
    field: 'Forties Field',
    operator: 'Chevron',
    depthRange: '3,200 - 3,400 M',
    content: `~VERSION INFORMATION
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
`,
  },
];
