const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);

// ejs to render front-end in the node-js
// install ejs - npm i ejs
// app.set("view engine", "ejs")
// create a views folder
// create a view index.ejs
// load html in the ejs page
// and use res.render in place of res.send to render any page from views folder

// can use dynamic rendering <%= 2+2 %>
// ejs (dynamic content) -> converted into html (static content) -> browser