const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

// let transporter = nodemailer.createTransport({
//   // host: 'smtp.ethereal.email',
//   service: '163', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
//   port: 465, // SMTP 端口
//   secureConnection: true, // 使用了 SSL
//   auth: {
//     user: '15665690464@163.com',
//     // 这里密码不是qq密码，是你设置的smtp授权码
//     pass: 'wanys000',
//   }
// });

var transporter = nodemailer.createTransport(smtpTransport({
  host: 'smtp.163.com',
  port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    user: '15665690464@163.com',
    pass: 'wanys000'
  }
}));

// let mailOptions = {
//   from: '"wangyao163" <15665690464@163.com>', // sender address
//   to: '740964655@qq.com', // list of receivers
//   subject: '行情警告', // Subject line
//   // 发送text或者html格式
//   // text: 'Hello world?', // plain text body
//   html: '' // html body
// };

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
