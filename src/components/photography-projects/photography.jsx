import React from "react";
import higrow from "../../assests/homeprojects/higrow.png";
import portfolio from "../../assests/homeprojects/portfolio.jpg";
import car from "../../assests/homeprojects/car.svg";
import fashion from "../../assests/homeprojects/fashion.svg";
import { Link } from "react-router-dom";
import first from "../../assests/photographs/first.svg";
import second from "../../assests/photographs/second.svg";
import third from "../../assests/photographs/third.svg";
import forth from "../../assests/photographs/forth.svg";

const Photography = () => {
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
        <Link className="portfolio-tags " to="/work/uidesign">UI Design</Link>
        <Link className="portfolio-tags bg-[#333] text-white" to="/work/photography">Photography</Link>
      </div>
      
    </div>
    <div className="photographs">
        <img src={first} alt="First" />
        <img src={second} alt="Second" />
        <img src={third} alt="Third" />
        <img src={forth} alt="Forth" />
      </div>
  </div>
  )
}

export default Photography