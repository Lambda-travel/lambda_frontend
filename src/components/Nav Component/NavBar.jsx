import React from "react";
import { FaBeer } from "react-icons/fa";
import profileIcon from "../../../public/Group 36.svg";
import homeIcon from "../../../public/Group 79.svg";
import addIcon from "../../../public/Line 13.svg";
import NavBarStyle from "./NavBarstyle.css";

function NavBar() {
  return (
    <div>
      <div className="navContainer">
        <img src={homeIcon} alt="Home Icon" className="icons" />
        <img src={addIcon} alt="Add Icon" className="icons" />
        <img src={profileIcon} alt="Profile Icon" className="icons" />
      </div>
    </div>
  );
}

export default NavBar;
