var db = require("../models");

module.exports = function(app) {
  // Get all products
  app.get("/api/clients", function(req, res) {   
    db.Clients.findAll({}).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  // Create a new product
  app.post("/api/clients", function(req, res) {
    db.Clients.create(req.body).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  // Delete a product by id
  app.delete("/api/clients/:id", function(req, res) {
    db.Clients.destroy({ where: { id: req.params.id } }).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  // Update a product by id
  app.put("/api/clients", function(req, res) {
    db.Clients.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbClients) {
      res.json(dbClients);
    });
  });
};