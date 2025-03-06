// A simple script to check meta tags on each page
const puppeteer = require('puppeteer');

async function checkMetaTags() {
    console.log('Checking meta tags on each page...');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const pages = [
        { url: 'http://localhost:5173/', name: 'Home' },
        { url: 'http://localhost:5173/about-us', name: 'About Us' },
        { url: 'http://localhost:5173/features', name: 'Features' },
        { url: 'http://localhost:5173/benefits', name: 'Benefits' },
        { url: 'http://localhost:5173/how-it-works', name: 'How It Works' },
        { url: 'http://localhost:5173/roi-calculator', name: 'ROI Calculator' },
        { url: 'http://localhost:5173/faq', name: 'FAQ' },
        { url: 'http://localhost:5173/pricing', name: 'Pricing' },

    ];

    for (const pageInfo of pages) {
        try {
            await page.goto(pageInfo.url, { waitUntil: 'networkidle0' });

            const title = await page.title();
            const description = await page.$eval('meta[name="description"]', element => element.content);
            const canonical = await page.$eval('link[rel="canonical"]', element => element.href);

            console.log(`\n=== ${pageInfo.name} ===`);
            console.log(`Title: ${title}`);
            console.log(`Description: ${description}`);
            console.log(`Canonical: ${canonical}`);
        } catch (error) {
            console.error(`Error checking ${pageInfo.name}:`, error.message);
        }
    }

    await browser.close();
    console.log('\nMeta tag check complete!');
}

checkMetaTags().catch(console.error); 