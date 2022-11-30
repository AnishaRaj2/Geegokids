import React from "react";
import { Link } from "react-router-dom";

import "./TaskGroup.css";
import "../index.css";

const ChallengesTaskGroup = (props) => {
  return (
    <div className="TaskGroup ChallengesTaskGroup">
      <Link to="/ChallengesTask">
        <div>
          <img src={props.imgUrl} alt={props.title} />
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default ChallengesTaskGroup;
