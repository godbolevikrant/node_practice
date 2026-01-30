const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    // HOME PAGE
    if (req.url === '/' && req.method === 'GET') {
        res.write('<html>');
        res.write('<head><title>Welcome To Home</title></head>');
        res.write('<body>  ');
        res.write('<h1>Enter Your Details</h1><hr>');
        res.write('<form action="/submit" method="POST">');
        res.write('<input type="text" name="name" placeholder="Enter Your Name"><br><br>');
        res.write('<input type="email" name="email" placeholder="Enter Your Email"><br><br>');
        res.write('<button type="submit">Submit</button><hr>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    // FORM SUBMIT PAGE
    if (req.url === '/submit' && req.method === 'POST') {
        fs.writeFileSync('formdata.txt', 'Form Submitted Successfully');
        res.write('<html>');
        res.write('<head><title>Success</title></head>');
        res.write('<body>');
        res.write('<h1>Form Submitted Successfully...</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
