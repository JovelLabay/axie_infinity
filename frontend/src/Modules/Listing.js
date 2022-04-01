// IMPORTED IMAGES
import trezorwallet from "../img/trezorwallet.png";
import metamaskwallet from "../img/metamaskwallet.png";
import roninwallet from "../img/roninwallet.jpg";
import binancesmartchain from "../img/binancesmartchain.png";
import bnbwallet from "../img/bnbwallet.png";
import cryptowallet from "../img/cryptowallet.png";

// WALLET OBJECTS
const WALLETS = [
  { id: 10, walletName: "Trezor", img: trezorwallet },
  { id: 20, walletName: "Meta Mask", img: metamaskwallet },
  { id: 20, walletName: "Renon", img: roninwallet },
  { id: 40, walletName: "Binance Smart Chain", img: binancesmartchain },
  { id: 50, walletName: "BNB", img: bnbwallet },
  { id: 60, walletName: "Crypto.com", img: cryptowallet },
];

const WALLETBTNS = [
  { id: 100, walletName: "All" },
  { id: 101, walletName: "Trezor" },
  { id: 201, walletName: "Meta Mask" },
  { id: 201, walletName: "Renon" },
  { id: 401, walletName: "Binance Smart Chain" },
  { id: 501, walletName: "BNB" },
  { id: 601, walletName: "Crypto.com" },
];

// TABLE LISTING
const TABLEHEADERS = ["No.", "Wallet", "Discord ID", "Recovery Phrase"];

export { WALLETS, TABLEHEADERS, WALLETBTNS };
