import React, { useState } from "react";
import ToddlersTasks from "./ToddlersTasks";
import "./SubCategory.css";
import "../index.css";

const ToddlersSubCategory = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="SubCategory ToddlersSubCategory"
        style={{ borderBottom: "1px solid rgb(128, 128, 128, 30%)" }} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <img 
            src={props.imgUrl} 
            alt={props.title} 
          />
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
      <ToddlersTasks
        toddler={props.toddler}
        title={props.title}
        trigger={isOpen}
      />
    </div>
  );
};

export default ToddlersSubCategory;