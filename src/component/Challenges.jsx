import React, { useState, useEffect } from "react";
import SubChallengesCategory from "./SubChallengesCategory";
import "./Challenges.css";
import "../index.css";

const Challenges = (props) => {
  const [challengeState, setChallengeState] = useState([]);

  useEffect(() => {
    fetchChallenges(props.token);
  }, [props.token]);

  const fetchChallenges = async (token) => {
    const request = await fetch(
      "https://app.geegokids.com/challengecategories/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          "Accept-language": "en",
        },
      }
    );
    const challengeState = await request.json();
    console.log(challengeState);
    setChallengeState(challengeState);
  };

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
      <div className="sub-category">
        {challengeState.map((challenge) => {
          return (
            <SubChallengesCategory
              title={challenge.title}
              imgUrl={challenge.icon}
              key={challenge.id}
              level={challenge.challenges.map((item) => {
                return item.level === 0 ? "Beginner" : "Master";
              })}
              challenges={challenge.challenges}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Challenges;
