import React from "react";
import "./home.css";
import higrow from "../../assests/homeprojects/higrow.png";
import portfolio from "../../assests/homeprojects/portfolio.jpg";
import figma from "../../assests/desktop/figma.svg";
import spotify from "../../assests/desktop/spotify.svg";
import notion from "../../assests/desktop/notion.svg";
import photoshop from "../../assests/desktop/photoshop.svg";
import premiere from "../../assests/desktop/premiere.svg";
import vscode from "../../assests/desktop/vscode.svg";
import first from "../../assests/photographs/first.svg";
import second from "../../assests/photographs/second.svg";
import third from "../../assests/photographs/third.svg";
import forth from "../../assests/photographs/forth.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="greeting">Hello there, Namaste!</h1>
        <p className="intro">
          I'm Puneet, an 18-year-old web developer and UI design enthusiast who loves creating websites with a minimalistic and modern aesthetic.
        </p>
      </div>

      <div className="title">My Projects</div>

      <div className="home-projects">
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
        </div>

        <div className="home-desktop">
          <h1 className="desktop-title">
            As a web developer, my primary tech stack is <span className="font-semibold">CSS, Javascript</span> and <span className="font-semibold">React.js</span> but this is what my desktop looks like -
          </h1>
          <div className="desktop-images">
            <img src={figma} alt="Figma" />
            <img src={vscode} alt="VS Code" />
            <img src={spotify} alt="Spotify" />
            <img src={notion} alt="Notion" />
            <img src={photoshop} alt="Photoshop" />
            <img src={premiere} alt="Premiere" />
          </div>
        </div>
      </div>

      <div className="title">Photography</div>
      <div className="photographs">
        <img src={first} alt="First" />
        <img src={second} alt="Second" />
        <img src={third} alt="Third" />
        <img src={forth} alt="Forth" />
      </div>
    </div>
  );
}

export default Home;
