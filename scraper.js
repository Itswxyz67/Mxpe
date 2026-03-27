const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://animepahe.si/');

  // Wait for the episode list to be populated
  await page.waitForSelector('.episode-wrap');

  const titles = await page.$$eval('.episode-title a', (links) =>
    links.map((link) => link.getAttribute('title'))
  );

  titles.forEach((title) => console.log(title));

  await browser.close();
})();
