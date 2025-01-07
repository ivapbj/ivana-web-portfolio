import React from "react";
import "./Portfolio.css";
import JeopardyImage from "./jeopardyimage.png";
import GuessImage from "./guess-image.png";
import HunterImage from "./Hunterlogo.jpg";
import SpaLogo from "./spalogo.png";
import GreenBus from "./greenbus.jpg";
import FlyerImage from "./digitalflyer.png";

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
        <div className="Guess">
          <h3>Javascript-Based Game</h3>
          <a
            href="https://ivapbj.github.io/Guess-The-Number/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GuessImage} alt="guessgame" className="guess-pic" />
          </a>
        </div>
        <div className="Hunter">
          <h4>Functional Landing Page</h4>
          <a
            href="https://ivapbj.github.io/Hunter-Termite/"
            target="blank"
            rel="noreferrer"
          >
            <img src={HunterImage} alt="Hunter" className="hunter-pic" />
          </a>
        </div>
        <div className="GSpa">
          <h5>Business Website</h5>
          <a href="https://the-gspa.com/#/" target="blank" rel="noreferrer">
            <img src={SpaLogo} alt="GSpa" className="gspa-pic" />
          </a>
        </div>
        <div className="IndyGo">
          <h5>Nonprofit Website using API</h5>
          <img src={GreenBus} alt="IndyGo" className="indygo-pic" />
        </div>
        <div className="Flyer">
          <h6>Digital Flyer</h6>
          <img src={FlyerImage} alt="flyer" className="flyer-pic" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
