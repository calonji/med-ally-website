import fs from 'fs';
import path from 'path';

interface BlogPost {
  slug: string;
  lastmod: string;
}

export async function generateSitemap() {
  try {
    // Get all blog posts from the public/blog directory
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

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main pages -->
  <url>
    <loc>https://medally.ai/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://medally.ai/blog</loc>
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

    // Write sitemap to public directory
    fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
} 