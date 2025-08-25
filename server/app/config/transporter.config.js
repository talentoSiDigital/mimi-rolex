const { createTransport } = require('nodemailer')


module.exports = createTransport({
  host: "live.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "api",
    pass: "e76a54b096492edc2c1b115b81c1c407"
  }
});
