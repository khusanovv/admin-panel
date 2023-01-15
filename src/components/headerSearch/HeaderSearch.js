import React from "react";
import "./HeaderSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import LogoA from "../../img/peson1.jpg";
import Usa from "../../img/usa.png";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const HeaderSearch = () => {
  return (
    <div>
      <div className="search">
        <div className="search-input">
          <SearchIcon style={{ color: "#00000080" }} />
          <input type="text" placeholder="Search(ctrl+/)" />
        </div>
        <div className="search-link">
          <ul className="link">
            <li className="link-items">
              <Avatar
                sx={{ width: 22.8, height: 22.8 }}
                alt="Remy Sharp"
                src={Usa}
              />
            </li>
            <li className="link-items">
              {/* <Avatar sx={{ width: 34, height: 34 }} alt="Remy Sharp" /> */}
              <DarkModeOutlinedIcon
                sx={{ width: 24.8, height: 24.8, color: "#707070;" }}
              />
            </li>
            <li className="link-items">
              <WidgetsOutlinedIcon
                sx={{ width: 24.8, height: 24.8, color: "#707070;" }}
              />
            </li>
            <li className="link-items">
              <NotificationsNoneOutlinedIcon
                sx={{ width: 24.8, height: 24.8, color: "#707070;" }}
              />
            </li>
            <li className="link-items">
              <Avatar
                sx={{ width: 26.8, height: 26.8 }}
                alt="Remy Sharp"
                src={LogoA}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
