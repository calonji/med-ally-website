/**
 * Utility function to check meta tags on the current page
 * This can be called from the browser console
 */
export function checkMetaTags() {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || 'Not found';
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || 'Not found';
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || 'Not found';
    const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || 'Not found';
    const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content') || 'Not found';
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || 'Not found';
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || 'Not found';

    console.log('=== Meta Tags for Current Page ===');
    console.log(`Page URL: ${window.location.href}`);
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);
    console.log(`Canonical: ${canonical}`);
    console.log(`OG Title: ${ogTitle}`);
    console.log(`OG Description: ${ogDescription}`);
    console.log(`OG URL: ${ogUrl}`);
    console.log(`Twitter Title: ${twitterTitle}`);
    console.log(`Twitter Description: ${twitterDescription}`);

    return {
        title,
        description,
        canonical,
        ogTitle,
        ogDescription,
        ogUrl,
        twitterTitle,
        twitterDescription
    };
}

// Export a global function that can be called from the browser console
if (typeof window !== 'undefined') {
    (window as any).checkMetaTags = checkMetaTags;
} 