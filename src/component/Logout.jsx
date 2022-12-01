import React from "react";

const Logout = (props) => {
  const handleLogout = () => {
    localStorage.clear(props.token);
    window.location.reload();
  };

  return (
    <div className="Logout" onClick={handleLogout}>
      <i className="fa-solid fa-user"></i>
      Log out
    </div>
  );
};

export default Logout;
