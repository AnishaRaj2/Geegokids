import React, { useState } from "react";
import ChallengesTasks from "./ChallengesTasks";

import "./TaskGroup.css";
import "../index.css";

const ChallengesTaskGroup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="TaskGroup ChallengesTaskGroup"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <img src={props.imgUrl} alt={props.title} />
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
      <div></div>
      <ChallengesTasks
        challenge={props.challenge}
        title={props.title}
        trigger={isOpen}
      />
    </div>
  );
};

export default ChallengesTaskGroup;
