
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
          },
          email: {
            type: Sequelize.STRING
          },
          password: {
            type: Sequelize.STRING
          }
    });

    const Role = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return {User,Role};
  };