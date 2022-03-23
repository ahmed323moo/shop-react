import React from "react";
import "./Button.scss";

const buttonTypes = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, buttonType }) {
  return (
    <button className={`button-container ${buttonTypes[buttonType]}`}>
      {children}
    </button>
  );
}

export default Button;
