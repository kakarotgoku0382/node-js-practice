const express = require('express')
const app = express()
const mongoose = require('mongoose') //Import database mongoose(mogoDB)
const Product = require('../models/product-models') //Import schema

app.use(express.json()) //middleware (used for JSON)
app.use(express.urlencoded({extended: false})) //middleware (used for html form-submission)

// API for homepage
app.get('/', (req, res) => {
    res.send('Hello World')
})

// API for get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// API for get by id
app.get('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// API for adding product
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// API for update by id
app.put('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: 'Product does not exist'})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
        // res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// API for delete
app.delete('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: 'Product not found'})
        }
        res.status(200).json({message: 'Product deleted successfully'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
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

