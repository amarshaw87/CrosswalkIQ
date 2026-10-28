import { ProcedureRule } from '../types/billing';

export const humanaRules: ProcedureRule[] = [
  { id: "h_lumb_esi", name: "Lumbar Spine / LESI (MAC Case)", cpt: "62323", dx: "M47.816", region: "Lumbar", h_mac: "01938" },
  { id: "h_lumb_local", name: "Lumbar ESI (Local Case)", cpt: "62323", dx: "G87.4", region: "Lumbar", h_mac: "N/A" },
  { id: "h_lumb_mbnb", name: "Lumbar MBNB (Max 2 Levels)", cpt: "64493, 64494", dx: "M47.816", region: "Lumbar", h_mac: "01938" },
  { id: "h_lumb_rfa", name: "Lumbar RFA", cpt: "64635, 64636", dx: "-", region: "Lumbar", h_mac: "01938" },
  { id: "h_tf_lumb", name: "Lumbar TF Bilateral", cpt: "64483, 64484", dx: "-", region: "Lumbar", h_mac: "01938", notes: "***Bilateral*** case" },
  { id: "h_cerv_local", name: "Cervical ESI", cpt: "62321", dx: "M54.12", region: "Cervical", h_mac: "01937" },
  
  // 🌟 NEW ADDED CASE: Humana SIJ Injection
  { id: "h_sij_injection", name: "SIJ Injection (Sacroiliac Joint)", cpt: "27096", dx: "M51.16", region: "Lumbar", h_mac: "01938" },

  // 🌟 NEW ADDED CASE: Humana Intercostal Local Injection
  { id: "h_intercostal_local", name: "Intercoastal N.B (LOC INJECT (LOCAL INJECTION)", cpt: "64420, 64421", dx: "G58.0", region: "NerveBlock", h_mac: "N/A", notes: "req to pcp" }
];
