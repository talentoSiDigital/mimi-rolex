const db = require("../models");
const Op = db.Sequelize.Op;


const Store = db.store



checkIfAvailable = (req, res, next) => {
    // check if  Username is taken
    Store.Watchmaking.findOne({
      where: {
        [Op.and]: [{ id: req.params.id }, { cantidad: 0 }]   
      }
    }).then(item => { 
      if (item) {
        // if it is taken, send errror an return void
        res.status(200).send({
          "message":'Producto no disponible',
          "icon":false
      });
        return;
      }
      
      
      next();
  
      
    });
  };
  
  
  
  const verifyExistence = {
    checkIfAvailable: checkIfAvailable,
  };
  
  module.exports = verifyExistence;