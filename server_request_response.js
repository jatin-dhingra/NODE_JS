const http=require('http')

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/')
    {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>jatin</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button>Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>jatin</title></head>');
    res.write('<body><h2>hey there</h2></body>')
    res.write('</html>');
    res.end();

});

server.listen(3005)
