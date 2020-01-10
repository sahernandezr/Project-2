module.exports = function(sequelize, DataTypes) {
  var ShoppingCart = sequelize.define("shoppingcart", {
    clientname: DataTypes.STRING,
    email: DataTypes.STRING,
    creditcard: DataTypes.STRING,
    category: DataTypes.STRING,
    productname: DataTypes.STRING,
    description: DataTypes.TEXT,
    // eslint-disable-next-line camelcase
    product_image: DataTypes.STRING, // puede ser URL a la imagen
    price: DataTypes.DECIMAL(10, 2), //cambiar a q acepte fracciones -- segun yo asi aceptaría numeros hasta con dos decimales
    discount: DataTypes.INTEGER
  });
  return ShoppingCart;
};
