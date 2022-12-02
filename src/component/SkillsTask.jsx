import React from 'react';
import "./Task.css";
import "../index.css";

const SkillsTask = (props) => {
  return (
    <div className="Task SkillsTask">
      <div>
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <div>{props.title}</div>
    </div> 
  )
}

export default SkillsTask