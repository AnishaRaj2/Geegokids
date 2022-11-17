import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./AtSchool.css";

const AtSchool = () => {
  return (
    <div className="AtSchool">
      <Link to="/Toddlers">
        <Button
          imgUrl="/image/ikoni_tenavat.png"
          name="Toddlers"
          bgColor="orangered"
        />
      </Link>
    </div>
  );
};

export default AtSchool;
