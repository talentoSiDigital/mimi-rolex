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
    watch: {
      type: Sequelize.STRING

    },
    idName: {
      type: Sequelize.STRING

    },
    hasVideo: {
      type: Sequelize.BOOLEAN
    }
  }, {
    timestamps: false
  })

  const RolexGetAllV2 = sequelize.define("rolex-get-all-v2", {

    modelo: {
      type: Sequelize.STRING
    },
    nombre: {
      type: Sequelize.STRING
    },
    cajaDelModelo: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });

  const RolexDetailsV2 = sequelize.define("rolex-details-v2", {


    precio: {
      type: Sequelize.INTEGER
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
    brochure: {
      type: Sequelize.STRING
    }

  }, {
    timestamps: false
  });


  const RolexHeadersV2 = sequelize.define("rolex-headers-v2", {


    header1: {
      type: Sequelize.STRING
    },
    imagen1: {
      type: Sequelize.STRING
    },
    texto1: {
      type: Sequelize.TEXT('medium')
    },
    header2: {
      type: Sequelize.STRING
    },
    imagen2: {
      type: Sequelize.STRING
    },
    texto2: {
      type: Sequelize.TEXT('medium')
    },
    header3: {
      type: Sequelize.STRING
    },
    imagen3: {
      type: Sequelize.STRING
    },
    texto3: {
      type: Sequelize.TEXT('medium')
    },

  }, {
    timestamps: false
  });

  const RolexAccesories = sequelize.define("rolex-accesories", {
    modelo: {
      type: Sequelize.TEXT
    },
    nombre: {
      type: Sequelize.TEXT
    },
    precio: {
      type: Sequelize.INTEGER
    },
    sub: {
      type: Sequelize.TEXT
    },
    spec: {
      type: Sequelize.TEXT
    },
    spec2: {
      type: Sequelize.TEXT
    },
    titulo: {
      type: Sequelize.TEXT
    },
    contenido: {
      type: Sequelize.TEXT
    },
  }, {
    timestamps: false
  })

  RolexCollections.hasOne(RolexGetAllV2)
  RolexGetAllV2.belongsTo(RolexCollections)
  RolexGetAllV2.hasOne(RolexDetailsV2)
  RolexGetAllV2.hasOne(RolexHeadersV2)
  RolexDetailsV2.belongsTo(RolexGetAllV2)
  RolexHeadersV2.belongsTo(RolexGetAllV2)


  RolexCollections.hasOne(RolexAccesories)
  RolexAccesories.belongsTo(RolexCollections)

  return {
    RolexGetAllV2,
    RolexDetailsV2,
    RolexHeadersV2,
    RolexCollections,
    RolexAccesories
  };
};