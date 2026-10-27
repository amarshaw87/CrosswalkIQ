import { CrosswalkMap } from '../types/billing';

export const snipChartData: CrosswalkMap = {
  Cervical: { anesthesiaCode: '00600', baseUnits: 10 },
  Thoracic: { anesthesiaCode: '00625', baseUnits: 13 },
  Lumbar: { anesthesiaCode: '00630', baseUnits: 8 },
  Shoulder: { anesthesiaCode: '01610', baseUnits: 5 },
  Knee: { anesthesiaCode: '01320', baseUnits: 4 },
  Wrist: { anesthesiaCode: '01810', baseUnits: 3 },
  Hip: { anesthesiaCode: '01260', baseUnits: 4 },
  NerveBlock: { anesthesiaCode: '01991', baseUnits: 3 }
};
