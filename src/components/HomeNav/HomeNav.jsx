import homeIcon from "../../assets/homeicon_forheader.png";
import "./HomeNav.css";

{
  /* <div className="header-container">
          <Link to="/home">
            <button className="header-btn-home">
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
          <img className="header-img" src={backImage} alt={""} />
        </div> */
}

function HomeNav({ customClassName }) {
  return (
    <div>
      <button className={`${customClassName}`}>
        <img src={homeIcon} alt="home Icon" />
        Home{" "}
      </button>
    </div>
  );
}

export default HomeNav;
