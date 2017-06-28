var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");
var Order = mongoose.model("Order");
var Product = mongoose.model("Product");

module.exports = {
    index: function(req, res){
        Order.find({})
        .populate("_customer")
        .populate("_product")
        .exec(function(err, orders){
            if(err){
                console.log(err);
            }
            Customer.find({}, function(err, customers){
                if(err){
                    console.log(err);
                }
                Product.find({}, function(err, products){
                    if(err){
                        console.log(err);
                    }
                    res.json({orders:orders, customers:customers, products:products});
                });
            });
        });
    },
    create: function(req, res){
         Order.create({quantity: req.body.quantity, _customer: req.body._customer, _product: req.body._product}, function(err, order){
            if(err){
                console.log(err);
            }
            Product.findOne({_id: req.body._product}, function(err, product){
                if(err){
                    console.log(err);
                }
                if (product.inventory < req.body.quantity){
                    Order.remove({_id: order._id}, function(err){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                    });
                    return res.json({errors: "Your inventory is not enough to fulfill this order!"});
                }
                else{
                    product.inventory -= req.body.quantity;
                    product.save(function(err, product){
                        if(err){
                            return res.json({errors: err.errors});
                        }
                        return res.json(product);
                    });
                }
            });
        });
    }
}
