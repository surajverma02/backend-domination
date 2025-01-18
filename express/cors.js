const express = require("express");
const app = express();

const cors = require("cors");

// for use in every routes
app.use(cors()); // apply on every end-point

app.get("/", (req, res) => {
  res.send("Hello");
});

// for single use route
app.get("/sharable", cors(), (req, res) => {
  res.send("Sharable");
});

app.listen(3000);

// Cors use to allow different web domain to access data from the different web domain
