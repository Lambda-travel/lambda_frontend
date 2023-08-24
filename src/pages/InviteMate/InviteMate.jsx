import "./InviteMate.css";

function InviteMate() {
  return (
    <>
      <header className="header">
        <button className="homeBtn"> Home </button>
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
        <button className="inviteBtn">Invite Travelmate</button>
        <button className="maybeBtn">Maybe later</button>
      </div>
    </>
  );
}

export default InviteMate;
