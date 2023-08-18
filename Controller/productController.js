const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async(req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const getProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(404);
            throw new Error(`cannot find any product with ID ${req.params.id}`);
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const updateProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id:req.params.id}, req.body);
        const updatedproduct = await Product.find({_id:req.params.id});
        if(!product){
            res.status(404)
            throw new Error(`cannot find any product with ID ${req.params.id}`);
        }
        res.status(200).json(updatedproduct);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.deleteOne(req.body);
        const updatedproduct = await Product.find({});
        if(!product){
            res.status(404)
            throw new Error(`cannot find any product with ID ${req.params.id}`);
        }
        res.status(200).json(updatedproduct);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const createProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})


module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct
}