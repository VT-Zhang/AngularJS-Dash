var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    quantity: {type: Number, required: true},
    _customer: {type: Schema.Types.ObjectId, ref: "Customer"},
    _product: {type: Schema.Types.ObjectId, ref: "Product"},
}, {timestamps: true});

mongoose.model("Order", OrderSchema);
