import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import "./overViewPage.css";
import EditTrip from "../../components/popUps/EditTrip/EditTrip";
// import Avatar from "../../assets/dummy-img/Avatar.svg";
import Avatar from "@mui/material/Avatar";
import api from "../../api/api";
const defaultCover =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Cookies from "js-cookie";
import TripsContext from "../../contexts/TripsContext";

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

const OverviewPage = () => {
  
  const location = useLocation();
  const id = Number(useParams().id);

  const { user } = useContext(UserContext);
  const { trips } = useContext(TripsContext);

  // ------------  GET ALL DAYS

  const getAllDays = () => {
    api
      .get(`/trip/${id}`)
      .then((response) => {
        localStorage.setItem("allDays", JSON.stringify(response.data));
      })
      .catch((error) => console.log(error));
  };

  // -------------- GET INFO ONE TRIP BY ID

  const [tripInfo, setTripInfo] = useState();

  const tripById = () => {
    api
      .get(`/trip/overview/${id}`)
      .then((response) => {
        // console.log(response);
        localStorage.setItem("lambda_country_trip", response.data[0].destination.replace(/^[^ ]* /, ''))
        setTripInfo(response.data[0])
      })
      .catch((error) => console.log(error));
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

      api.get(`/trip/${id}/travelMates`, config).then((res) => {
        // console.log(res.data);
        setTravelMates(res.data);
      });
    }
  };

  useEffect(() => {
    getTravelMates();
    getAllDays();
    tripById();
  }, []);

  /*-------------  PAGE INFO -----------*/

  const [editTripPopUp, setEditTripPopUp] = useState(false);

  if (editTripPopUp) {
    document.body.classList.add("active-modal-edit");
  } else {
    document.body.classList.remove("active-modal-edit");
  }

  const toggleEditTrip = () => {
    setEditTripPopUp(!editTripPopUp);
  };

  const saveTripId =()=>{
    localStorage.setItem("tripIdInviteTravelmate", id)
  }

  console.log();

  return (
    <>
      {tripInfo ?
        <article >
          {/*-------- H E A D E R -------------*/}
          <div className="header-container">
            <Link to="/home">
              <button className="header-btn-home">
                <svg
                  style={{ width: "1.5rem", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <p>Home</p>
              </button>
            </Link>
            {tripInfo.trip_image_url ? (
              <img className="header-img" src={tripInfo.trip_image_url} alt={""} />
            ) : (
              <img className="header-img-default" src={defaultCover} alt={""} />
            )}
          </div>
          {/*-------- INFO USER -------------*/}
          <div className="info-user-container">
            <div className="name-and-edit">
              <h1 className="name-of-trip">{trips.indexOf(trips.filter(trip => trip.destination === tripInfo.destination)[0])+1} - {tripInfo.destination}</h1>
              <button className="edit-trip-btn" onClick={toggleEditTrip}>
                <svg
                  style={{ width: "1.2rem", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </button>

              {editTripPopUp && <EditTrip toggleEditTrip={toggleEditTrip} defaultDestination={tripInfo.destination} />}
            </div>
            <p className="date-of-trip">
              {formatDate(tripInfo.start_date)} - {formatDate(tripInfo.end_date)}
            </p>
            <div className="container-avatar-and-button">
              {/* <img className="profile-icon" src={Avatar} alt={""} /> */}
              <Avatar
                // className="avatar"
                className="profile-icon"
                src={user.profile_image_url ? user.profile_image_url : null}
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
              <Link onClick={saveTripId} to="/travelmate">
                <button className="travel-mate-overview-page">+</button>
              </Link>
            </div>
          </div>

          <div className="categories-btn-container">
            <Link
              className={
                location.pathname === `/trip/${id}/overview`
                  ? "overview-btn-categories-active"
                  : "overview-btn-categories-disable"
              }
              to={`/trip/${id}/overview`}
            >
              Overview
            </Link>
            <Link
              className={
                location.pathname === `/trip/${id}/itinerary`
                  ? "itinerary-btn-categories-active"
                  : "itinerary-btn-categories-disable"
              }
              to={`/trip/${id}/itinerary`}
            >
              Itinerary
            </Link>
          </div>
          <Outlet />
        </article>
      :<h1>Loading..</h1>}
    </>
  );
};

export default OverviewPage;
