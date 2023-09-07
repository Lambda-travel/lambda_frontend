import "./StartJourney.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import Button from "../../components/Button/Button";
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
        <Button text="Login" newClassName="loginButton" />
        <Link to="/register" className="registerLink">
          <Button text="Register" newClassName="registerButton" />
        </Link>
      </div>
    </div>
  );
}

export default StartJourney;

{
  /* <button className="loginBtn">Login</button>
        <button className="registerBtn">Register</button> */
}
