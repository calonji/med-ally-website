import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import prettier from 'prettier';
const DOMAIN = 'https://www.medally.ai';
const CURRENT_DATE = new Date().toISOString().split('T')[0];
// Page priority mapping
const PAGE_PRIORITIES = {
    '/': { priority: '1.0', changefreq: 'weekly' },
    '/features': { priority: '0.9', changefreq: 'monthly' },
    '/pricing': { priority: '0.9', changefreq: 'monthly' },
    '/about': { priority: '0.8', changefreq: 'monthly' },
    '/contact': { priority: '0.8', changefreq: 'monthly' },
    '/resources': { priority: '0.8', changefreq: 'weekly' },
    '/support': { priority: '0.7', changefreq: 'weekly' },
    '/faq': { priority: '0.7', changefreq: 'weekly' },
    '/documentation': { priority: '0.7', changefreq: 'weekly' },
    '/case-studies': { priority: '0.7', changefreq: 'monthly' },
    '/webinars': { priority: '0.7', changefreq: 'monthly' },
    '/white-papers': { priority: '0.7', changefreq: 'monthly' },
    '/hipaa-compliance': { priority: '0.6', changefreq: 'monthly' },
    '/security': { priority: '0.6', changefreq: 'monthly' },
    '/privacy-policy': { priority: '0.5', changefreq: 'monthly' },
    '/terms-of-service': { priority: '0.5', changefreq: 'monthly' },
};
// Image mapping for key pages - commenting out since these images don't exist
// const PAGE_IMAGES: Record<string, { loc: string; title: string }> = {
//   '/': { loc: '/images/hero-image.webp', title: 'MedAlly AI-Powered Healthcare Assistant' },
//   '/about': { loc: '/images/about-team.webp', title: 'MedAlly Team' },
//   '/features': { loc: '/images/features-overview.webp', title: 'MedAlly Features' },
//   '/features/documentation': { loc: '/images/documentation-feature.webp', title: 'AI-Powered Documentation' },
//   '/features/voice-recognition': { loc: '/images/voice-recognition.webp', title: 'Medical Voice Recognition' },
//   '/features/ehr-integration': { loc: '/images/ehr-integration.webp', title: 'EHR Integration' },
//   '/features/medical-coding': { loc: '/images/medical-coding.webp', title: 'Automated Medical Coding' },
//   '/features/clinical-decision-support': { loc: '/images/clinical-decision-support.webp', title: 'Clinical Decision Support' },
// };
const PAGE_IMAGES = {};
// Define a mapping from file names to actual routes
const PAGE_ROUTES = {
    '/LandingPage': '/',
    '/AboutUsPage': '/about-us',
    '/HowItWorksPage': '/how-it-works',
    '/FeaturesPage': '/features',
    '/BenefitsPage': '/benefits',
    '/ROICalculatorPage': '/roi-calculator',
    '/FAQPage': '/faq',
    '/PricingPage': '/pricing',
    '/PrivacyPolicy': null,
    '/TermsOfService': null,
    '/Contact': null
};
/**
 * Generates a sitemap for the website including pages and images
 */
export async function generateSitemap() {
    try {
        console.log('Generating sitemap...');
        // Get all pages (excluding dynamic routes, API routes, etc.)
        const pages = await globby([
            'src/pages/**/*.tsx',
            'src/pages/**/*.ts',
            '!src/pages/_*.tsx',
            '!src/pages/_*.ts',
            '!src/pages/api',
            '!src/pages/404.tsx',
            '!src/pages/500.tsx',
        ]);
        // Get all public images
        const images = await globby(['public/images/**/*.{png,jpg,jpeg,webp,svg}']);
        // Create sitemap entries for pages
        const pageEntries = pages
            .map((page) => {
            // Convert file path to route
            const route = page
                .replace('src/pages', '')
                .replace(/\.(tsx|ts)$/, '')
                .replace(/\/index$/, '/');
            // Skip excluded routes
            if (route.includes('[') || route.includes('_document') || route.includes('_app')) {
                return null;
            }
            // Use the route mapping if available, otherwise use the default path
            const mappedPath = PAGE_ROUTES[route];
            // Skip pages that are explicitly excluded (mapped to null)
            if (mappedPath === null) {
                return null;
            }
            const path = route === '/index'
                ? '/'
                : mappedPath || route;
            const { priority, changefreq } = PAGE_PRIORITIES[path] || { priority: '0.5', changefreq: 'monthly' };
            const imageInfo = PAGE_IMAGES[path];
            // Create XML entry
            let entry = `
  <url>
    <loc>${DOMAIN}${path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;
            // Add image if available
            if (imageInfo) {
                entry += `
    <image:image>
      <image:loc>${DOMAIN}${imageInfo.loc}</image:loc>
      <image:title>${imageInfo.title}</image:title>
    </image:image>`;
            }
            entry += `
  </url>`;
            return entry;
        })
            .filter(Boolean);
        // Add specialty pages
        // Commenting out specialty pages since they don't exist yet
        // const specialties = ['primary-care', 'emergency-medicine', 'internal-medicine', 'pediatrics', 'cardiology'];
        // const specialtyEntries = specialties.map(specialty => `
        //   <url>
        //     <loc>${DOMAIN}/specialties/${specialty}</loc>
        //     <lastmod>${CURRENT_DATE}</lastmod>
        //     <changefreq>monthly</changefreq>
        //     <priority>0.7</priority>
        //   </url>`);
        const specialtyEntries = [];
        // Add app pages - commenting out as requested
        // const appEntries = [`
        //   <url>
        //     <loc>https://app.medally.ai/</loc>
        //     <lastmod>${CURRENT_DATE}</lastmod>
        //     <changefreq>weekly</changefreq>
        //     <priority>0.9</priority>
        //   </url>`,
        // `
        //   <url>
        //     <loc>https://app.medally.ai/login</loc>
        //     <lastmod>${CURRENT_DATE}</lastmod>
        //     <changefreq>monthly</changefreq>
        //     <priority>0.6</priority>
        //   </url>`,
        // `
        //   <url>
        //     <loc>https://app.medally.ai/signup</loc>
        //     <lastmod>${CURRENT_DATE}</lastmod>
        //     <changefreq>monthly</changefreq>
        //     <priority>0.8</priority>
        //   </url>`];
        const appEntries = [];
        // Combine all entries
        const allEntries = [...pageEntries, ...specialtyEntries, ...appEntries];
        // Create sitemap XML
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allEntries.join('')}
</urlset>`;
        // Format XML with prettier
        const formattedSitemap = await prettier.format(sitemap, {
            parser: 'html',
            printWidth: 120,
        });
        // Write sitemap to file
        fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), formattedSitemap);
        console.log('Sitemap generated successfully!');
    }
    catch (error) {
        console.error('Error generating sitemap:', error);
    }
}
// Execute the function if this script is run directly
// In ESM, we can check if the current file is the main module by comparing import.meta.url
// against the URL of the current module
if (import.meta.url === import.meta.resolve('./generate-sitemap.js')) {
    generateSitemap();
}
