import "./InviteMate.css";
import homeIcon from "../../assets/homeicon_forheader.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function InviteMate() {
  return (
    <>
      <header className="header">
        <Link className="btn-home-travelmate" to="/home">
          <button className="homeBtn">
            <img src={homeIcon} />
            Home{" "}
          </button>
        </Link>
      </header>
      <div className="pageTitle">
        <h2>Invite your travelmate</h2>
        <p>
          Plan with your friends: Your changes sync in real-time, keeping
          everyone in the loop{" "}
        </p>
      </div>
      <form className="form">
        <div className="divInput">
          <label htmlFor="destination">Travelmate</label>
          <input
            name="destination"
            className="inputField"
            type="text"
            placeholder="Search by name or email"
          />
        </div>
      </form>
      <div className="inviteAndMaybeBtn">
        <Button text="Invite Travelmate" newClassName="customButton" />
        <Button text="Maybe later" newClassName="cancelButton" />
      </div>
    </>
  );
}

export default InviteMate;
