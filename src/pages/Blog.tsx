import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  description: string;
  path: string;
  slug: string;
  image: string;
}

const POSTS_PER_PAGE = 9;

// Add medical images array
const MEDICAL_IMAGES = [
  '/images/blog/partial-view-of-male-doctor-with-prosthetic-arm-ho-2024-11-19-07-10-05-utc.jpg',
  '/images/blog/cropped-image-of-male-doctor-with-prosthetic-arm-w-2024-11-18-18-46-17-utc.jpg',
  '/images/blog/cropped-image-of-male-doctor-with-prosthetic-arm-u-2024-11-18-18-29-21-utc.jpg',
  '/images/blog/doctor-medical-worktable-with-stethoscope-on-resea-2023-11-27-05-14-19-utc.jpg',
  '/images/blog/modern-technology-in-hospital-ward-for-taking-care-2023-11-27-05-33-30-utc.JPG',
  '/images/blog/bionic-prosthetic-hand-with-artificial-intelligenc-2023-11-27-04-52-55-utc.jpg',
  '/images/blog/female-doctor-working-at-office-desk-and-smiling-a-2023-12-29-19-55-31-utc.jpg',
  '/images/blog/mri-man-and-doctor-on-video-call-talking-and-hea-2023-11-27-05-02-56-utc.jpg',
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        console.log('Starting blog post fetch...');

        // Try to fetch from static JSON first (production), fallback to API (development)
        let files: string[];
        try {
          const staticResponse = await fetch('/api/blog-posts.json');
          files = await staticResponse.json();
          console.log('Found blog files from static JSON:', files);
        } catch {
          console.log('Falling back to development API');
          const apiResponse = await fetch('/api/blog-posts');
          files = await apiResponse.json();
          console.log('Found blog files from API:', files);
        }

        if (!Array.isArray(files)) {
          throw new Error('Server returned invalid data format');
        }

        const fetchedPosts = await Promise.all(
          files.map(async (filename) => {
            try {
              const path = `/blog/${filename}`;
              const response = await fetch(path);

              if (!response.ok) {
                console.error('Failed to fetch:', path, response.status);
                return null;
              }

              const html = await response.text();
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');

              const title = doc.querySelector('meta[name="blog-title"]')?.getAttribute('content');
              const date = doc.querySelector('meta[name="blog-date"]')?.getAttribute('content');
              const description = doc
                .querySelector('meta[name="blog-description"]')
                ?.getAttribute('content');

              if (!title || !date || !description) {
                console.warn('Missing metadata for:', filename);
                return null;
              }

              // Assign a random image from the array
              const randomImage = MEDICAL_IMAGES[Math.floor(Math.random() * MEDICAL_IMAGES.length)];

              return {
                title,
                date,
                description,
                path: `/blog/${filename}`,
                slug: filename.replace('.html', ''),
                image: randomImage,
              };
            } catch (error) {
              console.error(`Error processing ${filename}:`, error);
              return null;
            }
          })
        );

        const validPosts = fetchedPosts
          .filter((post): post is BlogPost => post !== null)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        console.log('Setting posts:', validPosts);
        setPosts(validPosts);
      } catch (error) {
        console.error('Error in blog post fetch process:', error);
        setPosts([]);
      } finally {
        setIsLoading(false);
        // Scroll to top after posts are loaded
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    fetchBlogPosts();
  }, []);

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchContent = `${post.title} ${post.description}`.toLowerCase();
      return searchContent.includes(searchQuery.toLowerCase());
    });
  }, [posts, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'MedAlly Blog',
    description:
      "Stay informed with MedAlly's latest insights on healthcare technology, AI in medicine, and industry best practices.",
    publisher: {
      '@type': 'Organization',
      name: 'MedAlly',
      logo: {
        '@type': 'ImageObject',
        url: 'https://medally.ai/logo.png',
      },
    },
    blogPost: paginatedPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        '@type': 'Organization',
        name: 'MedAlly Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'MedAlly',
        logo: {
          '@type': 'ImageObject',
          url: 'https://medally.ai/logo.png',
        },
      },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog - MedAlly | Healthcare Insights & Updates</title>
        <meta
          name="description"
          content="Stay informed with MedAlly's latest insights on healthcare technology, AI in medicine, and industry best practices."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://medally.ai/blog" />
        <meta property="og:title" content="MedAlly Blog - Healthcare Insights & Updates" />
        <meta
          property="og:description"
          content="Stay informed with MedAlly's latest insights on healthcare technology, AI in medicine, and industry best practices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medally.ai/blog" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Healthcare Insights & Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Explore the latest trends, insights, and innovations in healthcare technology and
                AI-driven solutions.
              </p>
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-2">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-2 w-full rounded-full border-2 border-gray-200 focus:border-blue-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-2 bg-white min-h-[600px]">
          <div className="container mx-auto px-4">
            {isLoading ? (
              // Loading skeleton
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Results count */}
                <div className="mb-8 text-gray-600">
                  Showing {Math.min(filteredPosts.length, POSTS_PER_PAGE)} of {filteredPosts.length}{' '}
                  articles
                </div>

                {/* Posts Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {paginatedPosts.length > 0 ? (
                    paginatedPosts.map((post, index) => (
                      <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                      >
                        <Link
                          to={`/blog/${post.slug.replace('.html', '')}`}
                          state={{ selectedImage: post.image }}
                          className="flex flex-col h-full"
                        >
                          {/* Card Header with Category Tag and Image */}
                          <div className="relative">
                            <div className="absolute top-2 left-2 z-10">
                              <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10">
                                Healthcare AI
                              </span>
                            </div>
                            {/* Medical Image */}
                            <img
                              src={post.image}
                              alt="Medical illustration"
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Card Content */}
                          <div className="flex flex-col flex-1 p-6">
                            {/* Date and Reading Time */}
                            <div className="flex items-center space-x-4 mb-3">
                              {post.date && (
                                <time className="text-sm text-blue-600 font-medium flex items-center">
                                  <svg
                                    className="w-4 h-4 mr-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                  {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  })}
                                </time>
                              )}
                              <span className="text-sm text-gray-500 flex items-center">
                                <svg
                                  className="w-4 h-4 mr-1.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                5 min read
                              </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {post.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                              {post.description}
                            </p>

                            {/* Author and Read More */}
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                              <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                                  MA
                                </div>
                                <div className="text-xs">
                                  <p className="text-gray-900 font-medium">MedAlly Team</p>
                                  <p className="text-gray-500">Healthcare Experts</p>
                                </div>
                              </div>

                              <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform duration-150">
                                Read More
                                <svg
                                  className="w-4 h-4 ml-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="col-span-full text-center py-16"
                    >
                      <div className="max-w-md mx-auto">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Posts Found</h3>
                        <p className="text-gray-600">
                          Try adjusting your search terms or browse all articles.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center items-center space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="w-10 h-10 p-0"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>

                    {[...Array(totalPages)].map((_, i) => (
                      <Button
                        key={i + 1}
                        variant={currentPage === i + 1 ? 'default' : 'outline'}
                        onClick={() => handlePageChange(i + 1)}
                        className="w-10 h-10 p-0"
                      >
                        {i + 1}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="w-10 h-10 p-0"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
