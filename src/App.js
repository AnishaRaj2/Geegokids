import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import AtNurseries from "./component/AtNurseries";
import AtSchool from "./component/AtSchool";
import Menubar from "./component/Menubar";
import Challenges from "./component/Challenges";
import ChallengesTasks from "./component/ChallengesTasks";
import Skills from "./component/Skills";
import SkillsTasks from "./component/SkillsTasks";
import Toddlers from "./component/Toddlers";
import ToddlersTasks from "./component/ToddlersTasks";
import Login from "./component/Login";
import useToken from "./useToken";
import ChallengesFetchAPI from "./ChallengesFetchAPI";
import ToddlersFetchAPI from "./ToddlersFetchAPI";
import SkillsFetchAPI from "./SkillsFetchAPI";
import "./App.css";


const App = () => {
  
  const { token, setToken } = useToken();
  // console.log(token, setToken);

  const [challengesState, setChallengesState] = useState();
  const [skillsState, setSkillsState] = useState();
  const [toddlersState, setToddlersState] = useState();

  useEffect(() => {
    const fetchChallenges = async () => {
      const data = await ChallengesFetchAPI(token);
      console.log(data);
      setChallengesState(data);
    };
    fetchChallenges();
  }, [token]);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await SkillsFetchAPI(token);
      console.log(data);
      setSkillsState(data);
    };
    fetchSkills();
  }, [token]);

  useEffect(() => {
    const fetchToddlers = async () => {
      const data = await ToddlersFetchAPI(token);
      console.log(data);
      setToddlersState(data);
    };
    fetchToddlers();
  }, [token]);

  return !token ? (<Login setToken={setToken}/>) : 
  (
    <div className="App">
      <Router>
        <Menubar token={token}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AtNurseries" element={<AtNurseries />}></Route>
          <Route path="/AtSchool" element={<AtSchool />}></Route>
          <Route path="/Challenges" element={<Challenges challengesState={challengesState} />}></Route>
          <Route path="/Challenges/:title" element={<ChallengesTasks challengesState={challengesState} />}></Route>
          <Route path="/Skills" element={<Skills skillsState={skillsState} />}></Route>
          <Route path="/Skills/:title" element={<SkillsTasks skillsState={skillsState} />}></Route>
          <Route path="/Toddlers" element={<Toddlers toddlersState={toddlersState} />}></Route>
          <Route path="/Toddlers/:title" element={<ToddlersTasks toddlersState={toddlersState} />}></Route>
        </Routes>
      </Router>
    </div>
  ); 
};

export default App;
