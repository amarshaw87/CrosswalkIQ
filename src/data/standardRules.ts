import { ProcedureRule } from '../types/billing';

export const standardRules: ProcedureRule[] = [
  { id: "s_cerv_mbnb", name: "Bilateral Cervical MBNB (Max 3 Levels)", cpt: "64490, 64491, 64492", dx: "M54.2", region: "Cervical" },
  { id: "s_lumb_mbnb", name: "Bilateral Lumbar MBNB (Max 3 Levels)", cpt: "64493, 64494, 64495", dx: "M47.816", region: "Lumbar" },
  { id: "s_lumb_mac", name: "Lumbar Spine / LESI (MAC Case)", cpt: "62323, 00630", dx: "M47.816", region: "Lumbar" },
  { id: "s_hip_gtb", name: "Hip & GTB Joint Injection (Local)", cpt: "20610", dx: "M47.816", region: "Hip" },
  { id: "s_sij_local", name: "SIJ Injection (Local)", cpt: "27096", dx: "M51.16", region: "Lumbar" },
  { id: "s_cerv_esi", name: "CESI", cpt: "62321", dx: "-", region: "Cervical" }
];
