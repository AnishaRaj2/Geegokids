import React from "react";
import "./Task.css";

const ChallengesTask = (props) => {
  return (
    <div className="Task ChallengesTask">
      <div>
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <div>{props.title}</div>
    </div> 
  )
};

export default ChallengesTask;
