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
import { FaMoon } from "react-icons/fa";
import Themes from "../themes/Themes";
import { Link } from "react-router-dom";
import { FaPalette } from "react-icons/fa6";

const Navbar = ({ onExit }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);

  return (
    <>
      <header>
        <Link to={"/"} className={classes.header_name}>
          <p className={classes.header_name}>Magical Education</p>
        </Link>
        <div className={classes.header_btns}>
          {/* <div className={classes.header_divs} style={{opacity: '50%', cursor: 'default' }}>
            <AiFillMessage  
              className={classes.header_icon}
              style={{fontSize: '23px'}}
            />
          </div> */}
          <div
            className={classes.header_divs}
            onClick={() => {
              setShowThemeSwitcher(false);
              setShowNotifications(!showNotifications);
            }}
          >
            <FaBell className={classes.header_icon} />
            <div className={classes.have_notification}></div>
          </div>
          <div
            className={classes.header_divs}
            onClick={() => {
              setShowNotifications(false);
              setShowThemeSwitcher(!showThemeSwitcher);
            }}
          >
            <FaPalette className={classes.header_icon} />
          </div>
          <Link to={"./settings"}>
            <div className={classes.header_divs}>
              <AiFillSetting
                className={classes.header_icon}
                style={{ fontSize: "23px" }}
              />
            </div>
          </Link>
        </div>
      </header>
      {showNotifications && (
        <div className={classes.not_panel}>
          <div className={classes.notifications}>
            <div
              style={{ display: "grid", placeItems: "center", height: "100%" }}
            >
              <p>Notifications</p>
            </div>
          </div>
        </div>
      )}
      {showThemeSwitcher && (
        <div className={classes.not_panel}>
          <div className={classes.notifications}>
            <Themes />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
