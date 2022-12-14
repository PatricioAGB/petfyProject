const { Sequelize } = require("sequelize");
const dbconfig = require("../dbConfig");
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  port: dbconfig.port,
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require("./user.model")(sequelize, Sequelize);
db.region = require("./region.model")(sequelize, Sequelize);
module.exports = db;
