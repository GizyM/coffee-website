import React, { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import CoffeeCup from "../assets/images/coffee-cup.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Contact</span> Us
      </h1>

      <div className="row">
        <div className="coffee-visual">
          <img src={CoffeeCup} alt="Coffee Cup" className="coffee-cup" />
          <span className="steam steam1" />
          <span className="steam steam2" />
          <span className="steam steam3" />
        </div>

        <form onSubmit={handleSubmit}>
          <h3>Get in Touch</h3>

          <div className="input-box">
            <FaUser />
            <input 
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaEnvelope />
            <input 
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaPhone />
            <input 
              type="tel"
              placeholder="Your Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">
            Contact Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
