import React from "react";
import SkillsTask from "./SkillsTask";
import "./Tasks.css";
import "../index.css";


const SkillsTasks = (props) => {
  return props.trigger ? (
    <div className="Tasks">
      <div>
        <h2>
          {props.title}
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
        </h2>
        <p>{props.description}</p>
      </div>
      <ul>
        {props.skill.sportschool_task_groups.map((tasks) => {
          return tasks.sportschool_tasks.map((task) => {
            return (
              <li>
                <SkillsTask imgUrl={task.thumbnail} title={task.title} />
              </li>
            );
          });
        })}
      </ul>
    </div>
  ) : (
    ""
  );
};

export default SkillsTasks;
