import { useContext } from "react";
import Cookies from "js-cookie";
import UserContext from "../../contexts/UserContext";
import TripsContext from "../../contexts/TripsContext";
import AuthContext from "../../contexts/AuthContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./EditProfile.css";

function EditProfile() {
  const { setUser } = useContext(UserContext);
  const { setTrips } = useContext(TripsContext);
  const { setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const logOut = () => {
    Cookies.remove("user_token");
    setTrips([]);
    setUser({});
    setIsAuthenticated(false);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <div className="editContainer">
        <div className="editContent">
          <div className="buttonsContainer">
            <Link to="/profile-info/edit">
              <button
                className={`btn 
                ${
                  location.pathname === "/profile-info/edit"
                    ? "btnActive"
                    : "btnDisabled"
                }
              `}
              >
                Edit Profile
              </button>
            </Link>
            <Link to="/profile-info/change-password">
              <button
                className={`btn 
                ${
                  location.pathname === "/profile-info/change-password"
                    ? "btnActive"
                    : "btnDisabled"
                }
              `}
              >
                Change Password
              </button>
            </Link>
          </div>

          <div className="line"></div>

          <div className="details_Container">
            <Outlet />
          <div className="logOutButton">
            <button onClick={logOut} className="registerButton">
              Log Out
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
