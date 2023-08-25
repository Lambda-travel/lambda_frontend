import logoImg from "../../assets/logo.png";
import "./StartJourney.css";
function StartJourney() {
  return (
    <div className="container">
      <img src={logoImg} alt="Lambda logo" />
      <div className="titleDesc">
        <h1>
          Navigate Your <span>Dreams</span>
        </h1>
        <p>
          Explore, plan, embark. Your journey starts here. Discover seamless
          travel planning with our app. Your adventure awaits
        </p>
      </div>
      <div className="loginRegisterBtn">
        <button className="loginBtn">Login</button>
        <button className="registerBtn">Register</button>
      </div>
    </div>
  );
}

export default StartJourney;
