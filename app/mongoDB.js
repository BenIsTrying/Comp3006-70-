const { MongoClient, ServerApiVersion } = require('mongodb');
let mongoose = require("mongoose");




const uri = "mongodb+srv://BenjaminGeorge3:n5GAD0P0jL73AlhN@comp3006cw2bg.boy5vug.mongodb.net/?retryWrites=true&w=majority";

let url = "https://cloud.mongodb.com/v2/65959463aa60830067d18ba7#/metrics/replicaSet/659594ffc7152706e42804f3/explorer/movies-data";


let moduleSchema = new mongoose.Schema({MovieName: String, Screen1: String, Screen2: String, Screen3: String, Screen4: String, Screen5: String});


let Module = mongoose.model("movies-data", moduleSchema);

console.log(Module);
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("movies").command({ ping: 1 });
    console.log("Connected");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);