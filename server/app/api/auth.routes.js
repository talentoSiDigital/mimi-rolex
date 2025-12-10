const verifySignUp  = require("../middleware/verifySignUp");
const controller = require("../controllers/authController");
const express = require('express');
const uploadFiles = require("../middleware/store");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post( 
    "/api/auth/signup",
    [ express.json(),
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    controller.signup
  );

  app.post("/api/auth/signin", express.json(),controller.signin);

};