import avatar from "../../assets/Avatar.svg";
import UserTripsCard from "../../components/UserTripsCard/UserTripsCard";
import ArticleCard from "../../components/ArticleCards/ArticleCard";
import NavBar from "../../components/Nav Component/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import "swiper/css";
import "./HomPage.css";
import { useEffect, useState } from "react";
// const getTrips = () => {
//   //! SEND TOKEN as config

//   api.get("/trip").then((res) => {
//     setTripsInfo(res.data);
//   });
// };
function HomePage() {
  const [tripsDetail, setTripsDetail] = useState();
  const [totalPlaceCount, setTotalPlaceCount] = useState();
  const getTrips = () => {
    api.get("/trip").then((res) => {
      setTripsDetail(res.data);
    });
  };
  const getTotalPlaceCount = () => {
    api.get("/trip/place").then((res) => {
      setTotalPlaceCount(res.data);
    });
  };
  useEffect(() => {
    getTrips();
    getTotalPlaceCount();
  }, []);

  return (
    <div>
      {/* User Info  */}
      <div className="userInfo">
        <div className="nameAndMessageAndAvatar">
          <div className="nameAndMessage">
            <h3>
              Hi, <span>Kiera Watson</span>
            </h3>
            <p>Explore beauty of journey</p>
          </div>
          <div className="avatarContainer">
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>
        </div>
        <div className="myTripAndPlanNew">
          <h4>My trips</h4>
          <p>Plan new trip</p>
        </div>
      </div>
      <div className="cardsAndTripInfosMobile">
        {tripsDetail && tripsDetail.length > 0 ? (
          tripsDetail.map((trip) => (
            <Link
              key={trip.id}
              to={`/trip/${trip.id}/overview `}
              className="link-tags"
            >
              <Swiper spaceBetween={300} slidesPerView={2}>
                <SwiperSlide>
                  <UserTripsCard
                    trip={trip}
                    totalPlace={totalPlaceCount.map(
                      (value) => value.total_places
                    )}
                  />
                </SwiperSlide>
              </Swiper>
            </Link>
          ))
        ) : (
          <p>Plan new trip</p>
        )}
      </div>

      <div className="cardsAndTripInfoDesktop">
        {tripsDetail && tripsDetail.length > 0 ? (
          tripsDetail.map((trip) => (
            <Link
              key={trip.id}
              to={`/trip/${trip.id}/overview `}
              className="link-to-userTrips"
            >
              <UserTripsCard
                trip={trip}
                totalPlace={totalPlaceCount.map((value) => value.total_places)}
              />
            </Link>
          ))
        ) : (
          <p>Plan new trip</p>
        )}
      </div>

      <div className="articleCards">
        <Link to="/article" className="articleLinks">
          <ArticleCard />
        </Link>
      </div>
      <NavBar color="navColor" />
    </div>
  );
}

export default HomePage;
