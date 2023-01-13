import React from "react";
import "./HeaderSearch.css";
import SearchIcon from "@mui/icons-material/Search";

const HeaderSearch = () => {
  return (
    <div>
      <div className="search">
        <div className="search-input">
          <SearchIcon />
          <input type="text" placeholder="Search(ctrl+/)" />
        </div>
        <div className="search-link">
          <ul className="link">
            <li className="link_items">Slaom</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
