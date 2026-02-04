const http = require('http');
const fs = require('fs');

const server=http.createServer((req, res) => {
    console.log(req)
}
);


server.listen(3001, () => {
    console.log('Server is listening on port 3001');
});