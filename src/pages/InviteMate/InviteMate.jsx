import "./InviteMate.css";
import homeIcon from "../../assets/homeicon_forheader.png";
import Button from "../../components/Button/Button";

function InviteMate() {
  return (
    <>
      <header className="header">
        <button className="homeBtn">
          <img src={homeIcon} />
          Home{" "}
        </button>
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
