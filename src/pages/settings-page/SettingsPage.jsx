import React, { useState } from "react";
import classes from "./settings-page.module.css";
import { FaCamera } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const SettingsPage = () => {
  const [bgColor, setBgColor] = useState("linear-gradient(to right, #1a2980, #26d0ce)");

  return (
    <div className={classes.page_data}>
      <div className={classes.settings_panel}>
        <div className={classes.bg_div}>
          <div
            className={classes.bg_color}
            style={{background: bgColor}}
          >
            <img
              src="https://media.istockphoto.com/id/1573329496/photo/multi-layers-color-texture-3d-papercut-layers-in-gradient-vector-banner-carving-art-cover.webp?b=1&s=170667a&w=0&k=20&c=fw4EudwOH6cg8roUz_A4ARgGIlz6na94y6TVUUzYz6k="
              height={"120px"}
              width={"120px"}
              className={classes.user_img}
            />
          </div>
        </div>
        <div className={classes.settings_data}>
          {/* <div className={classes.inpt_panel}>
            <span>
              <FaUser />
              Bio
            </span>
            <textarea placeholder="Bio" className={classes.inpt} />
          </div> */}
        </div>
        <div className={classes.select_div}>
            <div onClick={() => setBgColor('linear-gradient(to right, #1a2980, #26d0ce)')} className={classes.bg_color_div} style={{background: 'linear-gradient(to right, #1a2980, #26d0ce)'}}></div>
            <div onClick={() => setBgColor('linear-gradient(to right, #f09819, #edde5d)')} className={classes.bg_color_div} style={{background: 'linear-gradient(to right, #f09819, #edde5d)'}}></div>
            <div onClick={() => setBgColor('linear-gradient(to right, #3ca55c, #b5ac49)')} className={classes.bg_color_div} style={{background: 'linear-gradient(to right, #3ca55c, #b5ac49)'}}></div>
            <div onClick={() => setBgColor('linear-gradient(to right, #da22ff, #9733ee)')} className={classes.bg_color_div} style={{background: 'linear-gradient(to right, #da22ff, #9733ee)'}}></div>
            <div onClick={() => setBgColor('linear-gradient(to right, #d31027, #ea384d)')} className={classes.bg_color_div} style={{background: 'linear-gradient(to right, #d31027, #ea384d)'}}></div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
