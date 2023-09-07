import "./PlanNewTrip.css";

import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import HomeNav from "../../components/HomeNav/HomeNav";
import api from "../../api/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function PlanNewTrip() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const createNewTrip = (data) => {
    const startDate = new Date(data.start_date);
    const endDate = new Date(data.end_date);
    if (endDate < startDate) {
      <span id="displayError"></span>;
      alert("End date should not be earlier that the Start date");
      return;
    }
    data.user_id = 1; //!alter for the user_id because this line is just to simulate the id
    console.log(data);
    api
      .post("/trip", data)
      .then((response) => {
        if (response.status === 201) {
          localStorage.setItem("tripIdInviteTravelmate", response.data.tripId);
          navigate("/travelmate");
        }
      })
      .catch((error) => console.log(error));
  };

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
      <form className="planNewTripForm" onSubmit={handleSubmit(createNewTrip)}>
        <div className="divInput">
          <label htmlFor="destination">Destination</label>
          <input
            {...register("destination", {
              required: "A destination is required!",
            })}
            aria-invalid={errors.destination ? "true" : "false"}
            name="destination"
            className="inputField"
            type="text"
            placeholder="e.g., Japan, Paris, Indonesia"
          />
        </div>
        {errors.destination && (
          <p className="required">{errors.destination?.message}</p>
        )}
        <div className="divInput">
          <label htmlFor="start_date">Start Date</label>
          <input
            {...register("start_date", {
              required: "A start date is required!",
            })}
            aria-invalid={errors.start_date ? "true" : "false"}
            name="start_date"
            className="inputField"
            type="text"
            placeholder="e.g. 10 Aug 2023 "
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        {errors.start_date && (
          <p className="required">{errors.start_date?.message}</p>
        )}
        <div className="divInput">
          <label htmlFor="end_date">End Date</label>
          <input
            {...register("end_date", {
              required: "An end date is required!",
            })}
            aria-invalid={errors.end_date ? "true" : "false"}
            name="end_date"
            className="inputField"
            type="text"
            placeholder="e.g. 17 Aug 2023"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        {errors.end_date && (
          <p className="required">{errors.end_date?.message}</p>
        )}
        <div className="startCancelBtn">
          <Button text="Start Planning" newClassName="customButton" />
          <Link to="/home">
            <Button text="Cancel" newClassName="cancelButton" />
          </Link>
        </div>
      </form>
    </>
  );
}

export default PlanNewTrip;

// <button className="startBtn">Start Planning</button>
//           <button className="cancelBtn">Cancel</button>
