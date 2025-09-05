const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./assets'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './http-setup/index.html'))
// adding to static assets
// SSR(Server Site Rendering)
// })

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all(/.*/, (req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})