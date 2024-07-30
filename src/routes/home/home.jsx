import React from "react";
import "./home.css";
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
import higrow from "../../assests/homeprojects/higrow.svg";
import roadassist from "../../assests/homeprojects/road-assistance.svg";
import { useState } from "react";

const photographs = [
  { src: first, alt: "First" },
  { src: second, alt: "Second" },
  { src: third, alt: "Third" },
  { src: forth, alt: "Forth" },
];

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOutside = (event) => {
    if (event.target.className === "popover") {
      setSelectedImage(null);
    }
  };
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="greeting">Namaste!</h1>
        <p className="intro">
          I'm Puneet, an 18-year-old web developer and UI design enthusiast who
          loves creating websites with a minimalistic and modern aesthetic.
        </p>
        <div className="social-links">
          <Link to="mailto:puneetkathuria2525@gmail.com"><span>→</span>  Email </Link>
          <Link to="https://www.linkedin.com/in/puneet-kathuria-33a296220/"><span>→</span>  LinkedIn </Link>
          <Link to="https://www.instagram.com/puneet.25_"><span>→</span>  Instagram </Link>
        </div>
      </div>

      <div className="title">Featured Projects.</div>

      <div className="home-projects">
        <div className="projects-section">
          <Link to="https://higrow-test.vercel.app/" className="project-wrap">
            <div className="project-tag">
              <p>UI Design</p> <p>Web Development</p>
            </div>
            <div className="project-title">
              <h1>
                HiGrow <span>→</span>
              </h1>
              <p>Building a Workshop marketplace platform</p>
            </div>
            <div className="project-image">
              <img src={higrow} />
            </div>
          </Link>

          <Link to="https://www.behance.net/gallery/172507501/Road-Assistance-App-UI-Design" className="project-wrap">
            <div className="project-tag">
              <p>UI Design</p> <p>Freelance</p>
            </div>
            <div className="project-title">
              <h1>
                Road Assistance App <span>→</span>
              </h1>
              <p>An app to provide services during travel</p>
            </div>
            <div className="project-image">
              <img src={roadassist} />
            </div>
          </Link>
        </div>
        <div  className="view-all">
          <Link to="/work">
            {" "}
            <span>→</span> View All
          </Link>
        </div>

        <div className="home-desktop">
          <h1 className="desktop-title">
            As a web developer, my primary tech stack is{" "}
            <span className="font-semibold">CSS, Javascript</span> and{" "}
            <span className="font-semibold">React.js</span> but this is what my
            desktop looks like -
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

      <div className="title">Photography.</div>
      <div className="photography" onClick={handleClickOutside}>
        <div className="photographs">
          {photographs.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt={photo.alt}
              onClick={() => setSelectedImage(photo.src)}
            />
          ))}
        </div>
        {selectedImage && (
          <div className="popover">
            <img src={selectedImage} alt="Selected" className="popover-image" />
          </div>
        )}
      </div>
      <hr className="divider" />
      <div className="footer">
        <h1>
          Have a question, some feedback, or an outrageous idea? Please, please,
          please send it my way. ✰{" "}
        </h1>
        <div className="social-links">
          <Link to="mailto:puneetkathuria2525@gmail.com"><span>→</span>  Email </Link>
          <Link to="https://www.linkedin.com/in/puneet-kathuria-33a296220/"><span>→</span>  LinkedIn </Link>
          <Link to="https://www.instagram.com/puneet.25_"><span>→</span>  Instagram </Link>
        </div>
        <p>
          Designed and coded by Puneet ♥️—with help of recommedations from my
          dear friends!{" "}
        </p>
        <h4 className="final">Thanks for visiting!</h4>
      </div>
    </div>
  );
}

export default Home;
