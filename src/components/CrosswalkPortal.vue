<template>
  <div class="app-wrapper">
    <div class="portal-container">
      <header class="portal-header">
        <h1>CrosswalkIQ</h1>
        <p>Enterprise Medical Coding Validation Engine</p>
      </header>

      <main class="portal-body">
        <!-- Dropdowns Form -->
        <div class="form-group">
          <label>1. Select Insurance Group</label>
          <select v-model="selectedInsurance" @change="handleInsuranceChange">
            <option value="Humana">Humana (Critical Logic)</option>
            <option value="Freedom_Optimum">Freedom & Optimum</option>
            <option value="Other_Insurances">Other Insurances (Follows Snip Chart)</option>
          </select>
        </div>

        <div class="form-group">
          <label>2. Select Procedure / Region</label>
          <select v-model="selectedProcedureId">
            <option v-for="proc in activeProceduresList" :key="proc.id" :value="proc.id">
              {{ proc.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>3. Anesthesia Option</label>
          <select v-model="selectedAnesthesia">
            <option value="Local">Local</option>
            <option value="MAC">MAC</option>
          </select>
        </div>

        <button class="action-btn" @click="processValidation">Evaluate Codes (Enter)</button>

        <!-- Dynamic Output Display Card -->
        <section v-if="showResult" class="result-card">
          <h2>🎯 Output Validation</h2>
          <div class="result-row"><strong>Target CPT(s):</strong> <span class="highlight">{{ result.cpt }}</span></div>
          <div class="result-row"><strong>Anesthesia Code:</strong> <span>{{ result.anesthesia }}</span></div>
          <div class="result-row"><strong>Baseline DX Code:</strong> <span>{{ result.dx }}</span></div>
          <div class="result-row" v-if="result.notes !== 'None'"><strong>System Alert:</strong> <span class="alert-txt">{{ result.notes }}</span></div>
        </section>
      </main>

      <!-- Custom Professional Branding Footer -->
      <footer class="portal-footer">
        <p class="dev-line">👨‍💻 Designed & Developed by</p>
        <p class="author-name">Amar Shaw</p>
        <p class="designation">Prior Authorization & RCM Specialist • Full-Stack Software Developer</p>
        <p class="tagline">"Transforming US Healthcare Operational Friction into High-Velocity Web Automation."</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { humanaRules } from '../data/humanaRules';
import { standardRules } from '../data/standardRules';
import { snipChartData } from '../data/snipChart';
import { ProcedureRule } from '../types/billing';

export default defineComponent({
  name: 'CrosswalkPortal',
  setup() {
    const selectedInsurance = ref<'Humana' | 'Freedom_Optimum' | 'Other_Insurances'>('Humana');
    const selectedProcedureId = ref<string>('');
    const selectedAnesthesia = ref<'Local' | 'MAC'>('Local');
    
    const showResult = ref(false);
    const result = ref({ cpt: '', anesthesia: '', dx: '', notes: '' });

    const activeProceduresList = computed(() => {
      return selectedInsurance.value === 'Humana' ? humanaRules : standardRules;
    });

    const handleInsuranceChange = () => {
      if (activeProceduresList.value.length > 0) {
        selectedProcedureId.value = activeProceduresList.value[0].id;
      }
    };

    const processValidation = () => {
      const dataset: ProcedureRule[] = selectedInsurance.value === 'Humana' ? humanaRules : standardRules;
      const target = dataset.find(p => p.id === selectedProcedureId.value);

      if (!target) return;

      let determinedAnesthesia = 'None (Local Mode)';
      
      if (selectedAnesthesia.value === 'MAC') {
        if (selectedInsurance.value === 'Humana') {
          determinedAnesthesia = target.h_mac || '01938';
        } else {
          const crosswalk = snipChartData[target.region];
          determinedAnesthesia = crosswalk ? `${crosswalk.anesthesiaCode} (${crosswalk.baseUnits} Base Units)` : '00630';
        }
      }

      result.value = {
        cpt: target.cpt,
        anesthesia: determinedAnesthesia,
        dx: target.dx,
        notes: target.notes || 'None'
      };
      showResult.value = true;
    };

    onMounted(() => {
      handleInsuranceChange();
      window.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processValidation();
      });
    });

    return {
      selectedInsurance,
      selectedProcedureId,
      selectedAnesthesia,
      activeProceduresList,
      showResult,
      result,
      handleInsuranceChange,
      processValidation
    };
  }
});
</script>

<style scoped>
/* Hex System Applied Matrix (#3E544A, #18221D, #2B3A33) */
.app-wrapper { min-height: 100vh; background-color: #f3f6f4; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: sans-serif; }
.portal-container { width: 100%; max-width: 580px; background: #ffffff; border-radius: 14px; box-shadow: 0 10px 30px rgba(24,34,29,0.06); border-top: 6px solid #3E544A; overflow: hidden; }
.portal-header { background: #18221D; color: #ffffff; padding: 24px; text-align: center; }
.portal-header h1 { margin: 0; font-size: 28px; letter-spacing: 0.5px; color: #e2e8e5; }
.portal-header p { margin: 6px 0 0 0; font-size: 13px; color: #8fa399; opacity: 0.9; }
.portal-body { padding: 30px; }
.form-group { margin-bottom: 22px; }
.form-group label { display: block; font-weight: 600; margin-bottom: 8px; color: #2B3A33; font-size: 14px; }
.form-group select { width: 100%; padding: 12px; border: 2px solid #cbd5e1; border-radius: 6px; font-size: 15px; color: #18221D; background: #fff; transition: all 0.3s; }
.form-group select:focus { border-color: #3E544A; outline: none; }
.action-btn { width: 100%; padding: 14px; background: #3E544A; border: none; border-radius: 6px; color: #ffffff; font-size: 16px; font-weight: 700; cursor: pointer; margin-top: 10px; transition: background 0.2s; }
.action-btn:hover { background: #2B3A33; }
.result-card { margin-top: 28px; padding: 20px; background: #f8faf9; border-left: 5px solid #3E544A; border-radius: 4px; border: 1px solid #e2e8e5; border-left: 5px solid #3E544A; }
.result-card h2 { margin: 0 0 16px 0; font-size: 18px; color: #18221D; }
.result-row { margin-bottom: 10px; font-size: 15px; color: #2B3A33; }
.highlight { font-weight: bold; color: #c2410c; }
.alert-txt { font-weight: bold; color: #b91c1c; }
.portal-footer { background: #18221D; padding: 24px; text-align: center; border-top: 1px solid #2B3A33; }
.dev-line { color: #8fa399; font-size: 12px; margin: 0 0 4px 0; }
.author-name { color: #ffffff; font-size: 18px; font-weight: 700; margin: 0 0 2px 0; letter-spacing: 0.3px; }
.designation { color: #cbd5e1; font-size: 12px; margin: 0 0 12px 0; font-weight: 500; }
.tagline { color: #8fa399; font-size: 11px; margin: 0; font-style: italic; border-top: 1px solid #2B3A33; padding-top: 10px; line-height: 1.4; }
</style>
