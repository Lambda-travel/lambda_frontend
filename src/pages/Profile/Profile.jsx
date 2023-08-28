import "./Profile.css";
import avatar from "../../assets/Avatar.svg";
import ellipse1 from "../../assets/Ellipse 2.svg";
import ellipse2 from "../../assets/Ellipse 3.svg";
import editIcon from "../../assets/Group 1689.svg";
import tripImage from "../../assets/Rectangle 705.png";

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

          <div className="tripPlansContent">
            <div className="tripsImagesLocation">
              <img src={tripImage} alt="trip image" className="tripImage" />
              <div className="titleDateMate ">
                <h3 className="trip-title-profile">Trip to indonesia</h3>
                <div className="tripDateAndMates">
                  <div className="matesAvatar">
                    <img
                      src={ellipse1}
                      alt="mates"
                      className="travelMate1 mates"
                    />
                    <img
                      src={ellipse2}
                      alt="mates"
                      className="travelMate2 mates"
                    />
                  </div>

                  <p className="date-trip-profile">Aug 26-28,2022-11 Places</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
