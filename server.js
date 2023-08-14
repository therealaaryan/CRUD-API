const express = require('express');
const app = express();
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send("hello")
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