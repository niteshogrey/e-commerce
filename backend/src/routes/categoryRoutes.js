const express = require('express')
const { createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryController')


const category = express.Router()

category.post("/create", createCategory)
category.get("/", getAllCategory)
category.get("/get/:id", getCategoryById)
category.put("/update/:id", updateCategory)
category.delete("/delete/:id", deleteCategory)

module.exports = category