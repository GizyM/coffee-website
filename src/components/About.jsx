import React from 'react'
import AboutImage from "../assets/images/about-image.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
      <div className="section-content">
        <div className="about-image-wrapper">
            <img src={AboutImage} alt="About" className="about-image" />
        </div>
        <div className="about-details">
            <h2 className="section-title">About Us</h2>
            <p className="about-description">
                At Coffee House in Berndorf, Germany, we pride ourselves on being a go-to destination for coffee loves and 
                conversation seekers alike. We're dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere,
                where guests can relax, unwind, and enjoy their time in comfort.
            </p>
            <div className="social-link-list">
                <Link to="https://www.facebook.com" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="https://www.twitter.com" className="social-link">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://www.instagram.com" className="social-link">
                    <i className="fab fa-instagram"></i>
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About;
