import React, { useState, useEffect } from "react";
import SubSkillsCategory from "./SubSkillsCategory";
import "./Skills.css";
import "../index.css";

const Skills = (props) => {
  useEffect(() => {
    fetchSkills(props.token);
  }, [props.token]);

  const [skillState, setSkillState] = useState([]);

  const fetchSkills = async (token) => {
    const request = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/sportschools`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
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
      <div className="sub-categrory-group">
        {skillState.map((skill) => {
          return (
            skill.sportschool_task_groups.length > 0 ?
            <div className="sub-category">
              <SubSkillsCategory
                title={skill.title}
                imgUrl="/image/ikoni_seikkaile.png"
                key={skill.id}
                sportschool_task_groups={skill.sportschool_task_groups}
              />
            </div> : ''
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
