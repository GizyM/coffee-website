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
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/menu">menu</Link>
        <Link to="/products">products</Link>
        <Link to="/review">review</Link>
        <Link to="/contact">contact</Link>
        <Link to="/blogs">blogs</Link>
      </div>

      <div className="credit">
        created by <span>Gizy Michel</span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
