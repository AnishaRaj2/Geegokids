import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import "../index.css";

const Menubar = () => {
  return (
    <div className="Menubar">
      <Link to="/">
        <img src="/image/geegokids_logo_rgb.png" alt="logo" />
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/AtNurseries">At nurseries</Link>
          </li>
          <li>
            <Link to="/AtSchool">At school</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://www.geegokids.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-house"></i>
              Home page
            </a>
          </li>
          <li>
            <i className="fa-solid fa-user"></i>
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
