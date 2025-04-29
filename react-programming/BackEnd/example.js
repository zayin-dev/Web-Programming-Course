const http = require('node:http');
const date = require('./myDate')
const port = 8085;
const hostname = 'localhost';
console.log(`Server listening in '${hostname}:${port}'`);

http.createServer(
    function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, world!</h1>');
        res.end('<h3>La fecha de hoy es: ' + date.myDate() + '</ h3>');
    }
).listen(port);