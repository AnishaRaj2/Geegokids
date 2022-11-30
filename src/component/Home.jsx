import React from "react";
import AtNurseries from "./AtNurseries";
import AtSchool from "./AtSchool";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>Get ready to rock kids' physical skills!!</h1>
      <div>
        <AtSchool className="AtSchool" />
        <AtNurseries className="AtNurseries" />
      </div>
    </div>
  );
};

export default Home;
