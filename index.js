const express = require ("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const port = process.env.PORT ||5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware
app.use(cors())
app.use(express.json())
// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mh62rbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
// api
const dbConnect = async ()=>{
    try {
        await client.connect();
        console.log("db connect successfully");

    } catch (error) {
        console.log(error.name , error.message);
    }
}
dbConnect();


app.get("/",(req,res)=>{
    res.send("Gadget server is running")
})
app.listen(port,()=>{
    console.log(`server is runnig port ${port}`);
})
