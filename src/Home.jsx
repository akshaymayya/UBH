import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sponsor1 from './assets/sponsor1.png';
import sponsor2 from './assets/sponsor2.png';
import sponsor3 from './assets/sponsor3.png';
import blog1 from './assets/blog_1.jpg';
import blog2 from './assets/blog_2.jpg';
import blog3 from './assets/blog_3.jpg';
import feature1 from './assets/feature_1.jpg';

import homeBg from './assets/home_bg_final.jpg';
import logo from './assets/logo.png';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [activeIndex, setActiveIndex] = useState(1); // Start with middle card

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    // 3D Carousel Logic
    const getCardStyle = (index) => {
        const offset = index - activeIndex;
        const absOffset = Math.abs(offset);
        const isActive = offset === 0;

        // Configuration
        const rotateAngle = 50; // Steeper angle
        const xGap = 130; // Closer spacing for more overlap
        const zOffset = -200; // Deep push

        // Calculations
        const translateX = offset * xGap;
        const translateZ = isActive ? 0 : zOffset;
        const rotateY = offset * -rotateAngle; // Inward facing
        const scale = isActive ? 1.05 : 0.7; // Significant size difference

        // Adjust opacity: Side cards shouldn't be too transparent if they overlap
        const opacity = isActive ? 1 : 0.8;
        const zIndex = 50 - absOffset;

        return {
            // translate(-50%, -50%) centers the card origin in the container
            // Then we move it by translateX pixels
            transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
            zIndex: zIndex,
            opacity: opacity,
        };
    };

    const blogs = [
        {
            id: 1,
            title: "The AI Revolution in Enterprise",
            excerpt: "How artifical intelligence is reshaping the corporate landscape...",
            date: "Dec 12, 2025",
            image: blog1
        },
        {
            id: 2,
            title: "Sustainable Tech: The New Gold Rush",
            excerpt: "Why green technology is the next trillion-dollar industry...",
            date: "Dec 10, 2025",
            image: blog2
        },
        {
            id: 3,
            title: "Leadership in the Digital Age",
            excerpt: "Adapting management strategies for remote teams...",
            date: "Dec 08, 2025",
            image: blog3
        }
    ];

    // Navigation Handlers
    const handleNext = (e) => {
        e.stopPropagation(); // Prevent card click
        setActiveIndex((prev) => (prev + 1) % blogs.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
    };

    // Scroll Animation Observer
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: '0px 0px -50px 0px' // Offset slightly
        });

        const animatedElements = document.querySelectorAll('.animate-fade-up');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-wrapper">
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${homeBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: -2, // Behind everything including overlay
                pointerEvents: 'none'
            }} />
            <div className="home-overlay"></div>
            <header className="header">
                <div className="logo-container">
                    <img src={logo} alt="UBH Logo" className="logo-img-main" />
                </div>
                <nav className="nav">
                    <button className="menu-btn" onClick={toggleMenu}>
                        Menu <span className="hamburger">≡</span>
                    </button>
                </nav>
            </header>

            {/* Menu Overlay (Reused) */}
            <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>&times;</button>
                <div className="menu-links">
                    <Link to="/home" className="menu-link" onClick={toggleMenu}>Home</Link>
                    <a href="#about" className="menu-link" onClick={toggleMenu}>About</a>
                    <a href="#benefits" className="menu-link" onClick={toggleMenu}>Club Benefits</a>
                    <a href="#contact" className="menu-link" onClick={toggleMenu}>Contact</a>
                </div>
            </div>

            <main className="hero home-hero animate-page-enter">
                <section className="welcome-section animate-fade-up">
                    <h1 className="hero-title">
                        Welcome to <span className="highlight">UBH</span>
                    </h1>
                    <p className="hero-subtitle">United Brother Hood.</p>
                </section>

                <section id="about" className="content-section animate-fade-up delay-100">
                    <h2 className="section-title">About UBH</h2>
                    <div className="glass-card full-width about-card">
                        <div className="about-content">
                            <p className="section-text">
                                United Brother Hood (UBH) is more than just a newsletter; it's a collective of visionaries,
                                technologists, and market movers. We bridge the gap between complex technological advancements
                                and actionable business intelligence.
                            </p>
                            <div className="about-image-wrapper">
                                <img src={feature1} alt="About UBH" className="about-image" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="benefits" className="content-section animate-fade-up delay-200">
                    <h2 className="section-title">Club Benefits</h2>
                    <div className="benefits-grid">
                        <div className="glass-card benefit-item">
                            <h3>Early Access</h3>
                            <p>Get market-moving news 24 hours before the public.</p>
                        </div>
                        <div className="glass-card benefit-item">
                            <h3>Network</h3>
                            <p>Connect with industry leaders in our private Discord.</p>
                        </div>
                        <div className="glass-card benefit-item">
                            <h3>Alpha</h3>
                            <p>Exclusive reports on emerging tech unicorns.</p>
                        </div>
                    </div>
                </section>

                <section className="blogs-section animate-fade-up delay-300">
                    <h2 className="section-title">Latest Insights</h2>

                    <div className="carousel-3d-container">
                        <button className="carousel-arrow left" onClick={handlePrev}>&larr;</button>

                        {blogs.map((blog, index) => (
                            <div
                                key={blog.id}
                                className={`carousel-card-3d ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => handleCardClick(index)}
                                style={getCardStyle(index)}
                            >
                                <div className="glass-card blog-card-content">
                                    <div className="blog-image-container">
                                        <img src={blog.image} alt={blog.title} className="blog-image" />
                                    </div>
                                    <div className="blog-info">
                                        <h3 className="blog-title">{blog.title}</h3>
                                        <div className="blog-meta">{blog.date}</div>
                                        <Link to={`/blog/${blog.id}`} className="read-more-btn">Read Entry &rarr;</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button className="carousel-arrow right" onClick={handleNext}>&rarr;</button>
                    </div>

                    {/* Navigation Dots */}
                    <div className="carousel-nav">
                        {blogs.map((_, index) => (
                            <button
                                key={index}
                                className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </section>

                <section className="sponsor-section-large animate-fade-up delay-400">
                    <h2 className="section-title">Supported By</h2>
                    <div className="sponsor-grid">
                        <div className="sponsor-item glass-card">
                            <img src={sponsor1} alt="Sponsor 1" className="sponsor-logo-img" />
                        </div>
                        <div className="sponsor-item glass-card">
                            <img src={sponsor2} alt="Sponsor 2" className="sponsor-logo-img large" />
                        </div>
                        <div className="sponsor-item glass-card">
                            <img src={sponsor3} alt="Sponsor 3" className="sponsor-logo-img" />
                        </div>
                    </div>
                </section>

                <section id="contact" className="content-section animate-fade-up delay-500">
                    <h2 className="section-title">Contact</h2>
                    <div className="glass-card full-width text-center">
                        <p className="section-text">
                            Have a scoop? Want to partner? <br />
                            Reach out to us directly.
                        </p>
                        <a href="mailto:hello@ubh.com" className="cta-button glass-button mt-4">Email Us</a>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="copyright">
                    &copy; 2025 UBH. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Home;
