var db = require("../models");

module.exports = function(app) {
  // Get all shoppingcarts
  app.get("/api/shoppinghistory/:client", function(req, res) {   //no se si vale la penar tener esta ruta, ¿vamos a almacenar todos los shopping carts q se vayan generando?
    db.shoppingcart.findAll({ where: { client: req.params.clientname } }).then(function(dbShoppinghistory) {
      res.json(dbShoppinghistory);
    });
  });

 // Delete a product in the shopping cart
  app.delete("/api/shoppinghistory/:client", function(req, res) {
    db.shoppingcart.destroy({ where: { client: req.params.clientname } }).then(function(dbShoppinghistory) {
      res.json(dbShoppinghistory);
    });
  });
  

};