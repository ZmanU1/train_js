let http = require('http');
let fs = require('fs');
let url = require('url');


// http.createServer((request, response) => {
//     // fs.readFile('index.html', (err, data)=>{
//     //     if (err) throw err
//     //         response.writeHead(200, {
//     //     'Content-Type': 'text/html; charset=utf-8'
//     //     }) 
//     //  response.end(data)
//     // })
//     response.writeHead(200)
//     // console.log(url.parse(response.url()))
//   let hello = url.parse(request.url, true).query
//   console.log('bonjour :' + hello.name)

//     response.end('bonjour')
  
// }).listen(8080)

const EventEmitter = require('events');

let App = {
    start: function(port){
        let emiiter = new EventEmitter()
        let server = http.createServer((request, response)=>{
            response.writeHead(200, {
                        'Content-Type': 'text/html; charset=utf-8'
                        })
            if (request.url === '/'){
                emiiter.emit('root', response)
            }
            response.end()

        }).listen(port)
        return emiiter
    }
}

let app = App.start(8080)
app.on('root', (response)=>{
    response.write('je suis a la racine')
})
