module.exports = function(sequelize, DataTypes) {
  var ShoppingHistory = sequelize.define("shoppinghistory", {
    clientname: DataTypes.STRING,
    email: DataTypes.STRING,
    creditcard: DataTypes.STRING,
    category: DataTypes.STRING,
    productname: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10, 2), //cambiar a q acepte fracciones
    discount: DataTypes.INTEGER
  });
  return ShoppingHistory;
};
