const puppeteer = require('puppeteer')
// const sendMail = require('./email')

const LIST_CONTAINER = '.opinion-cont'
const LIVE_ITEM = '.cont-item .item-list'
var result = []

function main () {
  getLiveContent()
}

function getLiveContent () {
  (async () => {
    const browser = await puppeteer.launch({
      headless: true
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
              list.unshift($(item).html())
            }
          })
          return list
        }, LIST_CONTAINER, LIVE_ITEM)
        if (content.length !== result.length) {
          let step = content.length - result.length
          result = content
          let arr = []
          for (let i = 0; i < step; i++) {
            arr.push(content[i])
          }
          let temp = arr.join('</br></br>')
          let mailOptions = {
            from: '"wangyao163" <15665690464@163.com>', // sender address
            to: '740964655@qq.com', // list of receivers
            subject: '行情警告', // Subject line
            // 发送text或者html格式
            // text: 'Hello world?', // plain text body
            html: temp // html body
          };
          // sendMail(mailOptions)
          console.log(arr)
        } else {
          console.log('暂无新消息...')
        }
      })()
    }, 10000)
  })(LIST_CONTAINER, LIVE_ITEM);
}

module.exports = main