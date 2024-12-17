import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
}

export const SEO = ({
  title = "MedAlly - AI-Powered Healthcare Documentation",
  description = "Transform your medical practice with AI-powered documentation. Reduce documentation time by 70% while improving accuracy and patient care.",
  keywords = [
   "medical documentation",
    "healthcare AI",
    "clinical workflow automation",
    "EHR integration",
    "medical transcription",
    "voice to text medical software",
    "HIPAA compliant AI solutions",
    "medical practice efficiency tools",
    "clinical documentation software",
    "physician burnout solution",
    "AI-powered healthcare tools",
    "AI for doctors",
    "patient care automation",
    "healthcare workflow optimization",
    "AI-powered healthcare tools",
    "AI for doctors",
    "patient care automation",
    "healthcare workflow optimization"
  ],
  image = "/og-image.jpg",
  url = "https://medally.ai",
  type = "website",
  author = "MedAlly Team",
  publishedTime = new Date().toISOString()
}: SEOProps) => (
  <Helmet>
    {/* Basic */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(', ')} />
    <meta name="author" content={author} />

    {/* Open Graph */}
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="MedAlly" />
    <meta property="article:published_time" content={publishedTime} />
    <meta property="article:author" content={author} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@medally" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:creator" content="@medally" />

    {/* Additional SEO */}
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <link rel="canonical" href={url} />

    {/* PWA */}
    <meta name="application-name" content="MedAlly" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="MedAlly" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#3B82F6" />

    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "MedAlly",
        "applicationCategory": "HealthcareApplication",
        "description": description,
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1250"
        },
        "author": {
          "@type": "Organization",
          "name": "MedAlly",
          "url": url
        }
      })}
    </script>
  </Helmet>
); 