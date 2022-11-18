import React from "react";
import "./SubCategory.css";
import "../index.css";

const SubToddlersCategory = (props) => {
  return (
    <div className="SubCategory" style={{borderBottom: "1px solid rgb(128, 128, 128, 0.3)"}}>
      <div>
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <div>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default SubToddlersCategory;
