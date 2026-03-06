const express = require('express');
const errorHandle = express.Router();

/* 404 Error Handling */
errorHandle.use((req, res, next) => {
    res.status(404).send(`
        <h1>404 - Page Not Found</h1>
        <a href="/">Go to Home</a>
    `);
});

module.exports = errorHandle;
