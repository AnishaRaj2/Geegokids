import React from "react";
import SkillsSubCategory from "./SkillsSubCategory";
import "./Skills.css";
import "../index.css";

const Skills = (props) => {
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
        {props.skillsState.map((skillsSubCategory) => {
          return skillsSubCategory.sportschools.length > 0 ? (
            <div className="sub-category">
              <SkillsSubCategory
                title={skillsSubCategory.title}
                key={skillsSubCategory.id}
                imgUrl={skillsSubCategory.icon}
                sportschools={skillsSubCategory.sportschools}
              />
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
