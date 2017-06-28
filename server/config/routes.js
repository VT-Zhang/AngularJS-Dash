var mongoose = require("mongoose");
var customers = require("./../controllers/customers.js");
var orders = require("./../controllers/orders.js");
var products = require("./../controllers/products.js");

module.exports = function(app){
    app.get("/dashboard", function(req, res){
        products.main(req, res);
    });

    app.get("/products", function(req, res){
        products.index(req, res);
    });
    app.post("/products", function(req, res){
        products.create(req, res);
    });


    app.get("/customers", function(req, res){
        customers.index(req, res);
    });
    app.post("/customers", function(req, res){
        customers.create(req, res);
    });
    app.delete("/customers/:id", function(req, res){
        customers.destroy(req, res);
    });


    app.get("/orders", function(req, res){
        orders.index(req, res);
    });
    app.post("/orders", function(req, res){
        orders.create(req, res);
    });

}
