import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteUrl = 'https://www.medally.ai';
const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const shell = readFileSync(join(distDir, 'index.html'), 'utf8');

const commonLinks = [
  ['Home', '/'],
  ['AI Clinical Documentation', '/clinical-documentation-ai'],
  ['AI Medical Scribe', '/ai-medical-scribe'],
  ['Features', '/features'],
  ['How It Works', '/how-it-works'],
  ['Benefits', '/benefits'],
  ['ROI Calculator', '/roi-calculator'],
  ['FAQ', '/faq'],
  ['Pricing', '/pricing'],
  ['About', '/about-us'],
  ['Contact', '/contact'],
];

const commonSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'MedAlly',
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo.svg`,
    sameAs: [
      'https://twitter.com/medAllyAI',
      'https://www.linkedin.com/company/medally-ai',
      'https://www.facebook.com/profile.php?id=491843437354106',
      'https://www.instagram.com/medally_saas',
      'https://www.youtube.com/@Med-Ally',
    ],
    description:
      'MedAlly is a clinical AI platform and physician AI assistant for documentation, clinical decision support, coding, and workflow automation.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: 'MedAlly',
    publisher: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl}/#software`,
    name: 'MedAlly',
    applicationCategory: 'HealthcareApplication',
    operatingSystem: 'Web',
    url: `${siteUrl}/`,
    featureList: [
      'AI clinical documentation',
      'SOAP note automation',
      'Clinical decision support',
      'Medical coding automation',
      'EHR workflow integration',
    ],
  },
];

const scribeFaqs = [
  {
    q: 'What documentation format can MedAlly produce?',
    a: "MedAlly's current product experience includes structured SOAP-style clinical documentation prepared from encounter context for physician review.",
  },
  {
    q: 'How does a physician review the MedAlly note?',
    a: 'The physician reviews the generated draft, makes any needed edits, validates the content, and approves what moves forward in the workflow.',
  },
  {
    q: 'How does the approved note reach the clinical record?',
    a: 'MedAlly is designed to move physician-approved work into the practice workflow, including the EHR workflow where supported by the specific deployment. Exact integration depth can vary, so practices and health systems should confirm support for their environment during evaluation.',
  },
  {
    q: 'What is included in the Forever Free plan?',
    a: 'The Forever Free plan includes 10 free encounters per month. View Pricing for current plan details and included capabilities.',
  },
  {
    q: 'What happens after I use the 10 free encounters?',
    a: 'The free allowance is 10 encounters per month. View Pricing for the current options available after the monthly allowance is used.',
  },
  {
    q: 'Is MedAlly only an AI medical scribe?',
    a: 'No. AI-assisted documentation is one part of MedAlly. The broader platform also organizes encounter context, surfaces reviewable decision-support information, prepares coding context, and supports workflow handoffs.',
  },
  {
    q: 'Does MedAlly replace physician review?',
    a: 'No. Physicians remain responsible for reviewing, editing, validating, approving, and making final clinical decisions.',
  },
  {
    q: 'What should I verify about privacy and security?',
    a: "Before deployment, healthcare organizations should review MedAlly's current privacy and security documentation and confirm the requirements relevant to their organization, including any needed contractual, data-handling, retention, encryption, and governance details.",
  },
];

const clinicalDocFaqs = [
  {
    q: 'What is AI clinical documentation?',
    a: 'AI clinical documentation uses artificial intelligence to help create, organize, and structure clinical notes from patient-encounter information. MedAlly prepares documentation for physician review rather than treating AI output as a final clinical record.',
  },
  {
    q: 'How does MedAlly help with clinical notes?',
    a: 'MedAlly organizes encounter context and prepares structured clinical documentation, including SOAP-style documentation. Physicians review, edit, validate, and approve the work.',
  },
  {
    q: 'Is AI clinical documentation the same as an AI medical scribe?',
    a: 'Not exactly. An AI medical scribe primarily describes capturing a clinical encounter and drafting a note from the conversation. AI clinical documentation is the broader process of creating, structuring, reviewing, approving, and moving documentation through the clinical workflow.',
  },
  {
    q: 'Does MedAlly generate SOAP notes?',
    a: 'Yes. MedAlly prepares SOAP-style clinical documentation from encounter context for physician review. The clinician should review and edit the draft before approval.',
  },
  {
    q: 'Can physicians edit AI-generated clinical documentation?',
    a: 'Yes. MedAlly is designed around physician review. The clinician reviews and edits AI-prepared work as needed before approving it.',
  },
  {
    q: 'Does MedAlly provide coding information with the documentation?',
    a: 'MedAlly prepares ICD-10/CPT coding context around the encounter for review. Coding output should be reviewed and validated before use.',
  },
  {
    q: 'What happens after a physician approves the documentation?',
    a: 'After review and approval, the documentation is ready for the next step in the practice workflow. The exact handoff depends on the MedAlly deployment.',
  },
  {
    q: 'Is MedAlly free to try?',
    a: "Yes. MedAlly's Forever Free plan includes 10 encounters per month.",
  },
  {
    q: 'Does MedAlly replace physician judgment?',
    a: 'No. MedAlly prepares information for review. Physicians remain responsible for validating clinical documentation, coding context, and clinical decisions before approval or use.',
  },
];

const pages = [
  {
    path: '/',
    title: 'MedAlly | Clinical AI Platform for Physicians',
    description:
      'MedAlly is a clinical AI platform that helps physicians reduce documentation burden, review clinical context, automate coding support, and keep encounter workflows connected.',
    h1: 'MedAlly clinical AI platform for physicians',
    image: '/images/medally/clinical-hero.webp',
    answer:
      'MedAlly assists physicians across the clinical workday by drafting documentation, organizing encounter context, surfacing reviewable decision-support information, and preparing coding context while the physician stays in control.',
    bullets: ['AI clinical documentation', 'Physician review workflows', 'Clinical decision support', 'Medical coding automation'],
    sections: [
      {
        heading: 'Clinical Workflow Intelligence',
        content:
          'MedAlly connects documentation directly with encounter context, reviewable clinical insights, coding context, and care team handoffs—ensuring physicians remain in full control of every clinical note.',
      },
      {
        heading: 'Interactive Encounter Simulation',
        content:
          'Experience how ambient clinical dialogue is captured, structured into subjective, objective, assessment, and plan (SOAP) drafts, and aligned with recommended ICD-10 and CPT codes for physician validation.',
      },
      {
        heading: 'Forever Free Plan',
        content:
          'Start with 10 free encounters per month with ambient AI documentation, structured SOAP note generation, and clinician review gates.',
      },
    ],
  },
  {
    path: '/clinical-documentation-ai',
    title: 'AI Clinical Documentation for Physicians | MedAlly',
    description:
      'MedAlly helps physicians turn encounter context into structured, reviewable clinical documentation with SOAP-style notes and ICD-10/CPT coding context.',
    h1: 'AI Clinical Documentation for Physicians — Structured, Reviewable Notes',
    image: '/images/medally/clinical-hero.webp',
    answer:
      'AI clinical documentation uses artificial intelligence to help create and structure clinical notes from information captured during a patient encounter. Instead of asking the physician to build the note from a blank page, the system prepares documentation for review while the physician remains responsible for the final clinical record.',
    bullets: [
      'Structured documentation draft preparation',
      'SOAP-style clinical note organization',
      'Encounter context and ICD-10/CPT coding workflow',
      'Physician-controlled review and approval gate',
    ],
    sections: [
      {
        heading: 'From Encounter Context to Reviewable Clinical Documentation',
        content:
          '1. Capture the encounter context. 2. Prepare structured clinical documentation in SOAP format. 3. Review the note and supporting coding context. 4. Prepare approved work for the next workflow step.',
      },
      {
        heading: 'Interactive Review Workspace',
        content:
          'Physicians inspect structured SOAP drafts (Subjective, Objective, Assessment, Plan), test real-time edits, verify ICD-10 and CPT coding context, and approve documentation before it moves forward in the workflow.',
      },
      {
        heading: 'Forever Free Plan — 10 Encounters Per Month',
        content:
          'MedAlly Forever Free includes 10 encounters per month, allowing physicians to evaluate structured clinical documentation before scaling.',
      },
    ],
    faqs: clinicalDocFaqs,
  },
  {
    path: '/ai-medical-scribe',
    title: 'AI Medical Scribe for Physicians | MedAlly',
    description:
      'MedAlly helps physicians turn patient encounters into structured, reviewable clinical notes, then move approved work into the clinical workflow.',
    h1: 'AI Medical Scribe for Physicians — From Encounter to Reviewable Note',
    image: '/images/medally/clinical-hero.webp',
    answer:
      'An AI medical scribe uses artificial intelligence to help turn a clinician-patient encounter into draft clinical documentation. An ambient AI scribe captures clinical conversations to build reviewable notes while connecting to broader clinical workflow intelligence.',
    bullets: [
      'Ambient encounter capture',
      'Structured SOAP draft preparation',
      'Physician review and validation gate',
      'Downstream workflow and coding context',
    ],
    sections: [
      {
        heading: 'Step-by-Step Scribing Workflow',
        content:
          '1. MedAlly listens to the encounter. 2. MedAlly prepares the structured SOAP draft. 3. The physician reviews and edits the draft. 4. Physician-approved work moves forward into practice workflows.',
      },
      {
        heading: 'Illustrative Demonstration Review Workspace',
        content:
          'Inspect structured SOAP output (Subjective, Objective, Assessment, Plan), test inline clinician edits, and explore the clinician verification and approval controls.',
      },
      {
        heading: 'Forever Free Plan — 10 Free Encounters Per Month',
        content:
          'The Forever Free plan includes 10 free encounters per month, giving physicians a practical way to evaluate ambient AI scribing before expanding practice deployment.',
      },
    ],
    faqs: scribeFaqs,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: scribeFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  },
  {
    path: '/features',
    title: 'MedAlly Features | Clinical AI Platform for Physicians',
    description:
      "Explore MedAlly's clinical AI platform for documentation, diagnostics, billing, revenue, workflow operations, patient follow-up, and physician review.",
    h1: 'MedAlly clinical AI platform for the whole workday',
    image: '/images/medally/features-gpt/features-hero-physician.png',
    answer:
      'MedAlly automates clinical documentation, differential review, lab synthesis, treatment planning support, billing context, follow-up tasks, and workflow handoffs from the same encounter context.',
    bullets: ['Documentation and notes', 'Diagnostics and decision support', 'Billing and revenue', 'Workflow and operations'],
  },
  {
    path: '/how-it-works',
    title: 'How MedAlly Works | Clinical AI Workflow for Physicians',
    description:
      'See how MedAlly fits into the clinical workflow from patient conversation to SOAP note automation, clinical review, coding, and EHR handoff.',
    h1: 'How MedAlly fits into a clinical workflow',
    image: '/images/medally/brand-two-screens-one-truth.png',
    answer:
      'MedAlly listens to the encounter, drafts structured notes, organizes clinical context, prepares coding signals, and hands physician-approved outputs back into the practice workflow.',
    bullets: ['Capture encounter context', 'Draft structured clinical notes', 'Review clinical and billing context', 'Move approved work into the EHR workflow'],
  },
  {
    path: '/benefits',
    title: 'MedAlly Benefits | Clinical AI Platform for Better Physician Workflows',
    description:
      'MedAlly helps physicians and practice leaders reduce documentation burden, improve workflow visibility, support clinical review, and protect revenue capture.',
    h1: 'Clinical AI benefits for physicians and practice leaders',
    image: '/images/medally/clinical-hero.webp',
    answer:
      'Clinical AI reduces documentation burden by turning encounter context into reviewable notes, follow-up tasks, care-plan context, and coding support before the clinical day fragments.',
    bullets: ['Less after-hours documentation', 'More consistent review paths', 'Connected follow-up', 'Revenue-aware coding support'],
  },
  {
    path: '/roi-calculator',
    title: 'MedAlly ROI Calculator | Estimate Clinical AI Documentation Savings',
    description:
      'Estimate MedAlly ROI from physician time savings, documentation efficiency, medical coding automation, and better clinical workflow throughput.',
    h1: 'Estimate clinical AI ROI for your practice',
    image: '/images/medally/product-billing-card.png',
    answer:
      'MedAlly ROI is estimated from physician hours saved, documentation reduction, chart completion gains, coding support, and the operational value of faster review workflows.',
    bullets: ['Time saved per physician', 'Documentation hours reduced', 'Potential revenue impact', 'Workflow throughput gains'],
  },
  {
    path: '/faq',
    title: 'MedAlly FAQ | Clinical AI Platform Questions',
    description:
      'Answers about MedAlly clinical AI platform workflows, AI clinical documentation, decision support, EHR integration, and HIPAA-aware physician review.',
    h1: 'Questions physicians ask before adopting clinical AI',
    image: '/images/medally/clinical-workflow-real.png',
    answer:
      'MedAlly is a physician AI assistant for clinical documentation, decision-support context, EHR workflow integration, follow-up, and billing support. Physicians remain responsible for reviewing and approving outputs.',
    bullets: ['How MedAlly fits clinical workflows', 'Clinical documentation and decision support', 'Physician judgment and review', 'EHR integration and privacy-conscious workflows'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        ['How does MedAlly fit into clinical workflows?', 'MedAlly captures encounter context, drafts structured documentation, surfaces decision-support context, and prepares coding signals for physician review before chart completion.'],
        ['Is MedAlly a replacement for physician judgment?', 'No. MedAlly prepares reviewable documentation and clinical context. Clinicians remain responsible for reviewing, editing, approving, and applying professional judgment.'],
      ].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
    },
  },
  {
    path: '/pricing',
    title: 'MedAlly Pricing | Clinical AI Platform Plans',
    description:
      'Review MedAlly clinical AI platform pricing options for physicians, practices, and healthcare teams evaluating AI documentation and workflow support.',
    h1: 'MedAlly pricing for clinical AI adoption',
    image: '/images/medally/ai-operations.png',
    answer:
      'The right MedAlly plan depends on practice size, documentation volume, clinical workflow needs, EHR integration depth, and how quickly the team wants to scale AI support.',
    bullets: ['Solo and small practice evaluation', 'Practice-team deployment', 'Enterprise workflow support', 'Demo and implementation planning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'MedAlly',
      applicationCategory: 'HealthcareApplication',
      operatingSystem: 'Web',
      offers: [
        {
          '@type': 'Offer',
          name: 'Forever Free',
          price: '0',
          priceCurrency: 'USD',
          description: '10 clinical encounters per month',
        },
        {
          '@type': 'Offer',
          name: 'Professional',
          price: '49',
          priceCurrency: 'USD',
          description: 'Unlimited encounters, advanced scribe, coding maps',
        },
        {
          '@type': 'Offer',
          name: 'Ultimate',
          price: '99',
          priceCurrency: 'USD',
          description: 'Predictive clinical support, guideline scans',
        },
      ],
    },
  },
  {
    path: '/about-us',
    title: 'About MedAlly | Physician-Centered Clinical AI Platform',
    description:
      'Learn about MedAlly, a physician-centered clinical AI platform built to reduce documentation burden and connect clinical, operational, and billing workflows.',
    h1: 'About MedAlly',
    image: '/images/medally/brand-hero-calm-day.png',
    answer:
      'MedAlly is built for physicians and practice leaders who need clinical AI that assists the workday without removing physician judgment, accountability, or review.',
    bullets: ['Physician-centered AI', 'Practice workflow support', 'Clinical documentation automation', 'Calm review-first design'],
  },
  {
    path: '/contact',
    title: 'Contact MedAlly | Clinical AI Platform',
    description:
      'Contact MedAlly to evaluate clinical AI documentation, physician workflow support, EHR integration, and medical coding automation for your practice.',
    h1: 'Contact MedAlly',
    image: '/images/medally/clinical-workflow-real.png',
    answer:
      'Contact MedAlly to discuss clinical AI workflows, physician adoption, documentation automation, EHR handoff needs, and practice implementation planning.',
    bullets: ['Request a clinical AI demo', 'Discuss workflow fit', 'Review EHR integration needs', 'Plan practice adoption'],
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - MedAlly Clinical AI Platform',
    description:
      'Read the MedAlly privacy policy for the clinical AI platform, including privacy-conscious healthcare workflow and data handling information.',
    h1: 'MedAlly Privacy Policy',
    image: '/images/medally/clinical-hero.webp',
    answer:
      'The MedAlly privacy policy explains how privacy-conscious clinical AI workflows, account data, communications, and healthcare platform interactions are handled.',
    bullets: ['Privacy-conscious workflows', 'Data handling practices', 'Healthcare platform use', 'Contact and policy updates'],
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service - MedAlly Clinical AI Platform',
    description:
      'Read the MedAlly terms of service for clinical AI platform use, physician workflow support, account responsibilities, and acceptable use.',
    h1: 'MedAlly Terms of Service',
    image: '/images/medally/clinical-hero.webp',
    answer:
      'The MedAlly terms describe platform use, account responsibilities, acceptable use, service availability, intellectual property, and clinical AI workflow responsibilities.',
    bullets: ['Platform access', 'Account responsibilities', 'Acceptable use', 'Clinical AI workflow terms'],
  },
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const absoluteUrl = (path) => `${siteUrl}${path}`;
const canonicalFor = (path) => (path === '/' ? `${siteUrl}/` : `${siteUrl}${path.replace(/\/+$/, '')}`);

function renderHead(page) {
  const canonical = canonicalFor(page.path);
  const image = page.image.startsWith('http') ? page.image : absoluteUrl(page.image);
  const schema = [
    ...commonSchema,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#software` },
      primaryImageOfPage: { '@type': 'ImageObject', url: image, caption: page.h1 },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
        ...(page.path === '/'
          ? []
          : [{ '@type': 'ListItem', position: 2, name: page.h1, item: canonical }]),
      ],
    },
    ...(page.schema ? [page.schema] : []),
  ];

  return `
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${escapeHtml(page.title)}" />
  <meta property="og:description" content="${escapeHtml(page.description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:alt" content="${escapeHtml(page.h1)}" />
  <meta property="og:site_name" content="MedAlly" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(page.title)}" />
  <meta name="twitter:description" content="${escapeHtml(page.description)}" />
  <meta name="twitter:image" content="${image}" />
  <meta name="twitter:image:alt" content="${escapeHtml(page.h1)}" />
  <meta name="application-name" content="MedAlly" />
  <meta name="theme-color" content="#00C2B2" />
  <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function renderBody(page) {
  const sectionsHtml = page.sections
    ? page.sections
        .map(
          (sec) => `
      <section>
        <h2>${escapeHtml(sec.heading)}</h2>
        <p>${escapeHtml(sec.content)}</p>
      </section>`
        )
        .join('')
    : '';

  const faqsHtml = page.faqs
    ? `
      <section aria-label="Frequently Asked Questions">
        <h2>Frequently Asked Questions</h2>
        <dl>
          ${page.faqs
            .map(
              (faq) => `
            <dt><strong>${escapeHtml(faq.q)}</strong></dt>
            <dd>${escapeHtml(faq.a)}</dd>`
            )
            .join('')}
        </dl>
      </section>`
    : '';

  return `<div id="root"><main data-static-seo="true">
    <nav aria-label="Primary">${commonLinks.map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`).join(' ')}</nav>
    <article>
      <h1>${escapeHtml(page.h1)}</h1>
      <p>${escapeHtml(page.answer)}</p>
      <ul>${page.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
      ${sectionsHtml}
      ${faqsHtml}
      <p><a href="https://app.medally.ai/">Start free</a> <a href="https://www.calonji.com/contact">Book a demo</a></p>
    </article>
  </main></div>`;
}

function renderPage(page) {
  let html = shell;
  html = html.replace(/<title>.*?<\/title>/s, renderHead(page));
  html = html.replace(/<div id="root"><\/div>/, renderBody(page));
  return html;
}

for (const page of pages) {
  const renderedHtml = renderPage(page);
  if (page.path === '/') {
    writeFileSync(join(distDir, 'index.html'), renderedHtml);
  } else {
    const dirPath = page.path.replace(/^\//, '');
    const targetDir = join(distDir, dirPath);
    mkdirSync(targetDir, { recursive: true });
    writeFileSync(join(targetDir, 'index.html'), renderedHtml);
    writeFileSync(join(distDir, `${dirPath}.html`), renderedHtml);
  }
}

console.log(`Prerendered SEO HTML for ${pages.length} routes.`);
