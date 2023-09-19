import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../services/firebase";
import { v4 as uuid } from "uuid";
import "./EditProfileInfo.css";
import api from "../../api/api";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditProfileInfo() {
  const [changes, setChanges] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const user_id = user.id;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editUser = (data) => {
    if (data.first_name == "") {
      delete data.first_name;
    }
    if (data.last_name == "") {
      delete data.last_name;
    }
    if (data.user_name == "") {
      delete data.user_name;
    }
    if (data.profile_image_url.length == 0) {
      delete data.profile_image_url;
    }

    if (
      data.profile_image_url !== undefined &&
      data.profile_image_url[0].name
    ) {
      const imagePath = data.profile_image_url[0];
      const imageRef = ref(storage, `${imagePath + uuid()}-profileimage`);

      uploadBytes(imageRef, imagePath).then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            const newUserData = {
              ...user,
              profile_image_url: url,
            };
            setUser(newUserData);
            localStorage.setItem("profile_image_url", url);
            api.put(`/users/edit_user/${user_id}`, data).then((response) => {
              if (response.status === 200) {
                setChanges(false);
                setTimeout(() => {
                  navigate("/profile");
                }, 400);
              }
            });
            // console.log(url);
            console.log(data);
          })
          .catch((err) => console.error(err));
      });
    }
    // else {
    //   setUser((prevUser) => ({ ...prevUser, ...data }));
    // }
  };

  return (
    <div>
      <div className="formContainer">
        <form onSubmit={handleSubmit(editUser)}>
          <div>
            <label htmlFor="firstname"></label>
            <input
              id="firstname"
              type="text"
              placeholder={user.first_name}
              {...register("first_name")}
              className="inputs"
            />
          </div>
          <div>
            <label htmlFor="lastname"></label>
            <input
              id="lastname"
              type="text"
              placeholder={user.last_name}
              {...register("last_name")}
              className="inputs"
            />
          </div>
          <div>
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              placeholder={user.user_name}
              {...register("user_name")}
              className="inputs"
            />
          </div>
          <div className="upload">
            <label htmlFor="image" className="label">
              Upload new profile image
              <input
                id="image"
                type="file"
                accept="image/*"
                placeholder="Upload a new Profile picture"
                {...register("profile_image_url")}
                className="inputs"
              />
            </label>
          </div>
          {changes ? (
            <Button
              // type="submit"
              text="SAVE CHANGES"
              newClassName="editButton editBtn"
            />
          ) : (
            <Button
              // type="submit"
              text="CHANGES SAVED"
              newClassName="doneButton editBtn"
            />
          )}
        </form>
        <Link to="/profile">
          {changes ? (
            <Button
              text="CANCEL CHANGES"
              newClassName="cancelledButton editBtn"
            />
          ) : (
            <Button
              text="CANCEL CHANGES"
              newClassName="cancelledButtonExit editBtn"
            />
          )}
        </Link>
      </div>
    </div>
  );
}

export default EditProfileInfo;
