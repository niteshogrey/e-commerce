const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    items:[{
        product_id: {type: mongoose.Schema.Types.ObjectId},
        quantity: {type: Number, default: 1}
    }],
    created_at: { type: Date, default: Date.now }
})

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart