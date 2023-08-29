import "./HomPage.css";
import avatar from "../../assets/Avatar.svg";
import UserTripsCard from "../../components/UserTripsCard/UserTripsCard";
import ArticleCard from "../../components/ArticleCards/ArticleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
      <div className="cardsAndTripInfos">
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
      <div className="articleCards">
        <ArticleCard />
      </div>
    </div>
  );
}

export default HomePage;
