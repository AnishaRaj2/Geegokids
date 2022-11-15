import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import AtNurseries from "./component/AtNurseries";
import AtSchool from "./component/AtSchool";
import Challenges from "./component/Challenges";
import Skills from "./component/Skills";
import Toddlers from "./component/Toddlers";import './App.css';
import Navbar from './component/Navbar';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AtSchool" element={<AtSchool />}></Route>
          <Route path="/AtNurseries" element={<AtNurseries />}></Route>
          <Route path="/Challenges" element={<Challenges />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Toddlers" element={<Toddlers />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;