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

    // check if number is taken
    User.findOne({
      where: {
        phone: req.body.phone
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Número no disponible"
        });
        return;
      }
   
    });
    // check if email is taken

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
   
    });
    next();

    
  });
};



const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;