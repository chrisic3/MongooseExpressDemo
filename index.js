const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test")
.then(() => {
    console.log("MONGO CONNECTION ESTABLISHED");
})
.catch((err) => {
    console.log("MONGO ERROR");
    console.log(err);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

app.listen(3000, () => {
    console.log("APP LISTENING ON PORT 3000");
})