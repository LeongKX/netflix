//import express
const express = require("express");
const mongoose = require("mongoose");

//import the models
const Movie = require("./models/movie");
const Tvshow = require("./models/tvshow");

//create the express app
const app = express();

//middleware to handle JSON request
app.use(express.json());

//connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/netflix")
  .then(() => {
    //if mongodb is successfullt connected
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

//root toute
app.get("/", (req, res) => {
  res.send("Happy coding!");
});

//import all the routes
const movieRouter = require("./routes/movie");
const tvshowRouter = require("./routes/tvshow");

app.use("/movies", movieRouter);
app.use("/tvshows", tvshowRouter);

//start the server
app.listen(5555, () => {
  console.log("Server is running at http://localhost:5555");
});
