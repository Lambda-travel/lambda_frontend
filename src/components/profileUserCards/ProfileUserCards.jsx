import ellipse1 from "../../assets/Ellipse 2.svg";
import ellipse2 from "../../assets/Ellipse 3.svg";
import tripImage from "../../assets/Rectangle 705.png";

function ProfileUserCards({ trip }) {
  return (
    <div>
      <div className="tripsImagesLocation">
        <img src={tripImage} alt="trip image" className="tripImage" />
        <div className="titleDateMate ">
          <h3 className="trip-title-profile">{trip.destination}</h3>
          <div className="tripDateAndMates">
            <div className="matesAvatar">
              <img src={ellipse1} alt="mates" className="travelMate1 mates" />
              <img src={ellipse2} alt="mates" className="travelMate2 mates" />
            </div>
            <p>{`
             ${trip.start_date.split("T")[0].split("-").reverse().join("-")} -
              ${trip.end_date
                .split("T")[0]
                .split("-")
                .reverse()
                .join("-")}`}</p>
            <p className="date-trip-profile"> 11 Places</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserCards;
