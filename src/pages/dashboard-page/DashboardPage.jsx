import React from "react";
import Navbar from "../../components/navbar/Navbar";
import UserPanel from "../../components/user-panel/UserPanel";
import MyTasks from "../../components/my-tasks/MyTasks";
import classes from "./dashboard-page.module.css";

const DashboardPage = ({ onExit }) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div className={classes.page_data}>
        <UserPanel />
        <MyTasks />
      </div>
    </div>
  );
};

export default DashboardPage;
