const { MongoClient, ServerApiVersion, ObjectId, Int32 } = require('mongodb');
let mongoose = require("mongoose");
let http = require("http");



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
let userData;
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
            UserData = value;
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


// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     await client.connect();
//     await client.db("movies").command({ ping: 1 });
//     console.log("Connected");
//   } finally {
//       movies.find().then(
//       function(value){
//       console.log(value);
//     }
//     );
//     await client.close();
//   }
// }
// run().catch(console.dir);


