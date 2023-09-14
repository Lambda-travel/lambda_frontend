import { Link, useLocation } from "react-router-dom";

import createTripActive from "../../assets/navbar-icons/create-trip-active.png";
import createTripInactive from "../../assets/navbar-icons/create-trip-inactive.png";

import profileActive from "../../assets/navbar-icons/profile-active.png";
import profileInactive from "../../assets/navbar-icons/profile-inactive.png";

import homeActive from "../../assets/navbar-icons/home-active.png";
import homeInactive from "../../assets/navbar-icons/home-inactive.png";

import logo from "../../assets/logo.png";

import "./NavBarDesktop.css";

const NavbarDesktop = () => {
  const location = useLocation();

  return (
    <nav className="navbar-desktop">
      <ul className="navbar-container-desktop">
        <Link to="/home">
      <div className="navbar-icons-desktop">
          <img className="navbar-logo-desktop" src={logo} />
        </div>
        </Link>
        <div className="navbar-icons-desktop">
          <Link to="/home">
            <img
              src={
                location.pathname === "/home" ||
                location.pathname.includes("article")
                  ? homeActive
                  : homeInactive
              }
              alt="button to go to homepage"
            />
          </Link>
          <Link to="/newtrip">
            <img
              src={
                location.pathname === "/newtrip" ||
                location.pathname === "/travelmate"
                  ? createTripActive
                  : createTripInactive
              }
              alt="button to create new trip"
            />
          </Link>
          <Link to="/profile">
            <img
              src={
                location.pathname === "/profile" ||
                location.pathname === "/change-password"
                  ? profileActive
                  : profileInactive
              }
              alt="button to go to profile"
            />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
