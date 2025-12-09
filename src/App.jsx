import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import DemoInfos from './DemoInfos';
import Home from './Home';
import BlogPost from './BlogPost';
import sponsor1 from './assets/sponsor1.png';
import sponsor2 from './assets/sponsor2.png';
import sponsor3 from './assets/sponsor3.png';
import landingBg from './assets/landing_bg.jpg';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);

    // Trigger Exit Animation
    setIsExiting(true);

    // Wait for animation to finish then navigate
    setTimeout(() => {
      navigate('/home');
    }, 800); // 800ms matches CSS transition
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`landing-page-container ${isExiting ? 'page-exit' : ''}`} style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${landingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0
      }} />
      <div className="home-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}></div>
      <header className="header" style={{ position: 'relative', zIndex: 10 }}>
        <div className="logo">UBH</div>
        <nav className="nav">
          <button className="menu-btn" onClick={toggleMenu}>
            Menu <span className="hamburger">≡</span>
          </button>
        </nav>
      </header>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <div className="menu-links">
          <a href="/home" className="menu-link" onClick={toggleMenu}>Home</a>
          <a href="/home#about" className="menu-link" onClick={toggleMenu}>About</a>
          <a href="/home#benefits" className="menu-link" onClick={toggleMenu}>Club Benefits</a>
          <a href="/home#contact" className="menu-link" onClick={toggleMenu}>Contact</a>
        </div>
      </div>

      <main className="hero" style={{ position: 'relative', zIndex: 10 }}>
        <h1 className="hero-title">
          The Future of <br />
          Tech & Business. <span className="highlight">UBH.</span>
        </h1>

        <p className="hero-subtitle">
          Join the United Brother Hood. Get exclusive access to the latest insights in technology and business before the rest of the world catches up. Don't be average.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="email-icon">✉</span>
            <input
              type="email"
              placeholder="Your Email here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="cta-button glass-button">Join UBH</button>
        </form>
      </main>

      <footer className="footer">
        <div className="sponsored">
          <p className="sponsored-text">Sponsored By</p>
          <div className="sponsors-logos">
            <img src={sponsor1} alt="Sponsor 1" className="sponsor-logo-img" />
            <img src={sponsor2} alt="Sponsor 2" className="sponsor-logo-img" />
            <img src={sponsor3} alt="Sponsor 3" className="sponsor-logo-img" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    const onMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('.glass-card')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <div
          className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
          style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
        ></div>
        {/* Removed global overlay as it might interfere with per-page backgrounds/overlays */}
        {/* <div className="overlay"></div> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demo" element={<DemoInfos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
