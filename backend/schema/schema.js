const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// ADMIN AUTHENTICATION AND SIGNIN
const userAuthSign = new mongoose.Schema({
  username: { type: String, required: true },
  password: {
    type: String,
    minlength: [6, "At least 6 characters."],
    maxlength: 16,
    required: true,
  },
});
// HASH BEFORE SAVING
userAuthSign.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// MODEL
const authSign = mongoose.model("admin", userAuthSign);

// EXPORTED MODULES
module.exports = { authSign };
