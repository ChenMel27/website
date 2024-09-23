import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import SampleVideo from './waterfall.mp4';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook to get current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === '/'; // Check if current route is home

  return (
    <div className="App">
      {/* Only show the header and video on the home page */}
      {isHomePage && (
        <header className="App-header">
          <div>
            <video className="Sample-video" autoPlay muted loop>
              <source src={SampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h1 className="App-title">Be bold. <br />Be creative.</h1>
            <nav className="Nav">
              <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <span className="brand-title">MYC</span>
            </nav>
          </div>
        </header>
      )}

      {/* Overlay and Menu */}
      <div className={`overlay ${isOpen ? 'active' : ''}`}>
        <div className={`menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Only show the About, Projects, Photography, and Skills sections on the home page */}
      {isHomePage && (
        <>
          <section className="About">
            <h2>About Me</h2>
            <p>I’m a creative developer passionate about blending design and technology.</p>
          </section>

          <section className="Projects">
            <h2>My Experiences and Projects</h2>
            <div className="project-cards">
              <div className="project-card">
                <h3>Microsoft Visual Studio</h3>
                <p>UX Design intern focused on improving user experience for development tools.</p>
              </div>
              <div className="project-card">
                <h3>Xbox PlayFab</h3>
                <p>Product management role overseeing cloud services for game development.</p>
              </div>
            </div>
          </section>

          <section className="Skills">
            <h2>Skills</h2>
            <div className="skills-container">
              <div className="skill-card">
                <h3>JavaScript</h3>
                <p>Proficient in React and Node.js</p>
              </div>
              <div className="skill-card">
                <h3>CSS/SCSS</h3>
                <p>Experienced in modern CSS techniques.</p>
              </div>
              <div className="skill-card">
                <h3>UI/UX Design</h3>
                <p>Knowledgeable in user-centered design principles and prototyping.</p>
              </div>
              <div className="skill-card">
                <h3>Backend Development</h3>
                <p>Familiar with server-side technologies and databases.</p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;