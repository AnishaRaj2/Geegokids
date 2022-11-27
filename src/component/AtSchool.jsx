import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./AtSchool.css";

const AtSchool = () => {
  return (
    <div className="AtSchool">
      <Link to="/Challenges">
        <Button
          imgUrl="/image/ikoni_haasteet@3x.png"
          name="Challenges"
          bgColor="Purple"
        />
      </Link>
      <Link to="/Skills">
        <Button imgUrl="/image/ikoni_koulut.png" name="Skills" bgColor="Blue" />
      </Link>
    </div>
  );
};

export default AtSchool;
