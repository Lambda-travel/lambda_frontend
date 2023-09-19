/* eslint-disable react/prop-types */
import "./Button.css";

function Button({ text, newClassName }) {
  return (
    <>
      <button type="submit" className={`${newClassName}`}>{text}</button>
    </>
  );
}

export default Button;
