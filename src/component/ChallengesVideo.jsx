import React from "react";
import "./Video.css";

const ChallengesVideo = (props) => {
  return (
    <div className="Video" style={{ display: props.display }}>
      <video controls >
        <source src={props.video} type="video/mp4" />
      </video>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ChallengesVideo;
