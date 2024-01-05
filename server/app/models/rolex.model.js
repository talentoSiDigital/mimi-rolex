module.exports = (sequelize, Sequelize) => {
    const RolexCollections = sequelize.define("Rolex-collections", {
      nombre: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.TEXT

      },
      subHeader: {
        type: Sequelize.STRING

      }, 
      watch:{
        type: Sequelize.STRING
 
      }
    },{
      timestamps:false
    })
  
  
    const RolexGetAll = sequelize.define("rolex-get-all", {
   
      modelo: {
        type: Sequelize.STRING
      },
      
      nombre: {
        type: Sequelize.STRING
      },
      material: {
        type: Sequelize.STRING
      },
      cajaDelModelo: {
        type: Sequelize.STRING
      },
      claseDeEsfera: {
        type: Sequelize.STRING
      }
    },{
      timestamps:false
    });
    
    const RolexDetails = sequelize.define("rolex-details", {
     
      sliderImg: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      bisel: {
        type: Sequelize.STRING
      },
      hermeticidad: {
        type: Sequelize.STRING
      },
      movimiento: {
        type: Sequelize.STRING
      },
      calibre: {
        type: Sequelize.STRING
      },
      reservaDeMarcha: {
        type: Sequelize.STRING
      },
      brazalete: {
        type: Sequelize.STRING
      },
      esfera: {
        type: Sequelize.STRING
      },
      certificacion: {
        type: Sequelize.STRING
      },
 
    },{
      timestamps:false
    });


    const RolexHeaders = sequelize.define("rolex-headers", {
  
  
      header1: {
        type: Sequelize.STRING
      },
      imagen1: {
        type: Sequelize.STRING
      },
      texto1: {
        type: Sequelize.TEXT 
      },
      header2: {
        type: Sequelize.STRING
      },
      imagen2: {
        type: Sequelize.STRING
      },
      texto2: {
        type: Sequelize.TEXT 
      },
      header3: {
        type: Sequelize.STRING
      },
      imagen3: {
        type: Sequelize.STRING
      },
      texto3: {
        type: Sequelize.TEXT 
      },

    },{
      timestamps:false
    });

    RolexCollections.hasOne(RolexGetAll)
    RolexGetAll.belongsTo(RolexCollections)
    RolexGetAll.hasOne(RolexDetails)
    RolexGetAll.hasOne(RolexHeaders)
    RolexDetails.belongsTo(RolexGetAll)
    RolexHeaders.belongsTo(RolexGetAll)

    return {
      RolexGetAll,
      RolexDetails,
      RolexHeaders, 
      RolexCollections
    };
  };