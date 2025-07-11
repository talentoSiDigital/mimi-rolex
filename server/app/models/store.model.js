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
    descripcion: {
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
      type: Sequelize.INTEGER
    }
    ,
    cantidadImagenes: {
      type: Sequelize.INTEGER
    },
    cantidad:{
      type: Sequelize.INTEGER 
    },
    disponible:{
      type: Sequelize.INTEGER
    },

  }, {
    timestamps: false
  });

  const Cart = sequelize.define("cart",{});
  
  const CartProduct = sequelize.define("cart_product", {
    quantity:{
      type:Sequelize.INTEGER,
      defaultValue:1 
    }
  });

  
  const Bill = sequelize.define("bill", { 
    codigo: {
      type: Sequelize.STRING
    },
    direccion: {
      type: Sequelize.STRING
    },
    
    pais: {
      type: Sequelize.STRING
    },
    
    ciudad : {
      type: Sequelize.STRING
    },
    total : {
      type: Sequelize.STRING
    },

    

  },{
    timestamps: false
  });
  
  const BillProduct = sequelize.define("bill_product", {
    quantity:{
      type:Sequelize.INTEGER,
      defaultValue:1 
    }
  });

  const TudorCollection = sequelize.define("tudor_collection",{
    nombre:{
      type: Sequelize.STRING
    },
    code:{
      type: Sequelize.STRING
    },
    description:{
      type: Sequelize.TEXT
    }
    
  },{
    timestamps: false
  })
  


  return { 
    Jeweler, 
    Watchmaking,
    Cart,
    Bill,
    CartProduct,
    BillProduct,
    TudorCollection
  };
};