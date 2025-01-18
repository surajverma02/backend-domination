const express = require("express");
const app = express();

const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(
  expressSession({
    saveUninitialized: false,
    resave: false,
    secret: "SECRET_KEY",
  })
);

app.use(flash());

app.get("/", (req, res) => {
  req.flash("error", "Invalid Credentials");
  res.redirect("/error");
});

app.get("/error", (req, res) => {
  const message = req.flash("error");
  res.send(message);
});

app.listen(3000);

// To save the data in a route that can use in different route
// use in login when invalid creadentials is there
