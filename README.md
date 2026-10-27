# CrosswalkIQ 👨‍💻
### Enterprise Medical Coding Validation & Anesthesia Crosswalk Engine

**Designed & Developed by:**
**Amar Shaw** 
*Prior Authorization & RCM Specialist • Full-Stack Software Developer*
*"Transforming US Healthcare Operational Friction into High-Velocity Web Automation."*

---

## 🚀 Project Genesis & Current State

I am currently working inside the **RCM (Revenue Cycle Management) Workshop**, where I am leading operations and automation workflow audits. During this workshop, I was tasked with a brand-new internal challenge: **Auditing, mapping, and accelerating the prior authorization verification lifecycle for spinal procedures.** 

To eliminate operational friction and massive manual cross-referencing times, I built **CrosswalkIQ** from scratch. It is a highly optimized, lightning-fast frontend automation engine that sits directly in the hands of the billing and authorization team to map CPT, MAC, and Diagnosis (DX) codes flawlessly.

> **💡 The Ultimate Achievement:** 
> From **Day 1** of rolling this out to production within our workspace, our submissions have been **completely error-free**. Zero human-error, zero formatting delays, and 100% clean-claim pipeline readiness.

---

## 🛑 The Core Pain Points Addressed

Before **CrosswalkIQ**, the RCM authorization workflow suffered from several severe friction points:

1. **The Complex Anesthesia Crosswalk Matrix:** Teams had to manually look up specific spinal body regions (Cervical, Thoracic, Lumbar) on physical routing/superbill sheets and cross-map them to different standard ASA codes (e.g., `00600`, `00625`, `00630`).
2. **The "Humana" Critical Exception Loop:** Humana insurance defies standard crosswalk rules. It forces the usage of completely different MAC anesthesia code blocks (`01937` to `01940`) based on regional cases. Mismapping these meant instant insurance denials.
3. **Multi-Level Coding Validation Restrictions:** Commercial insurance like Freedom & Optimum allows billing for up to **3 structural levels** for Medial Branch Nerve Blocks (MBNB) and Radiofrequency Ablations (RFA) (e.g., `64490, 64491, 64492`), while others restrict capacity or change default diagnostic tracking. 
4. **Bilateral Flag Triggers:** Procedures like Transforaminal (TF) Lumbar injections require strict specific modifiers and explicit dynamic alerts (e.g., `***Bilateral***`) to avoid audits, which were frequently missed during fast-paced manual typing.

---

## ⚙️ Architecture & Pure Frontend Strategy

To ensure zero cost and instant load speeds, CrosswalkIQ was structured entirely as a **High-Performance Static Frontend Web App**:
* **Zero Server Latency:** No backends, no databases, and no network delay. Calculations are processed locally inside the browser DOM within microseconds.
* **Corporate Thematic Experience:** Designed with a premium, sleek executive dark green color matrix (`#3E544A`, `#18221D`, `#2B3A33`) tailored to reduce eye strain during long production shifts.
* **Vercel Global Edge Network Deployment:** Automatically integrated with continuous deployment pipelines via GitHub to distribute instant cloud updates to the entire team.

---

## 📊 Complete Operational Rules & Scenarios Engine

The engine isolates incoming operational requests into **3 distinct, bulletproof functional buckets**:

### 1. Humana Special Logic Bucket
* Handles specific, critical rule criteria.
* Forces `0193X` series code mappings exclusively for spinal MAC cases (e.g., Lumbar Spine/LESI displays `01938`).
* Limits MBNB scenarios strictly to 2 billable levels (`64493, 64494`).
* Includes specialized rules for **SIJ Injection (Sacroiliac Joint - CPT 27096 / DX M51.16)**.
* Triggers hardcoded billing text alerts for **Lumbar TF Bilateral** combinations (`64483, 64484` + `***Bilateral***`).

### 2. Freedom & Optimum Standard Bucket
* Seamlessly implements standard Crosswalk charts.
* Dynamically fetches regional data configurations: Cervical routes to `00600`, Thoracic routes to `00625`, and Lumbar routes to `00630`.
* Unlocks expanded **3-Level Maximum capacity workflows** for both Cervical and Lumbar MBNB lines.

### 3. "Other Insurances" Dynamic Clone Bucket
* Operates as an open-ended generic proxy system.
* Automatically inherits all rule sets, level allowances, and anesthesia mappings from the Freedom/Optimum matrix, allowing the tool to scale across endless new commercial insurers instantly without changing the codebase.

---

## 🖥️ Live Evaluation Options Matrix

When the web portal is loaded, the billing team selects criteria using three reactive interactive selectors, processing the validation upon pressing the **Enter** key:

| Dropdown Selector Option 1 | Dropdown Selector Option 2 | Dropdown Selector Option 3 | System Backend Validation Behavior | Expected Live Output Results |
| :--- | :--- | :--- | :--- | :--- |
| **Humana** | Lumbar TF Bilateral | **MAC** | Triggers Humana exceptions + explicit modifier flag. | CPT: `64483, 64484`<br>MAC: `01938`<br>Alert: `***Bilateral*** case` |
| **Humana** | SIJ Injection | **MAC** | Routes custom Sacroiliac criteria to Humana block. | CPT: `27096`<br>MAC: `01938`<br>DX: `M51.16` |
| **Humana** | Lumbar ESI (Local) | **Local** | Bypasses anesthesia compilation loop entirely. | CPT: `62323`<br>MAC: `None (Local Mode)`<br>DX: `G87.4` |
| **Freedom & Optimum** | Bilateral Cervical MBNB | **MAC** | Allocates standard regional baseline + maximum 3-levels. | CPT: `64490, 64491, 64492`<br>MAC: `00600`<br>DX: `M54.2` |
| **Other Insurances** | Bilateral Lumbar MBNB | **MAC** | Clones standard crosswalk blueprint framework rules. | CPT: `64493, 64494, 64495`<br>MAC: `00630`<br>DX: `M47.816` |

---

## 🛠️ Local Environment & Deployment Blueprint

The repository is built on a minimal static workflow for maximum portability. 

### Local Verification Setup:
1. Initialize dependencies using npm or launch locally via Chrome browser layout:
   ```bash
   npm install
   ```
2. Trigger the local testing server to run internal diagnostics:
   ```bash
   npm run dev
   ```
3. Compile the production-ready distribution bundle:
   ```bash
   npm run build
   ```

### Cloud Production Pipeline:
* Configured under the **Vite static pipeline architecture**.
* Deployed globally via **Vercel Global Edge Infrastructure** on `crosswalk-iq.vercel.app`.
* Connected with direct repository triggers—any modification pushed to GitHub immediately updates the live environment for the entire revenue cycle team in under 15 seconds.
