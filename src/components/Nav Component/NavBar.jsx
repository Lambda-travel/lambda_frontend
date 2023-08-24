import React from "react";
import { FaBeer } from "react-icons/fa";
import profileIcon from "../../../public/Group 36.svg";
import homeIcon from "../../../public/Group 79.svg";
import addIcon from "../../../public/Line 13.svg";
import NavBar
import NavBar from './NavBar';

function NavBar() {
  return (
    <div>
      <div className="container">
        <img src={profileIcon} alt="Profile Icon" />
        <img src={homeIcon} alt="Home Icon" />
        <img src={addIcon} alt="Add Icon" />
      </div>
    </div>
  );
}

export default NavBar;
