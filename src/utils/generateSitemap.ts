import fs from 'fs';
import path from 'path';

interface BlogPost {
  slug: string;
  lastmod: string;
}

interface SitemapImage {
  loc: string;
  title: string;
  caption: string;
}

interface PageImage {
  url: string;
  images: SitemapImage[];
}

const IMAGES: PageImage[] = [
  {
    url: 'https://medally.ai/',
    images: [
      {
        loc: 'https://medally.ai/images/hero-image.jpg',
        title: 'MedAlly AI Healthcare Documentation',
        caption: 'Transform your medical practice with AI-powered documentation'
      }
    ]
  }
];

export async function generateSitemap() {
  try {
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Get all blog posts
    const blogDir = path.join(process.cwd(), 'public/blog');
    const files = fs.readdirSync(blogDir);
    
    const blogPosts: BlogPost[] = files
      .filter(file => file.endsWith('.html'))
      .map(file => {
        const filePath = path.join(blogDir, file);
        const stats = fs.statSync(filePath);
        return {
          slug: file.replace('.html', ''),
          lastmod: stats.mtime.toISOString().split('T')[0]
        };
      });

    // Generate main sitemap
    const mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- Main pages -->
  <url>
    <loc>https://medally.ai/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://medally.ai/about-us</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://medally.ai/how-it-works</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://medally.ai/features</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://medally.ai/benefits</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://medally.ai/case-studies</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://medally.ai/roi-calculator</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://medally.ai/faq</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://medally.ai/pricing</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://medally.ai/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Blog posts -->
  ${blogPosts
    .map(
      post => `
  <url>
    <loc>https://medally.ai/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`;

    // Generate image sitemap
    const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${IMAGES.map(page => `
  <url>
    <loc>${page.url}</loc>
    ${page.images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('')}
  </url>`).join('')}
</urlset>`;

    // Generate sitemap index
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://medally.ai/sitemap-main.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://medally.ai/sitemap-images.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

    // Write sitemaps to public directory
    fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemapIndex);
    fs.writeFileSync(path.join(process.cwd(), 'public/sitemap-main.xml'), mainSitemap);
    fs.writeFileSync(path.join(process.cwd(), 'public/sitemap-images.xml'), imageSitemap);
    
    console.log('Sitemaps generated successfully');
  } catch (error) {
    console.error('Error generating sitemaps:', error);
  }
} 