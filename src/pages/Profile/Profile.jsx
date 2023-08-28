import "./Profile.css";
import avatar from "../../assets/Avatar.svg";

import editIcon from "../../assets/Group 1689.svg";

import TripPlansCard from "../../components/TripPlans Cards/TripPlansCard";

function Profile() {
  return (
    <div className="bigContainer">
      <nav className="homeButton">
        <ul>
          <li>Home</li>
        </ul>
      </nav>
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

          <TripPlansCard />
          <TripPlansCard />
          <TripPlansCard />
        </div>
      </div>
    </div>
  );
}

export default Profile;
