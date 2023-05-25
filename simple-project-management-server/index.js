require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.SERVER_PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@project-management.ilgjdun.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   },
});
async function run() {
   const database = client.db("ProjectsDB");
   const projects = database.collection("projects");
   const todos = database.collection("todos");

   try {
      app.get("/", async (req, res) => {
         const data = await todos.find().toArray();
         res.send(data);
      });
   } catch (err) {
      console.log(err);
   }
}
run().catch(console.dir);

app.listen(port);
