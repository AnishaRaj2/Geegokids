import React, { useState, useEffect } from "react";
import SubCategory from "./SubCategory";
import "./Skills.css";
import "../index.css";

const Skills = () => {
  useEffect(() => {
    fetchSkills();
  }, []);

  const [skillState, setSkillState] = useState([]);

  const fetchSkills = async () => {
    const request = await fetch(
      "https://kehitys.geegokids.com/toddlercategories/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 9d3b7b350c0b05725b37166f443360684cb36b1e",
          "Accept-language": "en",
        },
      }
    );
    const skillState = await request.json();
    console.log(skillState);
    setSkillState(skillState);
  };

  return (
    <div className="Skills main-category">
      <h2>
        Skills
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </h2>
      <p>
        Countless things to do and new things to learn. You can easily try new
        sports, develop your handicraft skills, and exercise your muscles and
        mobility safely with your family. Start Geegoing and learn what makes
        you tick!
      </p>
      <div className="sub-category">
        {skillState.map((skill) => {
          return (
            <SubCategory
              name={skill.title}
              imgUrl={skill.icon}
              key={skill.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
