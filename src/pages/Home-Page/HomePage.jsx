import "./HomPage.css";
import avatar from "../../assets/Avatar.svg";
import UserTripsCard from "../../components/UserTripsCard/UserTripsCard";
import ArticleCard from "../../components/ArticleCards/ArticleCard";

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
        <UserTripsCard />
      </div>
      <div className="articleCards">
        <ArticleCard />
      </div>
    </div>
  );
}

export default HomePage;
