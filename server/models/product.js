var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    pname: {type: String, required:"Product name must be provided!"},
    description: {type: String, required:"Product description can't be empty!", minlength: 3},
    inventory: {type: Number, required: "Please choose initial quantity."},
    orders: [{type: Schema.Types.ObjectId, ref: "Order"}]
}, {timestamps: true});

mongoose.model("Product", ProductSchema);
