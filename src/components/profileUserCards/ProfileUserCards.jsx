/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
const defaultCover =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
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

function ProfileUserCards({ trip, totalPlace }) {
  const { user } = useContext(UserContext);

  const [travelMates, setTravelMates] = useState();

  const getTravelMates = () => {
    api.get(`/trip/${trip.id}/travelMates`).then((res) => {
      console.log(res);
      //! MISS VERIFICATION AFTER INVITE AN EXISTENT USER
      //! AFTER THAT FETCH TRAVEL MATES PROFILE IMAGES
      // setTravelMates(res.data);
    });
  };

  useEffect(() => {
    getTravelMates();
  }, []);

  return (
    <div>
      <div className="tripsImagesLocation">
        <img
          src={trip.trip_image_url ? trip.trip_image_url : defaultCover}
          alt="trip image"
          className="tripImage"
        />
        <div className="titleDateMate ">
          <h3 className="trip-title-profile">{trip.destination}</h3>
          <div className="tripDateAndMates">
            <div className="matesAvatar">
              <Link to="/profile">
                <Avatar
                  // className="avatar"
                  className="profile-icon"
                  src={user.profile_image_url ? user.profile_image_url : null}
                />
              </Link>
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
