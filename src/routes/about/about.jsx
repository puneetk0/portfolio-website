import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import aboutImage from '../../assests/homeprojects/about.png'

const About = () => {
  return (
   <div className='about-container'>
   <div className='about-header'>
   <h1>Welcome to my ꙳Little ꙳ corner
   of the Internet ;)</h1>
   <img src={aboutImage} />
   <p> I was a 14-year-old average guy who always thought that my friends were really good at least at something, while on the other hand, I was average in academics, sports, and all other activities. I was not perfect at anything, but that was before I knew how to code. <br /> <br />

I started my journey with basic HTML and CSS and coded my first website when I was 14. After that, I enjoyed coding so much that I spent more time on it than focusing on my academics. I chose PCM in 11th grade but didn’t study much. While my friends were preparing for JEE, I was sitting in my room, learning different web development languages and frameworks and building tons of projects. <br /> <br />

I also tried a lot of other skills like YouTube, where I got over 10 thousand subscribers by uploading UI design videos, and I also tried video editing on different software like Premiere Pro and CapCut. But nothing can beat VS Code and Figma for real. <br /> <br /></p>
   </div>

   <hr className="divider" />

  <div className='about-info'>
    <div className='info-container'>
      <div className='info-list'>
        <div className='info-left'>
        <h1> Skills </h1>  
        </div>
        <div className='info-right'>
          <div>
            <h1>Web Development</h1>
            <p>HTML, CSS, React.js,  Tailwind CSS</p>
          </div>

          <div>
            <h1>Interaction Design</h1>
            <p>UI/ UX Design, Prototyping, Design System</p>
          </div>

          <div>
            <h1>Content Creation</h1>
            <p>Video editing, script writing, storytelling</p>
          </div>
        </div>
      </div>
      <div className='info-list'>
        <div className='info-left'>
        <h1> Education </h1>  
        </div>
        <div className='info-right'>
          <div>
            <h1>Newton school of Technology •  Sonipat</h1>
            <p>B.Tech in CSE & AI <br/> Class of 2028</p>
          </div>

        </div>
      </div>
      <div className='info-list'>
        <div className='info-left'>
        <h1> tool-kit</h1>  
        </div>
        <div className='info-right'>
        <div>
            <h1>Design</h1>
            <p>Figma/FigJam, Photoshop, Canva</p>
          </div>
        
          <div>
            <h1>Coding</h1>
            <p>VS Code, Terminal, Git/Github</p>
          </div>
          <div>
            <h1>Video Editing</h1>
            <p>Premiere Pro, capcut</p>
          </div>
          <div>
            <h1>Misc.</h1>
            <p>Notion, ChatGPT</p>
          </div>

        </div>
      </div>
    </div>

    
  </div>
  
  

  <hr className="divider" />

  <div className='fun-facts'>
    <h1>Fun facts about me</h1>
    <p>😊 I always wanted to be a youtuber and tried bunch of different niche like gaming, tech and now that I got 11 thousand subs on my channel, last video I uploaded was about an year ago :)</p>
  <p>🍵 When I’m not designing, you can find me watching Netflix, lifting weights, and looking for design inspirations.</p>
  <p>🌴 I also love to play different sports mainly badminton, basketball, snooker and ofcourse Cricket (yeah avg. Indian guy)</p>
  <p>🍿 I'm seriously addicted to web series, but I can give you some killer recommendations like HIMYM, Friends, and TVD. Trust me, you won't regret it. </p>
  <p>🎵 There's always something that people can't live without, right? For me, it's music. I'm really into Punjabi music (I'm Punjabi, lol) and, of course, Hindi romantic and classical hits (again typical Indian, haha). </p>
  <p>💻 I designed and developed this website from scratch, which I’m proud of.</p>
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
  )
}

export default About