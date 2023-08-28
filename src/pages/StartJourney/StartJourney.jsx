import logoImg from "../../assets/logo.png";
import Button from "../../components/Button/Button";
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
        <Button text="Login" newClassName="loginButton" />
        <Button text="Register" newClassName="registerButton" />
      </div>
    </div>
  );
}

export default StartJourney;

{
  /* <button className="loginBtn">Login</button>
        <button className="registerBtn">Register</button> */
}
