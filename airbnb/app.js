const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

/* Middleware MUST come before routes */
app.use(bodyParser.urlencoded({ extended: true }));

/* Add Home route */
app.get("/add-home", (req, res) => {
    console.log(req.url, req.method);
    res.send(`
        <h1>Register Your Home</h1>
        <form action="/submit-home" method="POST">
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

/* Handle form submission */
app.post("/submit-home", (req, res) => {
    console.log(req.url, req.method, req.body);

    const { address, price } = req.body;

    res.send(`
        <h1>Home Registered Successfully</h1>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Price:</strong> ₹${price} per night</p>
        <a href="/">Go to Home</a>
    `);
});

/* Home route */
app.get("/", (req, res) => {
    console.log(req.url, req.method);
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/add-home">Add Home</a>
    `);
});

// server setup
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
