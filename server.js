require('dotenv').config()
const express = require('express');
const app = express();
const Product = require('./models/productModel')
const mongoose = require('mongoose')

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello")
})

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : error.message})
    }
})

app.get('/products', async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get('/products/:id', async(req, res) => {
    try {
        const product = await Product.find({_id:req.params.id})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.put('/products/:id', async(req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id:req.params.id}, req.body)
        const updatedproduct = await Product.find({_id:req.params.id})
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.delete('/products/del', async(req, res) => {
    try {
        const product = await Product.deleteOne(req.body)
        const updatedproduct = await Product.find({})
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

mongoose.connect(MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Node API app is running on port ${PORT}`)
    })
    console.log("Connected to database")
}).catch((error) => {
    console.log(error)
})