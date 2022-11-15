import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./AtSchool.css";
import "../App.css";

const AtSchool = () => {
  return (
    <div className="AtSchool">
      <Link to="/Challenges">
        <Button
          imgUrl="/images/ikoni_haasteet.svg"
          name="Challenges"
          bgColor="#6B3776"
        />
      </Link>
      <Link to="/Skills">
        <Button 
            imgUrl="/images/ikoni_koulut.svg" 
            name="Skills" 
            bgColor="#0074AC" />
      </Link>
    </div>
  );
};

export default AtSchool;