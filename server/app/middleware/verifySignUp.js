const db = require("../models");
const ROLES = db.ROLES;
const User = db.user.User;

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
        message: "Nombre de usuario no disponible"
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
          message: "Email no disponible"
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;