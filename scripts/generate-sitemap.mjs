import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const DOMAIN = 'https://medally.ai';

async function generateSitemap() {
  try {
    // Get all pages except dynamic routes and API endpoints
    const pages = await globby([
      'src/pages/**/*.tsx',
      '!src/pages/api',
      '!src/pages/[id].tsx',
      '!src/pages/404.tsx'
    ]);

    // Get all public images
    const images = await globby(['public/images/**/*.{jpg,jpeg,png,gif,webp}']);

    // Generate sitemap entries for pages
    const pageEntries = pages.map(page => {
      const path = page
        .replace('src/pages', '')
        .replace('.tsx', '')
        .replace('/index', '');
      return `
        <url>
          <loc>${DOMAIN}${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
    });

    // Generate sitemap entries for images
    const imageEntries = images.map(image => {
      const path = image.replace('public', '');
      return `
        <url>
          <loc>${DOMAIN}${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.5</priority>
        </url>`;
    });

    // Combine all entries
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pageEntries.join('')}
        ${imageEntries.join('')}
      </urlset>`;

    // Format the sitemap
    const prettierConfig = {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      singleQuote: true,
      bracketSpacing: true
    };

    const formattedSitemap = await prettier.format(sitemap, prettierConfig);

    // Write the sitemap
    fs.writeFileSync('public/sitemap.xml', formattedSitemap);

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap(); 