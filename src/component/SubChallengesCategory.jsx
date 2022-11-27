import React, { useState } from "react";
import ChallengesTaskGroup from "./ChallengesTaskGroup";
import "./SubCategory.css";
import "../index.css";

const SubChallengesCategory = (props) => {
  const [state, setState] = useState(false);

  const showDropDown = () => {
    setState(!state);
  };

  return (
    <>
      <div className="SubCategory" onClick={showDropDown}>
        <div>
          <img src={props.imgUrl} alt={props.title} />
        </div>
        <div>
          <p>{props.title}</p>
          <p>{props.level}</p>
        </div>
      </div>
      <ul className="task-groups" onClick={showDropDown}>
        {state
          ? props.challenges.map((challenge) => {
              return (
                <li>
                  <ChallengesTaskGroup
                    taskGroupTitle={challenge.title}
                    key={challenge.id}
                    imgUrl="/image/ikoni_seikkaile.png"
                    // {challenge.task_groups.map((taskGroup) => {
                    //   return taskGroup.tasks.map((task) => {
                    //     return task.thumbnail;
                    //   });
                    // })}
                  />
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};

export default SubChallengesCategory;
