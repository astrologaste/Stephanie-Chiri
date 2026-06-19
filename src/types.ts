export type Planet = 'Sun' | 'Moon' | 'Mercury' | 'Venus' | 'Mars' | 'Jupiter' | 'Saturn';

export type ZodiacSign =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export interface Exaltation {
  planet: string;
  degree: number;
}

export interface Term {
  planet: string;
  degree_start: number;
  degree_end: number;
}

export interface SignDignity {
  ruler: string;
  exaltation: Exaltation | null;
  triplicity: string[];
  terms: Term[];
  faces: string[];
}

export type DorotheusTable = Record<ZodiacSign, SignDignity>;

export interface Step1Result {
  affinity: 'Friends' | 'Enemies' | 'Compatible' | 'Incompatible';
  ruleApplied: string;
  desc: string;
}

export interface Step2Result {
  aspect: 'Conjunction' | 'Sextile' | 'Square' | 'Trine' | 'Opposition' | 'Aversion';
  signsApart: number;
  desc: string;
  isTense: boolean;
}

export interface PlanetState {
  planet: Planet;
  sign: ZodiacSign;
  degree: number;
  isPeregrine: boolean;
  dignities: string[]; // List of active dignities in the sign
  dispositor: string;
  dispositorState: string; // "forte", "debilitado", etc.
}

export interface Step3Result {
  planetAState: PlanetState;
  planetBState: PlanetState;
}

export interface Step4Result {
  visitor: Planet;
  host: Planet;
  receptionType: 'None' | 'Strong' | 'Weak';
  activeDignities: string[];
  aspectImpact: string; // Facilitation vs Defense Mechanism
  isMutual: boolean;
  mutualReceptionDesc?: string;
  desc: string;
}

export interface Step5Result {
  fasterPlanet: Planet;
  slowerPlanet: Planet;
  aspectMovement: 'Applying' | 'Separating';
  desc: string;
}

export interface PlanetaryCalculation {
  step1: Step1Result;
  step2: Step2Result;
  step3: Step3Result;
  step4: Step4Result;
  step5: Step5Result;
  finalSynthesis: string;
}
