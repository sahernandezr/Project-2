var db = require("../models");

<<<<<<< HEAD
module.exports = function(app) {
  // FALTA PROBAR ESTAS RUTAS EN POSTMAN
  // Get all clients
  app.get("/api/clients", function(req, res) {
=======
module.exports = function(app) {     // FALTA PROBAR ESTAS RUTAS EN POSTMAN
  // Get all clients
  app.get("/api/clients", function(req, res) {   
>>>>>>> cdf3fd8c54c769a15219e102051ab1c4a302d69a
    db.clients.findAll({}).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  app.get("/api/email/:email", function(req, res) {
    db.clients.findAll({
      where: {
        email: req.params.email  
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/telephone/:telephone", function(req, res) {
    db.clients.findAll({
      where: {
        telephone: req.params.telephone  
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Create a new client
  app.post("/api/clients", function(req, res) {
    db.clients.create(req.body).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  // Delete a client by id
  app.delete("/api/clients/:id", function(req, res) {
    db.clients.destroy({ where: { id: req.params.id } }).then(function(dbClients) {
      res.json(dbClients);
    });
  });

  // Update a client by id
  app.put("/api/clients", function(req, res) {
    db.clients.update(
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
