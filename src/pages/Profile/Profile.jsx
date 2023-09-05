import "./Profile.css";
import avatar from "../../assets/Avatar.svg";
// import ellipse1 from "../../assets/Ellipse 2.svg";
// import ellipse2 from "../../assets/Ellipse 3.svg";
// import tripImage from "../../assets/Rectangle 705.png";
import editIcon from "../../assets/Group 1689.svg";
import HomeNav from "../../components/HomeNav/HomeNav";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/Nav Component/NavBar";
// import UserTripsCard from "../../components/UserTripsCard/UserTripsCard";
import ProfileUserCards from "../../components/profileUserCards/ProfileUserCards";

function Profile() {
  /* COUNT OF ITEMS IN TRIP PLANS*/
  const [lengthItems, setLengthItems] = useState(0);

  const showList = () => {
    setLengthItems(lengthItems + 1);
  };

  return (
    <div className="bigContainer">
      <div className="homeButton">
        <Link to="/home">
          <HomeNav customClassName="homeBtn" />
        </Link>
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
            {lengthItems > 0 ? (
              <Link className="link-in-card-profile" to="/trip/overview">
                <div className="tripPlansContent">
                  <ProfileUserCards />
                </div>
              </Link>
            ) : (
              <div className="container-start-planning-trip">
                <p className="text-trip-plans-profile">
                  You haven`t planned any trips yet.
                </p>
                <button className="customButton" onClick={showList}>
                  Start planning a trip
                </button>
              </div>
            )}
          </div>
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default Profile;
