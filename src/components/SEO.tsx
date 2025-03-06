import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = 'MedAlly - AI Healthcare Assistant | HIPAA Compliant',
  description = 'MedAlly helps physicians reduce documentation time by 70% with AI-powered assistance. HIPAA & SOC2 compliant with EHR integration.',
  image = '/og-image.jpg',
  url,
  type = 'website',
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = url || `https://www.medally.ai${location.pathname}`;
  const absoluteImageUrl = image.startsWith('http') ? image : `https://www.medally.ai${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={absoluteImageUrl} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={absoluteImageUrl} />
    </Helmet>
  );
};
