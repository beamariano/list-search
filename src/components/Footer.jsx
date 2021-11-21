import React from "react";

import { Link } from "react-router-dom";

import seriousmdLogo from "../assets/seriousmd-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Link to="/home" className="company-logo-box">
          <img src={seriousmdLogo} alt="SeriousMD logo" />
        </Link>

        <div className="footer-display-space"></div>
      </div>
    </footer>
  );
};

export default Footer;
