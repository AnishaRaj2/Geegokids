import React from "react";
import AtNurseries from "./AtNurseries";
import AtSchool from "./AtSchool";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <AtSchool className="AtSchool" />
      <AtNurseries className="AtNurseries" />
    </div>
  );
};

export default Home;
