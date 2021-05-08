const http=require('http')
const fs=require('fs');
const { on } = require('node:events');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>jatin</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button>Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST')
    {
        const body=[];
         req.on('data',(chunk)=>{
             console.log(chunk);
             body.push(chunk);
         });
         req.on('end',()=>
         {
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
         });
        fs.writeFileSync('message.txt','simple text');
        res.statusCode=302;
        res.setHeader('location','/');
        return res.end();

    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>jatin</title></head>');
    res.write('<body><h2>hey there</h2></body>')
    res.write('</html>');
    res.end();

});

server.listen(3001)
