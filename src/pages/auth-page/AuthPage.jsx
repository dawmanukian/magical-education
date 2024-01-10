import React from "react";
import SignInForm from "../../components/signin-form/SignInForm";
import classes from "./auth-page.module.css";

const AuthPage = ({onSubmit}) => {
  return (
    <div className={classes.auth_page}>
      <div className={classes.panels}>
        <div className={classes.info_panel}>
          <h1 style={{ color: "#0076FF" }}>Magical Education</h1>
          <p>The Platform for Magical Company's Students</p>
          <p>Platform for studying, discovering and creating.</p>
        </div>
        <SignInForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

export default AuthPage;
