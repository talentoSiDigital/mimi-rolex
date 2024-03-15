const { createTransport } = require('nodemailer')


module.exports = createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "519634a5dbb21b7241ade5c3427285ef"
  }
});




