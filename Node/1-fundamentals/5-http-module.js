const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log(req) //after this need to refresh the page to see the changes in terminal
    if (req.url === '/'){
        res.end('Welcome to our Homepage')
    }
    else if (req.url === '/about'){
        res.end('This is the about page')
    }
    else {res.end(`
            <h1>Oops</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back to Home</a>
        `)}
    // res.write('Welcome to our Homepage')
    // res.end()
})

server.listen(5000)
