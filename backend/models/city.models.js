const { Binary } = require("mssql");

module.exports = (sequelize, Sequelize) => {
  const Ciudad = sequelize.define(
    "ciudad",
    {
      idCiudad: {
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
      tableName: "ciudad",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Ciudad;
};
