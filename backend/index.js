//Tools
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const parser = require('body-parser');
const multer = require('multer');

//Schemas
const news = require ('./schemas/news');
const fauna = require ('./schemas/fauna');
const flora = require ('./schemas/flora');

//Intializing
const app = express();
const router = express.Router
app.use(cors());
app.use(parser.json())

//Mongocompass
mongoose.connect('mongodb+srv://mrxstylers:gonzo112233@tahura.ydoqsiv.mongodb.net/')
.then(() => console.log('TAHURA is Online'))
.catch(() => console.log('TAHURA is Offline'));

//Mongocloud
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mrxstylers:gonzo112233@tahura.ydoqsiv.mongodb.net/?retryWrites=true&w=majority&appName=TAHURA";

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
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
