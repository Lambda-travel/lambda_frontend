/* eslint-disable react/prop-types */
import "./UserTripscard.css";
import optionIcon from "../../assets/more-horizontal.svg";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";

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

  const { user } = useContext(UserContext);


  const [totalPlaceCount, setTotalPlaceCount] = useState();

  const getTotalPlaceCount = () => {
    api.get(`/trip/${trip.id}/places`).then((res) => {
      setTotalPlaceCount(res.data[0].total_places);
    });
  };

  const [travelMates, setTravelMates] = useState();

  const getTravelMates = () => {
    api.get(`/trip/${trip.id}/travelMates`)
    .then((res) => {
      console.log(res);
      //! MISS VERIFICATION AFTER INVITE AN EXISTENT USER
      // setTravelMates(res.data);
    });
  };

  useEffect(() => {
    getTotalPlaceCount();
    getTravelMates();
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
        <Link to="/profile">
                <Avatar
                  // className="avatar"
                  className="profile-icon"
                  src={user.profile_image_url ? user.profile_image_url : null}
                />
              </Link>
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
