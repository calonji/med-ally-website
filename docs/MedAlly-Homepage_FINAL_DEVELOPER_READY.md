# MedAlly Homepage — Revised Final SEO + GEO + AEO Specification
## Developer-Ready Production Copy

**Status:** Revised after SEO/GEO/AEO quality review  
**Canonical URL:** `https://www.medally.ai/`  
**Page type:** Homepage / parent category page  
**Primary SEO category:** Clinical AI  
**Product category language:** Clinical AI Platform  
**Differentiated positioning:** Clinical Workflow Intelligence  
**Primary audience:** Physicians  
**Secondary audiences:** Practices, clinics, hospitals, and health systems  
**Primary conversion:** Start MedAlly Free  
**Secondary conversion:** Book a Demo

> **Core objective:** Make it immediately clear what MedAlly is, what it does during and after a patient encounter, what the physician receives, what remains under physician control, and how a user can start.

---

# 1. Final Homepage Search Strategy

The homepage should own MedAlly's **broad parent category** rather than trying to rank for every product capability.

## Primary keyword

| Keyword | US Volume | KD | CPC | Role |
|---|---:|---:|---:|---|
| `clinical ai` | **1,000** | **56** | **$3.29** | Primary category keyword |

## Supporting homepage language

| Keyword / concept | US Volume | KD | Role |
|---|---:|---:|---|
| `ai for physicians` | **170** | **45** | Audience relevance |
| `clinical workflow` | **590** | **14** | Workflow relevance |
| `ai clinical documentation` | **880** | **50** | Capability language; dedicated page should own the deeper intent |
| `clinical ai platform` | No reliable exact-match metric in the filtered export | — | Clear product/category descriptor |
| `clinical workflow intelligence` | No reliable exact-match demand in the filtered export | — | Differentiated MedAlly positioning, not a volume claim |

### Search-intent rule

`clinical ai` has mixed informational and commercial/category intent. The homepage therefore must not rely on exact-match keyword repetition. It must establish category relevance through:

- a clear H1,
- concrete product behavior,
- physician audience language,
- real workflow outputs,
- strong internal linking,
- useful buyer answers,
- consistent entity information.

### Cannibalization rule

The homepage **does not own** the following commercial sub-intents:

- `AI medical scribe` → `/ai-medical-scribe`
- `AI clinical documentation` → planned documentation page after SERP-intent validation
- `clinical workflow software` → planned workflow page
- medical coding AI/commercial coding terms → planned coding page
- ambient clinical documentation → do not create a separate page until SERP overlap is validated

---

# 2. Final SEO Metadata

**Title tag**  
`Clinical AI Platform for Physicians | MedAlly`

**Meta description**  
`MedAlly helps physicians draft clinical notes, organize encounter context, review decision-support information, and prepare coding context in one workflow.`

**Canonical**  
`https://www.medally.ai/`

**H1**  
`Clinical AI Platform for Physicians Across the Patient Encounter`

**Robots**  
`index, follow`

### Social metadata

**Open Graph title**  
`Clinical AI Platform for Physicians | MedAlly`

**Open Graph description**  
`See how MedAlly turns encounter context into reviewable documentation, clinical context, decision-support information, and coding context while physicians remain in control.`

**Open Graph URL**  
`https://www.medally.ai/`

Use one original MedAlly product visual for social/search sharing. Keep important product information in HTML text rather than only inside the image.

---

# 3. Final Homepage Copy

## 3.1 Hero

**Eyebrow:**  
`CLINICAL AI FOR PHYSICIANS`

# Clinical AI Platform for Physicians Across the Patient Encounter

MedAlly listens to the patient encounter, prepares structured clinical documentation, organizes clinical context, surfaces reviewable decision-support information, and prepares coding context—while the physician reviews and approves what moves forward.

**Primary CTA:** **[Start MedAlly Free](https://app.medally.ai/)**  
**Secondary CTA:** `Book a Demo`

**Forever Free includes 10 free encounters per month.**

> **AI prepares. Clinicians review. Clinicians decide.**

### Developer requirements

- H1, supporting paragraph, free-plan line, and CTAs must be present in the initial server-rendered HTML.
- Do not render critical text inside an image, canvas, or client-only component.
- Do not delay the hero copy while waiting for client-side data.
- Keep the LCP element lightweight and measurable.

---

## 3.2 Direct Entity Answer

## What Is MedAlly?

MedAlly is a **Clinical AI Platform** for physicians and healthcare teams. It helps turn patient encounters into structured clinical documentation, organizes encounter context, surfaces reviewable decision-support information, prepares coding context, and supports physician-approved workflow handoffs.

The clinician remains responsible for reviewing, editing, validating, and approving clinical outputs.

### Internal link

Learn more about **[MedAlly Features](/features)**.

### AEO / GEO purpose

Keep this answer visible in normal HTML near the top of the page. It should function as the canonical short explanation of MedAlly across the website.

---

## 3.3 Concrete Product Workflow

## What Happens in a MedAlly Encounter?

The homepage should show actual product behavior rather than repeating abstract workflow claims.

### 1. Capture Encounter Context

MedAlly listens to the encounter and uses the conversation as context for the documentation workflow.

### 2. Prepare Structured Clinical Documentation

Encounter information is organized into a structured clinical note for physician review. MedAlly's current product experience includes structured SOAP-style documentation.

### 3. Organize Clinical Context

Relevant encounter information is brought into a reviewable view so the physician can assess the clinical picture without treating the note as an isolated output.

### 4. Surface Reviewable Clinical Support

MedAlly can surface decision-support context for physician consideration. The system assists the review process; it does not replace clinical judgment.

### 5. Prepare Coding Context

MedAlly can prepare ICD-10/CPT coding context from the encounter for review within the workflow.

### 6. Review and Move Approved Work Forward

The physician reviews, edits, validates, and approves the output before approved work moves into the practice workflow, including the EHR workflow where supported by the deployment.

**[See How MedAlly Works](/how-it-works)**

### Developer requirements

- Implement these as semantic ordered steps.
- Keep the step text server-rendered.
- If a product animation is used, the animation supplements the HTML copy; it does not replace it.

---

## 3.4 Concrete Capability Section

## What MedAlly Helps Physicians Prepare and Review

### Clinical Documentation

MedAlly uses encounter context to prepare structured clinical notes, including SOAP-style documentation, for physician review and editing.

**[AI Clinical Documentation](/clinical-documentation-ai)**  
*Activate this link when the dedicated documentation page is published.*

### Clinical Context

MedAlly organizes relevant encounter information so physicians can review the patient context alongside the documentation workflow.

### Decision-Support Context

MedAlly surfaces reviewable information that can support clinical reasoning. Physicians interpret the information and make the final clinical decisions.

### Coding Context

MedAlly prepares coding-related context, including ICD-10/CPT context, for review as part of the encounter workflow.

### Follow-Up and Workflow Handoffs

MedAlly supports follow-up tasks and workflow handoffs from the same encounter context, with physician-approved work moving forward through the practice workflow.

**[MedAlly Features](/features)**

### Content rule

Do not replace these concrete descriptions with generic phrases such as “transform care,” “revolutionize medicine,” or “intelligent orchestration” unless the copy also explains the actual input, output, and clinician action.

---

## 3.5 Differentiated Positioning

## Beyond Documentation: Clinical Workflow Intelligence

MedAlly uses **Clinical Workflow Intelligence** to describe its approach to connecting the work created by a patient encounter.

The idea is straightforward: the note should not exist separately from the clinical context, review process, coding context, and downstream workflow that follow the visit.

Instead of defining MedAlly around one output, the platform keeps multiple parts of the encounter connected around the same clinical context and physician review path.

### The MedAlly model

**Encounter context**  
→ **Structured documentation**  
→ **Clinical review context**  
→ **Coding context**  
→ **Physician approval**  
→ **Workflow handoff**

This is MedAlly's positioning language. Do not state or imply that MedAlly invented, trademarked, or exclusively owns the phrase “Clinical Workflow Intelligence” unless that is legally verified.

**[Explore AI Medical Scribe](/ai-medical-scribe)**

**[Clinical Workflow Software](/clinical-workflow-software)**  
*Activate this link when the workflow page is published.*

---

## 3.6 AI for Physicians and Healthcare Teams

## AI for Physicians, Practices, and Health Systems

### Individual Physicians

Use MedAlly to support clinical documentation and encounter workflow while retaining control over review and final decisions.

### Practices and Clinics

Use a shared clinical AI workflow for documentation, clinical context, follow-up, and coding-related review across day-to-day encounters.

### Hospitals and Health Systems

Evaluate MedAlly as a clinical AI layer for physician workflows where documentation, review, implementation requirements, EHR integration, governance, and deployment planning matter.

### CTA routing

- Individual physician → **[Start MedAlly Free](https://app.medally.ai/)**
- Practice / clinic / hospital → `Book a Demo`

Do not create specialty or buyer pages solely from these cards. Create them only after validating distinct demand and sufficient unique content.

---

## 3.7 Physician Control and Trust

## Clinical AI Should Support Physician Judgment

### AI Prepares

MedAlly prepares documentation and reviewable workflow context from the encounter.

### Clinicians Review

Physicians can review, edit, validate, and assess the information before it moves forward.

### Clinicians Decide

Clinical judgment, approval, and final responsibility remain with the clinician.

This review-first model should be stated consistently across the homepage, Features, How It Works, FAQ, and future product landing pages.

### Product transparency

**[See How MedAlly Works](/how-it-works)**  
**[MedAlly Features](/features)**

### Security and privacy

Clinical AI may process sensitive health information. The homepage should link to MedAlly's current privacy/security information and use only security, compliance, retention, encryption, BAA, or model-training statements that have been verified by the MedAlly security/legal owner.

**Privacy & Security** — link to the verified canonical privacy/security destination once confirmed.

### Trust-evidence module

If verified customer evidence is available, add one compact trust module here containing one or more of:

- verified customer/practice logos,
- a genuine attributed clinician testimonial,
- a linked customer case study,
- a product demonstration,
- independently verifiable certification/security evidence.

Do **not** populate this module with unverified testimonials, anonymous performance claims, fabricated ratings, or unsupported statistics.

---

## 3.8 Free Plan / Conversion Section

## Start with MedAlly Forever Free

MedAlly's **Forever Free plan includes 10 free encounters per month**, giving physicians a way to experience the clinical documentation workflow before deciding whether a paid plan or broader practice deployment is appropriate.

**Primary CTA:** **[Start MedAlly Free](https://app.medally.ai/)**  
**[View Pricing](/pricing)**

### Developer rule

Wherever possible, the “10 free encounters per month” value should come from the same shared pricing/config source used by the pricing page so plan details cannot drift between URLs.

---

## 3.9 Practical Buyer FAQ

## Questions Physicians and Healthcare Teams Ask Before Using MedAlly

### What does MedAlly create from a patient encounter?

MedAlly can prepare structured clinical documentation from encounter context, organize relevant clinical information, surface reviewable decision-support context, and prepare coding context for physician review.

### Can physicians review and edit MedAlly's output?

Yes. MedAlly is designed around clinician review. Physicians remain responsible for reviewing, editing, validating, approving, and making final clinical decisions.

### Does MedAlly work beyond clinical documentation?

Yes. Clinical documentation is one part of the MedAlly workflow. MedAlly also organizes encounter context, surfaces reviewable decision-support information, prepares coding context, and supports downstream workflow handoffs.

### Can MedAlly move approved information into an EHR workflow?

MedAlly is designed to hand physician-approved outputs into the practice workflow, including the EHR workflow where supported by the deployment. Exact integration depth can vary, so organizations should confirm support for their specific EHR and implementation requirements.

### Is there a free MedAlly plan?

Yes. MedAlly's **Forever Free plan includes 10 free encounters per month**. **[View Pricing](/pricing)**

### Is MedAlly only an AI medical scribe?

No. MedAlly includes AI-assisted clinical documentation, but its broader product model connects the note with encounter context, reviewable clinical support, coding context, and workflow handoffs.

**[Explore AI Medical Scribe](/ai-medical-scribe)**

### Where can I review MedAlly's privacy and security information?

Use MedAlly's current privacy/security documentation for the latest information about data handling and deployment terms. Practices and health systems should confirm any required compliance, BAA, retention, encryption, and governance details during evaluation.

**Internal link:** **Privacy & Security** → final verified privacy/security destination.

### How do I get started with MedAlly?

Individual physicians can **[Start MedAlly Free](https://app.medally.ai/)** with 10 free encounters per month. Practices, clinics, hospitals, and health systems can `Book a Demo` to discuss workflow and implementation requirements.

**[View All FAQs](/faq)**

### FAQ implementation rule

Keep the FAQ visible and useful for users. Do **not** add FAQPage markup expecting a Google FAQ rich result.

---

## 3.10 Final CTA

## Bring the Encounter Into One Reviewable Clinical Workflow

Use MedAlly to prepare clinical documentation, organize encounter context, review clinical support, and prepare coding context while keeping the physician in control.

**Primary CTA:** **[Start MedAlly Free](https://app.medally.ai/)**  
**Secondary CTA:** `Book a Demo`

**Forever Free includes 10 free encounters per month.**

> **AI prepares. Clinicians review. Clinicians decide.**

---

# 4. Internal Linking Map

## How Internal Links Are Written in This File

Clickable links use standard Markdown:

`**[Anchor Text](/destination)**`

Example:

`**[Explore AI Medical Scribe](/ai-medical-scribe)**`

The bold text is the visible clickable anchor. The URL inside parentheses is the destination.


The phrases below are the intended internal-link anchors. They are bolded in the production copy where they should be clickable.

| Anchor to Use in Copy | Destination | Implementation |
|---|---|---|
| **[MedAlly Features](/features)** | `/features` | Active |
| **[See How MedAlly Works](/how-it-works)** | `/how-it-works` | Active |
| **[Explore AI Medical Scribe](/ai-medical-scribe)** | `/ai-medical-scribe` | Activate when this page is published |
| **[View Pricing](/pricing)** | `/pricing` | Active |
| **[View All FAQs](/faq)** | `/faq` | Active |
| **[Start MedAlly Free](https://app.medally.ai/)** | `https://app.medally.ai/` | Active CTA |
| **[AI Clinical Documentation](/clinical-documentation-ai)** | `/clinical-documentation-ai` | Activate when this page is published |
| **[Clinical Workflow Software](/clinical-workflow-software)** | `/clinical-workflow-software` | Activate when this page is published |
| **Privacy & Security** | Verified canonical privacy/security URL | Add after destination is confirmed |

Do not create links to unpublished or 404 pages.

---

# 5. Keyword Placement QA

| Keyword / Concept | Intended Placement | Status |
|---|---|---|
| `clinical ai` | Title, H1/category context, trust/body copy | PASS |
| `clinical ai platform` | Title/H1 + entity answer | PASS |
| `ai for physicians` | Audience H2 | PASS |
| `clinical workflow` | Hero/body/workflow/final CTA | PASS |
| `ai clinical documentation` | Capability/internal-link language only | PASS — child intent reserved |
| `AI medical scribe` | Contextual internal link + FAQ | PASS — child page owns intent |
| `Clinical Workflow Intelligence` | Differentiation section | PASS — positioning, not volume claim |

### Keyword-use rule

Do not set arbitrary density targets. Do not repeat exact phrases merely to increase frequency. Use the keyword where it clarifies topic, category, audience, or internal-link intent.

---

# 6. Information-Gain / GEO Requirements

The homepage must provide concrete facts that distinguish MedAlly from generic “AI in healthcare” copy.

The following product facts are intentionally included:

- MedAlly listens to the encounter.
- It prepares structured clinical documentation.
- The current product experience includes SOAP-style documentation.
- It organizes encounter context.
- It surfaces reviewable decision-support information.
- It prepares ICD-10/CPT coding context.
- Physicians review and approve outputs.
- Approved work can move into the practice/EHR workflow where supported by deployment.
- Forever Free includes 10 free encounters per month.

Do not replace these facts with generic marketing language.

Google's generative-AI search features use the same foundational SEO requirements as normal Search; there is no special “GEO schema” required. The implementation priority is indexable, useful, reliable content with strong internal linking and important information available as text.

---

# 7. Schema — Revised Final Rule

## Implement

- `Organization` — sitewide, with one consistent MedAlly entity `@id`
- `WebSite`
- `WebPage`

## Add only when valid

- `BreadcrumbList` if a visible/sitewide breadcrumb system is used

## Do not use as an SEO shortcut

- Do not add `FAQPage` markup expecting Google FAQ rich results.
- Do not add invalid `SoftwareApplication` markup just because MedAlly is software.
- Do not invent reviews, ratings, pricing properties, compliance claims, or performance metrics for structured data.

Structured data must match visible content.

---

# 8. Next.js / Crawlability Requirements

The current MedAlly crawl exposes only a very small amount of homepage text in one crawl path, so implementation must be checked carefully.

### Required

- Render the H1, direct answer, workflow steps, capabilities, free-plan information, FAQs, and contextual internal links in the server-delivered HTML.
- Prefer Server Components / SSG / SSR for static marketing content.
- Use client components only for genuine interaction.
- Do not rely on hydration to inject essential copy.
- Use one canonical homepage URL: `https://www.medally.ai/`.
- Prevent unnecessary parameterized duplicates from becoming indexable alternatives.
- Keep marketing pages and `app.medally.ai` authentication/utility URLs logically separated for indexing.
- Ensure XML sitemap entries contain only intended canonical, indexable marketing URLs.
- Test the page with JavaScript enabled and disabled after deployment.

---

# 9. Core Web Vitals / Performance

The previously reported homepage LCP of approximately **9.51 seconds** came from a Lighthouse/SEMrush lab audit. Treat it as a diagnostic warning, not as proof of real-user Core Web Vitals performance.

### P0 actions

- Identify the actual homepage LCP element.
- Do not lazy-load the above-the-fold LCP image.
- Optimize hero media dimensions, format, and delivery.
- Reduce unused JavaScript and hydration.
- Defer non-critical third-party scripts.
- Reduce long main-thread tasks.
- Optimize fonts and avoid unnecessary weights.
- Preserve the site's strong layout stability while improving loading performance.

### Verification

After deployment check:

1. Lighthouse/PageSpeed lab results
2. Search Console Core Web Vitals / CrUX field data when available
3. SEMrush Site Audit
4. rendered HTML
5. Search Console URL Inspection

Do not report a lab score as real-user CWV.

---

# 10. Claims and Medical-Safety Guardrails

Do not add unverified claims involving:

- documentation accuracy percentages,
- diagnostic accuracy,
- coding accuracy,
- time saved,
- percentage reduction in workload,
- improved patient outcomes,
- rejection-rate reductions,
- autonomous clinical decisions,
- unsupported guideline counts,
- unsupported language counts,
- unsupported integration coverage,
- unsupported compliance/certification claims,
- unsupported security/retention/training claims.

Concrete capability descriptions are encouraged, but they must match the current production product.

---

# 11. Architecture / Cannibalization Rule

Do **not** assume separate URLs automatically prevent cannibalization.

Before launching both:

- `/clinical-documentation-ai`
- `/ambient-clinical-documentation`

compare the live US SERPs, ranking-page types, competitor URL overlap, and search intent.

If Google treats the queries as substantially the same intent, build **one stronger documentation hub** instead of two thin overlapping pages.

The already-approved `/ai-medical-scribe` page remains distinct because it serves a clear product/category evaluation intent.

---

# 12. Launch Blockers

Resolve these before publication:

1. **Security/privacy copy:** Approve the exact facts MedAlly can publicly state about HIPAA, BAA, retention, encryption, and model training.
2. **Privacy/security destination:** Confirm the canonical URL used for trust links.
3. **EHR integrations:** Confirm any specific EHR names before they are added to visible copy.
4. **Trust evidence:** Use only verified customer testimonials, logos, case studies, or certifications.
5. **Company/legal identity:** Standardize the exact legal/company relationship sitewide before exposing it in Organization schema.
6. **Free plan:** Keep **10 free encounters per month** synchronized with `/pricing`.

---

# 13. Developer Acceptance Checklist

- [ ] Title is `Clinical AI Platform for Physicians | MedAlly`
- [ ] Meta description is implemented server-side
- [ ] Canonical is `https://www.medally.ai/`
- [ ] Exactly one H1
- [ ] H1 clearly says `Clinical AI Platform for Physicians`
- [ ] Hero explains actual product behavior
- [ ] Forever Free states **10 free encounters per month**
- [ ] “What Is MedAlly?” answer is visible near the top
- [ ] Product workflow uses concrete inputs/outputs
- [ ] SOAP-style documentation wording remains accurate
- [ ] ICD-10/CPT context wording remains accurate
- [ ] Physician review/approval is explicit
- [ ] EHR wording does not overstate integration support
- [ ] No “MedAlly is being built” language
- [ ] No unsupported numerical performance claims
- [ ] Practical buyer FAQs replace repetitive definition-only FAQs
- [ ] FAQPage rich-result markup is not added
- [ ] Organization/WebSite/WebPage schema matches visible content
- [ ] Critical content is server-rendered
- [ ] Internal links point only to live pages
- [ ] `/ai-medical-scribe` is linked contextually when live
- [ ] No thin ambient/documentation page is launched without SERP-intent validation
- [ ] LCP is re-tested after deployment
- [ ] Lab vs field CWV is reported correctly
- [ ] Search Console URL Inspection is completed
- [ ] SEMrush crawl is rerun after deployment

---

# 14. Final Homepage Positioning

> **MedAlly is a Clinical AI Platform for physicians.**
>
> It turns encounter context into structured documentation, organized clinical context, reviewable decision-support information, and coding context.
>
> Physicians review and approve what moves forward.
>
> **Forever Free includes 10 free encounters per month.**
>
> **Clinical Workflow Intelligence** describes MedAlly's broader approach to keeping those parts of the encounter connected rather than treating the note as the end of the workflow.

This is the homepage message that should remain consistent across MedAlly's SEO, product pages, FAQs, structured entity information, and future AI-search optimization work.
