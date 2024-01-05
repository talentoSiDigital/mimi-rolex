const db = require("../models");
const rolex = db.rolex;
const Op = db.Sequelize.Op;


const storagePath = require('path').resolve(__dirname, '..' + "\\")

// SHOW DISPLAY 
// SHOW BY COLLECTIONS 
// SHOW ALL
// DETAILED 



// Create and Save a new Tutorial
exports.showDisplay = (req, res) => {

    rolex.RolexCollections.findAll({
      attributes: ['nombre','watch']
    })
      .then(data => {
        for (let index = 0; index < data.length; index++) {
          data[index].dataValues.file = `${process.env.LOCALPATH}rolex-relojes/${data[index].dataValues.watch}.avif`
        }
        res.send(data)
     
      })
      .catch(err => {
        
        res.status(500).json({

          message:
            err.message || "Some error occurred while retrieving tutorials."
        
          });
      });
};
