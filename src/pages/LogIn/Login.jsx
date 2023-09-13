import "./Login.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useState } from "react";

function Login() {
  const { setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const navigate = useNavigate(); // navigate('/home')

  const logInUser = (data) => {
    api
      .post("/users/login", data)
      .then((response) => {
        if (response.status === 200) {
          Cookies.set("user_token", response.data.token);
          let config = {
            headers: {
              Authorization: "Bearer " + response.data.token,
            },
          };
          api
            .get("/users", config)
            .then((response) => {
              if (response.status === 200) {
                setUser("");
                navigate("/home");
              }
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => {
        console.error(error);
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
      <div className="loginForm">
        <div className="loginTitle">
          <h2>Log In</h2>
        </div>
        <form onSubmit={handleSubmit(logInUser)}>
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
          <Link to="/resetpassword" className="forgetPass">
            <div>
              <button>Forget Password?</button>
            </div>
          </Link>
          <div className="logInBtn">
            <Button newClassName="customButton" text="LOG IN" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
