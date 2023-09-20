import { Link, useNavigate } from "react-router-dom";
import ProfileUserCards from "../../components/profileUserCards/ProfileUserCards";
import api from "../../api/api";
import Cookies from "js-cookie";
import { useEffect, useContext } from "react";
import TripsContext from "../../contexts/TripsContext";

const TripPlans = () => {
  const { trips, setTrips } = useContext(TripsContext);

  const navigate = useNavigate();

  const getAllTrips = () => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      api
        .get("/trip", config)
        .then((response) => {
          if (response.status === 200) {
            setTrips(response.data);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const goToCreateNewTrip = () => {
    navigate("/newtrip");
  };

  useEffect(() => {
    getAllTrips();
  }, []);

  return (
    <>
      {trips && trips.length > 0 ? (
        <div>
          {trips.map((trip, index) => (
            <Link
              key={trip.id}
              className="link-in-card-profile"
              to={`/trip/${trip.id}/overview`}
            >
              <ProfileUserCards
                trip={trip}
                index={index + 1}
                totalPlace={null}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="container-start-planning-trip">
          <p className="text-trip-plans-profile">
            {`You haven't created any trip yet.`}
          </p>
          <button className="customButton" onClick={goToCreateNewTrip}>
            Start planning a trip
          </button>
        </div>
      )}
    </>
  );
};

export default TripPlans;
