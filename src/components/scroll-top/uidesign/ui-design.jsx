import React from "react";
import higrow from "../../../assests/homeprojects/higrow.png";
import portfolio from "../../../assests/homeprojects/portfolio.jpg";
import car from "../../../assests/homeprojects/car.svg";
import fashion from "../../../assests/homeprojects/fashion.svg";
import { Link } from "react-router-dom";

const UiDesign = () => {
  return (
    <div className="portfolio-container">
    <div className="portfolio-header">
      <h1 className="work-title">Work</h1>
      <p className="intro">
      I'm passionate about designing and coding web apps, and my portfolio reflects my dedication to these interests.
      </p>
    </div>

    <div className="title">All Projects</div>
    <div className="portfolio-projects">
      <div className="projects-tag">
        <Link className="portfolio-tags" to="/work">All</Link>
        <Link className="portfolio-tags " to="/work/web-development" >Web Dev</Link>
        <Link className="portfolio-tags bg-[#333] text-white" to="/work/uidesign">UI Design</Link>
        <Link className="portfolio-tags" to="/work/photography">Photography</Link>
      </div>
      <div className="projects-display">
        

        <div className="project-card">
        <Link to="https://www.behance.net/gallery/172508765/Redesigned-personal-portfolio-website" target="_blank">    <img src={portfolio} alt="Portfolio Website" /> </Link>   
          <h1>Portfolio Website</h1>
          <h2>
            My first personal portfolio website that I made when I was 15!
          </h2>
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
  )
}

export default UiDesign