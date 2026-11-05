# MedAlly Homepage SEO + GEO + AEO  
## Developer Implementation Specification

**Primary SEO category:** Clinical AI Platform  
**Differentiated positioning:** Clinical Workflow Intelligence  
**Primary conversion goals:** Start Free · Forever Free · Book a Demo  
**Technology:** React / Vite

> **Implementation objective:** Rebuild the MedAlly homepage so search engines, physicians, and AI systems clearly understand MedAlly as a **Clinical AI Platform**, while establishing **Clinical Workflow Intelligence** as the differentiated category territory.

---

# 1. Executive Implementation Summary

This document is the homepage implementation brief. It contains the final SEO ownership model, metadata, heading structure, production-ready copy, internal-link plan, schema requirements, Vite requirements, Core Web Vitals priorities, and acceptance criteria.

> **Category rule:** The homepage owns the parent category **Clinical AI Platform**. Dedicated landing pages will own high-intent subcategories such as **AI Medical Scribe**, **Clinical Documentation AI**, **Clinical Workflow Software**, **Ambient Clinical Documentation**, and **AI-Assisted Medical Coding**.

---

# 2. Homepage SEO Ownership

| Item | Target | US SEMrush signal | Decision |
|---|---|---:|---|
| Primary keyword territory | `clinical ai` | Volume 1,000 · KD 56 · CPC $3.29 | Homepage target |
| Parent category | Clinical AI Platform | Category descriptor | Use consistently |
| Differentiated territory | Clinical Workflow Intelligence | Category-building / GEO | H1 + thought leadership |
| Supporting terms | AI for physicians; clinical workflow; clinical documentation; decision support | Semantic support | Use naturally |

**Important:** Do not make the homepage the primary target for `medical scribe`, `clinical documentation AI`, or `clinical workflow software`. Those intents should be served by dedicated landing pages to reduce cannibalization.

---

# 3. Final SEO Metadata

**Canonical URL**  
`https://www.medally.ai/`

**Title tag**  
`Clinical AI Platform for Physicians & Healthcare Teams | MedAlly`

**Meta description**  
`MedAlly is a clinical AI platform that supports documentation, encounter context, reviewable decision support and coding workflows while keeping physicians in control.`

**H1**  
`Clinical Workflow Intelligence for the Entire Patient Encounter`

**Primary CTA**  
`Start MedAlly Free`

**Secondary CTA**  
`Book a Demo`

---

# 4. Final Homepage Copy — Section by Section

The following copy is developer-ready. Preserve the H1/H2 hierarchy and the intent of each section. Small UX edits are acceptable, but do not change the core product/category meaning without SEO review.

---

## 4.1 Hero

**Purpose:** Immediately define MedAlly's category, differentiated positioning, physician audience, and conversion path.

**Eyebrow**  
`CLINICAL AI PLATFORM FOR PHYSICIANS`

# Clinical Workflow Intelligence for the Entire Patient Encounter

MedAlly helps physicians turn encounter context into structured documentation, organized clinical information, reviewable decision-support context, and coding support—while keeping clinical judgment in the hands of the clinician.

**Primary CTA:** Start MedAlly Free  
**Secondary CTA:** Book a Demo

> **AI prepares. Clinicians review. Clinicians decide.**

### Developer notes

- The H1 must be server-rendered in the initial HTML.
- Do not render the H1 as an image or canvas element.
- Hero media must not delay the H1 or body copy.
- Primary CTA should link directly to the current free-account/start-flow destination.
- Keep critical hero text visible without requiring JavaScript.

---

## 4.2 AEO / GEO Entity Definition

**Purpose:** Give Google and AI systems a clean, extractable definition of MedAlly near the top of the page.

## What is MedAlly?

MedAlly is a clinical AI platform for physicians and healthcare teams. It supports clinical documentation, organizes information from the patient encounter, surfaces reviewable decision-support context, and prepares coding information within a clinician-controlled workflow.

MedAlly is designed to assist clinical work—not replace physician judgment. Clinicians remain responsible for reviewing, editing, validating, and approving outputs before they become part of the care workflow.

### Developer notes

- Place this section high on the page, ideally immediately after the hero.
- Use visible HTML text; do not hide the definition behind tabs or accordions.
- Do not use unsupported numerical performance claims in this section.

---

## 4.3 Problem Framing

**Purpose:** Explain the workflow problem MedAlly addresses without relying on unverified statistics.

## One Patient Encounter Creates More Than a Note

A clinical visit does not end when the patient leaves.

Documentation needs to be completed. Clinical information needs to be reviewed. Relevant context needs to be organized. Coding information may need preparation. Follow-up work may still remain.

When those tasks live across disconnected systems and workflows, the administrative tail of every encounter grows.

MedAlly is designed to help bring that work into a more connected, reviewable clinical workflow.

> **Encounter → Documentation → Clinical Context → Decision Support → Coding Context → Physician Review**

### Developer notes

- The visual process diagram may be graphical, but repeat the step labels in accessible HTML.
- Avoid autoplay animation that delays LCP or creates unnecessary main-thread work.

---

## 4.4 Core Capabilities

**Purpose:** Create a semantic hub that explains capabilities and passes authority to dedicated future landing pages.

## Clinical AI Across the Workflow

MedAlly brings several parts of the clinical workflow into one physician-controlled AI experience.

### AI Clinical Documentation

Turn encounter information into structured clinical documentation for clinician review.

### Encounter Context

Organize relevant information from the clinical encounter so physicians can review the patient picture more efficiently.

### Clinical Decision Support

Surface reviewable clinical information that can support physician reasoning and decision-making.

### Coding Context

Prepare relevant coding information within the clinical workflow for clinician review.

### Clinical Workflow Support

Connect documentation, context, decision-support information, and downstream administrative work around the encounter.

### Internal links

- AI Clinical Documentation → `/clinical-documentation-ai/`
- Clinical Decision Support → `/clinical-decision-support-ai/` *(when live)*
- AI-Assisted Medical Coding → `/ai-medical-coding/` *(when live)*
- Clinical Workflow Software → `/clinical-workflow-software/`

### Developer notes

- Use cards only if all headings and descriptions remain actual HTML text.
- Do not duplicate the same anchor text excessively across the page.

---

## 4.5 Category Differentiation

**Purpose:** Capture AI-scribe relevance while establishing MedAlly as broader than documentation.

## Beyond the AI Medical Scribe

AI medical scribes have made clinical documentation faster and easier for many physicians. But documentation is only one part of the work created by a patient encounter.

MedAlly is being built around a broader idea: **Clinical Workflow Intelligence**.

Instead of treating the note as the end of the workflow, MedAlly connects documentation with encounter context, reviewable clinical information, coding context, and the work that surrounds the visit.

### AI Medical Scribe

Primarily captures and structures documentation.

### Workflow Automation

Moves predefined tasks through a process.

### Clinical Workflow Intelligence

Uses clinical context to help organize and prepare work across the encounter while keeping clinicians responsible for review and decisions.

**CTA:** What is Clinical Workflow Intelligence? → `/clinical-workflow-intelligence/`

### Developer notes

- Do not create a competitor-comparison tone in this section.
- Do not imply every AI medical scribe is limited to exactly one capability.
- Keep definitions concise and defensible.

---

## 4.6 How MedAlly Fits Into the Encounter

**Purpose:** Explain the workflow in a way that humans and AI systems can understand.

## How MedAlly Fits Into the Clinical Encounter

1. **Encounter** — The clinician conducts the patient visit.
2. **Documentation** — MedAlly helps structure clinical documentation from encounter information.
3. **Context** — Relevant information is organized into a more reviewable clinical picture.
4. **Clinical Support** — Decision-support information can be surfaced for physician consideration.
5. **Coding Context** — Relevant coding information can be prepared within the workflow.
6. **Physician Review** — The clinician reviews, edits, validates, and decides what moves forward.

**CTA:** See How MedAlly Works → `/how-it-works`

### Developer notes

- Implement as an ordered list or semantic step component.
- Keep all step copy available in server-rendered HTML.

---

## 4.7 Workflow SEO Section

**Purpose:** Support clinical-workflow search relevance and pass internal authority to the workflow landing page.

## Clinical Workflows Should Feel Connected, Not Fragmented

Clinical workflows often span documentation, EHR tasks, patient information, decision support, coding, and follow-up. When those activities are fragmented across different tools, clinicians spend more time switching between systems and less time working within one coherent flow.

MedAlly's approach to clinical workflow intelligence is designed to help organize the work surrounding the patient encounter into a more connected review path.

**CTA:** Explore Clinical Workflow Software → `/clinical-workflow-software/`

### Developer notes

- Do not repeat the exact same workflow copy from the dedicated landing page once it exists.
- Homepage should summarize; landing page should go deeper.

---

## 4.8 Audience Section

**Purpose:** Clarify that MedAlly can serve multiple buyer types without trying to make one page rank for every specialty.

## Built for the People Delivering Care

### Physicians

Reduce friction around documentation and clinical workflow while retaining control over clinical decisions.

### Private & Group Practices

Bring clinical AI into everyday workflows without turning every task into another disconnected tool.

### Clinics

Support clinical documentation and workflow consistency across care teams.

### Hospitals & Health Systems

Use clinical AI as part of broader physician and organizational workflows.

### Developer notes

- Do not create generic specialty pages from this section without dedicated keyword/product-fit research.
- Audience cards can later link to validated specialty/buyer pages.

---

## 4.9 Physician Control / Trust

**Purpose:** Make clinician oversight a consistent MedAlly trust principle.

## Clinical AI Should Support Judgment, Not Replace It

### AI Prepares

MedAlly organizes and drafts information that can support the clinical workflow.

### Clinicians Review

Physicians review, edit, validate, and interpret the information.

### Clinicians Decide

Clinical judgment and final responsibility remain with the clinician.

Healthcare AI becomes more useful when it reduces repetitive work without removing professional accountability. That principle sits at the center of how MedAlly approaches clinical AI.

### Developer notes

- Use this wording consistently across homepage, FAQ, features, and future GEO/AEO pages.
- Avoid language implying autonomous clinical decision-making.

---

## 4.10 Clinical Documentation Acquisition

**Purpose:** Introduce high-demand clinical documentation categories and link to dedicated commercial landing pages.

## From Conversation to Reviewable Clinical Documentation

Clinical documentation is one of the most visible areas where AI can assist physicians. MedAlly helps structure encounter information into clinical documentation that remains subject to clinician review.

**CTA:** Explore AI Clinical Documentation → `/clinical-documentation-ai/`  
**CTA:** Explore AI Medical Scribe → `/ai-medical-scribe/`

### Developer notes

- This homepage section should be concise; the dedicated landing pages will target commercial documentation queries.
- Do not overload this section with keyword variants.

---

## 4.11 Homepage FAQ / AEO Block

**Purpose:** Provide concise answers to high-value entity and category questions.

## Frequently Asked Questions

### What is a clinical AI platform?

A clinical AI platform uses artificial intelligence to support parts of the clinical workflow such as documentation, information organization, decision-support context, and administrative tasks. The clinician remains responsible for interpreting information and making clinical decisions.

### What is MedAlly?

MedAlly is a clinical AI platform designed for physicians and healthcare teams. It supports clinical documentation, encounter-context organization, reviewable decision-support information, coding context, and connected clinical workflows.

### Is MedAlly an AI medical scribe?

MedAlly includes clinical documentation capabilities associated with AI medical scribes, but its broader positioning extends beyond documentation into clinical workflow intelligence, including encounter context, reviewable decision-support information, and coding-related workflow.

### What is clinical workflow intelligence?

Clinical workflow intelligence is the use of context-aware technology to help organize and prepare work across the clinical encounter rather than automating a single isolated task.

### Does MedAlly make clinical decisions for physicians?

No. MedAlly is designed to support physicians with reviewable information. Clinicians remain responsible for reviewing outputs, applying clinical judgment, and making final decisions.

### Who is MedAlly designed for?

MedAlly is designed for physicians, practices, clinics, hospitals, and healthcare organizations looking to integrate clinical AI into clinical and administrative workflows.

**CTA:** View All FAQs → `/faq`

### Developer notes

- FAQ answers must remain visible on the page if FAQ schema is used.
- Do not add FAQ schema automatically; validate current search-engine eligibility before implementation.
- Use semantic `details/summary` accordions only if content remains crawlable and accessible.

---

## 4.12 Final Conversion Section

**Purpose:** End the homepage with a clear product action.

## Bring More of the Clinical Workflow Into One Reviewable Experience

Start with clinical documentation and discover how MedAlly can support the broader workflow surrounding every patient encounter.

**Primary CTA:** Start MedAlly Free  
**Secondary CTA:** Book a Demo

> **AI prepares. Clinicians review. Clinicians decide.**

### Developer notes

- Track both CTAs separately in analytics once GA4 is available.
- Keep CTA URLs consistent sitewide.

---

# 5. Homepage Internal-Link Map

| Destination role | URL | Recommended anchor |
|---|---|---|
| Product hub | `/features` | Features / Clinical AI capabilities |
| Workflow explainer | `/how-it-works` | See How MedAlly Works |
| Pricing | `/pricing` | Pricing / Start Free |
| FAQ | `/faq` | View All FAQs |
| AI Medical Scribe | `/ai-medical-scribe/` | Explore AI Medical Scribe |
| Clinical Documentation AI | `/clinical-documentation-ai/` | Explore AI Clinical Documentation |
| Ambient Clinical Documentation | `/ambient-clinical-documentation/` | Use contextually when live |
| Clinical Workflow Software | `/clinical-workflow-software/` | Explore Clinical Workflow Software |
| Clinical Workflow Intelligence | `/clinical-workflow-intelligence/` | What is Clinical Workflow Intelligence? |
| AI-Assisted Medical Coding | `/ai-medical-coding/` | Use after product-fit review |
| Clinical Decision Support AI | `/clinical-decision-support-ai/` | Use after claims/product review |

---

# 6. Vite / Technical SEO Requirements

- All critical homepage content—title, H1, entity definition, section headings, body copy, FAQ answers, and internal links—must be present in the initial server-rendered HTML.
- Do not depend on client-side JavaScript to inject critical SEO text.
- Prefer Server Components / SSR / SSG for static marketing sections. Use client components only where interaction requires them.
- Use one canonical homepage URL: `https://www.medally.ai/`.
- Do not create duplicate homepage variants through query parameters, trailing-path variants, or alternate canonical destinations.
- Set a unique title and meta description server-side.
- Ensure Open Graph and social metadata use the same stable category language.
- Keep `app.medally.ai` authentication URLs out of marketing sitemaps and out of indexable organic-search pathways.
- Use descriptive, accessible anchor text for internal links.
- Use semantic HTML: one H1, logical H2/H3 hierarchy, lists for ordered steps, buttons for actions, anchors for navigation.

---

# 7. Structured Data Requirements

- Homepage baseline: `Organization` + `WebSite` + `WebPage`.
- `SoftwareApplication` may be included only if the implementation is valid, accurately describes MedAlly, and matches visible content.
- Do not include fabricated ratings, reviews, unsupported accuracy metrics, unsupported time-savings claims, or unsupported clinical outcome claims in JSON-LD.
- Use one consistent entity identifier for MedAlly across applicable schema.
- Validate JSON-LD after deployment with current Google/Rich Results tooling and schema validators.
- `FAQPage` schema must not be added automatically; use only when current eligibility and visible content justify it.

---

# 8. Core Web Vitals / Performance P0

> **Current risk:** SEMrush/Lighthouse currently reports poor mobile Core Web Vitals across tested pages, with homepage LCP approximately **9.51s**. Treat homepage performance as a **P0 implementation requirement**.

- Identify the homepage Largest Contentful Paint element and optimize that element first.
- Do not lazy-load the above-the-fold LCP image.
- Use image correctly with explicit dimensions and modern formats where appropriate.
- Use `priority`, `fetchPriority`, or preload only for genuinely critical above-the-fold assets.
- Reduce unused JavaScript and hydration cost.
- Defer or remove non-critical third-party scripts.
- Avoid large animation libraries for hero-only effects unless performance impact is proven acceptable.
- Optimize font delivery; avoid blocking the hero on multiple font files/weights.
- Eliminate render-blocking resources where practical.
- Maintain the currently strong layout stability; do not introduce CLS while fixing LCP.

---

# 9. Claims / Content Guardrails

- Do not publish numerical MedAlly performance claims unless the company can provide supporting evidence/methodology.
- Do not use unverified accuracy percentages, diagnostic claims, coding accuracy claims, time-saving claims, or outcome claims in homepage copy or schema.
- Do not position MedAlly as making autonomous clinical decisions.
- Do not describe planned capabilities as currently available.
- The current website is the product source of truth until updated internal product documentation is supplied.
- Maintain the trust principle: **AI prepares. Clinicians review. Clinicians decide.**

---

# 10. Accessibility & Content Rendering

- Maintain WCAG-friendly contrast for body copy, buttons, and interactive states.
- Provide meaningful alt text for informative images; use empty alt text for purely decorative imagery.
- Do not place essential copy only inside images.
- All interactive elements must be keyboard accessible.
- Use visible focus states.
- If accordions are used, ensure question text and answer content are accessible to assistive technology and crawlable.

---

# 11. Developer Acceptance Checklist

- [ ] Title tag exactly implemented and unique.
- [ ] Meta description implemented server-side.
- [ ] Canonical points to `https://www.medally.ai/`.
- [ ] Exactly one H1: **Clinical Workflow Intelligence for the Entire Patient Encounter**.
- [ ] Entity-definition section visible near the top of the page.
- [ ] Critical content available in initial HTML with JavaScript disabled.
- [ ] No unsupported numerical claims introduced.
- [ ] All planned internal links use valid destinations or remain unpublished until destination pages are live.
- [ ] No broken links.
- [ ] Marketing sitemap contains only intended indexable URLs.
- [ ] Authentication/query-parameter app URLs are not exposed as SEO landing pages.
- [ ] JSON-LD validates and matches visible content.
- [ ] Hero image/media optimized for LCP.
- [ ] No above-the-fold asset accidentally lazy-loaded if it is the LCP element.
- [ ] No unnecessary client-side hydration for static copy.
- [ ] Mobile layout tested at common breakpoints.
- [ ] CTA buttons tested.
- [ ] Heading order validated.
- [ ] Image alt text completed.
- [ ] Post-deployment crawl performed with JS rendering ON and OFF for comparison.
- [ ] Post-deployment Lighthouse/PageSpeed test captured for homepage.

---

# 12. Phase-1 Dependencies / Vite Pages

| Priority | Page | Why it matters |
|---|---|---|
| P0 | `/ai-medical-scribe/` | Largest established acquisition category; medical scribe demand is substantial. |
| P0 | `/clinical-documentation-ai/` | Strong documentation cluster; supports high-intent clinical-note searches. |
| P0 | `/clinical-workflow-software/` | Low-to-moderate difficulty workflow terms with strong product relevance. |
| P0 | `/features` | Product capability hub and internal-link authority source. |
| P0 | `/how-it-works` | Entity/process clarity and conversion support. |
| P0 | `/pricing` | Conversion page; indexable plan detail required. |
| P0 | `/faq` | AEO/GEO answer hub. |
| P1 | `/clinical-workflow-intelligence/` | Category ownership and AI/entity differentiation. |

> **Final implementation rule:** Do not optimize the homepage by stuffing every target keyword into one URL. The homepage owns the parent category. Dedicated landing pages own distinct commercial intents. This architecture is required to build topical authority without cannibalization.
