import React, { useState } from "react";
import ChallengesTaskGroup from "./ChallengesTaskGroup";
import "./SubCategory.css";
import "../index.css";

const ChallengesSubCategory = (props) => {
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
        </div>
      </div>
      <ul className="task-groups" onClick={showDropDown}>
        {state
          ? props.challenges.map((challenge) => {
              return (
                <li>
                  <ChallengesTaskGroup
                    title={challenge.title}
                    key={challenge.id}
                    imgUrl={challenge.task_groups[0].tasks[0].thumbnail}
                    // imgUrl={challenge.task_groups.map((tasks, index) => {
                    //   return index === 0 ? tasks.tasks.map((task, index) =>{
                    //     return index === 0 ? task.thumbnail : ""
                    //   }) : ""
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

export default ChallengesSubCategory;
