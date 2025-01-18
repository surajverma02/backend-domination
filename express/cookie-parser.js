const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/cookie", (req, res) => {
  console.log(req.cookies.banned);
  res.send("cookie check");
});

app.get("/banned", (req, res) => {
  res.cookie("banned", "this is cookie value");
  res.send("Cookie set");
});

app.listen(3000);

// Can use EditThisCookie extension to see cookie in the browser, but to read cookie in the backend / server we need 'cookie-parser' package