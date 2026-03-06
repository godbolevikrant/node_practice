const express = require('express');
const userRouter = express.Router();

/* Home route */
userRouter.get("/", (req, res) => {
    console.log(req.url, req.method);
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/add-home">Add Home</a>
    `);
});
module.exports = userRouter;