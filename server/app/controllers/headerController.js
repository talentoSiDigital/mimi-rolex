const db = require("../models");
const HeaderSlider = db.headerSlider;
const Op = db.Sequelize.Op;


const storagePath = require('path').resolve(__dirname, '..' + "\\")

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Image object
      const sliderImg = {
        route: req.destination,
        name: req.filename,
        mobileName: req.body.description
      };
    
      // Save Tutorial in the database
      HeaderSlider.create(sliderImg)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // let allItems = []
    

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


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

