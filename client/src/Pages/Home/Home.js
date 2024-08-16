import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signin');
  };

  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ExamerPro™</h1>
          <p className="hero-subtitle">Your ultimate platform for managing and creating exams with ease.</p>
          <button className="cta-button" onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </header>
      <section id="features" className="features-section">
        <div className="features-container">
          <div className="feature">
            <h2 className="feature-title">Intuitive Interface</h2>
            <p className="feature-description">Experience a user-friendly interface designed to streamline your exam creation and management process.</p>
          </div>
          <div className="feature">
            <h2 className="feature-title">Powerful Tools</h2>
            <p className="feature-description">Utilize advanced tools and features to craft precise and effective exams tailored to your needs.</p>
          </div>
          <div className="feature">
            <h2 className="feature-title">Real-Time Analytics</h2>
            <p className="feature-description">Gain insights and track performance with real-time analytics and reporting.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p className="footer-text">© 2024 ExamerPro™. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
