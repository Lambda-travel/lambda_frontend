/* eslint-disable react/prop-types */
import "./UserTripscard.css";
import optionIcon from "../../assets/more-horizontal.svg";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Cookies from "js-cookie";

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
  const [profileImgUrl, setProfileImgUrl] = useState("");

  const [totalPlaceCount, setTotalPlaceCount] = useState();

  const getTotalPlaceCount = () => {
    if (trip.id) {
      api.get(`/trip/${trip.id}/total-places`).then((res) => {
        setTotalPlaceCount(res.data[0].total_places);
      });
    }
  };

  const [travelMates, setTravelMates] = useState();

  const getTravelMates = () => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      api.get(`/trip/${trip.id}/travelMates`, config).then((res) => {
        // console.log(res.data);
        setTravelMates(res.data);
      });
    }
  };

  useEffect(() => {
    getTotalPlaceCount();
    getTravelMates();
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
    <div className="cardContainer">
      <div className="tripsLocationAndOption ">
        <h3>{trip?.destination}</h3>
        <img src={optionIcon} alt="" />
      </div>
      <div className="currentTripAndBorder">
        {/* <p className="currentTripText">Current trip</p> */}
        <div className="borderLine"></div>
      </div>

      <div className="avatarsProfileAndDates">
        <div className="avatarContainerCards">
          {/* <Link to="/profile"> */}
          <Avatar
            className="avatar"
            src={profileImgUrl ? profileImgUrl : null}
          />
          {/* </Link> */}
          {travelMates
            ? travelMates.map((mate, index) => (
                <div className="container-travel-mate" key={index}>
                  <Avatar
                    className="avatar"
                    src={mate.picture ? mate.picture : null}
                    alt={mate.user_name}
                  />
                  <div className="mate-username">{mate.user_name}</div>
                </div>
              ))
            : null}
        </div>
      </div>
      <p className="number-places">
        {`${formatDate(trip?.start_date)}-${formatDate(trip?.end_date)}`} -
        {totalPlaceCount ? totalPlaceCount : "There is no"} places
      </p>
    </div>
  );
}

export default UserTripsCard;
