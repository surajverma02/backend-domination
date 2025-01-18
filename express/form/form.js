const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

// get method for GET call
app.get("/check", (req, res) => {
  console.log(req.query);
  res.send("done");
});

// post method for POST call
app.post("/create", (req, res) => {
  console.log(req.body);  
  res.send("done"); 
});

app.listen(3000);

// form neccessery check name , action, backend route, type of route (GET, .get)
// req.query - GET method
// req.body - POST method

// .json() for data accessing
// .urlencoded({extended: true}) for enable different type of form