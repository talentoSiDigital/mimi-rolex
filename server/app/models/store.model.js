module.exports = (sequelize, Sequelize) => {
  const Jeweler = sequelize.define("jeweler", {
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

  }, {
    timestamps: false
  });

  const Watchmaking = sequelize.define("watchmaking", {
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

  }, {
    timestamps: false
  });

  const Cart = sequelize.define("cart",{});
  
  const CartProduct = sequelize.define("cart_product", {});

  


  const Bill = sequelize.define("bill", {},{
    timestamps: false
  });


  return { 
    Jeweler, 
    Watchmaking,
    Cart,
    Bill,
    CartProduct
  };
};