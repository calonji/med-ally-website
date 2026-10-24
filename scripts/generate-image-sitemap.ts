import fs from 'fs';
import path from 'path';
import { globby } from 'globby';
import prettier from 'prettier';

const DOMAIN = 'https://www.medally.ai';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

const IMAGE_METADATA: Record<string, { title: string; caption: string; license?: string }> = {
    '/images/medally/clinical-hero.webp': {
        title: 'MedAlly clinical AI platform',
        caption: 'MedAlly clinical AI platform for physician documentation and workflow automation'
    },
    '/images/medally/product-ambient-scribe.png': {
        title: 'MedAlly AI clinical documentation',
        caption: 'MedAlly product view for ambient capture and SOAP note automation'
    },
    '/images/medally/product-differential-panel.png': {
        title: 'MedAlly clinical decision support',
        caption: 'MedAlly product view for differential diagnosis and evidence review'
    },
    '/images/medally/product-billing-card.png': {
        title: 'MedAlly medical coding automation',
        caption: 'MedAlly product view for coding, billing, and denial-risk context'
    },
    '/images/medally/brand-two-screens-one-truth.png': {
        title: 'MedAlly clinical workflow',
        caption: 'MedAlly workflow showing encounter context becoming chart-ready documentation'
    },
    '/images/medally/brand-hero-calm-day.png': {
        title: 'MedAlly physician AI assistant',
        caption: 'MedAlly physician-centered clinical AI platform for a calmer clinical day'
    },
    '/images/medally/brand-16-agents-grid.png': {
        title: 'MedAlly clinical AI agents',
        caption: 'MedAlly agent orchestration for documentation, decision support, operations, and governance'
    },
    '/images/medally/agent-orchestration-graphic.png': {
        title: 'MedAlly agent orchestration',
        caption: 'MedAlly clinical AI platform coordinating encounter workflows'
    },
    '/images/medally/ai-operations.png': {
        title: 'MedAlly clinical operations',
        caption: 'MedAlly AI healthcare assistant supporting clinical operations and practice workflows'
    },
    '/images/medally/workflow-room.png': {
        title: 'MedAlly workflow room',
        caption: 'MedAlly clinical AI platform for physician and practice workflow improvement'
    },
    '/images/medally/clinical-workflow-real.png': {
        title: 'MedAlly real clinical workflow',
        caption: 'MedAlly clinical AI platform supporting documentation and review workflows'
    },
    '/images/medally/clinical-hero.png': {
        title: 'MedAlly physician workflow',
        caption: 'MedAlly AI healthcare assistant for physician workflows'
    },
    '/images/medally/features-gpt/features-hero-physician.png': {
        title: 'MedAlly clinical AI platform features hero',
        caption: 'Physician using MedAlly clinical AI documentation software during a patient conversation'
    },
    '/images/medally/features-gpt/documentation-notes.png': {
        title: 'MedAlly documentation and notes feature',
        caption: 'MedAlly clinical AI documentation workflow for transcript and SOAP note organization'
    },
    '/images/medally/features-gpt/diagnostics-decision-support.png': {
        title: 'MedAlly diagnostics and decision support feature',
        caption: 'MedAlly clinical decision support workflow for differential diagnosis and evidence synthesis'
    },
    '/images/medally/features-gpt/billing-revenue.png': {
        title: 'MedAlly billing and revenue feature',
        caption: 'MedAlly medical coding automation and claim workflow feature visual'
    }
};

function getSitemapOutputDir(): string {
    const configuredOutputDir = process.env.SITEMAP_OUTPUT_DIR;
    if (configuredOutputDir) {
        return path.resolve(process.cwd(), configuredOutputDir);
    }

    const buildOutputDir = path.join(process.cwd(), 'dist');
    return fs.existsSync(buildOutputDir) ? buildOutputDir : path.join(process.cwd(), 'public');
}

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

            const outputDir = getSitemapOutputDir();
            fs.mkdirSync(outputDir, { recursive: true });
            fs.writeFileSync(path.join(outputDir, 'sitemap-images.xml'), minimalSitemap);
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
        const outputDir = getSitemapOutputDir();
        fs.mkdirSync(outputDir, { recursive: true });
        fs.writeFileSync(path.join(outputDir, 'sitemap-images.xml'), formattedSitemap);

        console.log('Image sitemap generated successfully!');
    } catch (error) {
        console.error('Error generating image sitemap:', error);
    }
}

// Execute the function if this script is run directly
// In ESM, we can check if the current file is the main module by comparing import.meta.url
// against the URL of the current module
if (import.meta.url === import.meta.resolve('./generate-image-sitemap.js')) {
    generateImageSitemap();
}
