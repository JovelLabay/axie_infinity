const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const walletRoutes = require("./routes/walletRoutes");

const path = require("path");

// ENV
require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(cookieparser());
app.use(bodyParse.json());
app.use(cors());

// DATABASE CONNECTION & LISTINING TO PORT
const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  // .connect("mongodb://localhost:27017/axie")
  .then(() =>
    app.listen(PORT, () => {
      console.log(`The port is listening to ${PORT}`);
    })
  )
  .catch((e) => {
    console.log("There is an issue orrured" + e.message);
  });

// ACCESS THE FRONTEND SIDE
app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

// ROUTES AND ENDPOINTS
app.use(authRoutes, walletRoutes);
