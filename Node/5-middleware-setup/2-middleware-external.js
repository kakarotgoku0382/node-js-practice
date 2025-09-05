const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

// 1. use vs route
// 2. options for middleware - our own/ express/ third party

// app.use(logger) //single middleware
app.use([logger, authorize]) //multiple middlewares(own middleware)
// api/home/about/products

// app.use(express.static('./public')) //express middleware(built-in)

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})