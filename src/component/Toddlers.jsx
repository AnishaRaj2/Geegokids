import React from "react";
import ToddlersSubCategory from "./ToddlersSubCategory";

import "./Toddlers.css";
import "../index.css";

const Toddlers = (props) => {
  return (
    <div className="Toddlers main-category">
      <h2>
        Toddlers
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </h2>
      <p>
        The tasks for kids under five years of age encourage them to develop
        their skills and explore their limits under adult guidance. Find your
        inner Geego and set an example!
      </p>
      <div className="sub-categrory-group">
        {props.toddlersState && props.toddlersState.map((toddler) => {
          return toddler.tasks.length > 0 ? (
            <div className="sub-category">
              <ToddlersSubCategory
                title={toddler.title}
                imgUrl={toddler.icon}
                key={toddler.id}
                toddler={toddler}
              />
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Toddlers;
