const categoryModel = require("../models/categoryModel");

const createCategory = async (req, res) => {
  try {
    const category = new categoryModel(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json( error.message );
  }
};

const getAllCategory = async(req, res) =>{
    try {
        const categories = await categoryModel.find()
        res.json(categories);
    } catch (error) {
        res.status(500).json( error.message );
    }
}

const getCategoryById = async(req, res) =>{
    try {
        const category = await categoryModel.findById(req.params.id)
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const updateCategory = async(req, res) =>{
    try {
        const category = await categoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const deleteCategory = async(req, res) =>{
    try {
        const category = await categoryModel.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).json({ error: 'Category not found' });
        res.json({ message: 'Category deleted' });
      } catch (error) {
        res.status(500).json( error.message );
      }
}

module.exports = {createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory}