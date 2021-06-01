const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Got it");
});

server.listen(3000);
