
module.exports = (sequelize, Sequelize) => {
  const Pet = sequelize.define(
    "Pet",
    {
      idPet: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        require: true,
        autoIncrement: true,
      },
      Raza: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      tamano: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      chip: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
      },
      imagen: {
        type: Sequelize.TEXT,
        allowNull: false,
        require: true,
      },
    },
    {
      tableName: "Pet",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Pet;
};