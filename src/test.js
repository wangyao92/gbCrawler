const puppeteer = require('puppeteer')

function screenShot () {
  (async () => {
    const browser = await puppeteer.launch({
      headless: false
    });

    const page = await browser.newPage();
    await page.setViewport({width: 1000, height: 500});
    await page.goto('https://www.guibi.com/live');
    await browser.close();
  })();
}


module.exports = screenShot