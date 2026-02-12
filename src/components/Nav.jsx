import { useMemo, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
    FaMugHot,
    FaSearch,
    FaShoppingCart,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import Cart1 from "../assets/images/menu-1.png";
import Cart2 from "../assets/images/menu-2.png";
import Cart3 from "../assets/images/menu-3.png";
import Cart4 from "../assets/images/menu-4.png";


export default function Nav() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cartItems = useMemo(
        () => [
            { id: 1, title: "cart item 01", price: "$15.99/-", img: Cart1 },
            { id: 2, title: "cart item 02", price: "$15.99/-", img: Cart2 },
            { id: 3, title: "cart item 03", price: "$15.99/-", img: Cart3 },
            { id: 4, title: "cart item 04", price: "$15.99/-", img: Cart4 },
        ],
        []
    );

    const closeAll = () => {
        setIsSearchOpen(false);
        setIsCartOpen(false);
        setIsMenuOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen((p) => !p);
        setIsCartOpen(false);
        setIsMenuOpen(false);
    };

    const toggleCart = () => {
        setIsCartOpen((p) => !p);
        setIsSearchOpen(false);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((p) => !p);
        setIsSearchOpen(false);
        setIsCartOpen(false);
    };

    return (
        <header className="header">
            <Link to="/" className="logo" onClick={closeAll}>
            Coffee <FaMugHot />
            </Link>

            <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
                <NavLink to="/" onClick={closeAll}>
                    Home
                </NavLink>
                <NavLink to="/about" onClick={closeAll}>
                    About
                </NavLink>
                <NavLink to="/menu" onClick={closeAll}>
                    Menu
                </NavLink>
                <NavLink to="/products" onClick={closeAll}>
                    Products
                </NavLink>
                <NavLink to="/review" onClick={closeAll}>
                    Reviews
                </NavLink>
                <NavLink to="/contact" onClick={closeAll}>
                    Contact
                </NavLink>
                <NavLink to="/blogs" onClick={closeAll}>
                    Blogs
                </NavLink>
            </nav>
            <div className="icons">
                <button
                type="button"
                className="icon-btn search-btn"
                onClick={toggleSearch}>
                    <FaSearch />
                </button>

                <button
                type="button"
                className="icon-btn cart-btn"
                onClick={toggleCart}>
                    <FaShoppingCart />
                </button>

                <button
                type="button"
                className="icon-btn menu-btn"
                onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <div className={`search-form ${isSearchOpen ? "active" : ""}`}>
                <input type="search" className="search-box" placeholder="Search..." />
                <span className="search-icon">
                    <FaSearch />
                </span>
            </div>

            <div className={`cart-items-container ${isCartOpen ? "active" : ""}`}>
                {cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <button type="button" className="cart-remove">
                            <FaTimes />
                        </button>
                        <img src={item.img} alt={item.title} />
                        <div className="content">
                            <h3 className="item-title">{item.title}</h3>
                            <div className="item-price">{item.price}</div>
                        </div>
                    </div>
                ))}
                <Link to="#" className="btn">
                    Checkout
                </Link>
            </div>
        </header>
    );
}

