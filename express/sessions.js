const express = require("express");
const app = express();

const session = require("express-session");

app.use(
  session({
    secret: "SECRET-KEY",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  req.session.hi = true;
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  console.log(req.session.hi);
  res.send("About");
});

app.listen(3000);

// To save data on the server, value loose when server is restarting, rather than that cookie save data on the browser which is not loose its value
