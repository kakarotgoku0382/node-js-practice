const express = require('express')
const app = express()

const people = require('./routes/people')

const login = require('./routes/auth')

// static assets
app.use(express.static('./method-public'))
// parse form data
app.use(express.urlencoded({extended: false})) //express.urlencoded is a built-in middleware function in express to parses incoming requests and encoded payloads based on body parser

// parse json
app.use(express.json())

app.use('/api/people', people)

app.use('/login', login)

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})