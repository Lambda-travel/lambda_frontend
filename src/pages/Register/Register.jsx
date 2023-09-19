import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Register.css";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "../../schemas/user-schema";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const createNewUser = (data) => {
    api
      .post("/users/register", data)
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
          setError("");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("This user name or email are already in use");
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

      <div className="registerForm">
        <div className="registerTitle">
          <h2>Register</h2>
        </div>
        <form onSubmit={handleSubmit(createNewUser)}>
          <input
            {...register("first_name", { required: "A name is required" })}
            aria-invalid={errors.first_name ? "true" : "false"}
            type="text"
            className="registerName"
            placeholder="First Name"
          />
          {errors.first_name && (
            <p className="required">{errors.first_name?.message}</p>
          )}
          <input
            {...register("last_name", { required: "A last name is required" })}
            aria-invalid={errors.last_name ? "true" : "false"}
            type="text"
            className="registerName"
            placeholder="Last Name"
          />
          {errors.last_name && (
            <p className="required">{errors.last_name?.message}</p>
          )}
          <input
            {...register("user_name", { required: "A user name is required" })}
            aria-invalid={errors.user_name ? "true" : "false"}
            type="text"
            className="registerName"
            placeholder="User Name"
          />
          {errors.user_name && (
            <p className="required">{errors.user_name?.message}</p>
          )}
          <input
            {...register("email", { required: "An email is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            className="registerEmail"
            placeholder="Email"
          />
          {errors.email && <p className="required">{errors.email?.message}</p>}
          <input
            {...register("password", { required: "A password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
            type="password"
            className="registerPassword"
            placeholder="Password"
          />
          {errors.password && (
            <p className="required">{errors.password?.message}</p>
          )}
          {error !== "" ? <p className="required">{error}</p> : null}
          <div className="nextBtn">
            <Button text="NEXT" newClassName="customButton" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
