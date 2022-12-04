import React from "react";
import "./Video.css";

const ChallengesVideo = (props) => {
  return (props.trigger) ?
    (<div 
        className="Video" 
        style={{ display: props.display }}
      >
        <video controls>
          <source 
            src={props.video} 
            type="video/mp4" 
          />
        </video>
        <div>
          <i 
            className="fa-solid fa-xmark" 
            onClick={() => props.setTrigger(false)}>
          </i>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    ) : ""
};

export default ChallengesVideo;
