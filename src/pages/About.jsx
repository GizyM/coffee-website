import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="heading">
                About <span>Us </span>
                </h1>

                <div className="row">
                    <div className="image">
                        <img src="/images/about-img.png" alt="About our coffee shop" />
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
                                <img src="/images/about-icon-1.png" alt="quality coffee" />
                                <h3>Quality Coffee</h3>
                            </div>

                            <div className="icons">
                                <img src="/images/about-icon-2.png" alt="friendly staff" />
                                <h3>Friendly Staff</h3>
                            </div>
                            <div className="icons">
                                <img src="/images/about-icon-3.png" alt="cozy atmosphere" />
                                <h3>Cozy Atmosphere</h3>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default About;