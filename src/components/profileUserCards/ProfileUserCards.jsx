/* eslint-disable react/prop-types */
import ellipse1 from "../../assets/Ellipse 2.svg";
import ellipse2 from "../../assets/Ellipse 3.svg";
import tripImage from "../../assets/Rectangle 705.png";

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const formattedDate = `${day} ${month}`;
  return formattedDate;
}
// eslint-disable-next-line react/prop-types
function ProfileUserCards({ trip, totalPlace }) {
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
            <div className="datePlace">
              <p>{`${formatDate(trip.start_date)}-${formatDate(
                trip.end_date
              )}`}</p>
              <p className="date-trip-profile">
                {totalPlace[0] ? `${totalPlace[0]} places` : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserCards;
