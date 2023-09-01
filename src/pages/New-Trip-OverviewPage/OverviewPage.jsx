import { Link } from "react-router-dom";
import "./overViewPage.css";
import { useState } from "react";
import EditTrip from "../../components/popUps/EditTrip/EditTrip";
import backImage from "../../assets/dummy-img/pexels-asad-photo-maldives-3601426.jpg";
import Avatar from "../../assets/dummy-img/Avatar.svg";
import PlacesToVisit from "./PlacesToVisit";

const OverviewPage = () => {

  const [editTripPopUp, setEditTripPopUp] = useState(false);


  const toggleEditTrip = () => {
    setEditTripPopUp(!editTripPopUp);
  };

  return (
    <>
      <article>
        {/*-------- H E A D E R -------------*/}
        <div className="header-container">
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
        </div>
        {/*-------- INFO USER -------------*/}
        <div className="info-user-container">
          <div className="name-and-edit">
            <h1 className="name-of-trip">Trip to Maldives</h1>
            <button className="edit-trip-btn" onClick={toggleEditTrip}>
              <svg
                style={{ width: "1.2rem" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </button>

            {editTripPopUp && <EditTrip toggleEditTrip={toggleEditTrip} />}
          </div>
          <p className="date-of-trip">Date: 10 aug - 17 aug</p>
          <img className="profile-icon" src={Avatar} alt={""} />
        </div>

        <div className="categories-btn-container">
          <button className="overview-btn-categories">Overview</button>
          <Link to="/trip/itinerary"><button className="itinerary-btn-categories">Itinerary</button></Link>
        </div>
        {/*-------- PLACES TO VISIT -------------*/}
            <PlacesToVisit/>
        <div className="places-to-visit-container"></div>
        {/*-------- RECOMMENDED PLACES -------------*/}
        <div>
          <p className="recommended-places-overview">Recommended Places</p>
        </div>
      </article>
    </>
  );
};

export default OverviewPage;
