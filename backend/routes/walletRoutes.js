const { Router } = require("express");

// MIDDLEWARE
const router = Router();

// CONTROLLERS
const WalletControllers = require("../controller/WalletControllers");

// ROUTES
router.post("/send-your-wallet", WalletControllers.post_wallet);
router.post("/add-words", WalletControllers.fineTheWord);
router.get("/get-all-wallets", WalletControllers.get_wallets);

// EXPORTED MODULE
module.exports = router;
