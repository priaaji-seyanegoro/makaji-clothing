import React from "react";

import SignIn from "../../components/signin/signin-component";
import SignUp from "../../components/signup/signup-component";
import "./signIn-and-signUp-style.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
