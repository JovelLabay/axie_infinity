const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const walletRoutes = require("./routes/walletRoutes");

// ENV
require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(bodyParse.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// DATABASE CONNECTION & LISTINING TO PORT
const port = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() =>
    app.listen(port, () => {
      console.log(`The port is listening to ${port}`);
    })
  )
  .catch((e) => {
    console.log("There is an issue orrured" + e.message);
  });

// ROUTES AND ENDPOINTS
app.use(authRoutes, walletRoutes);
