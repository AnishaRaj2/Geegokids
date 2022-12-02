import React, { useState } from "react";
import SkillsTasks from "./SkillsTasks";

import "./TaskGroup.css";
import "../index.css";

const SkillsTaskGroup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="TaskGroup SkillsTaskGroup" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <img src={props.imgUrl} alt={props.title} />
        </div>
        <div>
          <p>{props.title}</p>
        </div>
      </div>
      <SkillsTasks
        skill={props.skill}
        title={props.title}
        description={props.description}
        trigger={isOpen}
      />
    </div>
  );
};

export default SkillsTaskGroup;
