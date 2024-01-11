import React from "react";
import classes from "./themes.module.css";
import { FaCheckCircle } from "react-icons/fa";

const Themes = () => {
  return (
    <div className={classes.themes_panel}>
      <button className={classes.themes_btn}>Dark mode</button>
      <button className={classes.themes_btn}>
        Light mode
        <div className={classes.line_div}></div>
      </button>
    </div>
  );
};

export default Themes;
