import React from "react";

// STATIC TEXT
import text from "../text.json";

// BANNER IMAGE
import banner from "../img/axie_banner.png";
import logo from "../img/logo120.png";

// BANNER
function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="Axie Infinity Banner" />
      <div className="title">
        <span className="sub_title">{text.title}</span>
      </div>
      <p className="description">{text.description}</p>
    </div>
  );
}

// SEMI BANNER
function SemiBanner() {
  return (
    <div className="banner">
      <div className="title">
        <span className="sub_title">{text.title}</span>
      </div>
    </div>
  );
}

// LOGIN LOGO
function Logo() {
  return (
    <div className="banner">
      <img src={logo} height={50} width={50} alt="Logo" />
      <p className="py-2">Login to Admin Dashboard</p>
    </div>
  );
}

export { Banner, SemiBanner, Logo };
