import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const siteUrl = 'https://www.medally.ai';
const distDir = new URL('../dist/', import.meta.url);
const shell = readFileSync(new URL('index.html', distDir), 'utf8');

const commonLinks = [
  ['Home', '/'],
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
    '@type': ['Organization', 'MedicalOrganization'],
    '@id': `${siteUrl}/#organization`,
    name: 'MedAlly',
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo.svg`,
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
const canonicalFor = (path) => (path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`);

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
  return `<div id="root"><main data-static-seo="true">
    <nav aria-label="Primary">${commonLinks.map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`).join(' ')}</nav>
    <h1>${escapeHtml(page.h1)}</h1>
    <p>${escapeHtml(page.answer)}</p>
    <ul>${page.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
    <p><a href="https://app.medally.ai/">Start free</a> <a href="https://www.calonji.com/contact">Book a demo</a></p>
  </main></div>`;
}

function renderPage(page) {
  let html = shell;
  html = html.replace(/<title>.*?<\/title>/s, renderHead(page));
  html = html.replace(/<div id="root"><\/div>/, renderBody(page));
  return html;
}

for (const page of pages) {
  const outputPath = page.path === '/' ? 'index.html' : join(page.path.slice(1), 'index.html');
  const filePath = new URL(outputPath, distDir);
  mkdirSync(dirname(filePath.pathname), { recursive: true });
  writeFileSync(filePath, renderPage(page));
}

console.log(`Prerendered SEO HTML for ${pages.length} routes.`);
