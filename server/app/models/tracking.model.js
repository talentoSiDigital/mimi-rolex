module.exports = (sequelize, Sequelize) => {
  const contactTracking = sequelize.define("contact_tracking", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.TEXT
    }
    
  });
  const rolexTracking = sequelize.define("rolex_tracking", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.TEXT
    },
    country: {
      type: Sequelize.TEXT
    },
    region: {
      type: Sequelize.TEXT
    }
  });

  
  


  return { 
    contactTracking,
    rolexTracking
  };
};