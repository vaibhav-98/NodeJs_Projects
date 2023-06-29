require("dotenv").config();
const express = require("express");
const connectToDb = require("./config/db.js");
const cors = require("cors");
const userRoutrs = require("./routes/userRoutes.js");

const app = express();

//Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// init connection to DB

connectToDb();

//router

app.use("/", userRoutrs);

module.exports = app;
