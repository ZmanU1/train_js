let http = require('http');
let fs = require('fs');
let url = require('url');


http.createServer((request, response) => {
    // fs.readFile('index.html', (err, data)=>{
    //     if (err) throw err
    //         response.writeHead(200, {
    //     'Content-Type': 'text/html; charset=utf-8'
    //     }) 
    //  response.end(data)
    // })
    response.writeHead(200)
    // console.log(url.parse(response.url()))
    console.log(request.url)
    response.end('bonjour')
  
}).listen(8080)
