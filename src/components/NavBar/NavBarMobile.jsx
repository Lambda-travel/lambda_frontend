import { Link, useLocation } from "react-router-dom";

import createTripActive from "../../assets/navbar-icons/create-trip-active.png"
import createTripInactive from "../../assets/navbar-icons/create-trip-inactive.png"

import profileActive from "../../assets/navbar-icons/profile-active.png"
import profileInactive from "../../assets/navbar-icons/profile-inactive.png"

import homeActive from "../../assets/navbar-icons/home-active.png"
import homeInactive from "../../assets/navbar-icons/home-inactive.png"

import "./NavBar.css";

const NavBarMobile = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-container">
        <Link to="/home">
          <img
            src={
              location.pathname === "/home" ||  location.pathname.includes("article") 
                ? homeActive
                : homeInactive
            }
            alt="button to go to homepage"
          />
        </Link>
        <Link to="/newtrip">
          <img
            src={
              location.pathname === "/newtrip" ||  location.pathname === "/travelmate"
                ? createTripActive
                : createTripInactive
            }
            alt="button to create new trip"
          />
        </Link>
        <Link to="/profile/trip-plans">
          <img
            src={
              location.pathname.includes("/profile") ||  location.pathname === "/change-password"
                ? profileActive
                : profileInactive
            }
            alt="button to go to profile"
          />
        </Link>
      </ul>
    </nav>
  );
};

export default NavBarMobile;
