const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

// Middleware (must come before routes)
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome To Home</title></head>');
    res.write('<body><h1>Enter Your Details</h1>');
    res.write('<form action="/submit" method="post">');
    res.write('<input type="text" name="name" placeholder="Enter Your Name"><br>');
    res.write('<input type="email" name="email" placeholder="Enter Your Email"><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

// First middleware for POST
app.post("/submit", (req, res, next) => {
    console.log("First Handling:", req.url, req.method, req.headers, req.body);
    next(); // pass control to next handler
});

// Second middleware for POST
app.post("/submit", (req, res) => {
    console.log("Second Handling:", req.url, req.method, req.headers, req.body);
    res.send("Form submitted successfully!");
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});