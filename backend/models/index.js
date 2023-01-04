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
db.User = require("./username.model")(sequelize, Sequelize);
db.Region = require("./region.model")(sequelize, Sequelize);
db.Provincia = require("./provincia.model")(sequelize,Sequelize);
db.Pet = require("./pet.model")(sequelize,Sequelize);
db.Publication = require("./publication.model")(sequelize,Sequelize);

db.Publication.hasOne(db.Pet,{foreignKey:"idPet"});
db.Publication.hasOne(db.User,{foreignKey:"idUsername"});

module.exports = db;
