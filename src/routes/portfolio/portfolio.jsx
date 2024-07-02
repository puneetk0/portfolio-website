import React from "react";
import higrow from "../../assests/homeprojects/higrow.png";
import portfolio from "../../assests/homeprojects/portfolio.jpg";
import car from "../../assests/homeprojects/car.svg";
import fashion from "../../assests/homeprojects/fashion.svg";
import { Link } from "react-router-dom";
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1 className="work-title">Work</h1>
        <p className="intro">
          I love to design and code web apps and my portfolio kinda shows my
          interests love to design and code web apps
        </p>
      </div>

      <div className="title">All Projects</div>
      <div className="portfolio-projects">
        <div className="projects-tag">
          <Link className="portfolio-tags bg-[#333] text-white" to="/work">All</Link>
          <Link className="portfolio-tags" to="/work/web-development">Web Dev</Link>
          <Link className="portfolio-tags" to="/work/uidesign">UI Design</Link>
          <Link className="portfolio-tags" to="/work/photography">Photography</Link>
        </div>
        <div className="projects-display">
          <div className="project-card">
          <Link to="https://www.higrow.xyz/" target="_blank">    <img src={higrow} alt="HiGrow" /> </Link>   
            <h1>HiGrow</h1>
            <h2>
              Workshop marketplace platform where you can join or organize your
              own workshops
            </h2>
          </div>

          <div className="project-card">
          <Link to="https://www.behance.net/gallery/172508765/Redesigned-personal-portfolio-website" target="_blank">    <img src={portfolio} alt="Portfolio Website" /> </Link>   
            <h1>Portfolio Website</h1>
            <h2>
              My first personal portfolio website that I made when I was 15!
            </h2>
          </div>

          <div className="project-card">
       <Link to="https://crf0h.csb.app/" target="_blank">
       <img src="https://portfolio-puneet2525.vercel.app/static/media/project2.c1ff1de16a802bb77f95256dbb5049bb.svg" alt="To-Do List" /></Link>   
            <h1>To-Do List</h1>
            <h2>To Do list app but with some great aesthetics</h2>

         
          </div>

          <div className="project-card">
          <Link to="https://www.behance.net/gallery/147930989/Apple-iWatch-User-Interface" target="_blank">
            <img src="https://portfolio-puneet2525.vercel.app/static/media/project3.082d08fba9b350164f5279060a3acfd3.svg" alt="I-Watch Landing page" />
            </Link>  <h1>I-Watch Landing page</h1>
            <h2>UI of a landing page for I-Watch with beautiful animations</h2>
                
          </div>

          <div className="project-card">
          <Link to="https://www.behance.net/gallery/172507501/Road-Assistance-App-UI-Design" target="_blank">
            <img src={car} alt="Road assistance app" /></Link> 
            <h1>Road assistance app</h1>
            <h2>UI Design for a road assistance app</h2>
                
          </div>

          <div className="project-card">
          <Link to="https://www.behance.net/gallery/172508253/Fahsion-ecommerce-landing-page-ui-design" target="_blank">
            <img src={fashion} alt="Fashion e-commerce landing page" />  </Link>   
            <h1>Fashion e-commerce landing page</h1>
            <h2>UI of landing page for a fashion e-commerce website</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
