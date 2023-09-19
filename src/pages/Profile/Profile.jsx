import { Link, useLocation, Outlet } from "react-router-dom";
import editIcon from "../../assets/Group 1689.svg";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Avatar from "@mui/material/Avatar";

import "./Profile.css";

function Profile() {
  const { user } = useContext(UserContext);

  const location = useLocation();

  return (
    <div className="bigContainer">
      <div className="container-profile">
        {user ? (
          <div className="profileInfo">
            <div className="profileImage">
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={user.profile_image_url ? user.profile_image_url : null}
              />
              <Link to="/edit-profile">
                <img src={editIcon} alt="edit icon" className="editIcon" />
              </Link>
            </div>
            <div className="profileInfo">
              <h1 className="profileName">
                {user.first_name} {user.last_name}
              </h1>
              <p className="userName">{`@${user.user_name}`}</p>
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}

        <div className="tripsAndGuidesContainer">
          <div className="tripsPlusGuides">
            <Link to="/profile/trip-plans">
              <button
                className={`tripPlans 
                ${
                  location.pathname === "/profile/trip-plans"
                    ? "trip__And__Active"
                    : "trip__And__Disabled"
                }
              `}
              >
                Trip plans
              </button>
            </Link>
            <Link to="/profile/guides">
              <button
                className={`tripPlans 
                ${
                  location.pathname === "/profile/guides"
                    ? "trip__And__Active"
                    : "trip__And__Disabled"
                }
              `}
              >
                Guides
              </button>
            </Link>
          </div>
          <div className="bottomLine"></div>

          <div className="tripPlansContent">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
