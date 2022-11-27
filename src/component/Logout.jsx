import React from "react";
import "./logout.css";

const Logout = (props) => {
  const handleLogout = () => {
    localStorage.clear(props.token);
    window.location.reload();
  };

  return (
    <div className="logout" onClick={handleLogout}>
      <i className="fa-solid fa-user"></i>
      Log out
    </div>
  );
};

export default Logout;
