import React, { useState } from "react";
import "./SubCategory.css";
import TaskGroup from "./TaskGroup";
import "../index.css";

const SubCategory = (props) => {
  const [state, setState] = useState(false);

  const showDropDown = () => {
    setState(!state);
  };

  return (
    <>
      <div className="Sub-category" onClick={showDropDown}>
        <img src={props.imgUrl} alt={props.name} />
        <div>
          <p>{props.name}</p>
          <p>{props.level}</p>
        </div>
      </div>
      {state ? (
        <ul onClick={showDropDown}>
          <TaskGroup />
        </ul>
      ) : null}
    </>
  );
};

export default SubCategory;
