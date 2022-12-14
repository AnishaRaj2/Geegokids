import React from 'react'

const ToddlersVideo = (props) => {
    return (props.trigger) ?
    (<div 
        className="Video" 
        style={{ display: props.display }}
     >
      <div className="dummy-block"></div>
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
}

export default ToddlersVideo