import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer({ darkMode }) {
    return (
        <footer
            className="pt-5"
            style={{
                background: darkMode
                    ? "linear-gradient(135deg, #0d1b2a, #1b263b)"
                    : "linear-gradient(135deg, #0077b6, #00b894)",
                color: "white",
            }}
        >
            <Container>
                <div className="row">
                    {/* Brand Info */}
                    <div className="col-md-4 mb-4">
                        <img
                            src="../src/assets/logo/page1_img1.jpeg"
                            alt="Ribabu’s Place Ltd Logo"
                            style={{ width: "120px", borderRadius: "8px" }}
                            className="mb-3"
                        />
                        <p>
                            Ribabu’s Place Ltd (RC-906037), founded in 2010,
                            delivers premium table water and reliable sand
                            dredging from its headquarters at Road 4, Plot 859
                            Uratta Housing Estate, Owerri, Imo State. Refreshing
                            lives, building foundations.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#products">Products</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#gallery">Gallery</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info + Socials */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Contact Us</h5>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:info@ribabusplaceltd.com"
                                className="text-white"
                            >
                                info@ribabusplaceltd.com
                            </a>
                        </p>
                        <p>Phone: +234 (0) 800-123-4567</p>{" "}
                        {/* Placeholder—replace with official line */}
                        <p>
                            Address: Road 4, Plot 859, Uratta Housing Estate,
                            Owerri, Imo State
                        </p>
                        <div className="social-icons mt-3">
                            {/* Replace href="#" with actual social links once found */}
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="text-center py-3 mt-4"
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                        fontSize: "0.9rem",
                    }}
                >
                    © {new Date().getFullYear()} Ribabu’s Place Ltd. All rights
                    reserved.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
