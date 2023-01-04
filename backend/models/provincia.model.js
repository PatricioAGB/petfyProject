const { Binary } = require("mssql");
const Region =require("./region.model")


module.exports = (sequelize, Sequelize) => {
  const Provincia = sequelize.define(
    "Province",
    {
      idProvince: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        require: true,
        autoIncrement: true,
      },
      idRegion: {
        type: Sequelize.INTEGER,
        references :{
            model: Region,
            key: 'idRegion',
        }
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
    },
    {
      tableName: "Province",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Provincia;
};
