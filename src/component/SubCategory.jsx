import React, { useState } from "react";
import "./SubCategory.css";
import Task from "./Task";
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
          <Task />
        </ul>
      ) : null}
    </>
  );
};

export default SubCategory;
