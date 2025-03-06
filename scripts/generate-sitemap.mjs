import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const DOMAIN = 'https://medally.ai';

/**
 * IMPORTANT: This mapping must be kept in sync with the routes defined in src/App.tsx
 * If you add or change routes in App.tsx, make sure to update this mapping accordingly.
 * 
 * The keys are the file paths in the src/pages directory.
 * The values are the actual URL paths used in the application's routing.
 * 
 * Set a value to null to exclude that page from the sitemap.
 */
const PAGE_ROUTES = {
  'src/pages/LandingPage.tsx': '/',
  'src/pages/AboutUsPage.tsx': '/about-us',
  'src/pages/HowItWorksPage.tsx': '/how-it-works',
  'src/pages/FeaturesPage.tsx': '/features',
  'src/pages/BenefitsPage.tsx': '/benefits',
  'src/pages/ROICalculatorPage.tsx': '/roi-calculator',
  'src/pages/FAQPage.tsx': '/faq',
  'src/pages/PricingPage.tsx': '/pricing',
  'src/pages/PrivacyPolicy.tsx': null, // Excluded - no content yet
  'src/pages/TermsOfService.tsx': null, // Excluded - no content yet
  'src/pages/Contact.tsx': '/contact'
};

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
      // Skip pages that are explicitly excluded (mapped to null)
      if (PAGE_ROUTES[page] === null) {
        return '';
      }

      // Use the route mapping if available, otherwise use the default path transformation
      const path = PAGE_ROUTES[page] || page
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
    }).filter(entry => entry !== ''); // Remove empty entries

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