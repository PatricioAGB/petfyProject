const Pet =require("./pet.model");
const usuario = require("./username.model");


module.exports = (sequelize, Sequelize) => {
  const Publication = sequelize.define(
    "Publication",
    {
      idPublication: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        require: true,
        autoIncrement: true,
      },
      Descripcion:{
        type: Sequelize.TEXT,
      },
      fechaPublicacion:{
        type: Sequelize.DATE
      },
      fechaPerdidaMascota:{
        type: Sequelize.DATE
      },
      ultimaLugarVista:{
        type: Sequelize.TEXT
      },
      Estado:{
        type: Sequelize.TINYINT,
        require: true,
        defaultValue: 1,
      },
      idUsername: {
        type: Sequelize.INTEGER,
        references:{
            model: usuario,
            key: 'idUsername'
        }
      },
      idPet:{
        type: Sequelize.INTEGER,
        references:{
          model:Pet,
          key: 'idPet'
        }
      }
    },
    {
      freezeTableName: true,
      tableName: "Publication",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );


  return Publication;
};