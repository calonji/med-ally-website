import fs from 'fs';
import path from 'path';
import { generateSitemap } from './generate-sitemap.js';
import { generateImageSitemap } from './generate-image-sitemap.js';
/**
 * Updates the sitemap index file with the current date
 */
async function updateSitemapIndex() {
    try {
        console.log('Updating sitemap index...');
        const currentDate = new Date().toISOString().split('T')[0];
        const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.medally.ai/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.medally.ai/sitemap-images.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
        fs.writeFileSync(path.join(process.cwd(), 'public/sitemap-index.xml'), sitemapIndex);
        console.log('Sitemap index updated successfully!');
    }
    catch (error) {
        console.error('Error updating sitemap index:', error);
    }
}
/**
 * Main function to update all sitemaps
 */
async function updateAllSitemaps() {
    try {
        console.log('Starting sitemap update process...');
        // Generate main sitemap
        await generateSitemap();
        // Generate image sitemap
        await generateImageSitemap();
        // Update sitemap index
        await updateSitemapIndex();
        console.log('All sitemaps updated successfully!');
    }
    catch (error) {
        console.error('Error updating sitemaps:', error);
        process.exit(1);
    }
}
// Execute the function if this script is run directly
// In ESM, we can check if the current file is the main module by comparing import.meta.url
// against the URL of the current module
if (import.meta.url === import.meta.resolve('./update-sitemaps.js')) {
    updateAllSitemaps();
}
export { updateAllSitemaps };
