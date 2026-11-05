# MedAlly — AI Medical Scribe Landing Page
## Final SEO + GEO + AEO Developer Specification

**Status:** Production-ready content specification, subject only to explicitly marked launch blockers  
**Recommended URL:** `/ai-medical-scribe`  
**Canonical:** `https://www.medally.ai/ai-medical-scribe`  
**Page type:** Commercial product landing page  
**Priority:** P0  
**Primary conversion:** Start MedAlly Free  
**Secondary conversion:** Book a Demo  
**Parent category:** Clinical AI Platform  
**Differentiated positioning:** Clinical Workflow Intelligence  
**Primary audience:** Physicians, practices, clinics, hospitals, and health systems

> **Core page objective:** Capture qualified AI medical-scribe and ambient-scribe demand, explain MedAlly clearly, and move visitors from documentation intent into MedAlly's broader Clinical Workflow Intelligence story.

---

# 1. Final SEO Ownership

This page owns the **AI medical scribe / ambient scribe / medical scribe software** commercial-intent cluster.

It must **not** try to own every clinical-documentation or workflow keyword on the site.

## Keyword Map

| Keyword | Role | US Volume | KD | CPC | Exact Phrase Required on Page? |
|---|---|---:|---:|---:|---|
| `medical scribe` | Broad parent-market term; mixed intent | 18,100 | 49 | $2.63 | Yes |
| `ambient scribe` | Strong supporting opportunity | 1,300 | 27 | $5.12 | Yes |
| `ambient ai scribe` | Supporting ambient-AI term | 1,300 | 52 | $5.64 | Yes |
| `ambient medical scribe` | Supporting long-tail term | 480 | 41 | $7.51 | Yes |
| `medical scribe software` | Commercial supporting term | 390 | 46 | $9.57 | Yes |
| `free ai medical scribe` | Conversion-focused supporting term | 390 | 33 | $16.72 | Yes |
| `ai medical scribe software` | High-commercial-intent variant | 110 | 39 | $22.28 | Yes |
| `hipaa compliant ai medical scribe` | High-value compliance query | 1,600 | 45 | $25.64 | Yes, but only in non-claim/evaluation wording until compliance wording is internally approved |
| `medical ai scribe` | Semantic variant | 390 | 50 | $15.35 | No — semantic coverage is sufficient |
| `ai scribe medical` | Awkward query variant | 880 | 56 | $10.48 | No — do not force unnatural exact wording |

### Important data note

The filtered SEMrush export did **not** provide a reliable exact-match metric for the singular phrase `ai medical scribe`. Do not invent a volume for it. The page targets that commercial category because the surrounding AI-scribe/ambient-scribe cluster shows clear demand.

### Intent note

The broad term `medical scribe` contains mixed intent, including human-scribe, career, and informational searches. Do not forecast page traffic from the full 18,100 volume. The qualified opportunity is the **AI/ambient/software subset** of the cluster.

---

# 2. Keywords Reserved for Other MedAlly Pages

To prevent cannibalization:

| Keyword / Topic | Owner |
|---|---|
| `clinical ai` | Homepage `/` |
| `ai clinical documentation` | `/clinical-documentation-ai` |
| `clinical notes ai` | `/clinical-documentation-ai` |
| `ambient clinical documentation` | `/ambient-clinical-documentation` |
| `clinical workflow software` | `/clinical-workflow-software` |
| `clinical workflow intelligence` | `/clinical-workflow-intelligence` |
| `best ai medical scribe` | Future comparison/editorial page |
| medical dictation software comparisons | Future comparison/editorial content |

This page may mention those concepts naturally and link to their owner pages, but it must not be optimized as their primary destination.

---

# 3. Final Metadata

**Title tag**  
`AI Medical Scribe for Physicians | MedAlly`

**Meta description**  
`MedAlly helps physicians turn patient encounters into reviewable clinical notes with ambient AI, then connects documentation to the broader clinical workflow.`

**Canonical URL**  
`https://www.medally.ai/ai-medical-scribe`

**H1**  
`AI Medical Scribe That Goes Beyond the Note`

**Robots**  
`index, follow`

Do not apply restrictive snippet controls to this page. If a robots meta tag is explicitly configured, allow normal text, image, and video previews.

## Social metadata

**Open Graph title**  
`AI Medical Scribe for Physicians | MedAlly`

**Open Graph description**  
`Turn patient encounters into reviewable clinical documentation with ambient AI, then connect the note to a broader physician-controlled workflow.`

**Open Graph URL**  
`https://www.medally.ai/ai-medical-scribe`

**Preferred social/search image**  
Use one original, high-quality MedAlly product visual at least 1200 px wide. Do not place critical page copy only inside the image.

---

# 4. Production Page Copy

## 4.1 Hero

**Eyebrow:**  
`AI MEDICAL SCRIBE FOR PHYSICIANS`

# AI Medical Scribe That Goes Beyond the Note

MedAlly helps physicians turn patient encounters into structured, reviewable clinical documentation with ambient AI—while keeping the note connected to the broader clinical workflow.

**Primary CTA:** `Start MedAlly Free`  
**Secondary CTA:** `Book a Demo`

> **AI prepares. Clinicians review. Clinicians decide.**

### Developer requirements

- Render the H1, hero paragraph, and CTAs in the initial HTML.
- Do not put the H1 or core copy inside an image, canvas, or client-only component.
- Keep hero media lightweight.
- Do not lazy-load the actual LCP image.
- Keep the CTA destinations consistent with the rest of the MedAlly site.

---

## 4.2 Direct Answer Block

## What Is an AI Medical Scribe?

An **AI medical scribe** is software that uses artificial intelligence to help turn a clinician-patient encounter into draft clinical documentation. An **ambient AI scribe** can capture the clinical conversation during the visit and organize relevant encounter information into a structured note for clinician review.

MedAlly supports this documentation workflow while connecting the encounter to additional reviewable clinical context rather than treating the note as an isolated output.

### AEO / GEO purpose

This answer should remain visible in normal HTML. It is designed to answer the category question directly for physicians, search engines, and AI systems.

---

## 4.3 Problem / Search-Intent Bridge

## A Medical Scribe Helps With the Note. The Encounter Creates More Work.

A **medical scribe** addresses an important part of the physician workflow: clinical documentation.

But the work created by an encounter can continue after the note is drafted. Physicians may still need to review clinical context, consider relevant decision-support information, prepare coding context, and complete downstream workflow.

MedAlly is designed to keep documentation connected to that broader review path.

---

## 4.4 How MedAlly Supports the Encounter

## From Patient Conversation to Reviewable Clinical Documentation

### 1. Capture Encounter Context

MedAlly uses information from the patient encounter to support ambient clinical documentation while the physician remains focused on the visit.

### 2. Prepare the Draft Note

Relevant encounter information is organized into structured clinical documentation for clinician review.

### 3. Review, Edit, and Approve

The clinician reviews, edits, validates, and approves the documentation.

### 4. Continue the Workflow

The same encounter context can support other reviewable parts of the MedAlly workflow, including organized clinical information, decision-support context, and coding context.

**Internal link:** **See How MedAlly Works** → `/how-it-works`

### Content guardrail

Do not change this wording to imply that MedAlly autonomously signs notes, commits data to an EHR without review, makes final clinical decisions, or submits billing without an appropriate clinician-controlled process unless the exact capability has been verified for the production product.

---

## 4.5 Ambient Scribe Section

## Ambient Scribe Support Without Losing Physician Control

An **ambient scribe** is designed to reduce the need for clinicians to manually build the note while the patient visit is happening.

For physicians evaluating an **ambient medical scribe**, MedAlly helps transform encounter context into structured, reviewable clinical documentation while keeping the clinician responsible for the final output.

The goal is not simply to create more text. It is to make the documentation useful within the clinical workflow that follows the encounter.

**Internal link:** **AI Clinical Documentation** → `/clinical-documentation-ai`

---

## 4.6 Medical Scribe Software Section

## What Should Physicians Look for in AI Medical Scribe Software?

When evaluating **AI medical scribe software**, physicians and healthcare organizations should look beyond how quickly a draft note can be generated.

The right **medical scribe software** should be evaluated for:

- Documentation quality and structure
- Clinician review and editing controls
- Fit with the existing clinical workflow
- Privacy and security practices
- EHR or clinical-system compatibility
- Specialty and documentation requirements
- Data-handling transparency
- Pricing and implementation model

MedAlly should only claim support for a specific integration, workflow, security control, or specialty capability where that capability is verified in the production product.

---

## 4.7 MedAlly Differentiation

## Beyond the AI Medical Scribe

AI medical scribes can reduce friction around documentation. MedAlly's broader product direction is to keep that documentation connected to more of the encounter workflow.

### Documentation

Prepare structured clinical documentation from encounter context for clinician review.

### Organized Clinical Context

Keep relevant encounter information available in a more reviewable form.

### Reviewable Decision-Support Context

Surface information that may support clinical reasoning while leaving interpretation and final decisions with the clinician.

### Coding Context

Prepare coding-related context as part of the reviewable workflow.

### Clinical Workflow Intelligence

Connect those elements around the same encounter instead of treating each task as a separate point solution.

**Internal link:** **Clinical Workflow Intelligence** → `/clinical-workflow-intelligence`

---

## 4.8 HIPAA / Security Search-Intent Section

## What Should a HIPAA Compliant AI Medical Scribe Provide?

When physicians or healthcare organizations search for a **HIPAA compliant AI medical scribe**, the buying decision should include more than the quality of the generated note.

Teams should verify the vendor's actual handling of protected health information, applicable contractual protections such as a Business Associate Agreement where required, data retention practices, encryption, access controls, and policies governing the use of clinical data.

Before deployment, organizations should review the vendor's current security and privacy documentation rather than relying only on marketing language.

### MedAlly publication rule

MedAlly's current public website contains HIPAA and BAA-related claims. Before this landing page makes a direct compliance claim about MedAlly, the exact wording must be reconfirmed by the MedAlly security/legal owner and matched to current policies.

**Do not remove the keyword from this section.** Until approval is confirmed, it is intentionally used as an evaluation query, not an unverified legal claim.

**Internal link:** **Privacy / Security Information** → use the confirmed canonical MedAlly privacy/security destination when available.

---

## 4.9 Free Plan Conversion Section

## Looking for a Free AI Medical Scribe?

Physicians looking for a **free AI medical scribe** can start with MedAlly's **Forever Free plan, which includes 10 free encounters per month**.

This gives physicians a practical way to experience AI-assisted clinical documentation before deciding whether a paid plan or broader practice deployment is right for them.

MedAlly helps turn encounter context into structured, reviewable clinical documentation while keeping the clinician responsible for reviewing and approving the final output.

**Primary CTA:** **Start MedAlly Free** → current MedAlly signup/app URL  
**Internal link:** **View Pricing** → `/pricing`

### Implementation rule for free-plan limits

The current MedAlly Forever Free plan includes **10 free encounters per month**.

To prevent pricing-content drift, the developer should pull this value from the same shared pricing/config source used by `/pricing` wherever technically possible. If the plan limit changes in the future, update both the pricing page and this landing page at the same time.

---

## 4.10 Workflow Expansion Section

## What Happens After the Note?

Clinical documentation is an important part of the encounter, but the workflow does not always end when the note is drafted.

MedAlly's broader clinical AI approach keeps documentation connected to additional reviewable workflow context.

**Internal pathways:**

- **AI Clinical Documentation** → `/clinical-documentation-ai`
- **Clinical Workflow Software** → `/clinical-workflow-software`
- **Clinical Workflow Intelligence** → `/clinical-workflow-intelligence`
- **See How MedAlly Works** → `/how-it-works`

---

## 4.11 Audience Section

## AI Medical Scribing for Physicians and Healthcare Teams

### Individual Physicians

Use AI-assisted documentation to reduce manual note-building while maintaining control over the clinical record.

### Private and Group Practices

Introduce AI documentation into everyday clinical workflows with a path to broader MedAlly capabilities.

### Clinics

Support consistent, reviewable documentation workflows across clinicians and encounters.

### Hospitals and Health Systems

Evaluate ambient documentation as one component of a broader clinical AI and workflow strategy.

---

## 4.12 FAQ / AEO Section

> Keep these questions and answers visible and crawlable. The FAQ is for users, answer extraction, and query coverage—not for a Google FAQ rich result.

### What is an AI medical scribe?

An AI medical scribe uses artificial intelligence to help prepare draft clinical documentation from a patient encounter. The clinician reviews and approves the generated documentation before it becomes part of the clinical workflow.

### What is an ambient AI scribe?

An ambient AI scribe uses the clinical conversation and encounter context to help prepare structured documentation while the visit is taking place, reducing the need to manually build the note from scratch.

### Is MedAlly an AI medical scribe?

MedAlly includes AI-assisted clinical documentation capabilities associated with AI medical scribes, but its broader positioning extends beyond the note into Clinical Workflow Intelligence, including organized encounter context, reviewable decision-support information, and coding context.

### What is the difference between an AI medical scribe and medical dictation software?

Medical dictation software primarily converts dictated speech into text. An AI medical scribe is designed to use more of the encounter context to help organize a draft clinical note for clinician review.

### Does MedAlly replace physician review?

No. MedAlly is designed to assist the clinical workflow. Clinicians remain responsible for reviewing, editing, validating, and approving clinical outputs and for making final clinical decisions.

### Is there a free AI medical scribe for physicians?

Yes. MedAlly's **Forever Free plan includes 10 free encounters per month**, giving physicians a way to experience AI-assisted clinical documentation before moving to a paid plan. The pricing page should remain the source of truth for current plan limits and included capabilities.

### What should I verify when choosing a HIPAA compliant AI medical scribe?

Healthcare organizations should verify the vendor's current privacy and security documentation, handling of protected health information, BAA availability where applicable, retention practices, encryption, access controls, and clinical-data policies.

**Internal link:** **View All FAQs** → `/faq`

---

## 4.13 Final Conversion Section

## Turn the Encounter Into a Reviewable Clinical Workflow

Use MedAlly to help turn encounter context into reviewable clinical documentation—and keep the note connected to the broader work surrounding the visit.

**Primary CTA:** **Start MedAlly Free** → current MedAlly signup/app URL  
**Secondary CTA:** `Book a Demo`

> **AI prepares. Clinicians review. Clinicians decide.**

---

# 5. Exact Keyword Placement QA

The following phrases are intentionally present in the production copy:

| Required Phrase | Required Location | Status |
|---|---|---|
| `AI medical scribe` | Title, H1/category copy, definition, FAQ | PASS |
| `medical scribe` | Early body copy | PASS |
| `ambient scribe` | H2 + body | PASS |
| `ambient AI scribe` | Direct-answer block + FAQ | PASS |
| `ambient medical scribe` | Ambient section | PASS |
| `medical scribe software` | Commercial evaluation section | PASS |
| `AI medical scribe software` | Commercial evaluation H2/body | PASS |
| `free AI medical scribe` | Conversion H2/body + FAQ | PASS |
| `HIPAA compliant AI medical scribe` | Security/evaluation section + FAQ | PASS |

### Deliberately not forced

- `ai scribe medical`
- `medical ai scribe`

These are covered semantically. Do not damage readability to achieve exact-match repetition.

---

# 6. Internal Linking Requirements

| Destination | Anchor | Role |
|---|---|---|
| `/` | **Clinical AI Platform** | Parent entity/category |
| `/clinical-documentation-ai` | **AI Clinical Documentation** | Documentation depth |
| `/clinical-workflow-software` | **Clinical Workflow Software** | Workflow acquisition |
| `/clinical-workflow-intelligence` | **Clinical Workflow Intelligence** | Differentiated category |
| `/how-it-works` | **See How MedAlly Works** | Product process |
| `/features` | **MedAlly Features** | Capability hub |
| `/pricing` | **View Pricing** | Conversion |
| `/faq` | **View All FAQs** | Support / answer hub |
| signup destination | **Start MedAlly Free** | Primary conversion |

### Homepage link to this page

On the homepage, use:

**Explore AI Medical Scribe** → `/ai-medical-scribe`

### Link-launch rule

Do not ship links to unpublished/404 pages. If a destination page is not live yet, either publish the destination first or temporarily omit that contextual link and add it as soon as the destination launches.

---

# 7. Heading Structure

```text
H1: AI Medical Scribe That Goes Beyond the Note

H2: What Is an AI Medical Scribe?
H2: A Medical Scribe Helps With the Note. The Encounter Creates More Work.
H2: From Patient Conversation to Reviewable Clinical Documentation
  H3: Capture Encounter Context
  H3: Prepare the Draft Note
  H3: Review, Edit, and Approve
  H3: Continue the Workflow
H2: Ambient Scribe Support Without Losing Physician Control
H2: What Should Physicians Look for in AI Medical Scribe Software?
H2: Beyond the AI Medical Scribe
  H3: Documentation
  H3: Organized Clinical Context
  H3: Reviewable Decision-Support Context
  H3: Coding Context
  H3: Clinical Workflow Intelligence
H2: What Should a HIPAA Compliant AI Medical Scribe Provide?
H2: Looking for a Free AI Medical Scribe?
H2: What Happens After the Note?
H2: AI Medical Scribing for Physicians and Healthcare Teams
  H3: Individual Physicians
  H3: Private and Group Practices
  H3: Clinics
  H3: Hospitals and Health Systems
H2: Frequently Asked Questions
  H3: each question
H2: Turn the Encounter Into a Reviewable Clinical Workflow
```

Use exactly **one H1**.

---

# 8. Structured Data — Final Rule

## Implement

1. `WebPage`
2. `BreadcrumbList`
3. Reference the site's existing `Organization` entity by a consistent `@id` if the sitewide Organization schema is valid.

Suggested breadcrumb:

`Home → AI Medical Scribe`

## Do not implement FAQPage schema for Google rich results

Keep the visible FAQ because it helps users and provides clear answer content, but **do not add FAQPage markup expecting a Google FAQ rich result**.

## Do not add SoftwareApplication rich-result markup yet

The current MedAlly audit already reports invalid software-app markup. Do not repeat that error on this page.

Only implement Google's `SoftwareApplication`/`WebApplication` rich-result markup after all required data is genuinely available and visible.

Never manufacture a rating or review to satisfy structured-data requirements.

---

# 9. GEO / AEO Implementation Rules

For Google AI experiences and general AI retrieval:

- Keep important information indexable and publicly crawlable.
- Keep key product facts in visible text.
- Use clear section headings and direct answers.
- Maintain consistent entity language across homepage, this page, Features, How It Works, Pricing, FAQ, About, and future landing pages.
- Link related pages contextually so crawlers can understand topic relationships.
- Add useful original MedAlly product visuals where they improve understanding.
- Keep structured data consistent with visible content.
- Do not create duplicate pages for every query variation.
- Do not create thin “GEO pages” solely to manipulate AI answers.
- Do not use hidden AI-only content.
- Do not claim that any SEO/GEO/AEO implementation guarantees citation in ChatGPT, Gemini, Perplexity, AI Overviews, or AI Mode.

### MedAlly entity statement to keep consistent

> **MedAlly is a clinical AI platform for physicians and healthcare teams that supports clinical documentation, organizes encounter context, surfaces reviewable decision-support information, and prepares coding context while clinicians remain in control.**

Use equivalent wording consistently across the site rather than introducing conflicting product definitions.

---

# 10. Next.js Technical SEO Requirements

- Render title, meta description, canonical, H1, body copy, FAQ content, and contextual links server-side.
- Critical content must be available in the HTML response and not depend on user interaction.
- Prefer Server Components/SSG/SSR for static marketing content.
- Keep client components limited to genuine interactive features.
- Do not publish duplicate parameterized versions of this landing page.
- Canonicalize to `https://www.medally.ai/ai-medical-scribe`.
- Match the site's no-trailing-slash URL convention unless the global Next.js configuration is deliberately changed sitewide.
- Include the page in the XML sitemap only after it is complete and indexable.
- Do not block the page in robots.txt.
- Do not apply `noindex`.
- Do not use client-only redirects for the canonical URL.
- Test rendered HTML with and without JavaScript after deployment.

---

# 11. Performance / Core Web Vitals Requirements

The existing MedAlly audit has shown serious LCP and JavaScript/main-thread issues on marketing pages, so this landing page must not repeat those problems.

### P0

- Optimize the LCP element.
- Do not lazy-load the above-the-fold LCP image.
- Use correctly sized responsive images.
- Minimize unused JavaScript.
- Avoid large animation dependencies for decorative effects.
- Defer non-critical third-party scripts.
- Optimize fonts and avoid unnecessary weights.
- Reserve media dimensions to preserve CLS.
- Keep static copy out of unnecessarily hydrated components.

### Post-launch

Run:

- mobile Lighthouse/PageSpeed
- SEMrush Site Audit
- rendered HTML check
- Search Console URL Inspection
- Rich Results Test for implemented schema

---

# 12. Content / Claim Guardrails

Do not introduce any unverified claim involving:

- documentation accuracy percentages
- diagnostic accuracy
- coding accuracy
- guaranteed time savings
- percentage reduction in workload
- clinical outcomes
- autonomous final clinical decisions
- unsupported specialty coverage
- unsupported EHR integrations
- unsupported language counts
- unsupported compliance/certification claims
- unsupported BAA, encryption, retention, or model-training statements

For medical/clinical claims, prefer precise descriptions of what the software prepares or surfaces and explicitly retain clinician review and responsibility.

---

# 13. Launch Blockers

The page is ready from an SEO/content architecture perspective, but the following items must be resolved before publishing related claims or links:

1. **HIPAA/security wording:** Security/legal owner reconfirms the exact MedAlly compliance statement to use publicly.
2. **Privacy/security URL:** Confirm the canonical, indexable destination before adding the security CTA.
3. **Free-plan limit:** The current Forever Free plan includes **10 free encounters per month**. Pull this value from a shared pricing source where possible and reconfirm it at deployment so the landing page and `/pricing` remain synchronized.
4. **Internal links:** Do not expose links to planned pages until those pages exist.
5. **Schema:** Remove/avoid invalid SoftwareApplication markup unless current requirements can be satisfied honestly.

---

# 14. Developer Acceptance Checklist

- [ ] URL uses `/ai-medical-scribe`
- [ ] Canonical is `https://www.medally.ai/ai-medical-scribe`
- [ ] Unique title implemented server-side
- [ ] Unique meta description implemented server-side
- [ ] Exactly one H1
- [ ] H1 includes `AI Medical Scribe`
- [ ] Required keyword phrases pass the placement table
- [ ] `free AI medical scribe` appears in visible conversion copy
- [ ] Forever Free plan states **10 free encounters per month** and matches `/pricing`
- [ ] `medical scribe software` appears in visible commercial-evaluation copy
- [ ] `ambient scribe` appears in visible ambient copy
- [ ] `HIPAA compliant AI medical scribe` appears only in safe evaluation wording until direct compliance language is approved
- [ ] No keyword stuffing
- [ ] No unsupported numerical claims
- [ ] No unsupported clinical claims
- [ ] Clinician review/control remains explicit
- [ ] Critical content exists in initial HTML
- [ ] Contextual internal links point only to live destinations
- [ ] Breadcrumb implemented visibly and/or in valid schema
- [ ] `WebPage` + `BreadcrumbList` schema validates
- [ ] Invalid `SoftwareApplication` markup is not copied to this page
- [ ] `FAQPage` rich-result markup is not added
- [ ] Hero/LCP asset optimized
- [ ] Mobile performance tested
- [ ] Page included in XML sitemap after launch
- [ ] Search Console URL Inspection requested after deployment
- [ ] SEMrush crawl run after deployment
- [ ] Position tracking configured for this cluster

---

# 15. Measurement Plan

Track this page independently.

### SEO

- Non-branded impressions
- Non-branded clicks
- Average position
- Ranking keyword count
- Top 100 / Top 20 / Top 10 terms
- `ambient scribe`
- `medical scribe software`
- `free AI medical scribe`
- AI/ambient-scribe variants

### Conversion

- Start Free clicks
- Completed signups from organic traffic
- Pricing-page clicks
- Demo requests
- Conversion rate by organic landing page

### Generative Search

Continue monitoring:

- cited-page visibility
- brand mentions
- queries/themes that surface this URL

Do not use third-party AI visibility scores as the only success metric.

---

# 16. Final Page Positioning

> **The homepage tells the market what MedAlly is: a Clinical AI Platform.**
>
> **This page captures AI medical-scribe and ambient-scribe demand.**
>
> **The page then shows why MedAlly's value extends beyond the note through Clinical Workflow Intelligence.**
