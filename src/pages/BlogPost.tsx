import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Add the same image array used in Blog.tsx
const MEDICAL_IMAGES = [
  '/dist/assets/img/blog/partial-view-of-male-doctor-with-prosthetic-arm-ho-2024-11-19-07-10-05-utc.jpg',
  '/dist/assets/img/blog/cropped-image-of-male-doctor-with-prosthetic-arm-w-2024-11-18-18-46-17-utc.jpg',
  '/dist/assets/img/blog/cropped-image-of-male-doctor-with-prosthetic-arm-u-2024-11-18-18-29-21-utc.jpg',
  '/dist/assets/img/blog/doctor-medical-worktable-with-stethoscope-on-resea-2023-11-27-05-14-19-utc.jpg',
  '/dist/assets/img/blog/modern-technology-in-hospital-ward-for-taking-care-2023-11-27-05-33-30-utc.JPG',
  '/dist/assets/img/blog/bionic-prosthetic-hand-with-artificial-intelligenc-2023-11-27-04-52-55-utc.jpg',
  '/dist/assets/img/blog/female-doctor-working-at-office-desk-and-smiling-a-2023-12-29-19-55-31-utc.jpg',
  '/dist/assets/img/blog/mri-man-and-doctor-on-video-call-talking-and-hea-2023-11-27-05-02-56-utc.jpg',
];

interface BlogPostMeta {
  title: string;
  date: string;
  description: string;
  image: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [content, setContent] = useState<string>('');
  const [meta, setMeta] = useState<BlogPostMeta>({
    title: '',
    date: '',
    description: '',
    image:
      location.state?.selectedImage ||
      MEDICAL_IMAGES[Math.floor(Math.random() * MEDICAL_IMAGES.length)],
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogContent = async () => {
      if (!slug) {
        setError('No blog post specified');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        // Remove .html if it's already in the slug
        const cleanSlug = slug.replace(/\.html$/, '');
        // Update the path to use the public directory and ensure .html extension
        const postPath = `/blog/${cleanSlug}.html`;
        console.log('Fetching blog post:', postPath);

        // Fetch the blog post
        const response = await fetch(postPath);
        console.log('Blog post fetch status:', response.status);

        if (!response.ok) {
          throw new Error(`Failed to fetch blog post: ${response.statusText}`);
        }

        const html = await response.text();
        console.log('Blog post HTML length:', html.length);
        console.log('Raw HTML content:', html.substring(0, 500)); // Log first 500 chars for debugging

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract and inject any styles from the original document
        const styles = doc.querySelectorAll('style, link[rel="stylesheet"]');
        styles.forEach((style) => {
          if (!document.head.contains(style)) {
            document.head.appendChild(style.cloneNode(true));
          }
        });

        // Extract and inject any scripts from the original document
        const scripts = doc.querySelectorAll('script');
        scripts.forEach((script) => {
          if (!document.head.contains(script)) {
            document.head.appendChild(script.cloneNode(true));
          }
        });

        // Extract metadata with detailed logging
        const metaTags = doc.querySelectorAll('meta');
        console.log(
          'Found meta tags:',
          Array.from(metaTags).map((tag) => ({
            name: tag.getAttribute('name'),
            content: tag.getAttribute('content'),
          }))
        );

        const title = doc.querySelector('meta[name="blog-title"]')?.getAttribute('content');
        const date = doc.querySelector('meta[name="blog-date"]')?.getAttribute('content');
        const description = doc
          .querySelector('meta[name="blog-description"]')
          ?.getAttribute('content');

        console.log('Extracted metadata:', { title, date, description });

        if (!title || !date || !description) {
          console.warn('Missing required metadata. Using fallbacks.');
        }

        setMeta((prevMeta) => ({
          title: title || 'Untitled Post',
          date: date || new Date().toISOString().split('T')[0],
          description: description || 'No description available',
          image: prevMeta.image,
        }));

        // Extract the main content while preserving class names and styles
        let mainContent = '';
        const articleContent = doc.querySelector('article');
        const mainElement = doc.querySelector('main');
        const contentDiv = doc.querySelector('.content, #content, [role="main"]');
        const bodyContent = doc.body;

        // Function to clean content while preserving classes and styles
        const cleanContent = (element: Element) => {
          const content = element.innerHTML;
          return content
            .replace(/<header[\s\S]*?<\/header>/gi, '')
            .replace(/<footer[\s\S]*?<\/footer>/gi, '')
            .replace(/<nav[\s\S]*?<\/nav>/gi, '');
        };

        if (articleContent) {
          mainContent = cleanContent(articleContent);
        } else if (mainElement) {
          mainContent = cleanContent(mainElement);
        } else if (contentDiv) {
          mainContent = cleanContent(contentDiv);
        } else {
          mainContent = cleanContent(bodyContent);
        }

        console.log('Extracted content length:', mainContent.length);
        setContent(mainContent);
      } catch (error) {
        console.error('Error fetching blog content:', error);
        setError(error instanceof Error ? error.message : 'Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogContent();
  }, [slug, navigate]);

  const BackToBlogs = () => (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 items-center justify-between">
      <Button
        variant="outline"
        size="lg"
        className="bg-white hover:bg-blue-50"
        onClick={() => navigate('/blog')}
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Blogs
      </Button>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600 mr-2 hidden sm:inline">Share this post:</span>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9"
            onClick={() => {
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  meta.title
                )}&url=${encodeURIComponent(window.location.href)}`,
                '_blank'
              );
            }}
          >
            <Twitter className="w-4 h-4 text-[#1DA1F2]" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9"
            onClick={() => {
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`,
                '_blank',
                'width=600,height=400'
              );
            }}
          >
            <Facebook className="w-4 h-4 text-[#1877F2]" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9"
            onClick={() => {
              window.open(
                `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  window.location.href
                )}&title=${encodeURIComponent(meta.title)}&summary=${encodeURIComponent(
                  meta.description
                )}`,
                '_blank',
                'width=600,height=400'
              );
            }}
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9"
            onClick={async () => {
              await navigator.clipboard.writeText(window.location.href);
              toast({
                title: 'Link Copied',
                description: 'The blog post URL has been copied to your clipboard.',
                duration: 2000,
              });
            }}
          >
            <LinkIcon className="w-4 h-4 text-gray-600" />
          </Button>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="animate-pulse mt-8">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mt-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Blog Post</h1>
                <p className="text-gray-600 mb-8">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{meta.title} - MedAlly Blog</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`https://medally.ai/blog/${slug?.replace('.html', '')}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${meta.title} - MedAlly Blog`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://medally.ai/blog/${slug?.replace('.html', '')}`} />
        {meta.image && <meta property="og:image" content={meta.image} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@medally" />
        <meta name="twitter:title" content={`${meta.title} - MedAlly Blog`} />
        <meta name="twitter:description" content={meta.description} />
        {meta.image && <meta name="twitter:image" content={meta.image} />}

        {/* Article Specific */}
        <meta property="article:published_time" content={meta.date} />
        <meta property="article:publisher" content="https://medally.ai" />
        <meta property="article:section" content="Healthcare Technology" />
        <meta property="article:tag" content="Healthcare AI" />
        <meta property="article:tag" content="Medical Technology" />
        <meta property="article:tag" content="Healthcare Innovation" />

        {/* Additional SEO */}
        <meta name="author" content="MedAlly Team" />
        <meta name="news_keywords" content="healthcare, AI, medical technology, innovation" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="MedAlly Blog RSS Feed"
          href="https://medally.ai/blog/feed.xml"
        />

        {/* JSON-LD for Blog Post */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: meta.title,
            description: meta.description,
            image: meta.image,
            datePublished: meta.date,
            dateModified: meta.date,
            author: {
              '@type': 'Organization',
              name: 'MedAlly Team',
              url: 'https://medally.ai',
            },
            publisher: {
              '@type': 'Organization',
              name: 'MedAlly',
              logo: {
                '@type': 'ImageObject',
                url: 'https://medally.ai/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://medally.ai/blog/${slug?.replace('.html', '')}`,
            },
          })}
        </script>
      </Helmet>

      <div className="pt-20">
        {/* Banner Image */}
        <div className="w-full h-[200px] relative bg-gradient-to-b from-gray-900/50 to-gray-900/80">
          {meta.image ? (
            <>
              <img
                src={meta.image}
                alt={meta.title}
                className="absolute inset-0 w-full h-full object-cover"
                onLoad={() => console.log('Banner image loaded successfully')}
                onError={(e) => console.error('Error loading banner image:', e)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/60" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
              <p className="text-gray-400">No banner image available</p>
            </div>
          )}
          <div className="container mx-auto px-4 h-full flex items-end relative z-10">
            <div className="max-w-6xl mx-auto w-full pb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                {meta.title}
              </h1>
              {meta.date && (
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-white">
                  <time className="text-sm flex items-center drop-shadow-md">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(meta.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {meta.description && (
                    <p className="text-sm md:text-base max-w-2xl drop-shadow-md bg-gray-900/30 p-2 rounded-md">
                      {meta.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div dangerouslySetInnerHTML={{ __html: content }} />

              {/* Bottom Navigation */}
              <div className="mt-8">
                <BackToBlogs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
