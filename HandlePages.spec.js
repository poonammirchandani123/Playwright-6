const { test, expect, chromium } = require('@playwright/test');

test('Handle Pages/Windows', async () => {
    const browser = await chromium.launch({ headless: false }); // Launch browser in non-headless mode for better visibility
    const context = await browser.newContext();

    // Open the first page
    const page1 = await context.newPage();
    await page1.goto('https://example.com'); // Replace with your desired URL
    console.log('First page URL:', await page1.url());

    // Open the second page
    const page2 = await context.newPage();
    await page2.goto('https://www.wikipedia.org'); // Replace with your desired URL
    console.log('Second page URL:', await page2.url());

    // Get all open pages in the context
    const allPages = context.pages();
    console.log('No of Pages created:', allPages.length);

    // Interact with both pages
    await page1.click('a[href="/"]'); // Example of interacting with page1
    const title1 = await page1.title();
    console.log('Title of Page 1:', title1);

    await page2.fill('input[name="search"]', 'Playwright'); // Example of interacting with page2
    await page2.press('input[name="search"]', 'Enter');
    const title2 = await page2.title();
    console.log('Title of Page 2 after search:', title2);

    // Close the browser
    await browser.close();
});
