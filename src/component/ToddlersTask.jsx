import React from "react";
import "./Task.css";
import "../index.css";

const ToddlersTask = (props) => {
  return (
    <div className="Task ToddlersTask">
      <div>
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <div>{props.title}</div>
    </div> 
  );
};

export default ToddlersTask;
