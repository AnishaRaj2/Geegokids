import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = async (credentials) => {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    props.setToken(token);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      <h1>Log in</h1>
      <p className="register-form-link">
        Have a code? 
        <a
          href="https://app.geegokids.com/en/koodi/"
          target="_blank"
          rel="noreferrer"
        > Register here!</a>
      </p>
      <p className="login-note">
        This website is solely built for desktop devices. If you want to use
        Geego on your mobile / tablet device, download the Geego App from App
        Stores.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email / Username</p>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          {showPassword ? (
            <>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-solid fa-eye" onClick={handleShowPassword}></i>
            </>
          ) : (
            <>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className="fa-solid fa-eye-slash"
                onClick={handleShowPassword}
              ></i>
            </>
          )}
        </label>
        <div>
          <button type="submit" className="btn btn-primary form-control">
            Login
          </button>
          <a className="privacy-policy"
            href="https://www.geegokids.com/fi/kayttoehdot-ja-yksityisyydensuoja/verkkosivujen-tietosuojaseloste/"
            target="_blank"
            rel="noreferrer"
          >
            Geego Kids Privacy Policy
          </a>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
