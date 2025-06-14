import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
const page_url = "https://wesjrose-gbc.github.io/desn3035-e5/";

await page.goto('https://pagespeed.web.dev/');

// Set screen size.
await page.setViewport({width: 1080, height: 1024});
await page.waitForNetworkIdle();

await page.locator('i2').fill(page_url);
await page.waitForNetworkIdle();

await page.screenshot({
  path: 'auto_screenshot.png',
});

await browser.close();