import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<PageWithScrollingContent component={<About />} />} />
        <Route path="/skills" element={<PageWithScrollingContent component={<Skills />} />} />
        <Route path="/projects" element={<PageWithScrollingContent component={<Projects />} />} />
        <Route path="/contact" element={<PageWithScrollingContent component={<Contact />} />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

const PageWithScrollingContent = ({ component }) => {
  return (
    <div className="page-container">
      {component}
    </div>
  );
};

export default App;
