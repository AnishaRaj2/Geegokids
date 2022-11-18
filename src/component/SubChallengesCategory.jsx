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
      <ul className="TaskGroup" onClick={showDropDown}>
        {state
          ? props.challenges.map((taskGroup) => {
              return (
                <li>
                  <ChallengesTaskGroup
                    imgUrl={props.imgUrl}
                    taskGroupTitle={taskGroup.title}
                    key={taskGroup.id}
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
