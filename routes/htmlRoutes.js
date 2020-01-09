var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.products.findAll({}).then(function(dbProducts) {
      // Que diferencia hay con res.sendFile
      res.render("index", {
        // ES SI USAMOS HANDLEBARS
        msg: "Welcome!",
        products: dbProducts
      });
    });
  });

  // Load example page and pass in an example by id
  // app.get("/products/:id", function(req, res) {
  //   db.products.findOne({ where: { id: req.params.id } }).then(function(dbProducts) {   //Nosotros no creamos la columna Id en la Base de datos
  //     res.render("products", {
  //       products: dbProducts
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/products/:id", function(req, res) {
    db.products
      .findOne({ where: { id: req.params.id } })
      .then(function(dbProducts) {
        //Nosotros no creamos la columna Id en la Base de datos
        res.render("products", {
          id: dbProducts.id,
          name: dbProducts.name,
          product_image: dbProducts.product_image,
          description: dbProducts.description,
          discount: dbProducts.discount,
          price: dbProducts.price
        });
      });
  });

  app.get("/:category", function(req, res) {
    db.products
      .findAll({ where: { category: req.params.category } })
      .then(function(dbProducts) {
        res.render("category", {
          products: dbProducts
        });
      });
  });

  //   // Render 404 page for any unmatched routes
  //   app.get("*", function(req, res) {
  //     res.render("404");
  //   });
};

// No creo rutas para los clients x q segun yo no necesitamos mostrar esa info en una URL sino q es para uso interno
