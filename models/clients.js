module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define("clients", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,  // DUDA SOBRE DATATYPE PARA PASSWORD
    adress: DataTypes.TEXT,
    telephone: DataTypes.STRING,
    creditcard: DataTypes.STRING   //AUNQ SON NUMEROS NO SE UTILIZARAN PARA NINGUN CALCULO    
  });
  return Clients;
};
