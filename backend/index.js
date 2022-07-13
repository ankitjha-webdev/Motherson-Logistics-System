require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const connectionDB = require("./db");
const userRouter = require("./Router/user");
const authRouter = require("./Router/auth");

// database connection
connectionDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello from Server");
});


app.listen(8080, () => {
    console.log("Server started at port 8080");
});