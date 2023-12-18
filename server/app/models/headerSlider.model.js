
module.exports = (sequelize, Sequelize) => {
    const HeaderSlider = sequelize.define("headersliders", {
      path: {
        type: Sequelize.STRING
      },
      mobilePath: {
        type: Sequelize.STRING
      }
    });
  
    return HeaderSlider;
  };