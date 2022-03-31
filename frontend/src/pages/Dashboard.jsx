import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// REACT BOOTSTRAP
import WalletTable from "../components/WalletTable";

// LAYOUT
import Navigation from "../layouts/Navigation";
import TopBarWallets from "../layouts/TopBarWallets";

// LOCAL MODULES
import { TABLEHEADERS } from "../Modules/Listing";

export default function Dashboard() {
  // LOCATION
  const history = useHistory();

  useEffect(() => {
    // LOGIN AUTO
    const token = sessionStorage.getItem("token");
    if (token) {
      alert("Success");
    } else {
      sessionStorage.removeItem("token");
      history.replace("/admin-login");
    }
  }, []);
  return (
    <div className="dashboard">
      {/* NAV */}
      <div className="navigation_content">
        <Navigation />
      </div>
      {/* MAIN */}
      <main className="sub_container py-4 px-2">
        <h3>Axie Infinity Wallets</h3>
        <TopBarWallets />

        {/* TABLE */}
        <WalletTable />
      </main>
    </div>
  );
}
