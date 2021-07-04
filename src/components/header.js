import React from "react";
import "./header.css";
import header_logo from "../assets/bluestacks.png";

// header component that displays the company logo

function Header() {
  return (
    <div className="header">
      <img src={header_logo} alt="logo" />
    </div>
  );
}

export default Header;
