const express = require('express');
const hostRouter = express.Router();

/* Add Home page */
hostRouter.get('/', (req, res) => {
    res.send(`
        <h1>Register Your Home</h1>
        <form action="/add-home/submit-home" method="POST">
            <label>Address:</label>
            <input type="text" name="address" required>
            <br><br>
            <label>Price per night:</label>
            <input type="number" name="price" required>
            <br><br>
            <button type="submit">Submit</button>
        </form>
        <a href="/">Back to Home</a>
    `);
});

/* Handle form submit */
hostRouter.post('/submit-home', (req, res) => {
    const { address, price } = req.body;
    res.send(`
        <h1>Home Added</h1>
        <p>${address}</p>
        <p>₹${price}</p>
        <a href="/">Home</a>
    `);
});

module.exports = hostRouter;
