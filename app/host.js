let http = require("http");
let port = 9000;

//let DBconnect = require("./mongoDB");

var express= require('express');
const WebSocket = require('ws');

const { WebSocketServer } = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('New client connected');

    ws.onmessage = function(event){
        console.log('Received message:' + event.data);
        wss.clients.forEach((client) => {
        client.send('Server received your message: ' + event.data);
        });
        let recievedMessage = JSON.parse(event.data);
        console.log(recievedMessage);

        if (recievedMessage.func == "create"){
            var user = {
                _id : new ObjectId(),
                user_ID : recievedMessage.user_ID,
                Username : recievedMessage.Username,
                Password : recievedMessage.Password,
                Email : recievedMessage.Email
            }

            users.create(user);
            console.log("user being made");
        }
        if (recievedMessage.func == "update"){
            console.log("updateing the user");
            
            let message = {
                user_ID : recievedMessage.user_ID,
                Username : recievedMessage.Username,
                Password :recievedMessage.Password,
                Email : recievedMessage.Email


                // _id : idInp,
                // user_ID : user_IDInp,
                // Username : usernameInp,
                // Password : passwordInp,
                // Email : emailInp
            
            }
           



            updateUser(recievedMessage._id, message);

        }
        if (recievedMessage.func == "delete"){
            deleteUser(recievedMessage._id);
            
        }
        
        
    
    }

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});


var server = express();

function sayHello() {
    return "hello";
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
server.get('/moviesList', (request, response) => {
    response.sendFile(__dirname + "/public/moviesList.html");
})
server.get('/style.css', (request, response) => {
    response.sendFile(__dirname + "/public/movies.html");
})
server.get('/javascript.js', (request, response) => {
    response.sendFile(__dirname + "/public/movies.html");
})
server.get('/adminLogin', (request, response) => {
    response.sendFile(__dirname + "/public/adminLogin.html");
})
server.get('/admin', (request, response) => {
    response.sendFile(__dirname + "/public/admin.html");
})


server.listen(port, function() {
    console.log("Server listening on port " + port);

});



const { MongoClient, ServerApiVersion, ObjectId, Int32 } = require('mongodb');
let mongoose = require("mongoose");
//let http = require("http");



const uri = "mongodb+srv://BenjaminGeorge3:n5GAD0P0jL73AlhN@comp3006cw2bg.boy5vug.mongodb.net/movies-data?retryWrites=true&w=majority";

//let url = "https://cloud.mongodb.com/v2/65959463aa60830067d18ba7#/metrics/replicaSet/659594ffc7152706e42804f3/explorer/movies-data";


let moviesSchema = new mongoose.Schema({_id: mongoose.Schema.ObjectId , MovieName: String, Screen1: String, Screen2: String, Screen3: String, Screen4: String, Screen5: String});
let seatsSchema = new mongoose.Schema({_id: mongoose.Schema.ObjectId , screen: String, Seat1: Boolean, Seat2: Boolean, Seat3: Boolean, Seat4: Boolean, Seat5: Boolean});
let usersSchema = new mongoose.Schema({_id: mongoose.Schema.ObjectId , user_ID: String , Username: String, Password: String,Email: String });
let adminsSchema = new mongoose.Schema({_id: mongoose.Schema.ObjectId , adminNo: String , Username: String, Password: String});


let movies = mongoose.model("movies", moviesSchema);
let seats = mongoose.model("seats", seatsSchema);
let users = mongoose.model("users", usersSchema);
let admins = mongoose.model("admin", adminsSchema);

startup();
let moviesData;
let seatsData;
let usersData;
let adminsData;


//useUnifiedToplogy: true,
async function startup(){
  mongoose.connect(uri, { useNewUrlParser: true}).then(
    function(value){
        seats.find().then(
          function(value){
            console.log(value);
            seatsData = value;
          },
          users.find().then(
          function(value){
            console.log(value);
            usersData = value;
          },
          movies.find().then(
          function(value){
            console.log(value);
            moviesData = value;
          },
          admins.find().then(
            function(value){
              console.log(value);
              adminsData = value;
            }
            
            
              )
          
            )
          )
        )
        }

  )
}




server.get('/seats', (request, response) => {
    response.json(seatsData);
})
server.get('/admins', (request, response) => {
    response.json(adminsData);
})
server.get('/users', (request, response) => {
    response.json(usersData);
})
server.get('/movies', (request, response) => {
    response.json(moviesData);
})

function closeHost(){
    //sockserver.close();
    app.close(()=>{
        process.exit(0);
    })
}


async function deleteUser(id){
            console.log("deleteing the user");
            let response = await users.findByIdAndDelete( id );
            console.log(response);
        }

async function updateUser(_id, message){

    await users.findByIdAndUpdate(_id, message);
}

async function createNewUser(){
    console.log("new user time");

    const newUser = {
        Email: createEmail,
        Password: createPassword,
        User_ID: createUserId,
        Username: createUsername,
    };

    let ressponse = await user.create(newUser);
    await getUserData();
    return response.User_ID.toString();
}

module.exports.seatsData = seatsData;
module.exports.closeHost = closeHost;
module.exports.sayHello = sayHello;
module.exports.createNewUser = createNewUser;
module.exports.server = server;
