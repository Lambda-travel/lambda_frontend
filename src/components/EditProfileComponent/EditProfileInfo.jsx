import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../services/firebase";
import { v4 as uuid } from "uuid";
import "./EditProfileInfo.css";
import api from "../../api/api";

function EditProfileInfo() {
  // const getUser = () => {
  //   api.get("/users/id").then();
  // };
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
      const imageRef = ref(storage, `${uuid()}-profile-img`);
      uploadBytes(imageRef, imagePath)
      .then(() => {
        getDownloadURL(imageRef)
        .then((url) => {
          console.log(url)
        });
      });
    }
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
              placeholder="First name"
              {...register("first_name")}
              className="inputs"
            />
          </div>
          <div>
            <label htmlFor="lastname"></label>
            <input
              id="lastname"
              type="text"
              placeholder="Last name"
              {...register("last_name")}
              className="inputs"
            />
          </div>
          <div>
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              placeholder="user name"
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

          <Button
            type="submit"
            text="SAVE CHANGES"
            newClassName="editButton editBtn"
          />
        </form>
        <Button text="CANCEL CHANGES" newClassName="cancelledButton editBtn" />
      </div>
    </div>
  );
}

export default EditProfileInfo;
