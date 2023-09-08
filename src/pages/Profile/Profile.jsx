import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeNav from "../../components/HomeNav/HomeNav";
import NavBar from "../../components/Nav Component/NavBar";
import ProfileUserCards from "../../components/profileUserCards/ProfileUserCards";
import avatar from "../../assets/Avatar.svg";
import editIcon from "../../assets/Group 1689.svg";
import api from "../../api/api";
import "./Profile.css";

function Profile() {
  /* COUNT OF ITEMS IN TRIP PLANS*/

  const [tripsInfo, setTripsInfo] = useState();
  const [totalPlace, setTotalPlace] = useState([]);

  const navigate = useNavigate();

  const goToCreateNewTrip = () => {
    navigate("/newtrip");
  };

  const getTrips = () => {
    //! SEND TOKEN as config

    api.get("/trip").then((res) => {
      setTripsInfo(res.data);
    });
  };

  const getTotalPlace = () => {
    api.get("/trip/place").then((res) => {
      setTotalPlace(res.data);
    });
  };

  useEffect(() => {
    getTrips();
    getTotalPlace();
  }, []);

  return (
    <div className="bigContainer">
      <div className="homeButton">
          <HomeNav />
      </div>

      <div className="container-profile">
        <div className="profileInfo">
          <div className="profileImage">
            <img src={avatar} alt="" />
            <img src={editIcon} alt="" className="editIcon" />
          </div>
          <div className="profileInfo">
            <h1 className="profileName">Kiera Watson</h1>
            <p className="userName">@kierawatson</p>
          </div>
        </div>
        <div className="tripsAndGuidesContainer">
          <div className="tripsPlusGuides">
            <div className="tripPlans">Trip plans</div>
            <div className="guides">Guides</div>
          </div>
          <div className="bottomLine"></div>

          <div className="tripPlansContent">
            {tripsInfo ? (
              <div className="tripPlansContent">
                  {tripsInfo.map((trip) => (
                  <Link key={trip.id} className="link-in-card-profile" to={`/trip/${trip.id}/overview/`}>
                    <ProfileUserCards
                      trip={trip}
                      totalPlace={totalPlace.map((value) => value.total_places)}
                    />
                  </Link>
                  ))}
                </div>
            ) : (
              <div className="container-start-planning-trip">
                <p className="text-trip-plans-profile">
                  You haven`t planned any trips yet.
                </p>
                <button className="customButton" onClick={goToCreateNewTrip}>
                  Start planning a trip
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
        <NavBar />
    </div>
  );
}

export default Profile;
