const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingdb");

const db = mongoose.connection;

db.on("error", function (err) {
  console.log("ERROR While conneting to database: " + err);
});

db.on("open", function () {
  console.log("Database connected successfully!");
});

module.exports = db;
