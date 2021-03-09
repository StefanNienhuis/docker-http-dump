let http = require('http');

let server = http.createServer((request, response) => {
    response.writeHead(200);
    response.end();
});

server.on('connection', (socket) => {
    socket.on('data', (chunk) => {
        console.log(`At ${new Date().toISOString()}:\n`)
        console.log(chunk.toString());
        console.log();
    });
});

server.listen(process.env.PORT || 8080);