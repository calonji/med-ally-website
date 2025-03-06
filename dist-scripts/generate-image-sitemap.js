import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import prettier from 'prettier';
const DOMAIN = 'https://www.medally.ai';
const CURRENT_DATE = new Date().toISOString().split('T')[0];
// Image metadata mapping - commenting out since these images don't exist
// const IMAGE_METADATA: Record<string, { title: string; caption: string; license?: string }> = {
//     // Hero and main images
//     '/images/hero-image.webp': {
//         title: 'MedAlly AI-Powered Healthcare Assistant',
//         caption: 'AI medical assistant helping physicians reduce documentation time'
//     },
//     '/images/about-team.webp': {
//         title: 'MedAlly Team',
//         caption: 'Our team of healthcare and AI experts'
//     },
//     '/images/features-overview.webp': {
//         title: 'MedAlly Features Overview',
//         caption: 'Comprehensive view of MedAlly\'s AI-powered features'
//     },
//
//     // Feature-specific images
//     '/images/documentation-feature.webp': {
//         title: 'AI-Powered Documentation',
//         caption: 'Automated SOAP note generation with voice recognition'
//     },
//     '/images/voice-recognition.webp': {
//         title: 'Medical Voice Recognition',
//         caption: 'Advanced voice recognition optimized for medical terminology'
//     },
//     // ... other image metadata
// };
const IMAGE_METADATA = {};
/**
 * Generates a sitemap for images on the website
 */
export async function generateImageSitemap() {
    try {
        console.log('Generating image sitemap...');
        // Get all images in the public directory
        const images = await globby(['public/**/*.{png,jpg,jpeg,gif,webp,svg}']);
        // Skip if no images found
        if (images.length === 0) {
            console.log('No images found in public directory. Creating minimal image sitemap.');
            // Create a minimal sitemap with just the homepage
            const minimalSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </url>
</urlset>`;
            fs.writeFileSync(path.join(process.cwd(), 'public/sitemap-images.xml'), minimalSitemap);
            console.log('Minimal image sitemap generated successfully!');
            return;
        }
        // Process images
        const imageEntries = images.map(image => {
            // Convert file path to URL path
            const imagePath = image.replace('public', '');
            // Get metadata if available
            const metadata = IMAGE_METADATA[imagePath] || {
                title: `MedAlly - ${path.basename(imagePath)}`,
                caption: 'MedAlly healthcare AI assistant image'
            };
            return `
    <image:image>
      <image:loc>${DOMAIN}${imagePath}</image:loc>
      <image:title>${metadata.title}</image:title>
      <image:caption>${metadata.caption}</image:caption>
    </image:image>`;
        });
        // Create a single URL entry with all images
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
${imageEntries.join('')}
  </url>
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
