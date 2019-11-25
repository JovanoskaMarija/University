const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const subjectsRouter = require("./routes/subjects");

require("dotenv").config();

const app = express();
const apiPort = 5000;

// midelwares
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/subjects", subjectsRouter);

//assign the link saved in the var ATLAS_URI in .env file to uri constant
const uri = process.env.ATLAS_URI;

//MongoClient constructor       (connect the database)
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err));
const connection = mongoose.connection;

//once the connection is established console.log()
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => {
  res.send("Marija");
});

//what starts the server, it starts listening on a certain port
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
