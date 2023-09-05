import ellipse1 from "../../assets/Ellipse 2.svg";
import ellipse2 from "../../assets/Ellipse 3.svg";
import tripImage from "../../assets/Rectangle 705.png";

function ProfileUserCards() {
  return (
    <div>
      <div className="tripsImagesLocation">
        <img src={tripImage} alt="trip image" className="tripImage" />
        <div className="titleDateMate ">
          <h3 className="trip-title-profile">Trip to indonesia</h3>
          <div className="tripDateAndMates">
            <div className="matesAvatar">
              <img src={ellipse1} alt="mates" className="travelMate1 mates" />
              <img src={ellipse2} alt="mates" className="travelMate2 mates" />
            </div>

            <p className="date-trip-profile">Aug 26-28,2022-11 Places</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserCards;
