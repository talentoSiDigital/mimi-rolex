const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/userController");
const uploadFiles = require("../middleware/store")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user/get-all", controller.listUsers)
  app.get("/api/user/find-user/:id", controller.findUserData)
  app.post("/api/user/update", uploadFiles.any(), controller.updateUserData)

  

};