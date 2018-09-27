const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    user: 'xxxxxx@qq.com',
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: 'xxxxxx',
  }
});

let mailOptions = {
  from: '"JavaScript之禅" <xxxxx@qq.com>', // sender address
  to: 'xxxxxxxx@163.com', // list of receivers
  subject: 'Hello', // Subject line
  // 发送text或者html格式
  // text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>' // html body
};

module.exports = function sendMail (mailOptions) {
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
  });
}
