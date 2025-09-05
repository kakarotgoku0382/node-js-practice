const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./index.html')
const homeStyle = readFileSync('./style.css')

const server = http.createServer((req, res) => {
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url;
    // home page
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }

    // for my css
    else if(url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyle)
        res.end()
    }

    // about page
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    } 
    // 404
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }

})

server.listen(5000)