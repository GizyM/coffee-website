import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import Home1 from "../assets/images/review-bg.jpg";
import Home2 from "../assets/images/home-bg.jpg";
import Home3 from "../assets/images/home-bg1.jpg";

const Home = () => {
  const slides = useMemo(
    () => [
      { src: Home1 },
      { src: Home2 },
      { src: Home3 }
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
    className="home"
    id="home"
    style={{
      backgroundImage: `url(${slides[activeIndex].src})`
    }}
  >
    {/* Fade Overlay Layer */}
    <div className="home-fade-overlay" />

    <div className="content">
      <h3>Welcome to Our Coffee Shop</h3>
      <p>
        Enjoy our freshly brewed coffee and cozy atmosphere.
      </p>
      <Link to="#menu" className="btn">
        Buy One Now
      </Link>
    </div>
  </section>
  );
};

export default Home
