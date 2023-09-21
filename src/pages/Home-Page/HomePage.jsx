// import avatar from "../../assets/Avatar.svg";
import UserTripsCard from "../../components/UserTripsCard/UserTripsCard";
import ArticleCard from "../../components/ArticleCards/ArticleCard";
// import NavBar from "../../components/Nav Component/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import "swiper/css";
import "./HomPage.css";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import TripsContext from "../../contexts/TripsContext";
import Avatar from "@mui/material/Avatar";
import Cookies from "js-cookie";

function HomePage() {
  const { user } = useContext(UserContext);
  const { trips, fetchTrips } = useContext(TripsContext);

  const [articles, setArticles] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const today = new Date();

  const getArticles = (data) => {
    api
      .get("/articles", data)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const token = Cookies.get("user_token");

    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      fetchTrips(config);
    }
    getArticles();
  }, [user]);

  const handleResize = () => {
    if (window.innerWidth < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="main-container">
      <div className="userInfo">
        <div className="nameAndMessageAndAvatar">
          {user ? (
            <div key={user.id} className="userProfileAndContent">
              <div className="nameAndMessage">
                <h3>
                  Hi, <span>{`${user.first_name} ${user.last_name}`}</span>
                </h3>
                <p>Explore beauty of journey</p>
              </div>
              <div className="avatarContainer">
                <Link to="/profile/trip-plans">
                  <Avatar
                    className="avatar"
                    src={user.profile_image_url ? user.profile_image_url : null}
                  />
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h3>Loading....</h3>
            </>
          )}
        </div>
        <div className="myTripAndPlanNew">
          <h4>My trips</h4>
        </div>
      </div>
      {trips && trips?.length > 0 ? (
        <div className="cardsAndTripInfosMobile">
          <Swiper
            spaceBetween={isMobile ? 250 : trips?.length > 2 ? 30: 350}
            slidesPerView={isMobile ? 1 : 4}
          >
            {trips
              .filter((trip) => new Date(trip.end_date) >= today)
              .map((trip) => (
                <SwiperSlide key={trip.id}>
                  <Link to={`/trip/${trip.id}/overview `} className="link-tags">
                    <UserTripsCard trip={trip} />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      ) : (
        <div>
          <div className="NoTripAvailable-Mobile">
            <p>
              No Trips available.{"  "}
              <Link to="/newtrip">Plan your trip.</Link>
            </p>
          </div>
        </div>
      )}

      {/* {trips && trips.length > 0 ? (
        <>
          <div className="cardsAndTripInfoDesktop">
            {trips
              .filter((trip) => new Date(trip.start_date) > today)
              .map((trip) => (
                <Link
                  key={trip.id}
                  to={`/trip/${trip.id}/overview `}
                  className="link-to-userTrips"
                >
                  <UserTripsCard trip={trip} />
                </Link>
              ))}
          </div>
        </>
      ) : (
        <div>
          <div className="NoTripAvailable-Desktop">
            <p>
              No Trips available.{"  "}
              <Link to="/newtrip">Plan your trip.</Link>
            </p>
          </div>
        </div>
      )} */}

      <div className="articleCards">
        {articles ? (
          articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="articleLinks"
            >
              <ArticleCard article={article} />
            </Link>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
}

export default HomePage;
