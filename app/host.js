let http = require("http");
let port = 9000;

var express= require('express');

var server = express();

function sayHello() {
    return "hosting is on";
}

let app = http.createServer(server);

server.use(express.static('public'));

server.get('/', (request, response) => {
    response.sendFile(__dirname + "/public/index.html");
})
server.get('/cinemas', (request, response) => {
    response.sendFile(__dirname + "/public/cinemas.html");
})
server.get('/booking', (request, response) => {
    response.sendFile(__dirname + "/public/booking.html");
})
server.get('/movies', (request, response) => {
    response.sendFile(__dirname + "/public/movies.html");
})
server.get('/style.css', (request, response) => {
    response.sendFile(__dirname + "/public/movies.html");
})
server.get('/javascript.js', (request, response) => {
    response.sendFile(__dirname + "/public/movies.html");
})


server.listen(port, function() {
    console.log("Server listening on port " + port);

});
