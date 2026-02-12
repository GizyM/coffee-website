import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn, 
    FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="share">
        <Link to="#" className="fab fa-facebook-f" aria-label="Facebook">
          <FaFacebookF />
        </Link>
        <Link to="#" className="fab fa-twitter" aria-label="Twitter">
          <FaTwitter />
        </Link>
        <Link to="#" className="fab fa-instagram" aria-label="Instagram">
          <FaInstagram />
        </Link>
        <Link to="#" className="fab fa-linkedin-in" aria-label="LinkedIn">
          <FaLinkedinIn />
        </Link>
        <Link to="#" className="fab fa-pinterest-p" aria-label="Pinterest">
          <FaPinterestP />
        </Link>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/products">Products</Link>
        <Link to="/review">Review</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blogs">Blogs</Link>
      </div>

      <div className="credit">
        Created by <span>Gizy Michel</span> | All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
