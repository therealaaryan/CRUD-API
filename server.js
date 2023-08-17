require('dotenv').config()
const express = require('express');
const app = express();
const productRoute = require('./routes/productRoute')
const mongoose = require('mongoose')
const errorMiddleware = require('./middleware/errorMiddleware')

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello")
})

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

app.use('/api', productRoute);

app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Node API app is running on port ${PORT}`)
    })
    console.log("Connected to database")
}).catch((error) => {
    console.log(error)
})