import React from "react";
import classes from "./signin-form.module.css";

const SignInForm = () => {
  return (
    <form className={classes.signin_form}>
      <div>
        <h2>Welcome Back!</h2>
        <p>Please Sign In to Access Your Account</p>
      </div>
      <input
        type="email"
        placeholder="Type your email..."
        className={classes.signin_input}
      />
      <input
        type="password"
        placeholder="Type your password..."
        className={classes.signin_input}
      />
      <button className={classes.signin_button}>Sign in</button>
    </form>
  );
};

export default SignInForm;
