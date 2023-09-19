import "./ChangePassword.css";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import passwordSchema from "../../schemas/password-schema";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // navigate('/home')
  const [changesSaved, setChangesSaved] = useState(false);

  const changePassword = (data) => {
    // console.log(data);

    //! VALIDATION OF PASSWORDS USING YUP

    if (data.password !== data.newPassword) {
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
          .then((response) => {
            if (response.status === 200) {
              setChangesSaved(true);
              setTimeout(() => {
                navigate("/profile");
              }, 3000);
            }
          })
          .catch((error) => {
            console.error(error);
            setError("CURRENT PASSWORD is invalid");
          });
      } else {
        setError("The repeated password should be the same of new password.");
      }
    } else {
      console.log("SAME PASSWORD");
      setError("The new password should be different of the current password.");
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
          className="registerPassword inputs"
          placeholder="Current Password"
        />
        {errors.password && (
          <p className="required">{errors.password?.message}</p>
        )}
        {/* {error === "Current password is invalid" && (
          <p className="required">{error}</p>
        )} */}
        <label>New Password</label>
        <input
          {...register("newPassword", {
            required: "A new password is required",
          })}
          aria-invalid={errors.newPassword ? "true" : "false"}
          type="password"
          className="registerPassword inputs"
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
          className="registerPassword inputs"
          placeholder="Repeat New Password"
        />
        {errors.repeatPassword && (
          <p className="required">{errors.repeatPassword?.message}</p>
        )}
        {error !== "" ? <p className="required">{error}</p> : null}
        <div className="logInBtn">
          {changesSaved ? (
            <Button
              text="CHANGES HAVE BEEN SAVED"
              newClassName="changesSavedButton"
            />
          ) : (
            <Button text="SAVE CHANGES" newClassName="customButton" />
          )}
        </div>
        <Link to="/profile">
          <div className="logInBtn">
            {changesSaved ? (
              <Button text="CANCEL CHANGES" newClassName="notShow" />
            ) : (
              <Button text="CANCEL CHANGES" newClassName="abortChangesButton" />
            )}
          </div>
        </Link>
      </form>
    </div>
  );
}

export default ChangePassword;
