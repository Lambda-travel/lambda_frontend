import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBarstyle.css";

function Icons() {
  const [homeIconStyles, setHomeIconStyles] = useState(false);
  const [addIconStyles, setAddIconStyles] = useState(false);
  const [profileIconStyles, setProfileIconStyles] = useState(false);

  const handleHomeIconStyles = () => {
    setHomeIconStyles(true);
    setAddIconStyles(false);
    setProfileIconStyles(false);
  };
  const handleAddIconStyles = () => {
    setAddIconStyles(true);
    setHomeIconStyles(false);
    setProfileIconStyles(false);
  };
  const handleProfileIconStyles = () => {
    setProfileIconStyles(true);
    setHomeIconStyles(false);
    setAddIconStyles(false);
  };
  return (
    <div className="nav-Icon-Component-Container">
      {/* Group 79 aka homeIcon  */}
      <Link to="/home">
        <div onClick={handleHomeIconStyles} style={{ cursor: "pointer" }}>
          <svg
            width="30"
            height="31"
            viewBox="0 0 20 21"
            fill={homeIconStyles ? "#ff5a5f" : " none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 79">
              <path
                id="Rectangle 61"
                d="M2 9V16C2 17.8856 2 18.8284 2.58579 19.4142C3.17157 20 4.11438 20 6 20H14C15.8856 20 16.8284 20 17.4142 19.4142C18 18.8284 18 17.8856 18 16V9"
                stroke={homeIconStyles ? "none" : " #9CA3AF"}
                strokeWidth="2"
              />
              <path
                id="Vector 35"
                d="M1 10L7.17158 3.82842C8.50491 2.49509 9.17157 1.82843 10 1.82843C10.8284 1.82843 11.4951 2.49509 12.8284 3.82843L19 10"
                stroke={homeIconStyles ? "none" : " #9CA3AF"}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                id="Rectangle 65"
                d="M7 16C7 15.0681 7 14.6022 7.15224 14.2346C7.35523 13.7446 7.74458 13.3552 8.23463 13.1522C8.60218 13 9.06812 13 10 13C10.9319 13 11.3978 13 11.7654 13.1522C12.2554 13.3552 12.6448 13.7446 12.8478 14.2346C13 14.6022 13 15.0681 13 16V20H7V16Z"
                fill={homeIconStyles ? "#fff" : " #9CA3AF"}
              />
              <path
                id="Rectangle 66"
                d="M14 3.5C14 3.03406 14 2.80109 14.0761 2.61732C14.1776 2.37229 14.3723 2.17761 14.6173 2.07612C14.8011 2 15.0341 2 15.5 2C15.9659 2 16.1989 2 16.3827 2.07612C16.6277 2.17761 16.8224 2.37229 16.9239 2.61732C17 2.80109 17 3.03406 17 3.5V9L14 5.5V3.5Z"
                fill={homeIconStyles ? "#ff5a5f" : " #9CA3AF"}
              />
            </g>
          </svg>
        </div>
      </Link>
      {/* line 13 aka AddIcon */}
      <Link to="/newtrip">
        <div onClick={handleAddIconStyles} style={{ cursor: "pointer" }}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Line 13"
              d="M9 1V17M17 9.00002H0.99998"
              stroke={addIconStyles ? "#ff5a5f" : " #9CA3AF"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
      {/* group 36 aka profileIcon */}
      {/* Profile */}
      <Link to="/profile/trip-plans">
        <div onClick={handleProfileIconStyles} style={{ cursor: "pointer" }}>
          <svg
            width="27"
            height="31"
            viewBox="0 0 17 21"
            fill={profileIconStyles ? "#ff5a5f" : " none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 36">
              <path
                id="Rectangle 40"
                d="M16 19.9999L16 18.5499C16 17.5732 16 17.0849 15.8874 16.6856C15.604 15.681 14.8189 14.8958 13.8143 14.6125C13.415 14.4999 12.9266 14.4999 11.95 14.4999H5.05C4.07337 14.4999 3.58505 14.4999 3.18568 14.6125C2.18108 14.8958 1.39596 15.681 1.11263 16.6856C1 17.0849 0.999999 17.5732 0.999999 18.5499L0.999999 19.9999M13.2 6.06C13.2 8.30477 11.3196 10.1245 9 10.1245C6.6804 10.1245 4.8 8.30477 4.8 6.06C4.8 3.81523 6.6804 1.99548 9 1.99548C11.3196 1.99548 13.2 3.81523 13.2 6.06Z"
                stroke={profileIconStyles ? "#ff5a5f" : " #9CA3AF"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default Icons;
