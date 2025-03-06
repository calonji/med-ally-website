import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  noIndex?: boolean;
  structuredData?: object | object[];
}

/**
 * MetaTags component for consistent SEO metadata across all pages
 * 
 * This component should be included in each page to ensure proper SEO optimization
 * with appropriate meta tags for search engines and social media platforms.
 */
export function MetaTags({
  title = 'MedAlly - AI-Powered Healthcare Assistant for Physicians | HIPAA Compliant',
  description = 'MedAlly is an AI-powered healthcare assistant that helps physicians reduce documentation time by 70% while improving diagnostic accuracy. HIPAA & SOC2 compliant with EHR integration.',
  keywords = [
    'AI medical assistant', 'physician AI assistant', 'medical documentation software',
    'HIPAA compliant AI', 'EHR integration', 'clinical documentation improvement'
  ],
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/og-image.jpg',
  ogImageAlt = 'MedAlly AI-Powered Healthcare Assistant',
  ogImageWidth = '1200',
  ogImageHeight = '630',
  twitterCard = 'summary_large_image',
  twitterSite = '@medAllyAI',
  twitterCreator = '@medAllyAI',
  noIndex = false,
  structuredData,
}: MetaTagsProps) {
  // Ensure absolute URL for canonical and OG image
  const baseUrl = 'https://medally.ai';
  const absoluteCanonicalUrl = canonicalUrl ? 
    (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`) : 
    baseUrl;
  
  const absoluteOgImage = ogImage.startsWith('http') ? 
    ogImage : 
    `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={absoluteCanonicalUrl} />
      
      {/* Robots Meta Tag */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={absoluteCanonicalUrl} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:site_name" content="MedAlly" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      
      {/* Additional Meta Tags */}
      <meta name="application-name" content="MedAlly" />
      <meta name="apple-mobile-web-app-title" content="MedAlly" />
      <meta name="theme-color" content="#e41e3a" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

/**
 * Generate common structured data for MedAlly
 * 
 * @returns Object containing structured data for Organization, WebSite, and SoftwareApplication
 */
export function generateCommonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // Organization schema
      {
        "@type": ["Organization", "MedicalOrganization"],
        "@id": "https://medally.ai/#organization",
        "name": "MedAlly",
        "url": "https://medally.ai",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://medally.ai/#logo",
          "url": "https://medally.ai/logo.png",
          "contentUrl": "https://medally.ai/logo.png",
          "width": "512",
          "height": "512",
          "caption": "MedAlly Logo"
        },
        "sameAs": [
          "https://twitter.com/medAllyAI",
          "https://www.linkedin.com/company/medally-ai",
          "https://www.facebook.com/profile.php?id=491843437354106",
          "https://www.instagram.com/medally_saas",
          "https://www.youtube.com/@Med-Ally"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "contact@medally.ai",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Spanish", "French", "German", "Chinese"]
        },
        "description": "MedAlly is an AI-powered healthcare assistant that helps physicians reduce documentation time by 70% while improving diagnostic accuracy. HIPAA & SOC2 compliant with seamless EHR integration.",
        "medicalSpecialty": ["GeneralPractice", "InternalMedicine", "EmergencyMedicine", "Pediatrics", "FamilyMedicine"]
      },
      
      // Website schema
      {
        "@type": "WebSite",
        "@id": "https://medally.ai/#website",
        "url": "https://medally.ai",
        "name": "MedAlly",
        "description": "AI-Powered Healthcare Assistant for Physicians",
        "publisher": {
          "@id": "https://medally.ai/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://medally.ai/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      
      // Software Application schema
      {
        "@type": "SoftwareApplication",
        "@id": "https://medally.ai/#software",
        "name": "MedAlly",
        "applicationCategory": "HealthcareApplication",
        "applicationSubCategory": "AI Clinical Assistant",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://app.medally.ai/"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "AI-Powered SOAP Note Generation",
          "Voice-Driven Medical Documentation",
          "Automated Medical Coding (ICD-10, CPT)",
          "EHR/EMR Integration",
          "Clinical Decision Support",
          "HIPAA & SOC2 Compliant"
        ]
      }
    ]
  };
} 