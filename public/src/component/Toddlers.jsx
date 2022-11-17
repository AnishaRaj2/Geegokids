import React, { useState, useEffect } from "react";
import SubCategory from "./SubCategory";
import "./Toddlers.css";
import "../index.css";

const Toddlers = () => {
  useEffect(() => {
    fetchChallenges();
  }, []);

  const [challengeState, setChallengeState] = useState([]);

  const fetchChallenges = async () => {
    const request = await fetch("https://kehitys.geegokids.com/challenges/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 9d3b7b350c0b05725b37166f443360684cb36b1e",
        "Accept-language": "en",
      },
    });
    const challengeState = await request.json();
    console.log(challengeState);
    setChallengeState(challengeState);
  };

  return (
    <div className="Toddlers main-category">
      <h2>
        Toddlers
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </h2>
      <p>
        The tasks for kids under five years of age encourage them to develop
        their skills and explore their limits under adult guidance. Find your
        inner Geego and set an example!
      </p>
      <div className="sub-category">
        {challengeState.map((challenge) => {
          return (
            <SubCategory
              name={challenge.title}
              imgUrl={challenge.icon} //No icon in /challenges
              key={challenge.id}
              level={challenge.level !== 0 ? "Master" : "Beginner"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Toddlers;
