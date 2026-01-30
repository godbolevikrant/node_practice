const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    if(req.url==='/home'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Welcome to Home Page</h1>');
        return res.end();
    }
    else if(req.url==='/men'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Welcome to Men Section</h1>');
        return res.end();
    }   
    else if(req.url==='/women'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Welcome to Women Section</h1>');
        return res.end();
    }   
    else if(req.url==='/kids'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Welcome to Kids Section</h1>');
        return res.end();
    }
    else if(req.url==='/offers'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Welcome to Offers Section</h1>');
        return res.end();
    }
    else if(req.url==='/cart'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Your Cart is Empty</h1>');
        return res.end();
    }   
    
    res.setHeader('Content-Type','text/html');

    res.write(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <head>
        <h1>Welcome to Myntra</h1>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/offers">Offers</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        </nav>
    </head>
    
</body>
</html>>`);
    return res.end();
});
server.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});
