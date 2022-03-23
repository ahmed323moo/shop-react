import React from "react";
import "./FormInput.scss";

function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
      <input {...otherProps} className="form-input" />
    </div>
  );
}

export default FormInput;
