const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://quotes.toscrape.com');

  const quotes = await page.$$('.quote');

  for (const quote of quotes) {
    const text = await quote.$eval('.text', (el) => el.innerText);
    const author = await quote.$eval('.author', (el) => el.innerText);
    console.log(`"${text}" - ${author}`);
  }

  await browser.close();
})();
