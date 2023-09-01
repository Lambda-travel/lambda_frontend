// import homeIcon from "../../assets/homeicon_forheader.png";
import "./HomeNav.css";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <div>
      <Link to="/home">
        <button className="header-home">
          <svg
            style={{ width: "1.5rem" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p>Home</p>
        </button>
      </Link>
    </div>
  );
}

export default HomeNav;
