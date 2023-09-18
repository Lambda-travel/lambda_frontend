import * as yup from "yup";

const editProfileSchema = yup.object().shape({
  email: yup.string().email("Invalid Email address"),
  image: yup
    .mixed()
    .text("fileType", "invalid file format,please use jpg,gif or png"),
});

export default editProfileSchema;
