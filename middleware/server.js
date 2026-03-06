const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! Express Server Running');
});

// This middleware will log the request method and URL, send a response, and then call next() to pass control to the next middleware. However, since we are sending a response before calling next(), the next middleware will not execute as the response has already been sent.

app.use("/home", (req, res, next) => {
    console.log(`First Middleware: ${req.method} ${req.url}`);
    res.send('This is the response from the first middleware. No further processing will occur.');
    next();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});