import { ProcedureRule } from '../types/billing';

export const standardRules: ProcedureRule[] = [
  { id: "s_cerv_mbnb", name: "Bilateral Cervical MBNB (Max 3 Levels)", cpt: "64490, 64491, 64492", dx: "M54.2", region: "Cervical" },
  { id: "s_lumb_mbnb", name: "Bilateral Lumbar MBNB (Max 3 Levels)", cpt: "64493, 64494, 64495", dx: "M47.816", region: "Lumbar" },
  { id: "s_lumb_mac", name: "Lumbar Spine / LESI (MAC Case)", cpt: "62323", dx: "M47.816", region: "Lumbar" },
  { id: "s_hip_gtb", name: "Hip & GTB Joint Injection (Local)", cpt: "20610", dx: "M47.816", region: "Hip" },
  { id: "s_sij_local", name: "SIJ Injection (Local)", cpt: "27096", dx: "M51.16", region: "Lumbar" },
  { id: "s_cerv_esi", name: "CESI", cpt: "62321", dx: "-", region: "Cervical" },
  // 🌟 NEW ADDED CASE: Freedom & Optimum Shoulder Injection
  { id: "s_shldr_inj_mac", name: "SHLDR INJ (SHOULDER INJECTION) MAC", cpt: "20610", dx: "-", region: "NerveBlock", notes: "request through Portal may be auth is not required." },
  // 🌟 NEW ADDED CASE: Bilateral RFA Case
  { id: "s_rfa_bil", name: "RFA-BIL (Bilateral RFA)", cpt: "64633, 64634", dx: "-", region: "Thoracic" },
  // 🌟 NEW ADDED CASE: Freedom & Optimum TF Injection
  { id: "s_tf_lumb_mac", name: "TF (Transforaminal Injection)", cpt: "64483, 64484", dx: "M51.16", region: "Lumbar" }
];
