export interface StandardCurveDef {
  standardMnemonic: string;
  name: string;
  category: 'DEPTH' | 'GAMMA' | 'DENSITY' | 'POROSITY' | 'SONIC' | 'RESISTIVITY' | 'CALIPER' | 'POTENTIAL' | 'OTHER';
  standardUnit: string;
  acceptableUnits: string[];
  aliases: string[];
  minPhysical: number;
  maxPhysical: number;
  description: string;
}

export const STANDARD_CURVES: Record<string, StandardCurveDef> = {
  DEPTH: {
    standardMnemonic: 'DEPT',
    name: 'Measured Depth',
    category: 'DEPTH',
    standardUnit: 'FT',
    acceptableUnits: ['FT', 'M', 'FEET', 'METERS'],
    aliases: ['DEPT', 'DEPTH', 'MD', 'TVD', 'DEPT_FT', 'DEPT_M'],
    minPhysical: 0,
    maxPhysical: 50000,
    description: 'Measured depth along borehole trajectory',
  },
  GR: {
    standardMnemonic: 'GR',
    name: 'Gamma Ray',
    category: 'GAMMA',
    standardUnit: 'GAPI',
    acceptableUnits: ['GAPI', 'API', 'EU', 'CPS'],
    aliases: ['GR', 'GAMMA', 'GRC', 'GAM', 'GR_CORR', 'GRR', 'SGR', 'ECGR', 'HGR'],
    minPhysical: 0,
    maxPhysical: 500,
    description: 'Natural gamma ray radiation log',
  },
  RHOB: {
    standardMnemonic: 'RHOB',
    name: 'Bulk Density',
    category: 'DENSITY',
    standardUnit: 'G/CC',
    acceptableUnits: ['G/CC', 'G/CM3', 'KGM3', 'KG/M3', 'KG/M^3', 'G/C3', 'KGM/-3'],
    aliases: ['RHOB', 'DEN', 'RHOZ', 'BDEN', 'ZDEN', 'RHO', 'RHOB_CORR', 'RHO8'],
    minPhysical: 1.0,
    maxPhysical: 3.2,
    description: 'Formation bulk density log',
  },
  NPHI: {
    standardMnemonic: 'NPHI',
    name: 'Neutron Porosity',
    category: 'POROSITY',
    standardUnit: 'V/V',
    acceptableUnits: ['V/V', 'PU', 'P.U.', '%', 'PERCENT', 'PCT', 'DECIMAL', 'M3/M3'],
    aliases: ['NPHI', 'NEUT', 'CNL', 'NPOR', 'TNPH', 'PHIN', 'NPHI_LS', 'NPLC', 'NPR'],
    minPhysical: -0.05,
    maxPhysical: 0.60,
    description: 'Thermal neutron porosity log',
  },
  DT: {
    standardMnemonic: 'DT',
    name: 'Sonic Travel Time',
    category: 'SONIC',
    standardUnit: 'US/F',
    acceptableUnits: ['US/F', 'US/FT', 'US/M', 'US/MET', 'US/MTR', 'US/METER', 'US/METRE'],
    aliases: ['DT', 'DTCO', 'AC', 'DTC', 'SONI', 'DELTA_T', 'DTC1', 'DT35'],
    minPhysical: 40,
    maxPhysical: 200,
    description: 'Compressional wave acoustic travel time',
  },
  RT: {
    standardMnemonic: 'RT',
    name: 'True Deep Resistivity',
    category: 'RESISTIVITY',
    standardUnit: 'OHMM',
    acceptableUnits: ['OHMM', 'OHM.M', 'OHM-M', 'OHMS'],
    aliases: ['RT', 'ILD', 'LLD', 'RD', 'RES_DEEP', 'AT90', 'RDEP', 'HDRS', 'R40O', 'AO90'],
    minPhysical: 0.05,
    maxPhysical: 5000,
    description: 'Deep un-invaded formation resistivity',
  },
  CALI: {
    standardMnemonic: 'CALI',
    name: 'Caliper',
    category: 'CALIPER',
    standardUnit: 'IN',
    acceptableUnits: ['IN', 'INCH', 'MM', 'CM', 'MILLIMETER', 'CENTIMETER'],
    aliases: ['CALI', 'CAL', 'HCAL', 'CALS', 'CALP', 'BS', 'CLP', 'HDAR'],
    minPhysical: 4.0,
    maxPhysical: 30.0,
    description: 'Borehole diameter measurement log',
  },
  PEF: {
    standardMnemonic: 'PEF',
    name: 'Photoelectric Factor',
    category: 'OTHER',
    standardUnit: 'B/E',
    acceptableUnits: ['B/E', 'BARN/ELECTRON', 'B/ELECT', 'PE'],
    aliases: ['PEF', 'PE', 'PEFZ', 'PEFL', 'PEF8'],
    minPhysical: 0.5,
    maxPhysical: 15.0,
    description: 'Photoelectric absorption index log',
  },
  SP: {
    standardMnemonic: 'SP',
    name: 'Spontaneous Potential',
    category: 'POTENTIAL',
    standardUnit: 'MV',
    acceptableUnits: ['MV', 'VOLTS', 'MILLIVOLTS'],
    aliases: ['SP', 'SPC', 'SPO', 'SP_CORR'],
    minPhysical: -250,
    maxPhysical: 250,
    description: 'Spontaneous electrical potential log',
  },
  MSFL: {
    standardMnemonic: 'MSFL',
    name: 'Micro-spherical Focused Resistivity',
    category: 'RESISTIVITY',
    standardUnit: 'OHMM',
    acceptableUnits: ['OHMM', 'OHM.M'],
    aliases: ['MSFL', 'RXO', 'MICRO', 'RFOC', 'RMFL'],
    minPhysical: 0.05,
    maxPhysical: 2000,
    description: 'Flushed zone micro-resistivity',
  },
  LLS: {
    standardMnemonic: 'LLS',
    name: 'Shallow Resistivity',
    category: 'RESISTIVITY',
    standardUnit: 'OHMM',
    acceptableUnits: ['OHMM', 'OHM.M'],
    aliases: ['LLS', 'ILM', 'RS', 'RES_SHAL', 'AT20', 'RLA2'],
    minPhysical: 0.05,
    maxPhysical: 2000,
    description: 'Shallow invaded zone resistivity',
  },
};

export interface StandardisationResult {
  originalMnemonic: string;
  standardMnemonic: string;
  matchedName: string;
  confidence: number; // 0.0 to 1.0
  isAutoMatched: boolean;
  standardUnit: string;
  unitMismatch: boolean;
  category: string;
}

/**
 * Standardises raw LAS curve mnemonics to petrophysical standard names
 */
export function standardiseMnemonic(rawMnemonic: string, rawUnit: string = ''): StandardisationResult {
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
      category: std.category,
    };
  }

  // Alias lookup matching
  for (const [key, std] of Object.entries(STANDARD_CURVES)) {
    for (const alias of std.aliases) {
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
          category: std.category,
        };
      }
    }
  }

  // Fallback match for custom curves (e.g., TEMP, ROP, TORQ, CWD)
  return {
    originalMnemonic: rawMnemonic,
    standardMnemonic: cleanMnem,
    matchedName: `Custom Curve (${cleanMnem})`,
    confidence: 0.50,
    isAutoMatched: false,
    standardUnit: cleanUnit || 'UNKN',
    unitMismatch: false,
    category: 'OTHER',
  };
}
