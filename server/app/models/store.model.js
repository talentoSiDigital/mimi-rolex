module.exports = (sequelize, Sequelize) => {
    const Joyeria = sequelize.define("joyeria", {
      serie: {
        type: Sequelize.STRING
      }
      ,
      nombre: {
        type: Sequelize.STRING
      }
      ,
      titulo: {
        type: Sequelize.STRING
      }
      ,
      tipo: {
        type: Sequelize.STRING
      }
      ,
      tags: {
        type: Sequelize.STRING
      }
      ,
      coleccion: {
        type: Sequelize.STRING
      }
      ,
      precio: {
        type: Sequelize.STRING
      }
      
    },{
      timestamps:false
    });
    const Relojeria = sequelize.define("relojeria", {
      serie: {
        type: Sequelize.STRING
      }
      ,
      nombre: {
        type: Sequelize.STRING
      }
      ,
      titulo: {
        type: Sequelize.TEXT
      }
      ,
      contenidoTabla: {
        type: Sequelize.TEXT  
      }
      ,
      coleccion: {
        type: Sequelize.STRING
      }
      ,
    
      precio: {
        type: Sequelize.STRING
      }
      ,
      cantidadImagenes: {
        type: Sequelize.INTEGER
      }
      
    },{
      timestamps:false
    });

    // 
  
    return {Joyeria,Relojeria};
  };