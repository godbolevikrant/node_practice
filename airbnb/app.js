const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');
const hostRouter = require('./routes/hostRouter');
const errorHandle = require('./routes/errorHandle');

const app = express();

/* Middleware */
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/', userRouter);
app.use('/add-home', hostRouter);
app.use(errorHandle);


/* Server */
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
