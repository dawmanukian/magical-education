import React from "react";
import classes from "./my-tasks.module.css";

const MyTasks = () => {
  return (
    <div className={classes.my_tasks}>
      <div className={classes.tasks_panel}>
        <div className={classes.tasks_div}>
          <div className={classes.line_div} style={{background: '#8833FFFF'}}></div>
          <p>TO DO</p>
        </div>
        <div className={classes.tasks_div}>
          <div className={classes.line_div} style={{background: '#33BFFFFF'}}></div>
          <p>IN WORK</p>
        </div>
        <div className={classes.tasks_div}>
          <div className={classes.line_div} style={{background: 'green'}}></div>
          <p>DONE</p>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
