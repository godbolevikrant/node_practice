const http = require('http');
const url = require('url');
const { testingSyntax } = require('./syntax');
const { runtimeErrorFunction } = require('./runtime');

const server = http.createServer((req, res) => {
   testingSyntax();
   runtimeErrorFunction();
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello, World!\n');
});

server.listen(3000, () => {
   console.log('Server is listening on port 3000');
});