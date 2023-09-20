import * as yup from "yup"

const userSchema = yup.object().shape({
    email:yup.string().email('Invalid email address').required('Email is required'),
    password:yup.string().required('Password is required').min(8,"Password must have at least 8 characters ").matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!_'])(?!.*\s).{8,}$/,"Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character")
})

export default userSchema