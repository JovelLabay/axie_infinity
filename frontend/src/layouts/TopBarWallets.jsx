import React from "react";
import { Button } from "react-bootstrap";

import { WALLETBTNS } from "../Modules/Listing";

export default function TopBarWallets(props) {
  // ACTIVE TABLES
  const { activeTable, setActiveTable } = props;

  const table = (btnname) => {
    setActiveTable(btnname.walletName);
  };

  return (
    <div className="tab_btns">
      {WALLETBTNS.map((btnname, index) => {
        return (
          <Button
            className="top_btns"
            variant={
              btnname.walletName === activeTable ? "primary" : "outline-primary"
            }
            key={index}
            onClick={() => table(btnname)}
          >
            {btnname.walletName}
          </Button>
        );
      })}
    </div>
  );
}
