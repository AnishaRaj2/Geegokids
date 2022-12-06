import React, { useState } from "react";
import ChallengesVideo from "./ChallengesVideo";
import "./Task.css";
import "../index.css";

const ChallengesTask = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlex, setIsFlex] = useState("none");

  const handleClick = (props) => {
    setIsOpen(true);
    setIsFlex("flex");
  };

  return (
    <div>
      <div className="Task ChallengesTask" onClick={handleClick}>
        <div>
          <img src={props.imgUrl} alt={props.title} />
        </div>
        <div>{props.title}</div>
      </div>
      <ChallengesVideo
        video={props.video}
        title={props.title}
        description={props.description}
        trigger={isOpen}
        display={isFlex}
        setTrigger={setIsOpen}
      />
    </div>
  );
};

export default ChallengesTask;