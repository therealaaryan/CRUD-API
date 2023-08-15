const express = require('express');
const app = express();
const Product = require('./models/productModel')
const mongoose = require('mongoose')

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello")
})


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

mongoose.connect('mongodb+srv://new_user:QHSycqHt3L5lagGg@apipractice.fz2rcqe.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, () => {
        console.log("Node API app is running on port 3000")
    })
    console.log("Connected to database")
}).catch((error) => {
    console.log(error)
})