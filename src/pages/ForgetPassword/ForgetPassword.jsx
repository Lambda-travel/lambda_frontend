import "./Forgetpassword.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import { useState } from "react";

function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [changesSaved, setChangesSaved] = useState(false);
  const [error, setError] = useState("");

  const forgotPassword = (data) => {
    api
      .post("/users/forgot-password", data)
      .then((response) => {
        if (response.status === 200) {
          setChangesSaved(true);
          setError("");
        }
      })
      .catch((error) => {
        console.error(error);
        setChangesSaved(false);
        setError(error.response.data);
      });
  };

  return (
    <>
      <Link to="/">
        <button className="header-home2">
          <svg
            style={{ width: "1.5rem" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <p>Back</p>
        </button>
      </Link>
      <div className="resetPassForm">
        <div className="resetPassTitle">
          <h2>Forgot Password</h2>
        </div>
        <p className="resetPassDescription">
          Enter your email to receive the instructions to reset your password
        </p>
        <form
          className="forgetPassForm"
          onSubmit={handleSubmit(forgotPassword)}
        >
          <input
            {...register("email", { required: "An email is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            className="registerEmail"
            placeholder="Email"
          />
          {errors.email && <p className="required">{errors.email?.message}</p>}
          {error !== "" ? <p className="required">{error}</p> : null}
          <div className="logInBtn">
            {changesSaved ? (
              <Button
                text="EMAIL HAS BEEN SENT"
                newClassName="changesSavedButton"
              />
            ) : (
              <Button text="SEND ME NOW" newClassName="customButton" />
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgetPassword;
