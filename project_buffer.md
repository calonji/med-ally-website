# Project Buffer: MedAlly Website

## 🌟 Project Overview
MedAlly is a modern, responsive, and highly aesthetic clinical AI platform designed to alleviate physician burnout by automating documentation, diagnostics, billing, and workflow orchestration. It functions as an "all-in-one AI platform" or a "clinical command layer" that keeps the clinician in control while automating the administrative overhead surrounding patient encounters.

## 🛠 Tech Stack & Architecture
- **Framework**: React (v18) with Vite and TypeScript
- **Styling**: Tailwind CSS with Custom CSS for advanced effects (e.g., glassmorphism, Apple-style cards/buttons, radial gradients, float/pulse animations)
- **Routing**: React Router DOM (v6)
- **Components**: Headless UI primitives via `@radix-ui` and icons via `lucide-react`
- **Animations**: Framer Motion & Remotion (for video assets)
- **SEO**: `react-helmet-async`, custom static pre-rendering scripts (`scripts/prerender-static-seo.mjs`), and automated sitemap generation
- **Build Tools**: ESLint, TypeScript, Vitest, Playwright (E2E)

## 🎨 Design & Aesthetic System
- **Main Colors**:
  - **Teal** (`#36b7b5`): Represents primary workflow elements.
  - **Purple** (`#4b2683`): Used as a secondary accent color.
  - **Mint / Yellow** (`#fccc03`): Clarifying accents.
  - **Coral / Red** (`#e41e3a`): Sparingly used to indicate "before-state" or friction points.
- **Aesthetic Feel**: Premium, dark-themed with Glassmorphism (`.glass`, `.glass-dark` and backdrop filters), smooth animations (`animate-float`, `animate-blob`), and Apple-style tactile feedback.

## ⚙️ The 16 Intelligent Agents
Based on `Knowlegebase.txt`, the platform organizes 16 specialized agents across several layers:

1. **MedAlly ScribeAI** (Multilingual AI Scribe & Predictive Clinical Notes)
2. **MedAlly DocFlow** (Comprehensive Clinical Notes & Documentation)
3. **MedAlly LabIntel** (Lab Follow-Up & Predictive Results Analysis)
4. **MedAlly Diagnostix** (Predictive Differential Diagnosis & Clinical Ranking)
5. **MedAlly TestGuide** (Diagnostic Plan & Prioritized Testing)
6. **MedAlly Insight** (Diagnostic Tests & AI-Powered Findings)
7. **MedAlly CarePath** (Predictive Clinical Guidelines)
8. **MedAlly TreatWise** (Step-by-Step Predictive Treatment Implementation)
9. **MedAlly RxGen** (AI-Powered Medications & Dosage Optimization)
10. **MedAlly Pulse** (Predictive Patient Monitoring & Trend Analysis)
11. **MedAlly Shield** (Contingency Plans for High-Risk Patients)
12. **MedAlly IntelliCare** (AI-Driven Clinical Recommendations)
13. **MedAlly NeuroLearn** (Evidence-Based AI Learning)
14. **MedAlly SpecialtySync** (Tailored to Your Specialty / Smart AI Adaptation)
15. **MedAlly CommsAI** (Adaptive AI Communication - Tone, Style, Complexity)
16. **MedAlly Codex** (Comprehensive AI-Powered Medical Coding & Billing)

> [!NOTE]
> The dedicated `AIAgents.tsx` component defines all 16 of these agents precisely, but it is currently defined in `src/components/AIAgents.tsx` and **not yet integrated/rendered anywhere** in the routing or page layouts.

---
## 🗺 Existing Workspace Map
- `src/pages/`: LandingPage, FeaturesPage, AboutUsPage, BenefitsPage, ROICalculatorPage, PricingPage, Contact, FAQ, TermsOfService, PrivacyPolicy.
- `src/components/`: Predefined UI blocks such as Hero, Pricing, CaseStudies, etc.
- `src/index.css`: Stores the `:root` theme colors and custom Tailwind utility layers.
