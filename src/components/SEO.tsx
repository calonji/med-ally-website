import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const commonStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'MedicalOrganization'],
    '@id': 'https://www.medally.ai/#organization',
    name: 'MedAlly',
    url: 'https://www.medally.ai/',
    logo: 'https://www.medally.ai/logo.svg',
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
    '@id': 'https://www.medally.ai/#website',
    url: 'https://www.medally.ai/',
    name: 'MedAlly',
    publisher: { '@id': 'https://www.medally.ai/#organization' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://www.medally.ai/#software',
    name: 'MedAlly',
    applicationCategory: 'HealthcareApplication',
    operatingSystem: 'Web',
    url: 'https://www.medally.ai/',
    featureList: [
      'AI clinical documentation',
      'SOAP note automation',
      'Clinical decision support',
      'Medical coding automation',
      'EHR workflow integration',
    ],
  },
];

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  robots?: string;
  structuredData?: object | object[];
}

export const SEO = ({
  title = 'MedAlly - AI Healthcare Assistant | HIPAA Compliant',
  description = 'MedAlly helps physicians reduce documentation time by 70% with AI-powered assistance. HIPAA & SOC2 compliant with EHR integration.',
  image = '/images/medally/clinical-hero.webp',
  imageAlt = 'MedAlly clinical AI platform for physician workflows',
  url,
  type = 'website',
  keywords = [],
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  structuredData,
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = url || `https://www.medally.ai${location.pathname}`;
  const absoluteImageUrl = image.startsWith('http') ? image : `https://www.medally.ai${image}`;
  const pageSpecificSchema = Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : [];
  const hasWebPageSchema = pageSpecificSchema.some((entry) => {
    const type = (entry as { '@type'?: string | string[] })['@type'];
    return Array.isArray(type) ? type.includes('WebPage') : type === 'WebPage';
  });
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    isPartOf: { '@id': 'https://www.medally.ai/#website' },
    about: { '@id': 'https://www.medally.ai/#software' },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      caption: imageAlt,
    },
  };
  const schema = [
    ...commonStructuredData,
    ...(hasWebPageSchema ? [] : [webPageSchema]),
    ...pageSpecificSchema,
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="MedAlly" />
      <meta property="og:locale" content="en_US" />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="application-name" content="MedAlly" />
      <meta name="theme-color" content="#00C2B2" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
