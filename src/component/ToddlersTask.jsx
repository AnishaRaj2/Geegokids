import React from "react";

const ToddlersTask = (props) => {
  return (
    <div>
      <div>
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <div>{props.title}</div>
    </div>
  );
};

export default ToddlersTask;
