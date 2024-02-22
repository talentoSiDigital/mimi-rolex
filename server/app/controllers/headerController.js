const db = require("../models");
const HeaderSlider = db.headerSlider;
const Op = db.Sequelize.Op;
const uploadFile = require("../middleware/headerUpload")






// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

  
  HeaderSlider.findAll()
    .then(data => {
      
      res.send(data)

    })
    .catch(err => {

      res.status(500).json({

        message:
          err.message || "Some error occurred while retrieving tutorials."

      });
    });
};




