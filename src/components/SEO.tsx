import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  schema?: object;
}

export const SEO = ({
  title = 'MedAlly - AI-Powered Healthcare Documentation',
  description = 'Transform your medical practice with AI-powered documentation. Reduce documentation time by 70% while improving accuracy and patient care.',
  keywords = [
    'medical documentation',
    'healthcare AI',
    'clinical workflow automation',
    'EHR integration',
    'medical transcription',
    'voice to text medical software',
    'HIPAA compliant AI solutions',
    'medical practice efficiency tools',
    'clinical documentation software',
    'physician burnout solution',
    'AI-powered healthcare tools',
    'AI for doctors',
    'patient care automation',
    'healthcare workflow optimization',
  ],
  image = '/og-image.jpg',
  url,
  type = 'website',
  author = 'MedAlly Team',
  publishedTime = new Date().toISOString(),
  schema,
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = url || `https://medally.ai${location.pathname}`;
  const absoluteImageUrl = image.startsWith('http') ? image : `https://medally.ai${image}`;

  // Generate breadcrumb schema
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://medally.ai',
      },
      ...pathSegments.map((segment, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: `https://medally.ai/${pathSegments.slice(0, index + 1).join('/')}`,
      })),
    ],
  };

  // Generate organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MedAlly',
    url: 'https://medally.ai',
    logo: 'https://medally.ai/logo.png',
    sameAs: ['https://twitter.com/medally', 'https://www.linkedin.com/company/medally'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'customer service',
      email: 'contact@medally.ai',
      areaServed: 'Worldwide',
      availableLanguage: 'English',
    },
  };

  return (
    <Helmet>
      {/* Basic */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="MedAlly" />
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:author" content={author} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@medally" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:creator" content="@medally" />

      {/* Additional SEO */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="MedAlly Blog RSS Feed"
        href="https://medally.ai/blog/feed.xml"
      />

      {/* PWA */}
      <meta name="application-name" content="MedAlly" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="MedAlly" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'MedAlly',
          applicationCategory: 'HealthcareApplication',
          description: description,
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
          },
          author: {
            '@type': 'Organization',
            name: 'MedAlly',
            url: canonicalUrl,
          },
        })}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      {/* Organization Schema */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>

      {/* Additional Schema if provided */}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};
