import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";

const Home = () => {
  const slides = useMemo(
    () => [
      { src: "/images/home-img-1.png" },
      { src: "/images/home-img-2.png" },
      { src: "/images/home-img-3.png" }
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Welcome to Our Coffee Shop</h3>
        <p>
          Enjoy our freshly brewed coffee and cozy atmosphere.
          </p>
          <Link to="#menu" className="btn">
          Buy One Now
          </Link>
      </div>

      <div 
      className="image fade-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => (
          <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`main-home-image fade-image ${
            index === activeIndex ? "active" : ""
          }`}
          />
        ))}
      </div>

      <div className="image-slider">
        {slides.map((slide, idx) => (
          <button
            key={slide.src}
            className={`thumb ${idx === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
          >
            <img src={slide.src} alt={slide.alt} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Home
