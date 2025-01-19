const express = require("express");
const app = express();

const mongooseConnection = require("./config/mongoose");

app.get("/", (req, res) => {
  res.send("hey");
});

app.listen(3000);
