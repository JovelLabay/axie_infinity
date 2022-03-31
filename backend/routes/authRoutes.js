const { Router } = require("express");

// CONTROLLERS
const AuthControllers = require("../controller/AuthControllers");

// MIDDLEWARE
const router = Router();

// ROUTES
router.post("/signin-admin", AuthControllers.sign_in);
router.post("/login-admin", AuthControllers.log_in);

// EXPORTED MODULE
module.exports = router;
