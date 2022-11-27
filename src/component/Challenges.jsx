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
      `${process.env.REACT_APP_API_ENDPOINT}/challengecategories`,
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
      <div className="sub-categrory-group">
        {challengeState.map((challengeSubcategory) => {
          return (
            challengeSubcategory.challenges.length > 0 ?
            <div className="sub-category">
              <SubChallengesCategory
                title={challengeSubcategory.title}
                imgUrl={challengeSubcategory.icon}
                key={challengeSubcategory.id}
                level={challengeSubcategory.challenges.reduce((total, item) => {
                  return (
                    (total + item.level) === 0 ? 'Beginer' : 'Beginer/ Master'
                  )
                },0)}
                challenges={challengeSubcategory.challenges}
              /> 
            </div> : ''
          );
        })}
      </div>
    </div>
  );
};

export default Challenges;
