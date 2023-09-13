/* eslint-disable react/prop-types */
import "./UserTripscard.css";
import optionIcon from "../../assets/more-horizontal.svg";
import ellipse1 from "../../assets/Ellipse 2.svg";
import ellipse2 from "../../assets/Ellipse 3.svg";
import { useEffect, useState } from "react";
import api from "../../api/api";

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

function UserTripsCard({ trip }) {
  const [totalPlaceCount, setTotalPlaceCount] = useState();

  const getTotalPlaceCount = () => {
    api.get(`/trip/${trip.id}/places`).then((res) => {
      setTotalPlaceCount(res.data[0].total_places);
    });
  };

  useEffect(() => {
    getTotalPlaceCount();
  }, []);

  return (
    <div className="cardContainer">
      <div className="tripsLocationAndOption ">
        <h3>{trip?.destination}</h3>
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
        <p>
          {`${formatDate(trip?.start_date)}-${formatDate(trip?.end_date)}`} -
          {totalPlaceCount ? totalPlaceCount : "The is no"} places
        </p>
      </div>
    </div>
  );
}

export default UserTripsCard;
