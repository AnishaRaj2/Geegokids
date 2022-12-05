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
      <div className="SubCategory SkillsSubCategory" onClick={showDropDown}>
        <div>
          <img src={props.imgUrl} alt={props.title} />
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
      <ul className="task-groups" onClick={showDropDown}>
        {state
          ? props.sportschools.map((skill) => {
              return (
                <li>
                  <SkillsTaskGroup
                    title={skill.title}
                    key={skill.id}
                    imgUrl={skill.sportschool_task_groups[0].sportschool_tasks[0].thumbnail}
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
