const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
  stock: { type: Number, required: true },
  brand:{ type:String, required: true},
  category_id: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true},
  image_url: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }

})

const Product = mongoose.model('Product', productSchema);

module.exports = Product