import React, { useState } from "react";
import classes from "./settings-page.module.css";
import { FaCamera } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";

const SettingsPage = () => {
  const [openBgPanel, setOpenBgPanel] = useState(false);

  const colors = [
    "linear-gradient(to right, #1a2980, #26d0ce)",
    "linear-gradient(to right, #f09819, #edde5d)",
    "linear-gradient(to right, #3ca55c, #b5ac49)",
    "linear-gradient(to right, #da22ff, #9733ee)",
    "linear-gradient(to right, #d31027, #ea384d)",
  ];

  const [bgColor, setBgColor] = useState(
    "linear-gradient(to right, #1a2980, #26d0ce)"
  );

  return (
    <div className={classes.page_data}>
      <div className={classes.settings_panel}>
        <div className={classes.bg_div}>
          <div className={classes.bg_color} style={{ background: bgColor }}>
            <div className={classes.open_panel} onClick={() => setOpenBgPanel(!openBgPanel)}>
              <FaPaintbrush />
            </div>
            {openBgPanel && (
              <div className={classes.select_div}>
                {colors.map((el) => {
                  return (
                    <div
                      onClick={() => setBgColor(el)}
                      className={classes.bg_color_div}
                      style={{ background: el }}
                    ></div>
                  );
                })}
              </div>
            )}
            <img
              src="https://media.istockphoto.com/id/1573329496/photo/multi-layers-color-texture-3d-papercut-layers-in-gradient-vector-banner-carving-art-cover.webp?b=1&s=170667a&w=0&k=20&c=fw4EudwOH6cg8roUz_A4ARgGIlz6na94y6TVUUzYz6k="
              height={"120px"}
              width={"120px"}
              className={classes.user_img}
            />
          </div>
        </div>
        <div className={classes.settings_data}>
          
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
