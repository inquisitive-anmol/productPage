const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Shoe',
    },
    name: String,
}, 
{timestampsref: true}
);








const Cart = new model("Cart", cartSchema);

module.exports = Cart;