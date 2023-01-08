const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://bhaskarvilles:Allam@2705@test.gszsrj1.mongodb.net/test";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to database"));

// Start Server
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));