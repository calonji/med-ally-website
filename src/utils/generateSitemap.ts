import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import type { Options } from 'prettier';

const DOMAIN = 'https://medally.ai';

interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
}

interface ImageEntry {
  path: string;
  title: string;
}

async function generateSitemap() {
  let prettierConfig: Options;
  try {
    // @ts-expect-error - Dynamic import
    prettierConfig = await import('prettier').then(prettier =>
      prettier.resolveConfig('./.prettierrc.js')
    );
  } catch (error) {
    console.error('Error loading prettier config:', error);
    prettierConfig = {};
  }

  // Get all pages except dynamic routes
  const pages = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx',
  ]);

  // Get all public images
  const images = await globby(['public/images/**/*.{png,jpg,jpeg,gif,webp}']);

  const currentDate = new Date().toISOString();

  // Generate sitemap entries for static pages
  const pageEntries = pages.map((page: string): SitemapEntry => {
    const pagePath = page
      .replace('src/pages', '')
      .replace('.tsx', '')
      .replace('/index', '');
    return {
      path: pagePath,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    };
  });

  // Generate image sitemap entries
  const imageEntries = images.map((image: string): ImageEntry => {
    const imagePath = image.replace('public', '');
    return {
      path: imagePath,
      title: path.basename(image, path.extname(image))
    };
  });

  // Create main sitemap
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <url>
        <loc>${DOMAIN}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
        ${imageEntries.map((img: ImageEntry) => `
          <image:image>
            <image:loc>${DOMAIN}${img.path}</image:loc>
            <image:title>${img.title}</image:title>
          </image:image>
        `).join('')}
      </url>
      ${pageEntries.map((entry: SitemapEntry) => `
        <url>
          <loc>${DOMAIN}${entry.path}</loc>
          <lastmod>${entry.lastmod}</lastmod>
          <changefreq>${entry.changefreq}</changefreq>
          <priority>${entry.priority}</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  // Format sitemap with prettier if available
  let formatted = sitemap;
  try {
    const prettier = await import('prettier');
    formatted = await prettier.format(sitemap, {
      ...prettierConfig,
      parser: 'html',
    });
  } catch (error) {
    console.error('Error formatting sitemap:', error);
  }

  fs.writeFileSync('public/sitemap.xml', formatted);

  // Create sitemap index
  const sitemapIndex = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${DOMAIN}/sitemap.xml</loc>
        <lastmod>${currentDate}</lastmod>
      </sitemap>
    </sitemapindex>
  `;

  // Format sitemap index with prettier if available
  let formattedIndex = sitemapIndex;
  try {
    const prettier = await import('prettier');
    formattedIndex = await prettier.format(sitemapIndex, {
      ...prettierConfig,
      parser: 'html',
    });
  } catch (error) {
    console.error('Error formatting sitemap index:', error);
  }

  fs.writeFileSync('public/sitemap-index.xml', formattedIndex);
}

export default generateSitemap; 