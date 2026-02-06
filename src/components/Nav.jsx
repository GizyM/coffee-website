import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <header>
            <nav className="navbar section-content">
                <Link to="#" className="nav-logo">
                    <h2 className="logo-text">
                         ☕ Coffee
                    </h2>
                </Link>
                <ul className="nav-menu">
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
            </nav>
        </header>
    )
}

export default Nav;