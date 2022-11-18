import React from "react";
import { Link } from "react-router-dom";
import "./TaskGroup.css";
import "../index.css";

const SkillsTaskGroup = (props) => {
  return (
    <div className="TaskGroup">
      <Link to="/SkillsTask">
        <div>
          <img src={props.imgUrl} alt="Nothing to fetch" />
        </div>
        <div>
          <p>{props.taskGroupTitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default SkillsTaskGroup;
