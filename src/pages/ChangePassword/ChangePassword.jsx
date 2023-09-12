import "./ChangePassword.css";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import { useState } from "react";
import Cookies from "js-cookie";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const changePassword = (data) => {
    // console.log(data);
    if (data.newPassword === data.repeatPassword) {
      setError("");
      delete data.repeatPassword;

      let config = {
        headers: {
          Authorization: "Bearer " + Cookies.get("user_token"),
        },
      };

      api
        .post("/users/change-password", data, config)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    } else {
      setError("This password is different from the new password");
    }
  };

  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit(changePassword)}>
        <label>Current Password</label>
        <input
          {...register("password", {
            required: "The current password is required",
          })}
          aria-invalid={errors.password ? "true" : "false"}
          type="password"
          className="registerPassword"
          placeholder="Current Password"
        />
        {errors.password && (
          <p className="required">{errors.password?.message}</p>
        )}
        <label>New Password</label>
        <input
          {...register("newPassword", {
            required: "A new password is required",
          })}
          aria-invalid={errors.newPassword ? "true" : "false"}
          type="password"
          className="registerPassword"
          placeholder="New Password"
        />
        {errors.newPassword && (
          <p className="required">{errors.newPassword?.message}</p>
        )}
        <label>Repeat New Password</label>
        <input
          {...register("repeatPassword", {
            required: "Repeat the new password is required",
          })}
          aria-invalid={errors.repeatPassword ? "true" : "false"}
          type="password"
          className="registerPassword"
          placeholder="Repeat New Password"
        />
        {errors.repeatPassword && (
          <p className="required">{errors.repeatPassword?.message}</p>
        )}
        {error !== "" ? <p className="required">{error}</p> : null}
        <div className="logInBtn">
          <Button text="SAVE CHANGES" newClassName="customButton" />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
