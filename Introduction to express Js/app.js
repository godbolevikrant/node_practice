import http from 'http';
import express from 'express';
import file from './file.js';

const app = express();

// First middleware
app.use((req, res, next) => {
  console.log(`First Middleware: ${req.method} ${req.url}`);
  next();
});

// Second middleware / route
app.use('/file', (req, res) => {
  console.log('Second Middleware');
  file(); // call your function
  res.send('Hello from Express.js!');
});

// Create HTTP server
const server = http.createServer(app);

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
