const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  try {
    res.send(hello);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
});

// error handler
app.use((err, req, res, next) => {
  res.status(500).send("Internal server error");
});

app.listen(3000);

// Error handling handle the error that can be arise from a block of code
