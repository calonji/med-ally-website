import { writeFileSync } from 'fs';
import { format } from 'date-fns';

interface SitemapURL {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const domain = 'https://medally.ai';

const urls: SitemapURL[] = [
  { path: '', changefreq: 'daily', priority: 1.0 },
  { path: '/features', changefreq: 'weekly', priority: 0.8 },
  { path: '/pricing', changefreq: 'weekly', priority: 0.8 },
  { path: '/about', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact', changefreq: 'monthly', priority: 0.7 },
  { path: '/privacy', changefreq: 'monthly', priority: 0.5 },
  { path: '/terms', changefreq: 'monthly', priority: 0.5 }
];

const generateSitemap = () => {
  const today = format(new Date(), 'yyyy-MM-dd');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(({ path, changefreq, priority }) => `
    <url>
      <loc>${domain}${path}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  writeFileSync('public/sitemap.xml', sitemap);
};

export default generateSitemap; 