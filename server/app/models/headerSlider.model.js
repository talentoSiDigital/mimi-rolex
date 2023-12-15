
module.exports = (sequelize, Sequelize) => {
    const HeaderSlider = sequelize.define("headersliders", {
      route: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      mobileName: {
        type: Sequelize.STRING
      }
    });
  
    return HeaderSlider;
  };