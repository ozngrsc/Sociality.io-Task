import React from "react";
import "./Sidebar.css";
import Logo from "../images/Sociality-logo.png";
import NavMenu from "./NavMenu";
import NavClientLogos from "./NavClientLogos";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="nav_logo" src={Logo} alt="" />
      <NavClientLogos />
      <NavMenu />
    </div>
  );
}

export default Sidebar;
