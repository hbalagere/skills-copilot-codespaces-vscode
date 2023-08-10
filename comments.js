//Create web serverwith nodejs
// 1. Import module http
const http = require('http');
const fs = require('fs');
const url = require('url');
// 2. Create web server
const server = http.createServer((req, res) => {
    // 3. Handling request from client
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else if (pathName === '/api') {
        // 4. Send response to client
        // res.end('This is the API');
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            // const productData = JSON.parse(data);
            // console.log(productData);
            // res.end(data);
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            res.end(data);
        });
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end('<h1>Page not found</h1>');
    }
});

// 5. Listen to port
server.listen(8000, '', () => {
    console.log('Listening to port 8000');
});
