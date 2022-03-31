import React from "react";
import { Button } from "react-bootstrap";

import { WALLETBTNS } from "../Modules/Listing";

export default function TopBarWallets() {
  return (
    <div className="tab_btns">
      {WALLETBTNS.map((btnname, index) => {
        return (
          <Button
            className="top_btns"
            variant={
              btnname.walletName === "Trezor" ? "primary" : "outline-primary"
            }
            key={index}
          >
            {btnname.walletName}
          </Button>
        );
      })}
    </div>
  );
}
