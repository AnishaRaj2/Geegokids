import React from "react";
import ToddlersTask from "./ToddlersTask";
import "./Tasks.css";
import "../index.css";

const ToddlersTasks = (props) => {
  return props.trigger ? (
    <div className="Tasks">
      <div>
        <h2>
          {props.title}
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
        </h2>
      </div>
      <ul>
        {props.toddler.tasks.map((task) => {
          return (
            <li>
              <ToddlersTask
                imgUrl={task.thumbnail}
                title={task.title}
                video={task.video}
              />
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    ""
  );
};

export default ToddlersTasks;
