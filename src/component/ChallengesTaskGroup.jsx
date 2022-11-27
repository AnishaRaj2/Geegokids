import React from "react";
import { Link } from "react-router-dom";

import "./TaskGroup.css";
import "../index.css";

const ChallengesTaskGroup = (props) => {
  return (
    <div className="TaskGroup">
      <Link to="/ChallengesTask">
        <div>
          <li>{props.imgUrl}</li>
          </div>
        <div>
          <p>{props.taskGroupTitle}</p>
          {/* <div>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default ChallengesTaskGroup;
