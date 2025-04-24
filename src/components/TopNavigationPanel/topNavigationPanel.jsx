import React from "react";
import "./topNavigationPanel.css";

const TopNavigationPanel = () => {
  return (
    <div className="navContainer">
      <a href="#harini" className="title">HR</a>
      <div className="navLinks">
        <a href="#about" className="link">About</a>
        <a href="#skills" className="link">Skill</a>
        <a href="#work" className="link">Work</a>
        <a href="#contact" className="link">Contact</a>
      </div>
    </div>
  );
};

export default TopNavigationPanel;
