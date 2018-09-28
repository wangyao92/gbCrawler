// const puppeteer = require('puppeteer')
//
// function screenShot () {
//   (async () => {
//     const browser = await puppeteer.launch({
//       headless: false
//     });
//
//     const page = await browser.newPage();
//     await page.setViewport({width: 1000, height: 500});
//     await page.goto('https://www.guibi.com/live');
//     await browser.close();
//   })();
// }
//
//
// module.exports = screenShot

var mailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transport = mailer.createTransport(smtpTransport({
  host: 'smtp.163.com',
  port: 25,
  auth: {
    user: '15665690464@163.com',
    pass: 'wanys000'
  }
}));

var mailOptions = {
  from: '搞起博客 <15665690464@163.com>', // 如果不加<xxx@xxx.com> 会报语法错误
  to: '740964655@qq.com', // list of receivers
  subject: '这是一封测试邮件', // Subject line
  html: 'Hello world ！     <p> 这是一封用nodejs的nodemailer发送的测试邮件。</p> ' +
  '<p> 示例分享到了github上：<a href=\"https://github.com/luoyjx/nodemailer-demo\">https://github.com/luoyjx/nodemailer-demo</a></p>'// html body
};

transport.sendMail(mailOptions, function(error, info){
  if(error){
    console.log(error);
  }else{
    console.log('Message sent: ' + info.response);
  }
});