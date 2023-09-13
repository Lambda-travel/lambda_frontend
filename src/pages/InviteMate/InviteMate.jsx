import "./InviteMate.css";
import homeIcon from "../../assets/homeicon_forheader.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

function InviteMate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const inviteTravelmate = (data) => {
    const tripId = localStorage.getItem("tripIdInviteTravelmate");
    data.trip_id = tripId;
    // console.log(tripId);
    api
      .post("/travelmate", data)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setError("");
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.response.data);
      });
  };

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
      <form
        className="inviteMateForm"
        onSubmit={handleSubmit(inviteTravelmate)}
      >
        <div className="divInput">
          <label htmlFor="value">Travelmate</label>
          <input
            {...register("value", {
              required: "An email or user name is required",
            })}
            aria-invalid={errors.value ? "true" : "false"}
            name="value"
            className="inputField"
            type="text"
            placeholder="Search by name or email"
          />
        </div>
        {errors.value && <p className="required">{errors.value?.message}</p>}
        {error !== "" ? <p className="required">{error}</p> : null}
        <div className="inviteAndMaybeBtn">
          <Button text="Invite Travelmate" newClassName="customButton" />
          <Link to="/profile">
            <Button text="Maybe later" newClassName="cancelButton" />
          </Link>
        </div>
      </form>
    </>
  );
}

export default InviteMate;
