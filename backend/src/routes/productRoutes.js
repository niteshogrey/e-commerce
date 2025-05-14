const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, changeProductCategory, getProductsByCategoryId } = require('../controllers/productController');
const product = express.Router();

product.post("/create", createProduct)
product.get("/", getAllProducts);
product.get("/get/:id", getProductById)
product.get("/get/by-category/:id", getProductsByCategoryId)
product.put("/update/:id", updateProduct)
product.delete("/delete/:id", deleteProduct)

product.put("/change-category/:id", changeProductCategory)

module.exports = product