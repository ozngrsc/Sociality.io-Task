import React from "react";
import "./NavClientLogos.css";
import Location from "../images/Location.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function NavClientLogos() {
  return (
    <div className="nav_client_logos">
      <div>
        <img className="location" src={Location} alt="" />
        <FaFacebook className="client_logos" />
        <div className="insta_logo_button">
          <FaInstagram className="client_logos insta_logo" />
          <button className="insta_button">99</button>
        </div>
        <FaTwitter className="client_logos" />
        <FaGithub className="client_logos github" />
        <FaLinkedinIn className="client_logos" />
        <FaYoutube className="client_logos" />
      </div>
    </div>
  );
}

export default NavClientLogos;
