const express = require('express');
const router = express.Router();
const Product = require('../models/productModel')


router.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : error.message})
    }
})

router.get('/products', async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.get('/products/:id', async(req, res) => {
    try {
        const product = await Product.find({_id:req.params.id})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.put('/products/:id', async(req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id:req.params.id}, req.body)
        const updatedproduct = await Product.find({_id:req.params.id})
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.delete('/products/del', async(req, res) => {
    try {
        const product = await Product.deleteOne(req.body)
        const updatedproduct = await Product.find({})
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


module.exports = router;