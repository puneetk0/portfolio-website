import React from "react";
import { Link } from "react-router-dom";
import './portfolio.css';
import higrow from "../../assests/homeprojects/higrow.svg"
import roadassist from "../../assests/homeprojects/road-assistance.svg"
import keeper from "../../assests/homeprojects/keeper.svg"
import designathon from "../../assests/homeprojects/designathon.svg"
import todo from "../../assests//homeprojects/todo.svg"

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1 className="work-title">Work</h1>
        <p className="intro">
        I'm passionate about designing and coding web apps, and my portfolio reflects my dedication to these interests.
        </p>
        <div className="social-links">
          <Link to="mailto:puneetkathuria2525@gmail.com"><span>→</span>  Email </Link>
          <Link to="https://www.linkedin.com/in/puneet-kathuria-33a296220/"><span>→</span>  LinkedIn </Link>
          <Link to="https://www.instagram.com/puneet.25_"><span>→</span>  Instagram </Link>
        </div>
      </div>

      <div className="title">All Projects.</div>
      <div className="portfolio-projects">
      
        <div className="projects-display">
        <div className="projects-section">
          <Link to="https://higrow-test.vercel.app/" className="project-wrap">
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
            
          </Link>

          <Link to="https://www.behance.net/gallery/172507501/Road-Assistance-App-UI-Design" className="project-wrap">
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
            
          </Link>
          
          <Link to="https://www.youtube.com/live/Ouuff7UdBNI?si=k3kO3y0-kxX6qGGX&t=1789" className="project-wrap">
            <div className="project-tag">
              <p>UI Design</p> <p>Designathon</p>
            </div>
            <div className="project-title">
              <h1>Designathon Project <span>→</span></h1>
              <p>An app with motto "New People, New City, One Solution"</p>
            </div>
            <div className="project-image">
              <img src={designathon}/>
            </div>
            
          </Link>

          <Link to="https://github.com/puneetk0/keeperApp" className="project-wrap">
            <div className="project-tag">
              <p>Web Dev</p> <p>React.js</p>
            </div>
            <div className="project-title">
              <h1>Keeper App <span>→</span></h1>
              <p>A Web App where we can keep our ideas</p>
            </div>
            <div className="project-image">
              <img src={keeper}/>
            </div>
            
          </Link>

          <Link to="https://github.com/puneetk0/toDoList" className="project-wrap">
            <div className="project-tag">
              <p>UI Design</p> <p>Freelance</p>
            </div>
            <div className="project-title">
              <h1>To-DO App <span>→</span></h1>
              <p>A simple To-Do web app but with some *aesthetics*
              
              </p>
            </div>
            <div className="project-image">
              <img src={todo}/>
            </div>
            
          </Link>
        </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer">
      <h1>Have a question, some feedback, or an outrageous idea? Please, please, please send it my way. ✰ </h1> 
      <div className="social-links">
          <Link to="mailto:puneetkathuria2525@gmail.com"><span>→</span>  Email </Link>
          <Link to="https://www.linkedin.com/in/puneet-kathuria-33a296220/"><span>→</span>  LinkedIn </Link>
          <Link to="https://www.instagram.com/puneet.25_"><span>→</span>  Instagram </Link>
        </div>
        <p>Designed and coded by Puneet ♥️—with help of recommedations from my dear friends! </p>
        <h4 className="final">Thanks for visiting!</h4>
    </div>
    </div>
  );
};

export default Portfolio;
