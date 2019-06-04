const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Book = require("./Book.model");

const db = "mongoose://localhost/example";
mongoose.connect(db);
// > mongod

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port} ... http://localhost:${port}/`);
});

// > node app.js
