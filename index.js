const express = require("express");
const app = express();

const dbConnection = require("./config/mongoose");

app.get("/", (req, res) => {
  res.send("hey");
});

app.listen(3000);
