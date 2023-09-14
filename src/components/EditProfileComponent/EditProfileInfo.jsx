import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import "./EditProfileInfo.css";

function EditProfileInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editUser = (data) => {
    console.log(data);
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
              Upload profile image
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
