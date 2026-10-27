export interface ProcedureRule {
  id: string;
  name: string;
  cpt: string;
  dx: string;
  region: 'Cervical' | 'Thoracic' | 'Lumbar' | 'Hip' | 'Knee' | 'Wrist' | 'NerveBlock';
  macCode?: string;
  h_mac?: string;
  notes?: string;
}

export interface CrosswalkMap {
  [key: string]: {
    anesthesiaCode: string;
    baseUnits: number;
  };
}
