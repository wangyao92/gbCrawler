const puppeteer = require('puppeteer')
const EventEmitter = require('events').EventEmitter
const event = new EventEmitter()

const LIST_CONTAINER = '.opinion-cont'
const LIVE_ITEM = '.cont-item .item-list'
var result = []
function main () {
  getLiveContent()
}

function getLiveContent () {
  (async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.guibi.com/live');
    setInterval(() => {
      (async () => {
        const content = await page.evaluate((container, item) => {
          let msg = '#live_msg_content'
          let temp = Array.from($(container).find(item).find(msg))
          let list = []
          temp.forEach(item => {
            if ($(item).html().indexOf('<font') !== -1) {
              let text = '问：-----> ' + $(item).find('.quote').text() + '    答：-----> ' + $(item).find('font').text()
              list.unshift(text)
            }
          })
          return list
        }, LIST_CONTAINER, LIVE_ITEM)
        if (content.length !== result.length) {
          result = content
          console.log(result)
        } else {
          console.log('暂无新消息...')
        }
      })()
    }, 10000)
  })(LIST_CONTAINER, LIVE_ITEM);
}

module.exports = main