import React, { useState, useEffect } from "react";
import SubCategory from "./SubCategory";
import "./Challenges.css";
import "../index.css";

const Challenges = () => {
  useEffect(() => {
    fetchChallenges();
  }, []);

  const [challengeState, setChallengeState] = useState([]);

  const fetchChallenges = async () => {
    const request = await fetch(
      "https://kehitys.geegokids.com/challengecategories/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 9d3b7b350c0b05725b37166f443360684cb36b1e",
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
            <SubCategory
              name={challenge.title}
              imgUrl={challenge.icon}
              key={challenge.id}
              level={challenge.challenges.map((item) => {
                return item.level === 0 ? "Beginner" : "Master";
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Challenges;
