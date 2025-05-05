const express = require('express')
const { getCart, addToCart, removeFromCart, clearCart } = require('../controllers/cartController')
const { authanticateUser } = require('../middleware/authMiddleware')

const cart = express.Router()

cart.use(authanticateUser)

cart.get("/", getCart)
cart.post("/add", addToCart)
cart.delete("/remove/:product_id", removeFromCart)
cart.delete("/clear", clearCart)

module.exports = cart