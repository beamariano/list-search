import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-content-box">
        <div className="header-text">
          <h1>Hospitals</h1>
        </div>
        <div className="add-icon">
          <Link to="/add">
            <img
              src="https://img.icons8.com/ios/50/000000/add-list.png"
              alt="add new hospital"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
