import React from "react";
import Navbar from "../../components/navbar/Navbar";
import UserPanel from "../../components/user-panel/UserPanel";

const DashboardPage = ({ onExit }) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{width: '100%'}}>
        <UserPanel />
      </div>
    </div>
  );
};

export default DashboardPage;
