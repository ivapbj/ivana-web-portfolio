import React from "react";
import "./Portfolio.css";
import JeopardyImage from "./jeopardyimage.png";
import GuessImage from "./guess-image.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-board">
        {/* Interactive Game */}
        <div className="jeopardy">
          <h2>Interactive Game</h2>
          <a
            href="https://ivapbj.github.io/Jeopardy-Resubmission/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={JeopardyImage} alt="Jeopardy" className="jeopardy-pic" />
          </a>
        </div>

        {/* Other Projects */}
        <div className="Zorkington">
          <h3>Javascript-Based Game</h3>
          <a
            href="https://ivapbj.github.io/Guess-The-Number/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GuessImage} alt="guessgame" className="guess-pic" />
          </a>
        </div>
        <div className="Hunter">Functional Landing Page</div>
        <div className="GSpa">Business Website</div>
        <div className="IndyGo">Nonprofit Website using API</div>
        <div className="Flyer">Digital Flyer</div>
      </div>
    </div>
  );
};

export default Portfolio;
