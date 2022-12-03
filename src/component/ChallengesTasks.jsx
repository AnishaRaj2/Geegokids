import React from "react";
import ChallengesTask from "./ChallengesTask";
import "./Tasks.css";
import "../index.css";

const ChallengesTasks = (props) => {
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
        {props.challenge.task_groups.map((tasks) => {
          return tasks.tasks.map((task) => {
            return (
              <li>
                <ChallengesTask
                  imgUrl={task.thumbnail}
                  title={task.title}
                  video={task.video}
                  description={task.description}
                />
              </li>
            );
          });
        })}
      </ul>
    </div>
  ) : ("");
};

export default ChallengesTask;