const db = require("../models");
const HeaderSlider = db.headerSlider;
const Op = db.Sequelize.Op;


const storagePath = require('path').resolve(__dirname, '..' + "\\")


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


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  HeaderSlider.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Banner actualizado correctamente"
        });
      } else {
        res.send({
          message: `No se pudo actualizar el banner el la ${id} posicion. Intenta nuevamente`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};


