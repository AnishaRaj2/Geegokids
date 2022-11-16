import React from "react";
import "./Button.css";
import "../index.css";

const Button = (props) => {
  return (
    <div className="Button">
      <button style={{ backgroundColor: props.bgColor }}
>
        <img
          src={props.imgUrl}
          alt={`${props.name} icon`}
        />
        {props.name}
      </button>
    </div>
  );
};

export default Button;
