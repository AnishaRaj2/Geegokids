import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import AtNurseries from "./component/AtNurseries";
import AtSchool from "./component/AtSchool";
import Menubar from "./component/Menubar";
import Challenges from "./component/Challenges";
import Skills from "./component/Skills";
import Toddlers from "./component/Toddlers";
import ChallengesTask from "./component/ChallengesTask";
import SkillsTask from "./component/SkillsTask";
import Login from "./component/Login";
import useToken from "./useToken";
import "./App.css";

const App = () => {
  // const [token, setToken] = useState();

  const { token, setToken } = useToken();
  // console.log(token, setToken);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Router>
        <Menubar token={token} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AtNurseries" element={<AtNurseries />}></Route>
          <Route path="/AtSchool" element={<AtSchool />}></Route>
          <Route
            path="/Challenges"
            element={<Challenges token={token} />}
          ></Route>
          <Route path="/Skills" element={<Skills token={token} />}></Route>
          <Route path="/Toddlers" element={<Toddlers token={token} />}></Route>
          <Route path="/ChallengesTask" element={<ChallengesTask />}></Route>
          <Route path="/SkillsTask" element={<SkillsTask />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
