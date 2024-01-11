import React, { useState } from "react";
import classes from "./settings-page.module.css";
import { FaCamera } from "react-icons/fa6";

const SettingsPage = () => {
  const [bgColor, setBgColor] = useState("orange");

  return (
    <div className={classes.page_data}>
      <div className={classes.settings_panel}>
        <div className={classes.bg_color} style={{ background: `${bgColor}` }}>
          <input type="file" style={{ display: "none" }} />
          <img
            src="https://media.istockphoto.com/id/1573329496/photo/multi-layers-color-texture-3d-papercut-layers-in-gradient-vector-banner-carving-art-cover.webp?b=1&s=170667a&w=0&k=20&c=fw4EudwOH6cg8roUz_A4ARgGIlz6na94y6TVUUzYz6k="
            height={"120px"}
            width={"120px"}
            className={classes.user_img}
          />
          <div className={classes.select_img}>
            <FaCamera />
          </div>
        </div>
        {/* <div className={classes.inpt_panel}>
          <p>Brief information:</p>
          <textarea placeholder="Bio" className={classes.inpt}/>
        </div> */}
        <input
          type="color"
          value={bgColor}
          onChange={(evn) => setBgColor(evn.target.value)}
        />
      </div>
    </div>
  );
};

export default SettingsPage;
