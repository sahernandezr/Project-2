var db = require("../models");

module.exports = function(app) {
  // Get all products
  app.get("/api/products", function(req, res) {   //realmente q le estamos diciendo con el /api/products???
    db.products.findAll({}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  app.get("/api/category/:category", function(req, res) {
    db.products.findAll({
      where: {
        category: req.params.category  
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/name/:name", function(req, res) {
    db.products.findAll({
      where: {
        name: req.params.name  
      }
    }).then(function(results) {
      res.json(results);
    });
  });


  // Create a new product
  app.post("/api/products", function(req, res) {
    db.products.create(req.body).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // Delete a product by id
  app.delete("/api/products/:id", function(req, res) {
    db.products.destroy({ where: { id: req.params.id } }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // Update a product by id
  app.put("/api/products", function(req, res) {
    db.products.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  app.get("/api/products/price", function(req, res) {  // es la unica ruta q falta probar
    db.products.findAll({
      where: {
        pages: {
          $gte: req.body.minPrice,
          $lte: req.body.maxPrice,
        }
      },
      order: [["pages", "ASC"]]
    }).then(function(results) {
      res.json(results);
    });
  });

};


