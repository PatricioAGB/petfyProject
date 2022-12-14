const { Binary } = require("mssql");

module.exports = (sequelize, Sequelize) => {
  const Region = sequelize.define(
    "Region",
    {
      idRegion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        require: true,
        autoIncrement: true,
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
    },  
    {
      tableName: "Region",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Region;
};
