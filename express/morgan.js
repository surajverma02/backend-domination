const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000);

// morgan is a logger middleware which display information about the request on the server
// details of request is based on the format like, "tiny", "combined", "dev" 
