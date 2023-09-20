import "./PlanNewTrip.css";

import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
// import HomeNav from "../../components/HomeNav/HomeNav";
import api from "../../api/api";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Cookies from "js-cookie";
import Select from "react-select";
import TripsContext from "../../contexts/TripsContext";

function PlanNewTrip() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const { countries, selectedCountry, setSelectedCountry } = useContext(TripsContext);

  const startDate = watch(["start_date"]);
  const endDate = watch(["end_date"]);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const defaultDestination = "🇵🇹 Portugal";

  useEffect(() => {
    if (endDate && startDate) {
      if (endDate[0]?.length > 0 && startDate[0]?.length > 0) {
        if (endDate < startDate) {
          setError("End date should not be earlier that the Start date");
        } else {
          setError(null);
        }
      }
    }
  }, [endDate, startDate]);

  const createNewTrip = (data) => {
   
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
  
      data.user_id = user.id; 
      api
        .post("/trip", data, config)
        .then((response) => {
          if (response.status === 201) {
            localStorage.setItem(
              "tripIdInviteTravelmate",
              response.data.tripId
            );
            navigate("/travelmate");
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <div className="pageTitle">
        <h2>Plan a new trip</h2>
        <p>Build an itinerary and map your upcoming travel plans. </p>
      </div>
      <form className="planNewTripForm" onSubmit={handleSubmit(createNewTrip)}>
        <div className="divInput newTripTraMate">
          <label htmlFor="destination">Destination</label>
          <Controller
            className="inputField"
            name="destination"
            control={control}
            defaultValue={defaultDestination}
            placeholder="e.g., Japan, Paris, Indonesia"
            render={({ field }) => (
              <Select
                {...field}
                options={countries}
                onChange={(value) => {
                  setSelectedCountry(value);
                  setValue("destination", value.label);
                }}
                value={selectedCountry}
              />
            )}
          />
          {/* <input
            {...register("destination", {
              required: "A destination is required!",
            })}
            aria-invalid={errors.destination ? "true" : "false"}
            name="destination"
            className="inputField"
            type="text"
            placeholder="e.g., Japan, Paris, Indonesia"
          /> */}
        </div>
        {/* {errors.destination && (
          <p className="required">{errors.destination?.message}</p>
        )} */}
        {/* <div className="divInput">
        )} */}
        <div className="divInput newTripTraMate">
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
            min={getCurrentDate()}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        {errors.start_date && (
          <p className="required">{errors.start_date?.message}</p>
        )}
        <div className="divInput newTripTraMate">
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
            // min={getCurrentDate()}
            min={startDate[0] ? startDate[0] : getCurrentDate()}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        {errors.end_date && (
          <p className="required">{errors.end_date?.message}</p>
        )}
        {error && error.length > 0 ? <p className="required">{error}</p> : null}
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
