import React from "react";
import { Link } from "react-router-dom";
import "./TaskGroup.css";
import "../index.css";

const SkillsTaskGroup = (props) => {
  return (
    <div className="TaskGroup SkillsTaskGroup">
      <Link to="/SkillsTask">
        <div>
          <img src={props.imgUrl} alt={props.title} />
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default SkillsTaskGroup;
