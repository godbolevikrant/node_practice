const fs=require('fs');
const stream=fs.createReadStream('test.txt');

stream.on('data',(chunk=>{
    console.log(chunk);
    console.log(chunk.toString());


})) 
