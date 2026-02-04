const http=require('http');
const express=require('express');
const bodyParser = require('body-parser');

const app=express();

// app.use('/',(req,res,next)=>{
//     console.log("First Dummy Middleware")
//     next();
// });

// app.use('/',(req,res,next)=>{
//     console.log("Second Dummy Middleware")
//     next();
// });

// app.use('/',(req,res,next)=>{
//     console.log("Third Middleware")
//     res.send('Hello from Express.js Server');
//     next();
// });



// Serving the contact us form

app.get('/contact-us',(req,res,next)=>{
    console.log("Contact Form",req.url,req.method);
    res.send(
        `<form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Your Name"/>
            <input type="email" name="email" placeholder="Your Email"/>
            <button type="submit">Submit</button>
        </form>`
    );
});

// Logging the form submission

app.post('/contact-us',(req,res,next)=>{
    console.log("Contact Form Submitted",req.url,req.method,req.body);

    next();
});

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded());

// Handling the form submission

app.post('/contact-us',(req,res,next)=>{

    console.log(req.url,req.method,req.body)

    res.send('<h1>Form Submitted Successfully</h1>');
}

);

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});