import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./SignIn.scss";

import { createUserDocumentFromAuth } from "../../firebase/Firebase";
import {
  signInWithGooglPopup,
  signInAuthWithEmailAndPassword,
} from "../../firebase/Firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglPopup();
    await createUserDocumentFromAuth(user);
  };

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
    } catch (e) {}
  };

  return (
    <div className="sign-up-container">
      <h2>Already have anaccount?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button buttonType="inverted">Sign In</Button>
          <Button buttonType="inverted">Google Sign in</Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
