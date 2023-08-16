const Product = require('../models/productModel')

const getProducts = async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getProduct = async(req, res) => {
    try {
        const product = await Product.find({_id:req.params.id})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateProduct = async(req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id:req.params.id}, req.body)
        const updatedproduct = await Product.find({_id:req.params.id})
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteProduct = async(req, res) => {
    try {
        const product = await Product.deleteOne(req.body)
        const updatedproduct = await Product.find({})
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : error.message})
    }
}


module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct
}