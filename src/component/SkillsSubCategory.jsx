import React, { useState } from "react";
// import SkillsTaskGroup from "./SkillsTaskGroup.jsx";
import "./SubCategory.css";
import "../index.css";

const SkillsSubCategory = (props) => {
  const [state, setState] = useState(false);

  const showDropDown = () => {
    setState(!state);
  };

  return (
    <>
      <div className="SubCategory SkillsSubCategory" onClick={showDropDown}>
        <div>
          <img src={props.imgUrl} alt={props.name} />
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
      {/* <ul className="TaskGroup" onClick={showDropDown}>
        {state
          ? props.sportschool_task_groups.map((skill) => {
              return (
                <li>
                  <SkillsTaskGroup
                    title={skill.title}
                    key={skill.id}
                    imgUrl={skill.task_groups[0].tasks[0].thumbnail}
                  />
                </li>
              );
            })
          : null}
      </ul> */}
    </>
  );
};

export default SkillsSubCategory;
