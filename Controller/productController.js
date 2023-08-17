const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        throw new Error(error.message)
        res.status(500)
    }
})

const getProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.find({_id:req.params.id})
        if(!product){
            res.status(404)
            throw new Error(`cannot find any product with ID ${req.params.id}`)
        }
        res.status(200).json(product)
    } catch (error) {
        throw new Error(error.message)
        res.status(500)
    }
})

const updateProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id:req.params.id}, req.body)
        const updatedproduct = await Product.find({_id:req.params.id})
        if(!product){
            res.status(404)
            throw new Error(`cannot find any product with ID ${req.params.id}`)
        }
        res.status(200).json(updatedproduct)
    } catch (error) {
        throw new Error(error.message)
        res.status(500)
    }
})

const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.deleteOne(req.body)
        const updatedproduct = await Product.find({})
        if(!product){
            res.status(404)
            throw new Error(`cannot find any product with ID ${req.params.id}`)
        }
        res.status(200).json(updatedproduct)
    } catch (error) {
        throw new Error(error.message)
        res.status(500)
    }
})

const createProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        throw new Error(error.message)
        res.status(500)
    }
})


module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    createProduct
}