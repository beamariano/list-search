import React from "react";
import { Link } from "react-router-dom";

import pogsLogo from "../assets/pogs-logo.png";
import seriousmdLogo from "../assets/seriousmd-logo.png";

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
          <div className="nav-link">
            <img
              src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/000000/external-test-tube-science-those-icons-lineal-those-icons.png"
              alt=""
            />
            <Link to="/home">Home</Link>
          </div>
          <div className="nav-link">
            <img
              src="https://img.icons8.com/ios/50/000000/microscope.png"
              alt=""
            />
            <Link to="/hospitals"> Hospitals</Link>
          </div>
          <div className="nav-link">
            <img
              src="https://img.icons8.com/ios/50/000000/upload--v1.png"
              alt=""
            />
            <Link to="/submissions">Submissions</Link>
          </div>
          <div className="nav-link">
            <img
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-analysis-digital-marketing-flatart-icons-outline-flatarticons-1.png"
              alt=""
            />
            <Link to="/reports">Reports</Link>
          </div>
          <div className="nav-link">
            <img
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-chart-corporate-development-and-business-management-flatart-icons-outline-flatarticons.png"
              alt=""
            />
            <Link to="/custom-charts">Custom Charts</Link>
          </div>
          <div className="nav-link">
            <img
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-chart-corporate-development-and-business-management-flatart-icons-outline-flatarticons.png"
              alt=""
            />
            <Link to="/users">Users</Link>
          </div>
        </div>
      </div>

      <div className="side-menu-bottom">
        <div className="sign-out-box nav-link">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/logout-rounded.png"
            alt=""
          />{" "}
          <Link to="/logout">Sign Out</Link>
        </div>

        <div className="company-logo-box">
          <img src={seriousmdLogo} alt="SeriousMD logo" />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

// icons are from https://icons8.com/
