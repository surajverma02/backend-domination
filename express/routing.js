const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

// Static routing
app.get("/profile/harsh", (req, res) => {
  res.send("Harsh's profile");
});

// Dynamic routing
app.get("/profile/:username", (req, res) => {
  const user = req.params.username;
  res.send(user + "'s personal profile");
});

app.get("/author/:name/:age", (req, res) => {
  const user = req.params;
  // res.send(user.name + "'s personal profile of age " + user.age);
  res.send(`${user.name}'s personal profile of age ${user.age}`);
});

app.listen(3000);

// In dynamic routing, '.params' is used to get the data that is in the routing
