import "./PlanNewTrip.css";

function PlanNewTrip() {
  return (
    <>
      <header className="header">
        <button className="homeBtn"> Home </button>
      </header>
      <div className="pageTitle">
        <h2>Plan a new trip</h2>
        <p>Build an itinerary and map your upcoming travel plans. </p>
      </div>
      <form className="form">
        <div className="divInput">
          <label htmlFor="destination">Destination</label>
          <input
            name="destination"
            className="inputField"
            type="text"
            placeholder="e.g., Japan, Paris, Indonesia"
          />
        </div>
        <div className="divInput">
          <label name="startDate">Start Date</label>
          <input
            name="startDate"
            className="inputField"
            type="text"
            placeholder="e.g. 10 Aug 2023 "
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        <div className="divInput">
          <label name="endDate">End Date</label>
          <input
            name="endDate"
            className="inputField"
            type="text"
            placeholder="e.g. 17 Aug 2023"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
      </form>
      <div className="startCancelBtn">
        <button className="startBtn">Start Planning</button>
        <button className="cancelBtn">Cancel</button>
      </div>
    </>
  );
}

export default PlanNewTrip;
