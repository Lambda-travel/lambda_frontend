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

function HomePage() {
  const { user } = useContext(UserContext);
  const { trips } = useContext(TripsContext);

  const [articles, setArticles] = useState();

  const getArticles = (data) => {
    api
      .get("/articles", data)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="main-container">
      {/* User Info  */}
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
                <Link to="/profile">
                  <Avatar
                    className="avatar"
                    src={user.profile_image_url ? user.profile_image_url : null}
                  />
                </Link>
                {/* <img
                  src={
                    user.profile_image_url
                      ? user.profile_image_url
                      : `${avatar}`
                  }
                  alt="Avatar"
                  className="avatar"
                /> */}
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
      {trips && trips.length > 0 ? (
        <>
          <div className="cardsAndTripInfosMobile">
            {trips.map((trip) => (
              <Link
                key={trip.id}
                to={`/trip/${trip.id}/overview `}
                className="link-tags"
              >
                <Swiper spaceBetween={300} slidesPerView={2}>
                  <SwiperSlide>
                    <UserTripsCard trip={trip} />
                  </SwiperSlide>
                </Swiper>
              </Link>
            ))}
          </div>
        </>
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

      {trips && trips.length > 0 ? (
        <>
          <div className="cardsAndTripInfoDesktop">
            {trips.map((trip) => (
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
      )}

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
