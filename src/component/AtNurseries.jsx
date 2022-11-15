import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./AtNurseries.css";

const AtNurseries = () => {
  return (
    <div className="AtNurseries">
      <Link to="/Toddlers">
        <Button
          imgUrl="/images/ikoni_tenavat.svg"
          name="Toddlers"
          bgColor="#EB6A39"
        />
      </Link>
    </div>
  );
};

export default AtNurseries;