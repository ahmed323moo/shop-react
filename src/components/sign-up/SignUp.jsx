import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./SignUp.scss";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../firebase/Firebase";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("The password doesn't match ");
    }
    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      console.log(user);
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have anaccount?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />
        <FormInput
          label="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        <Button type="submit" buttonType="inverted">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
