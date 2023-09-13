import { useState } from "react";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import EditProfileInfo from "../../components/EditProfileComponent/EditProfileInfo";
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
        <nav>
          <ul>
            <li>Profile</li>
          </ul>
        </nav>

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
