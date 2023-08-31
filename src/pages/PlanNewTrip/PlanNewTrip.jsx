import "./PlanNewTrip.css";

import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import HomeNav from "../../components/HomeNav/HomeNav";

function PlanNewTrip() {
  return (
    <>
      <header className="header">
        <Link to="/home">
          <HomeNav customClassName="homeBtn" />
        </Link>
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
      <Link to="/travelmate">
        <div className="startCancelBtn">
          <Button text="Start Planning" newClassName="customButton" />
          <Button text="Cancel" newClassName="cancelButton" />
        </div>
      </Link>
    </>
  );
}

export default PlanNewTrip;

// <button className="startBtn">Start Planning</button>
//           <button className="cancelBtn">Cancel</button>
