
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "Username",
    {
        idUsername: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        require: true,
        autoIncrement: true,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull:false,
        require:true,
      },
      Contrasena: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      Rol: {
        type: Sequelize.STRING,
        allowNull: false,
        require:true,
        defaultValue: "1",
      },
      Estado: {
        type: Sequelize.TINYINT,
        allowNull:false,
        require: true,
        defaultValue: 1,
      },
      Nombre: {
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
      Edad: {
        type: Sequelize.TINYINT, //no se si esta bien
        allowNull: false,
        require: true,
      },
      Genero: {
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
      tableName: "Username",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );


  return User;
};
