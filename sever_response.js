const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>Node JS</title></head>');
    res.write('<body><h2>Jatin Dhingra-NodeJS server with response  </h2></body>')
    res.write('</html>');
    res.end();

});

server.listen(3005)
