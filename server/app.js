require('dotenv').config();

const express = require("express");
const spdy = require('spdy');
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');

const http2Express = require('http2-express-bridge')
const http2 = require('node:http2');
const app = http2Express(express);
  const compression = require('compression')
  app.use(compression())



const options = {
  key: fs.readFileSync(__dirname + '/keys/mimi-key.pem'),
  cert: fs.readFileSync(__dirname + '/keys/mimi.pem'),
  allowHTTP1: true
};


const db = require("./app/models");

db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});



// Static files
app.use('/storage', express.static('storage'));


// var corsOptions = {
//   origin: process.env.ROOTPATH_API
// };

// app.use(cors(corsOptions));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

var cookieParser = require('cookie-parser');
app.use(cookieParser())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Require the controllers
const headerController = require('./app/controllers/headerController')


// Require the upload middleware
const upload = require('./app/middleware/headerUpload');



//ROUTES
const path = __dirname + '/app/views/';
app.set('views', path);
app.set("view engine", "ejs");
var history = require('connect-history-api-fallback');
const serveStatic = require("serve-static")

app.use(express.static(path));
app.use(history())
app.use(serveStatic(path));

require("./app/api/slider.routes")(app);
require("./app/api/rolex.routes")(app);
require("./app/api/store.routes")(app);
require("./app/api/rolexV2.routes")(app);

require('./app/api/auth.routes')(app);
require('./app/api/user.routes')(app);
require('./app/api/mail.routes')(app);
require('./app/api/payment.routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 3000;
const LOCALPATH = process.env.LOCALPATH


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const server = spdy.createServer({
//   key:fs.readFileSync(__dirname + '/keys/mimi-key.pem'),
//   cert: fs.readFileSync(__dirname + '/keys/mimi.pem')
// }, app);

// server.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
//   console.log('SSL enabled');
// });


// const server = http2.createSecureServer(options, app)

// server.listen(3000, () => {
//   console.log(`listening on port 3000`)
// })