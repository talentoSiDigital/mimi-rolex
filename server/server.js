require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./app/models");


function initial() {
  
  db.user.Role.create({
    id: 1,
    name: "user"
  });
 
  db.user.Role.create({
    id: 2,
    name: "admin"
  });
 
} 
// db.sequelize.sync({force:true}).then(() => {
//   console.log("Drop and re-sync db.");
//  initial()
// });

     
// Static files
app.use(express.static('storage'));
  

var corsOptions = {
  origin: "http://localhost:8080/api/"
};

app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
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
require("./app/api/slider.routes")(app);
require("./app/api/rolex.routes")(app);
require("./app/api/store.routes")(app);

require('./app/api/auth.routes')(app);
require('./app/api/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});