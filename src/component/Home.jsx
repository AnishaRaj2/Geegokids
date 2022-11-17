import React from "react";
import AtNurseries from "./AtNurseries";
import AtSchool from "./AtSchool";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <AtNurseries className="AtNurseries" />
      <AtSchool className="AtSchool" />
    </div>
  );
};

export default Home;
