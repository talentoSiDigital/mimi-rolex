const { createTransport } = require('nodemailer')


module.exports = createTransport({
  host: "live.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "api",
    pass: process.env.TRANSPORTER_PASS
  }
});
