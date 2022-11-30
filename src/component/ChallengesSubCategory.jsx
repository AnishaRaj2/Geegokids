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
      <div className="SubCategory ChallengesSubCategory" onClick={showDropDown}>
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
