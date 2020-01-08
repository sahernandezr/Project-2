module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("products", {
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    product_image: DataTypes.STRING,  // puede ser URL a la imagen
    price: DataTypes.INTEGER,  //cambiar a q acepte fracciones
    discount: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,    
  });
  return Products;
};
