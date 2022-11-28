import React, { useState } from "react";
import SkillsTaskGroup from "./SkillsTaskGroup.jsx";
import "./SubCategory.css";
import "../index.css";

const SkillsSubCategory = (props) => {
  const [state, setState] = useState(false);

  const showDropDown = () => {
    setState(!state);
  };

  return (
    <>
      <div className="SubCategory" onClick={showDropDown}>
        <div>
          <img src={props.imgUrl} alt={props.name} />
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
      <ul className="TaskGroup" onClick={showDropDown}>
        {state
          ? props.sportschool_task_groups.map((taskGroup) => {
              return (
                <li>
                  <SkillsTaskGroup
                    imgUrl="/image/ikoni_seikkaile.png"
                    taskGroupTitle="No title to fetch"
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

export default SkillsSubCategory;
