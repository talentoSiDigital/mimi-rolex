const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");



const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.headerSlider = require("./headerSlider.model")(sequelize, Sequelize);
db.rolex = require("./rolex.model")(sequelize, Sequelize)
db.store = require("./store.model")(sequelize, Sequelize)
db.user = require("./user.model")(sequelize, Sequelize)



module.exports = db;




