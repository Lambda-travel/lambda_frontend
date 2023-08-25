import profileIcon from "../../assets/Group 36.svg";
import homeIcon from "../../assets/Group 79.svg";
import addIcon from "../../assets/Line 13.svg";

import "./NavBarstyle.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navContainer">
        <Link to="/home">
          <img src={homeIcon} alt="Home Icon" className="icons" />
        </Link>
        <Link to="/newtrip">
          <img src={addIcon} alt="Add Icon" className="icons" />
        </Link>
        <Link to="/profile">
          <img src={profileIcon} alt="Profile Icon" className="icons" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
