const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // check if  Username is taken
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
        // if it is taken, send errror an return void
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    // check if Email is taken
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};


const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;