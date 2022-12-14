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
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        require:true,
      },
      usuario: {
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
        require:true,
        defaultValue: "1",
      },
      estado: {
        type: Sequelize.TINYINT,
        allowNull:false,
        require: true,
        defaultValue: 1,
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
        type: Sequelize.TINYINT, //no se si esta bien
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
      tableName: "usuario",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Usuario;
};
