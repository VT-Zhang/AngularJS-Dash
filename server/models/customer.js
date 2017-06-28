var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    cname: {type: String, unique: true, required:"Customer name must be provided."},
    orders: [{type: Schema.Types.ObjectId, ref: "Order"}]
}, {timestamps: true});

mongoose.model("Customer", CustomerSchema);
