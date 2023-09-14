import { useState } from "react";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import EditProfileInfo from "../../components/EditProfileComponent/EditProfileInfo";
import { Link } from "react-router-dom";
import "./EditProfile.css";

function EditProfile() {
  const [removeStyle, setRemoveStyle] = useState(false);
  const [putStyle, setPutStyle] = useState(true);

  const handlePutClick = () => {
    setPutStyle(true);
    setRemoveStyle(false);
  };

  const handleRemoveClick = () => {
    setRemoveStyle(true);
    setPutStyle(false);
  };

  return (
    <div>
      <div className="editContainer">
        <div>
          <Link to="/profile">
            <button className="editNavBtn">
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
              <p>Profile</p>
            </button>
          </Link>
        </div>

        <div className="editContent">
          <div className="buttonsContainer">
            <button
              className={`btn ${putStyle ? "btnActive" : "btnDisabled"}`}
              onClick={handlePutClick}
            >
              Edit Profile
            </button>
            <button
              className={`btn ${removeStyle ? "btnActive" : "btnDisabled"}`}
              onClick={handleRemoveClick}
            >
              Change Password
            </button>
          </div>

          <div className="line"></div>

          <div className="details_Container">
            {removeStyle && <ChangePassword />}
            {putStyle && <EditProfileInfo />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
