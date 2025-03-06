import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import prettier from 'prettier';
const DOMAIN = 'https://www.medally.ai';
const CURRENT_DATE = new Date().toISOString().split('T')[0];
// Image metadata mapping
const IMAGE_METADATA = {
    // Hero and main images
    '/images/hero-image.webp': {
        title: 'MedAlly AI-Powered Healthcare Assistant',
        caption: 'AI medical assistant helping physicians reduce documentation time'
    },
    '/images/about-team.webp': {
        title: 'MedAlly Team',
        caption: 'Our team of healthcare and AI experts'
    },
    '/images/features-overview.webp': {
        title: 'MedAlly Features Overview',
        caption: 'Comprehensive view of MedAlly\'s AI-powered features'
    },
    // Feature-specific images
    '/images/documentation-feature.webp': {
        title: 'AI-Powered Documentation',
        caption: 'Automated SOAP note generation with voice recognition'
    },
    '/images/voice-recognition.webp': {
        title: 'Medical Voice Recognition',
        caption: 'Advanced voice recognition technology for medical terminology'
    },
    '/images/ehr-integration.webp': {
        title: 'EHR Integration',
        caption: 'Seamless integration with major EHR systems'
    },
    '/images/medical-coding.webp': {
        title: 'Automated Medical Coding',
        caption: 'AI-powered ICD-10 and CPT coding for accurate billing'
    },
    '/images/clinical-decision-support.webp': {
        title: 'Clinical Decision Support',
        caption: 'Evidence-based clinical suggestions to improve patient care'
    },
    // Specialty images
    '/images/primary-care.webp': {
        title: 'Primary Care Solutions',
        caption: 'AI assistant for primary care physicians'
    },
    '/images/emergency-medicine.webp': {
        title: 'Emergency Medicine Solutions',
        caption: 'Rapid documentation for emergency departments'
    },
    '/images/internal-medicine.webp': {
        title: 'Internal Medicine Solutions',
        caption: 'Comprehensive documentation for internal medicine'
    },
    // UI screenshots
    '/images/dashboard-screenshot.webp': {
        title: 'MedAlly Dashboard',
        caption: 'User-friendly dashboard for physicians'
    },
    '/images/soap-note-generation.webp': {
        title: 'SOAP Note Generation',
        caption: 'AI-generated SOAP notes with high accuracy'
    },
    '/images/mobile-interface.webp': {
        title: 'Mobile Interface',
        caption: 'MedAlly on mobile devices for documentation on the go'
    },
    // Logos and branding
    '/logo.png': {
        title: 'MedAlly Logo',
        caption: 'Official MedAlly logo'
    },
    '/images/logo-white.png': {
        title: 'MedAlly White Logo',
        caption: 'MedAlly logo for dark backgrounds'
    },
    '/images/og-image.jpg': {
        title: 'MedAlly Social Share Image',
        caption: 'Image used for social media sharing'
    }
};
/**
 * Generates a dedicated sitemap for images to improve image SEO
 */
export async function generateImageSitemap() {
    try {
        console.log('Generating image sitemap...');
        // Get all public images
        const images = await globby(['public/images/**/*.{png,jpg,jpeg,webp,svg}', 'public/*.{png,jpg,jpeg,webp,svg}']);
        // Create sitemap entries for images
        const imageEntries = images
            .map((image) => {
            // Convert file path to URL path
            const imagePath = image.replace('public', '');
            // Get metadata for this image or use defaults
            const metadata = IMAGE_METADATA[imagePath] || {
                title: `MedAlly - ${path.basename(imagePath)}`,
                caption: 'MedAlly healthcare AI assistant image'
            };
            // Create XML entry
            return `
  <image:image>
    <image:loc>${DOMAIN}${imagePath}</image:loc>
    <image:title>${metadata.title}</image:title>
    <image:caption>${metadata.caption}</image:caption>
    ${metadata.license ? `<image:license>${metadata.license}</image:license>` : ''}
  </image:image>`;
        });
        // Create URL entries that contain the images
        const urlEntries = [
            // Homepage with multiple images
            `
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    ${imageEntries.slice(0, 5).join('')}
  </url>`,
            // Features page with feature images
            `
  <url>
    <loc>${DOMAIN}/features</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    ${imageEntries.filter(entry => entry.includes('feature') || entry.includes('Feature')).join('')}
  </url>`,
            // About page with team images
            `
  <url>
    <loc>${DOMAIN}/about</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    ${imageEntries.filter(entry => entry.includes('team') || entry.includes('Team')).join('')}
  </url>`,
            // Specialties pages
            `
  <url>
    <loc>${DOMAIN}/specialties</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    ${imageEntries.filter(entry => entry.includes('primary-care') ||
                entry.includes('emergency-medicine') ||
                entry.includes('internal-medicine')).join('')}
  </url>`
        ];
        // Create sitemap XML
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries.join('')}
</urlset>`;
        // Format XML with prettier
        const formattedSitemap = await prettier.format(sitemap, {
            parser: 'html',
            printWidth: 120,
        });
        // Write sitemap to file
        fs.writeFileSync(path.join(process.cwd(), 'public/sitemap-images.xml'), formattedSitemap);
        console.log('Image sitemap generated successfully!');
    }
    catch (error) {
        console.error('Error generating image sitemap:', error);
    }
}
// Execute the function if this script is run directly
// In ESM, we can check if the current file is the main module by comparing import.meta.url
// against the URL of the current module
if (import.meta.url === import.meta.resolve('./generate-image-sitemap.js')) {
    generateImageSitemap();
}
