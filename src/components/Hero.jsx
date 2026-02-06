import React from 'react'
import { Link } from 'react-router-dom';
import CoffeeHero from "../assets/images/coffee-hero-section.png"

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="section-content">
        <div className="hero-details">
            <h2 className="title">Best Coffee</h2>
            <h3 className="subtitle">Make your day great with our special coffee!</h3>
            <p className="description">Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
            <div className="buttons">
                <Link to="#" className="button order-now">Order Now</Link>
                <Link to="#" className="button contact-us">Contact Us</Link>
            </div>
        </div>
        <div className="hero-image-wrapper">
            <img src={CoffeeHero} alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero
