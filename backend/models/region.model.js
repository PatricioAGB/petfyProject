const { Binary } = require("mssql");

module.exports = (sequelize, Sequelize) => {
  const Ciudad = sequelize.define(
    "region",
    {
      idRegion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        require: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
    },
    {
      tableName: "region",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Ciudad;
};
