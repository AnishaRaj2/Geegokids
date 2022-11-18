import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import AtNurseries from "./component/AtNurseries";
import AtSchool from "./component/AtSchool";
import Menubar from "./component/Menubar";
import "./App.css";
import Challenges from "./component/Challenges";
import Skills from "./component/Skills";
import Toddlers from "./component/Toddlers";
import ChallengesTask from "./component/ChallengesTask";
import SkillsTask from "./component/SkillsTask";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AtNurseries" element={<AtNurseries />}></Route>
          <Route path="/AtSchool" element={<AtSchool />}></Route>
          <Route path="/Challenges" element={<Challenges />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Toddlers" element={<Toddlers />}></Route>
          <Route path="/ChallengesTask" element={<ChallengesTask />}></Route>
          <Route path="/SkillsTask" element={<SkillsTask />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
