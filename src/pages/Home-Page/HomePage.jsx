import "./HomPage.css";
import avatar from "../../assets/Avatar.svg";
import UserTripsCard from "../../components/UserTripsCard/UserTripsCard";
import ArticleCard from "../../components/ArticleCards/ArticleCard";
import NavBar from "../../components/Nav Component/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function HomePage() {
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
          <h4>My trip</h4>
          <p>Plan new trip</p>
        </div>
      </div>
      <div className="cardsAndTripInfosMobile">
        <Swiper
          spaceBetween={190}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <UserTripsCard />
          </SwiperSlide>
          <SwiperSlide>
            <UserTripsCard />
          </SwiperSlide>
          <SwiperSlide>
            <UserTripsCard />
          </SwiperSlide>
          <SwiperSlide>
            <UserTripsCard />
          </SwiperSlide>
        </Swiper>
        {/* <UserTripsCard /> */}
      </div>
      <div className="cardsAndTripInfoDesktop">
        <UserTripsCard />
        <UserTripsCard />
        <UserTripsCard />
        <UserTripsCard />
        <UserTripsCard />
      </div>
      <div className="articleCards">
        <Link to="/article">
          <ArticleCard />
        </Link>
      </div>
      <NavBar />
    </div>
  );
}

export default HomePage;
