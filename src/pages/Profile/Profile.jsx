import { Link, useNavigate } from "react-router-dom";
// import HomeNav from "../../components/HomeNav/HomeNav";
// import NavBar from "../../components/Nav Component/NavBar";
import ProfileUserCards from "../../components/profileUserCards/ProfileUserCards";
import editIcon from "../../assets/Group 1689.svg";
import api from "../../api/api";
import Cookies from 'js-cookie';
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Avatar from "@mui/material/Avatar";
import TripsContext from "../../contexts/TripsContext";

import "./Profile.css";

function Profile() {
  /* COUNT OF ITEMS IN TRIP PLANS*/
  const { user } = useContext(UserContext);
  const { trips, setTrips } = useContext(TripsContext);

  const [categoryStyle, setCategoryStyle] = useState(true);

  //* Setting Profile
  const [profileImgUrl, setProfileImgUrl] = useState("");

  const navigate = useNavigate();

  // * All methods

  const goToCreateNewTrip = () => {
    navigate("/newtrip");
  };

  const getAllTrips = () => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
    api
    .get("/trip", config)
    .then((response) => {
      if (response.status === 200) {
        setTrips(response.data);
      }
    })
    .catch((error) => console.error(error));
  }
}
  const handleGuideCategoryStyle = () => {
    setCategoryStyle(false);
  };
  const handleTripCategoryStyle = () => {
    setCategoryStyle(true);
  };

  useEffect(() => {
    getAllTrips();
  }, []);

  useEffect(() => {
    const storeProfileUrl = localStorage.getItem("profile_image_url");
    console.log("Stored Profile URL:", storeProfileUrl);
    if (storeProfileUrl) {
      setProfileImgUrl(storeProfileUrl);
    } else {
      if (user && user.profile_image_url) {
        setProfileImgUrl(user.profile_image_url);
      }
    }
  }, [user]);

  return (
    <div className="bigContainer">
      <div className="container-profile">
        {user ? (
          <div className="profileInfo">
            <div className="profileImage">
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={profileImgUrl ? profileImgUrl : null}
              />
              <Link to="/editPage">
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
            {trips && trips.length > 0 ? (
              <div className="tripPlansContent">
                {categoryStyle ? (
                  trips.map((trip, index) => (
                    <Link
                      key={trip.id}
                      className="link-in-card-profile"
                      to={`/trip/${trip.id}/overview`}
                    >
                      <ProfileUserCards
                        trip={trip}
                        index={index+1}
                        totalPlace={null}
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
                  {`You haven't created any trip yet.`}
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
