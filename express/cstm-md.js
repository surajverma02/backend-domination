const express = require("express");
const app = express();

app.use((req, res, next)=>{
  console.log(req.url)
  next();
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);

// middleware are the function they have access of the req, res, and next parameter, it runs before request handler and allow to run next middleware when next() is calls. Can use middleware using app.use(middleware calls) for allow middleware to runs for every endpoint, call middleware in between path and request handler to run for a specific endpoint.
