import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

// REACT BOOTSTRAP
import WalletTable from "../components/WalletTable";

// LAYOUT
import Navigation from "../layouts/Navigation";
import TopBarWallets from "../layouts/TopBarWallets";

export default function Dashboard() {
  // LOCATION
  const history = useHistory();

  useEffect(() => {
    // LOGIN AUTO
    const token = sessionStorage.getItem("token");
    if (token) {
      getAll();
    } else {
      sessionStorage.removeItem("token");
      history.replace("/admin-login");
    }
  }, []);

  // SELECTED TABLE WALLETS
  const [table_wallets, set_able_wallets] = useState([]);

  // GET ALL THE LIST OF ALL WALLETS
  const getAll = () => {
    var config = {
      method: "get",
      url: "/get-all-wallets",
    };

    axios(config)
      .then(function (response) {
        set_able_wallets(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // ACTIVE TABLES
  const [activeTable, setActiveTable] = useState("All");
  const props = { activeTable, setActiveTable, table_wallets, getAll };

  return (
    <div className="dashboard">
      {/* NAV */}
      <div className="navigation_content">
        <Navigation />
      </div>
      {/* MAIN */}
      <main className="sub_container py-4 px-2">
        <h3>Axie Infinity Wallets</h3>
        <TopBarWallets {...props} />
        {/* TABLE */}
        <WalletTable {...props} />
      </main>
    </div>
  );
}
