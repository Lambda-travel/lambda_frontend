import { Link, useNavigate } from "react-router-dom";
// import HomeNav from "../../components/HomeNav/HomeNav";
// import NavBar from "../../components/Nav Component/NavBar";
import ProfileUserCards from "../../components/profileUserCards/ProfileUserCards";
import editIcon from "../../assets/Group 1689.svg";
import api from "../../api/api";

import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Avatar from "@mui/material/Avatar";
import TripsContext from "../../contexts/TripsContext";

import "./Profile.css";

function Profile() {
  /* COUNT OF ITEMS IN TRIP PLANS*/
  const { user } = useContext(UserContext);
  const { trips } = useContext(TripsContext);

  const [totalPlace, setTotalPlace] = useState([]);
  const [categoryStyle, setCategoryStyle] = useState(true);
  // const [profileUsers, setProfileUsers] = useState();

  const navigate = useNavigate();

  // * All methods
  const goToCreateNewTrip = () => {
    navigate("/newtrip");
  };

  const getTotalPlace = () => {
    api.get("/trip/place").then((res) => {
      setTotalPlace(res.data);
    });
  };
  const handleGuideCategoryStyle = () => {
    setCategoryStyle(false);
  };
  const handleTripCategoryStyle = () => {
    setCategoryStyle(true);
  };

  useEffect(() => {
    getTotalPlace();
  }, []);

  return (
    <div className="bigContainer">
      {/* <div className="homeButton">
        <HomeNav />
      </div> */}

      <div className="container-profile">
        {user ? (
          <div className="profileInfo">
            <div className="profileImage">
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={user.profile_image_url ? user.profile_image_url : null}
              />
              <Link to="//editPage">
                <img src={editIcon} alt="edit icon" className="editIcon" />
              </Link>
            </div>
            <div className="profileInfo">
              <h1 className="profileName">
                {user.first_name} {user.last_name}
              </h1>
              <p className="userName">{`@${user.user_name}`}</p>
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}

        <div className="tripsAndGuidesContainer">
          <div className="tripsPlusGuides">
            <button
              onClick={handleTripCategoryStyle}
              className={`tripPlans 
                ${categoryStyle ? "trip__And__Active" : "trip__And__Disabled"}
              `}
            >
              Trip plans
            </button>
            <button
              onClick={handleGuideCategoryStyle}
              className={
                categoryStyle ? "trip__And__Disabled" : "trip__And__Active"
              }
            >
              Guides
            </button>
          </div>
          <div className="bottomLine"></div>

          <div className="tripPlansContent">
            {trips ? (
              <div className="tripPlansContent">
                {categoryStyle ? (
                  trips.map((trip) => (
                    <Link
                      key={trip.id}
                      className="link-in-card-profile"
                      to={`/trip/${trip.id}/overview`}
                    >
                      <ProfileUserCards
                        trip={trip}
                        totalPlace={totalPlace.map(
                          (value) => value.total_places
                        )}
                      />
                    </Link>
                  ))
                ) : (
                  <div className="container-start-planning-trip">
                    <p className="text-trip-plans-profile">
                      {`You haven't written any guide yet.`}
                    </p>
                    <button
                      className="customButton disabled"
                      // onClick={goToCreateNewTrip}
                      disabled
                    >
                      Create a Guide
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="container-start-planning-trip">
                <p className="text-trip-plans-profile">
                  {`You haven't written any trip yet.`}
                </p>
                <button className="customButton" onClick={goToCreateNewTrip}>
                  Start planning a trip
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <NavBar /> */}
    </div>
  );
}

export default Profile;
