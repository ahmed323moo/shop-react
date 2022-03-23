import React from "react";
import "./Auth.scss";
import {
  signInWithGooglPopup,
  createUserDocumentFromAuth,
} from "../../firebase/Firebase";

import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";

function Auth() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglPopup();
    await createUserDocumentFromAuth(response.user);
  };
  return (
    <div className="auth-container">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
}

export default Auth;
