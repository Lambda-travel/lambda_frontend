import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../services/firebase";
import { v4 as uuid } from "uuid";
import api from "../../api/api";
import UserContext from "../../contexts/UserContext";
import "./EditProfileInfo.css";

function EditProfileInfo() {
  const { user, setUser } = useContext(UserContext);

  const [changes, setChanges] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit,watch } = useForm();
  const imageUpload = watch(["profile_image_url"]);
  const editUser = (data) => {
    setLoading(true);
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

    if (Object.keys(data).length > 0) {
      if (data.profile_image_url !== undefined && data.profile_image_url[0]) {
        const destinationImage = data.profile_image_url[0];
        const imageRef = ref(storage, `${uuid()}-trip-image`);

        uploadBytes(imageRef, destinationImage)
          .then(() => {
            getDownloadURL(imageRef)
              .then((urlImage) => {
                data.profile_image_url = urlImage;
                localStorage.setItem("profile_image_url", urlImage);
                api
                  .put(`/users/edit_user/${user.id}`, data)
                  .then(() => {
                    setChanges(true);
                    setUser({ ...user, ...data });
                    setLoading(false);
                  })
                  .catch((error) => console.error(error));
              })
              .catch((error) => console.error(error));
          })
          .catch((error) => console.error(error));
      } else {
        api
          .put(`/users/edit_user/${user.id}`, data)
          .then(() => {
            setChanges(true);
            setUser({ ...user, ...data });
            setLoading(false);
          })
          .catch((error) => console.error(error));
      }
    }

    !loading &&
      setTimeout(() => {
        navigate("/profile/trip-plans");
      }, 2000);
  };

  return (
    <div>
      <div className="formContainer">
        <form onSubmit={handleSubmit(editUser)}>
            <label className="label-edit-profile"  htmlFor="firstname">Fist Name:</label>
            <input
              id="firstname"
              type="text"
              placeholder={user.first_name}
              {...register("first_name")}
              className="inputs"
            />
            <label className="label-edit-profile" htmlFor="lastname">Last Name:</label>
            <input
              id="lastname"
              type="text"
              placeholder={user.last_name}
              {...register("last_name")}
              className="inputs"
            />
            <label className="label-edit-profile" htmlFor="username">UserName:</label>
            <input
              id="username"
              type="text"
              placeholder={user.user_name}
              {...register("user_name")}
              className="inputs"
            />
          <div className="upload">
            <label htmlFor="image" className="label-upload">
            <span className="text-uploadImage">
          {imageUpload[0] && imageUpload[0][0]
          ? imageUpload[0][0].name
          : "Upload a new profile Image"}
          </span>
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
              type="submit"
              text="CHANGES HAVE BEEN SAVED"
              newClassName="doneButton editBtn"
            />
          ) : (
            <Button
              type="submit"
              text="SAVE CHANGES"
              newClassName="editButton editBtn"
            />
          )}
        </form>
        <Link to="/profile/trip-plans">
          {changes ? (
            <Button text="CANCEL CHANGES" newClassName="notShow" />
          ) : (
            <Button
              text="CANCEL CHANGES"
              newClassName="cancelledButton editBtn"
            />
          )}
        </Link>
      </div>
    </div>
  );
}

export default EditProfileInfo;
