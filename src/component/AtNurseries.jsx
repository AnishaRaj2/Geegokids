import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./AtNurseries.css";
import "../index.css";

const AtNurseries = () => {
  return (
    <div className="AtNurseries">
      <Link to="/Toddlers">
        <Button
          imgUrl="/image/ikoni_tenavat.png"
          name="Toddlers"
          bgColor= "#EB6A39"
        />
      </Link>
    </div>
  );
};

export default AtNurseries;
