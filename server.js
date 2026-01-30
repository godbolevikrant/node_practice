const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/plain');
    res.write(`<html>>`);
    res.write('<head><title>Welcome To Home</title></head>');
    res.write('<body><h1>Enter Your Details</h1>');
    res.write('<form action="/submit" method="post">');
    res.write('<input type="text" name="name" placeholder="Enter Your Name">');
    res.write('<input type="email" name="email" placeholder="Enter Your Email">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
   
    server.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });   
});