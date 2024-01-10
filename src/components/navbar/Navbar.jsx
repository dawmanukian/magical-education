import React, { useState } from "react";
import classes from "./navbar.module.css";
import { FaBell } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { FaClock } from "react-icons/fa6";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { BsCloudFill } from "react-icons/bs";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

const Navbar = ({ onExit }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header>
        <p className={classes.header_name}>Magical Education</p>
        <div className={classes.header_btns}>
          {/* <div className={classes.header_divs} style={{opacity: '50%', cursor: 'default' }}>
            <AiFillMessage  
              className={classes.header_icon}
              style={{fontSize: '23px'}}
            />
          </div> */}
          <div
            className={classes.header_divs}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FaBell className={classes.header_icon} />
            <div className={classes.have_notification}></div>
          </div>
          <div className={classes.header_divs} onClick={() => onExit()}>
            <AiFillSetting
              className={classes.header_icon}
              style={{ fontSize: "23px" }}
            />
          </div>
        </div>
      </header>
      {showNotifications && (
        <div className={classes.not_panel}>
          <div className={classes.notifications}>
            <div
              style={{ display: "grid", placeItems: "center", height: "100%" }}
            >
              <p>You have nothing new !</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
