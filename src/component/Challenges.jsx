import React from "react";
import ChallengesSubCategory from "./ChallengesSubCategory";
import "./Challenges.css";
import "../index.css";

const Challenges = (props) => {
  return (
    <div className="Challenges main-category">
      <h2>
        Challenges
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </h2>
      <p>
        Playing games, earning points, and doing tasks of different difficulty
        levels inspire all family members to challenge themselves and each
        other. Geegoing is so much fun together!
      </p>
      <div className="sub-categrory-group">
        {props.challengesState.map((challengesSubcategory) => {
          return challengesSubcategory.challenges.length > 0 ? 
          (
            <div className="sub-category">
              <ChallengesSubCategory
                title={challengesSubcategory.title}
                imgUrl={challengesSubcategory.icon}
                key={challengesSubcategory.id}
                challenges={challengesSubcategory.challenges}
              />
            </div>
          ) : "";
        })}
      </div>
    </div>
  );
};

export default Challenges;
