const Cart = require("../models/cartModel");

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user_id: req.user._id }).populate(
      `items.product_id`
    );
    if (!cart) return res.json({ items: [] });
    res.json({ cart });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const addToCart = async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    let cart = await Cart.findOne({ user_id: req.user._id });
    if (!cart) {
      cart = new Cart({
        user_id: req.user._id,
        items: [{ product_id, quantity }],
      });
    } else {
      const itemIndex = cart.items.findIndex(
        (item) => item.product_id.toString() === product_id
      );
      if (itemIndex > -1) {
        // Update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new item
        cart.items.push({ product_id, quantity });
      }
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const removeFromCart = async(req, res)=>{
    try {
        const {product_id} = req.params

        const cart = await Cart.findOneAndUpdate(
           { user_id: req.user._id},
           {$pull: {items:{product_id}}},
           { new: true }
        )
        res.json(cart)
    } catch (error) {
        res.status(500).json( error.message );
    }
}

const clearCart = async(req, res) =>{
    try {
        await Cart.findOneAndUpdate({user_id: req.user_id}, {items:[]})
        res.json({ message: 'Cart cleared' });
    } catch (error) {
        res.status(500).json( error.message );
    }
}

module.exports = {getCart, addToCart, removeFromCart, clearCart}