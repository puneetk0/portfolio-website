import React from "react";
import { Link } from "react-router-dom";
import './portfolio.css';
import higrow from "../../assests/homeprojects/higrow.svg"
import roadassist from "../../assests/homeprojects/road-assistance.svg"

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1 className="work-title">Work</h1>
        <p className="intro">
        I'm passionate about designing and coding web apps, and my portfolio reflects my dedication to these interests.
        </p>
        <div className="social-links">
          <Link><span>→</span>  Email </Link>
          <Link><span>→</span>  LinkedIn </Link>
          <Link><span>→</span>  Instagram </Link>
        </div>
      </div>

      <div className="title">All Projects.</div>
      <div className="portfolio-projects">
      
        <div className="projects-display">
        <div className="projects-section">
          <div className="project-wrap">
            <div className="project-tag">
              <p>UI Design</p> <p>Web Development</p>
            </div>
            <div className="project-title">
              <h1>HiGrow <span>→</span></h1>
              <p>Building a Workshop marketplace platform</p>
            </div>
            <div className="project-image">
              <img src={higrow}/>
            </div>
            
          </div>

          <div className="project-wrap">
            <div className="project-tag">
              <p>UI Design</p> <p>Freelance</p>
            </div>
            <div className="project-title">
              <h1>Road Assistance App <span>→</span></h1>
              <p>An app to provide services during travel</p>
            </div>
            <div className="project-image">
              <img src={roadassist}/>
            </div>
            
          </div>
          
        </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer">
      <h1>Have a question, some feedback, or an outrageous idea? Please, please, please send it my way. ✰ </h1> 
      <div className="social-links">
          <Link>→ Email </Link>
          <Link>→ LinkedIn </Link>
          <Link>→ Instagram </Link>
        </div>
        <p>Designed and coded by Puneet ♥️—with help of recommedations from my dear friends! </p>
        <h4 className="final">Thanks for visiting!</h4>
    </div>
    </div>
  );
};

export default Portfolio;
