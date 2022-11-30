import React from "react";

const ChallengesTask = (props) => {
  return (
    <div className="ChallengesTask">
      <h1>{props.challengesState.map((challengesSubCategory) => {
        return challengesSubCategory.challenges.map((challenge, index) => {
          return index === 5 ? challenge.title : ""
        })
      })}
      </h1>
      <p>Lorem ipsum dolor sit amet.</p>
      
    </div>
  );
};

export default ChallengesTask;
