const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { authSign } = require("../schema/schema");

// SIGN IN
const sign_in = async (req, res) => {
  try {
    await authSign.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(201).send("Account Successfully Created");
  } catch (error) {
    res.status(406).send(error);
  }
};

// LOGIN
const log_in = async (req, res) => {
  const authentication = await authSign.findOne({
    username: req.body.username,
  });

  if (authentication) {
    const unHashPass = await bcrypt.compare(
      req.body.password,
      authentication.password
    );
    if (unHashPass) {
      const serverToken = jwt.sign(
        {
          username: req.body.username,
          password: authentication.password,
        },
        "Secret_12345"
      );
      res.json({ status: "Ok", userStatus: serverToken });
    } else {
      res.json({ status: "Invalid User or Password" });
    }
  } else {
    res.json({ status: "Server could not found your username" });
  }
};

// EXPORTED MODULE
module.exports = { sign_in, log_in };
