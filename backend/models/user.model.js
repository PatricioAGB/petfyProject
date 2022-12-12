const { Binary } = require("mssql");

module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define(
    "usuario",
    {
      idUsuario: {
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
      contrasena: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      rol: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "1",
      },
    },
    {
      tableName: "usuario",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Usuario;
};
