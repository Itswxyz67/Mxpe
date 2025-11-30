const { chromium } = require('playwright');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function scrapeEpisode(episodeUrl) {
  let browser;
  try {
    if (!episodeUrl || !episodeUrl.startsWith('https://animepahe.si/play/')) {
      throw new Error("Invalid animepahe.si episode URL.");
    }

    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
      viewport: { width: 1920, height: 1080 }
    });

    const page = await context.newPage();
    await page.goto(episodeUrl);

    await page.waitForSelector('.click-to-load');
    await page.click('.click-to-load');
    await delay(1000);

    await page.waitForSelector('#fansubMenu');
    await page.click('#fansubMenu');

    await page.waitForSelector('#resolutionMenu');

    const serverInfo = await page.$eval('#providerMenu', (el) => el.innerText.trim());
    const iframeSrc = await page.$eval('#resolutionMenu .dropdown-item.active', (el) => el.getAttribute('data-src'));
    const downloadLinks = await page.$$eval('#pickDownload a', (links) =>
      links.map((link) => {
        const text = link.innerText.trim();
        const url = link.getAttribute('href');
        return { text, url };
      })
    );

    return {
      server: serverInfo,
      iframeSrc: iframeSrc,
      downloads: downloadLinks
    };

  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = {
  scrapeEpisode
};
