const { chromium } = require('playwright');

// Function to create a random delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  // Run in headful mode
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    // Set a realistic user agent
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    // Set a standard viewport size
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  await page.goto('https://animepahe.si/');

  // Add a random delay to simulate human behavior
  await delay(Math.random() * 2000 + 1000); // Delay between 1 and 3 seconds

  // Wait for the episode list to be populated
  await page.waitForSelector('.episode-wrap');

  const titles = await page.$$eval('.episode-title a', (links) =>
    links.map((link) => link.getAttribute('title'))
  );

  titles.forEach((title) => console.log(title));

  await browser.close();
})();
