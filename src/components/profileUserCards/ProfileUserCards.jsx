/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
const defaultCover =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import api from "../../api/api";
import Cookies from "js-cookie";

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

function ProfileUserCards({ trip, index, totalPlace }) {
  const { user } = useContext(UserContext);

  const [travelMates, setTravelMates] = useState();

  const getTravelMates = () => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      api
        .get(`/trip/${trip.id}/travelMates`, config)
        .then((res) => {
          // console.log(res.data);
          setTravelMates(res.data);
        })
        .catch((error) => {
          if(error.response.data === "Unable to find travel mates pictures"){
            console.warn("No travel mates found.");
          } else {
            console.error(error)
          }
        });
    }
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
          <h3 className="trip-title-profile">{index} - {trip.destination}</h3>
          <div className="tripDateAndMates">
            <div className="avatarContainerCards">
              <Avatar
                className="avatar"
                // className="profile-icon"
                src={
                  user.profile_image_url !== null
                    ? user.profile_image_url
                    : null
                }
              />
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
            <div className="datePlace">
              <p>{`${formatDate(trip.start_date)}-${formatDate(
                trip.end_date
              )}`}</p>
              <p className="date-trip-profile">
                {totalPlace && totalPlace[0] ? `${totalPlace[0]} places` : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserCards;
