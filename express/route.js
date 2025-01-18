const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get('*', (req, res)=>{
  res.send("Page not found")
})

app.listen(3000);

// .get is use to define route in the node.js using express
