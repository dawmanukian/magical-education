import React from "react";
import classes from "./user-panel.module.css";

const UserPanel = () => {
  return (
    <div className={classes.user_panel}>
      <div className={classes.user_data}>
        <div style={{ height: '200px'}}>
          <div className={classes.background_color}>
            <img
              src="https://media.istockphoto.com/id/1573329496/photo/multi-layers-color-texture-3d-papercut-layers-in-gradient-vector-banner-carving-art-cover.webp?b=1&s=170667a&w=0&k=20&c=fw4EudwOH6cg8roUz_A4ARgGIlz6na94y6TVUUzYz6k="
              height={"140px"}
              width={"140px"}
            />
          </div>
        </div>
        <div>
          <p className={classes.user_name}>Davit Manukyan</p>
          <p className={classes.user_email}>thedavitmanukyan@gmail.com</p>
          <p className={classes.user_status}>Student</p>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
