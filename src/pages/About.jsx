import { Link } from "react-router-dom";
import AboutImg from "../assets/images/about-img.png";
import AboutIcon1 from "../assets/images/about-icon-1.png";
import AboutIcon2 from "../assets/images/about-icon-2.png";
import AboutIcon3 from "../assets/images/about-icon-3.png";

const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="heading">
                About <span>Us </span>
                </h1>

                <div className="row">
                    <div className="image">
                        <img src={AboutImg} alt="About our coffee shop" />
                    </div>

                    <div className="content">
                        <h3 className="title">Our Story</h3>
                        <p>
                            Welcome to our coffee shop! We are passionate about serving the finest coffee 
                            and creating a warm, inviting atmosphere for our customers. 
                            Our journey began with a simple love for coffee and a dream to share that love with the community.
                        </p>
                        <p>
                            We take pride in sourcing our beans from sustainable farms and roasting them to perfection. 
                            Whether you're here for a quick espresso or a leisurely latte, we strive to make every cup special.
                        </p>

                        <Link to="#" className="btn">
                            Learn More
                        </Link>

                        <div className="icons-container">
                            <div className="icons">
                                <img src={AboutIcon1} alt="quality coffee" />
                                <h3>Quality Coffee</h3>
                            </div>

                            <div className="icons">
                                <img src={AboutIcon2} alt="friendly staff" />
                                <h3>Friendly Staff</h3>
                            </div>
                            <div className="icons">
                                <img src={AboutIcon3} alt="speedy delivery" />
                                <h3>Speedy Delivery</h3>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default About;