var db = require("../models");

module.exports = function(app) {
  // Get all shoppingcarts
  app.get("/api/shoppingcart", function(req, res) {   //no se si vale la penar tener esta ruta, ¿vamos a almacenar todos los shopping carts q se vayan generando?
    db.shoppingcart.findAll({}).then(function(dbShoppingcart) {
      res.json(dbShoppingcart);
    });
  });

  // Create a new shopping cart
  app.post("/api/shoppingcart", function(req, res) {
    db.shoppingcart.create(req.body).then(function(dbShoppingcart) {
      res.json(dbShoppingcart);
    });
  });

 // Delete a product in the shopping cart
  app.delete("/api/shoppingcart/", function(req, res) {
    db.shoppingcart.destroy({ where: { id: req.params.id } }).then(function(dbShoppingcart) {
      res.json(dbShoppingcart);
    });
  });
  

};