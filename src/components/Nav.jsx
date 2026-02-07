"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <nav className="navbar section-content">
                <Link to="#" className="nav-logo">
                    <h2 className="logo-text">
                         ☕ Coffee
                    </h2>
                </Link>
                <ul className={`nav-menu ${isMenuOpen ? "mobile-menu" : ""}`}>
                    <button id="menu-close-button" 
                    className="fas fa-times" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FontAwesomeIcon icon="circle-xmark" />
                    </button>
                    <li>
                        <Link to="#" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link">About</Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link">Menu</Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link">Testimoninals</Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link">Gallery</Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <button id="menu-open-button" className="fas fa-bars" onClick={() => setIsMenuOpen(true)}>
                    <FontAwesomeIcon icon="bars" />
                </button>
            </nav>
        </header>
    )
}

export default Nav;