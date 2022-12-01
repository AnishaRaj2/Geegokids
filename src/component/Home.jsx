import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>Get ready to rock kids' physical skills!!</h1>
      <div>
        <Link to="/Challenges">
          <Button
            imgUrl="/image/ikoni_haasteet@3x.png"
            name="CHALLENGES"
            bgColor="#6B377C"
            bgColor2="rgb(124 54 147 / 30%)"
            description="Encourage school-age children to test the skills and find out their limits."
          />
        </Link>
        <Link to="/Skills">
          <Button
            imgUrl="/image/ikoni_koulut.png"
            name="SKILLS"
            bgColor="#0074AC"
            bgColor2="rgb(31 130 178 / 30%)"
            description="Teach school-age children basic physical and motor skills."
          />
        </Link>
        <Link to="/Toddlers">
          <Button
            imgUrl="/image/ikoni_tenavat.png"
            name="TODDLERS"
            bgColor="#EB6A39"
            bgColor2="rgb(235, 106, 57 / 0.3)"
            description="Get kindergarten-age children moving and learning new skills."
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
