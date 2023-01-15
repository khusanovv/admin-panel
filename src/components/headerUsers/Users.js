import React from "react";
import "./Users.css";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupIcon from "@mui/icons-material/Group";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

const Users = () => {
  return (
    <div>
      <div className="users">
        <div className="users-cart">
          <div className="cart-item cart-item__session">
            <div className="item-info">
              <h4>Session </h4>
              <h3>
                21,459 <span>(+29%)</span>
              </h3>
              <p>Total Users</p>
            </div>
            <div className="item-person">
              <Avatar
                sx={{ bgcolor: "#e7e7ff", color: "#696cff" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <PersonIcon />
              </Avatar>
            </div>
          </div>
          <div className="cart-item cart-item__paid">
            <div className="item-info">
              <h4>Paid Users </h4>
              <h3>
                4,567 <span>(+18%)</span>
              </h3>
              <p>Last week analytics</p>
            </div>
            <div className="item-person">
              <Avatar
                sx={{ bgcolor: "#ffe0db", color: "#ff3e1d" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <PersonAddAlt1Icon />
              </Avatar>
            </div>
          </div>
          <div className="cart-item cart-item__active">
            <div className="item-info">
              <h4>Active Users</h4>
              <h3>
                19,860 <span>(+29%)</span>
              </h3>
              <p>Last week analytics</p>
            </div>
            <div className="item-person">
              <Avatar
                sx={{ bgcolor: "#e8fadf", color: "#71dd37" }}
                alt="Remy Sharp"
              >
                <GroupIcon />
              </Avatar>
            </div>
          </div>
          <div className="cart-item cart-item__pending">
            <div className="item-info">
              <h4>Pending Users</h4>
              <h3>
                237
                <span> (+49%)</span>
              </h3>
              <p>Last week analytics</p>
            </div>
            <div className="item-person">
              <Avatar
                sx={{ bgcolor: "#fff2d6", color: "#ffab00" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <RecordVoiceOverIcon />
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
