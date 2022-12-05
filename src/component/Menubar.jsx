import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "./Menubar.css";
import "../index.css";

const Menubar = (props) => {
  return (
    <div className="Menubar">
      <Link to="/">
        <img src="/image/geegokids_logo_rgb.png" alt="logo" />
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/AtSchools">Schools</Link>
          </li>
          <li>
            <Link to="/AtKindergartens">Kindergartens</Link>
          </li>
          <li>
            <Logout token={props.token} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
