import "./UserTripscard.css";
import optionIcon from "../../assets/more-horizontal.svg";
import ellipse1 from "../../assets/Ellipse 2.svg";
import ellipse2 from "../../assets/Ellipse 3.svg";

function UserTripsCard() {
  return (
    <div className="cardContainer">
      <div className="tripsLocationAndOption">
        <h3>Trip to Indonesia</h3>
        <img src={optionIcon} alt="" />
      </div>
      <div className="currentTripAndBorder">
        <p className="currentTripText">Current trip</p>
        <div className="borderLine"></div>
      </div>

      <div className="avatarsProfileAndDates">
        <div className="avatarsProfiles">
          <img src={ellipse1} alt="avatar 1" className="avatar1" />
          <img src={ellipse2} alt="avatar 2" className="avatar2" />
        </div>
        <p>Aug 1, 2022-6 places</p>
      </div>
    </div>
  );
}

export default UserTripsCard;
