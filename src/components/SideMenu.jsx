import React from "react";
import { Link } from "react-router-dom";

import pogsLogo from "../assets/pogs-logo.png";

//import Bootstrap element

const SideMenu = () => {
  return (
    <div className="side-menu left">
      <div className="side-menu-top">
        {/* logo */}
        <div className="user-logo-box">
          <img src={pogsLogo} className="user-logo" alt="" />
        </div>

        {/* menu links */}
        <div className="menu-links-box">
          <Link to="/home" className="nav-link">
            <img
              src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/000000/external-test-tube-science-those-icons-lineal-those-icons.png"
              alt=""
            />
            Home
          </Link>
          <Link to="/hospitals" className="nav-link" id="hospitals-link">
            <img
              src="https://img.icons8.com/ios/50/000000/microscope.png"
              alt=""
            />
            Hospitals
          </Link>
          <Link to="/submissions" className="nav-link">
            <img
              src="https://img.icons8.com/ios/50/000000/upload--v1.png"
              alt=""
            />
            Submissions
          </Link>
          <Link to="/reports" className="nav-link">
            <img
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-analysis-digital-marketing-flatart-icons-outline-flatarticons-1.png"
              alt=""
            />
            Reports
          </Link>
          <Link to="/custom-charts" className="nav-link">
            <img
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-chart-corporate-development-and-business-management-flatart-icons-outline-flatarticons.png"
              alt=""
            />
            Custom Charts
          </Link>
          <Link to="/users" className="nav-link">
            <img
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-chart-corporate-development-and-business-management-flatart-icons-outline-flatarticons.png"
              alt=""
            />
            Users
          </Link>
        </div>
      </div>

      <div className="side-menu-bottom">
        <Link to="/logout" className="nav-link sign-out-box">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/logout-rounded.png"
            alt=""
          />
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;

// icons are from https://icons8.com/
