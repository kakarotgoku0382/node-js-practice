const express = require('express')
const app = express()
const mongoose = require('mongoose') //Import database mongoose(mogoDB)
const Product = require('../models/product-models') //Import schema
const productRoute = require('../routes/product-route') //import route

//middleware
app.use(express.json()) // (used for JSON)
app.use(express.urlencoded({extended: false})) // (used for html form-submission)

// routes
app.use('/api/products', productRoute)

// API for homepage
app.get('/', (req, res) => {
    res.send('Hello World')
})

// DB connect
mongoose.connect("mongodb+srv://kakarot_db_user:Kakarot%40goku@backenddb.ezj7l4y.mongodb.net/node-API?retryWrites=true&w=majority&appName=backendDB").then(() => {
    console.log('Connected to the database')
    app.listen(5000, () => {
        console.log('Server is listening on port 5000...')
    })
}).catch(() => {
    console.log('Connection failed')
})