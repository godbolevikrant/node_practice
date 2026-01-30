const sumRequestHandler = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/home' && req.method === 'GET') {
        res.write(`
            <html>
                <head><title>Calculator</title></head>
                <body>
                    <h1>Welcome to the Calculator Service</h1>
                    <a href="/calculate">Go to Calculator</a>
                </body>
            </html>
        `);
        return res.end();
    }

    if (req.url === '/calculate' && req.method === 'GET') {
        res.write(`
            <html>
                <head><title>Calculator</title></head>
                <body>
                    <form action="/calculate-result" method="POST">
                        <input type="number" name="num1" placeholder="First Number" required>
                        <input type="number" name="num2" placeholder="Second Number" required>
                        <button type="submit">Calculate Sum</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

   
    if (req.url === '/calculate-result' && req.method === 'POST') {
        return sumRequestHandler(req, res);
    }

    res.statusCode = 404;
    res.write(`
        <html>
            <head><title>404</title></head>
            <body><h1>Page Not Found</h1></body>
        </html>
    `);
    res.end();
};

module.exports = requestHandler;
