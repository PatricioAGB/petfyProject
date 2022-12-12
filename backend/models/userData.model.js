const { Binary } = require("mssql");

module.exports = (sequelize, Sequelize) => {
  const datosUsuarios = sequelize.define(
    "datosusuario",
    {
      idDatosUsuario: {
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
      apellidoP: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      apellidoM: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      edad: {
        type: Sequelize.tinyint, //no se si esta bien
        allowNull: false,
        require: true,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      numeroCelular: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
    },
    {
      tableName: "datosusuario",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return datosUsuarios;
};
