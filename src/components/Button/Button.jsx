import "./Button.css";

function Button({ text, newClassName }) {
  return (
    <>
      <button className={`${newClassName}`}>{text}</button>
    </>
  );
}

export default Button;
