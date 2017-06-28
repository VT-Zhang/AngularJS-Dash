var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");
var Order = mongoose.model("Order");
var Product = mongoose.model("Product");

module.exports = {
    main: function(req, res){
        Order.find({})
        .populate("_customer")
        .populate("_product")
        .exec(function(err, orders){
            if(err){
                res.json({errors: err.errors});
            }
            Customer.find({})
            .populate("orders")
            .exec(function(err, customers){
                if(err){
                    res.json({errors: err.errors});
                }
                Product.find({})
                .populate("orders")
                .exec(function(err, products){
                    if(err){
                        res.json({errors: err.errors});
                    }
                    res.json({orders: orders, customers: customers, products: products});
                });
            });
        });
    },

    index: function(req, res){
        Product.find({}, function(err, products){
            console.log(products);
            if(err){
                console.log(err);
            }
            res.json(products);
        });
    },

    create: function(req, res){
        Product.create(req.body, function(err, product){
            if(err){
                res.json({errors: err.errors});
            }
            res.json(product);
        });
    }
}
