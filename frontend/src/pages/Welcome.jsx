import React, { useState } from "react";

// REACT BOOTSTRAP
import { Button } from "react-bootstrap";

// LOCAL MODULES
import { WALLETS } from "../Modules/Listing";

// COMPONENTS
import WalletModal from "../components/WalletModal";
import { Banner } from "../components/Banner";

export default function Welcome() {
  // WALLET NAME
  const [walletname, setWalletname] = useState("");
  const [walletnameImg, setWalletnameImg] = useState();
  // WALLET MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (wallet) => {
    setShow(true);
    setWalletname(wallet.walletName);
    setWalletnameImg(wallet.img);
  };
  // DESTRUCTURED PROPS FOR THE WALLET MODAL
  const props = { show, handleClose, walletname, walletnameImg };

  return (
    <div className="main_container">
      <div className="sub_container">
        <div className="welcome">
          {/* BANNER */}
          <Banner />
          {/* WALLETS */}
          <div className="wallets">
            {WALLETS.map((wallet, index) => {
              return (
                <Button
                  key={index}
                  variant="light"
                  onClick={() => handleShow(wallet)}
                  className="shadow-md"
                >
                  <div className="flex items-center">
                    <img
                      src={wallet.img}
                      alt="Wallet Icons"
                      height={40}
                      width={40}
                      className="img_wallet"
                    />
                    {wallet.walletName} {"Wallet"}
                  </div>
                </Button>
              );
            })}
          </div>

          {/* WALLET MODAL */}
          {show && <WalletModal {...props} />}
        </div>
      </div>
    </div>
  );
}
