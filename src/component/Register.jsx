import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  return (
    <div className="form">
    <form>
      <h1>Register</h1>
      <div>
        <label htmlFor="username">Usename</label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          className="form-control"
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary form-control">Submit</button>
      </div>
      <Link to="/Login">Already have an account? Login here.</Link>
    </form>
  </div>
)
};

export default Register;
