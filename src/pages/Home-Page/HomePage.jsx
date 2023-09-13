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

  const [users, setUsers] = useState();

  const [articles, setArticles] = useState();

  const getUsers = () => {
    api
      .get("/users/id")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTrips = () => {
    api.get("/trip").then((res) => {
      setTripsDetail(res.data);
    });
  };

  const getArticles = (data) => {
    api
      .get("/articles", data)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTrips();
    getArticles();
    getUsers();
  }, []);

  return (
    <div>
      {/* User Info  */}
      <div className="userInfo">
        <div className="nameAndMessageAndAvatar">
          {users ? (
            users.map((user) => (
              <div key={user.id} className="userProfileAndContent">
                <div className="nameAndMessage">
                  <h3>
                    Hi, <span>{`${user.first_name} ${user.last_name}`}</span>
                  </h3>
                  <p>Explore beauty of journey</p>
                </div>
                <div className="avatarContainer">
                  <img
                    src={
                      user.profile_image_url === "profile1.jpg"
                        ? `${avatar}`
                        : null
                    }
                    alt="Avatar"
                    className="avatar"
                  />
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="nameAndMessage">
                <h3>
                  Hi, <span>Full Name</span>
                </h3>
                <p>Explore beauty of journey</p>
              </div>
              <div className="avatarContainer">
                <img src={avatar} alt="Avatar" className="avatar" />
              </div>
            </>
          )}
          {/* <div className="nameAndMessage">
            <h3>
              Hi, <span>Kiera Watson</span>
            </h3>
            <p>Explore beauty of journey</p>
          </div>
          <div className="avatarContainer">
            <img src={avatar} alt="Avatar" className="avatar" />
          </div> */}
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
                  <UserTripsCard trip={trip} />
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
              <UserTripsCard trip={trip} />
            </Link>
          ))
        ) : (
          <p>Plan new trip</p>
        )}
      </div>

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
      <NavBar color="navColor" />
    </div>
  );
}

export default HomePage;
