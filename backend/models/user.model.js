module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("usuario", {
    idusuario: { type: Sequelize.INTEGER,primaryKey: true,autoIncrement: true},
    nombre:{type:Sequelize.STRING,allowNull: false},
    apellido:{type:Sequelize.STRING,allowNull: false},
    edad:{type:Sequelize.INTEGER,allowNull: false}
  },{tableName: 'usuario',timestamps: false,createdAt:false,updatedAt:false}
  ); 
  return Usuario;
};
