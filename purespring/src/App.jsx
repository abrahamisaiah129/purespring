import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container, Button, Form } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "./components/scrollToTopButton";
import Loader from "./components/Loader";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        AOS.init({
            duration: 1000,
            once: true,
        });
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div
            className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
            style={{ minHeight: "100vh", transition: "all 0.4s ease" }}
        >
            {/* Navbar */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <ScrollToTopButton />

            {/* Hero Section */}
            <section
                id="home"
                className="d-flex align-items-center text-center text-white gradient-animate"
                style={{
                    height: "100vh",
                    background: `linear-gradient(135deg, rgba(0,119,182,0.85), rgba(0,184,148,0.85)), 
                      url("/assets/about/page3_img1.jpeg") center/cover no-repeat`, // Updated image
                }}
                data-aos="fade-in"
            >
                <Container>
                    <h1 className="fw-bold display-3" data-aos="zoom-in">
                        Ribabu’s Place Ltd
                    </h1>
                    <p
                        className="lead mb-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Pure Refreshment. Solid Foundations.
                    </p>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Button
                            href="#products"
                            size="lg"
                            variant="success"
                            className="me-3"
                        >
                            Discover Our Water
                        </Button>
                        <Button href="#services" size="lg" variant="light">
                            Explore Dredging
                        </Button>
                    </div>
                </Container>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-5" data-aos="fade-up">
                <Container>
                    <h2 className="text-center mb-4 fw-bold" data-aos="zoom-in">
                        About Ribabu’s Place Ltd
                    </h2>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3" data-aos="fade-right">
                            {/* About Image */}
                            <img
                                src="/assets/about/page3_img1.jpeg" // Updated image (assuming this is the team photo or company office)
                                alt="About Ribabu’s Place Ltd"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <p>
                                Founded in <strong>2010</strong>, Ribabu’s Place
                                Ltd (RC-906037) is headquartered at{" "}
                                <em>
                                    Road 4, Plot 859, Uratta Housing Estate,
                                    Owerri, Imo State
                                </em>
                                . We specialize in premium table water and
                                reliable sand dredging services across Nigeria.
                            </p>
                            <p>
                                Our mission is simple: to <em>refresh lives</em>{" "}
                                and <em>build strong foundations</em> through
                                safe, accessible water and sustainable dredging
                                operations.
                            </p>
                            <ul className="custom-list">
                                <li>
                                    <strong>Mission:</strong> Provide clean
                                    hydration and dependable dredging for every
                                    community.
                                </li>
                                <li>
                                    <strong>Vision:</strong> To be the most
                                    trusted name in water and construction
                                    support services in Africa.
                                </li>
                                <li>
                                    <strong>Core Values:</strong> Quality ·
                                    Sustainability · Customer First
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Products Section */}
            <section
                id="products"
                className="py-5 gradient-animate"
                style={{
                    background: darkMode
                        ? "linear-gradient(135deg, #0d1b2a, #1b263b)"
                        : "linear-gradient(135deg, #0077b6, #00b894)",
                    color: "white",
                }}
                data-aos="fade-up"
            >
                <Container>
                    <h2 className="text-center mb-4 fw-bold" data-aos="zoom-in">
                        Our Products
                    </h2>
                    <div className="row">
                        <div
                            className="col-md-4 mb-3"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            {/* Bottled Water */}
                            <img
                                src="/assets/products/page4_img1.jpeg" // Updated image
                                className="card-img-top"
                                alt="Bottled Water"
                            />
                            <h5 className="mt-3">Bottled Water</h5>
                            <p>
                                Premium bottled water in multiple sizes, sealed
                                for safety.
                            </p>
                            <ul className="custom-list">
                                <li>Safe & sealed</li>
                                <li>Multiple sizes</li>
                                <li>Ideal for homes & offices</li>
                            </ul>
                        </div>

                        <div
                            className="col-md-4 mb-3"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            {/* Sachet Water */}
                            <img
                                src="/assets/products/page5_img1.jpeg" // Updated image
                                className="card-img-top"
                                alt="Sachet Water"
                            />
                            <h5 className="mt-3">Sachet Water</h5>
                            <p>
                                Affordable, hygienically packaged for everyday
                                hydration.
                            </p>
                            <ul className="custom-list">
                                <li>Fresh & clean</li>
                                <li>Affordable</li>
                                <li>Trusted nationwide</li>
                            </ul>
                        </div>

                        <div
                            className="col-md-4 mb-3"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            {/* Bulk Supply */}
                            <img
                                src="/assets/products/page6_img1.jpeg" // Updated image
                                className="card-img-top"
                                alt="Bulk Supply"
                            />
                            <h5 className="mt-3">Bulk Supply</h5>
                            <p>
                                Water delivered in bulk for events, hotels, and
                                projects.
                            </p>
                            <ul className="custom-list">
                                <li>Corporate solutions</li>
                                <li>Efficient logistics</li>
                                <li>Perfect for events</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Services Section */}
            <section id="services" className="py-5" data-aos="fade-up">
                <Container>
                    <h2 className="text-center mb-4 fw-bold" data-aos="zoom-in">
                        Our Services
                    </h2>
                    <p className="text-center mb-5 w-75 mx-auto">
                        Ribabu’s Place Ltd, as a subsidiary brand for table
                        water and foundation solutions, offers{" "}
                        <strong>premium hydration</strong>,{" "}
                        <strong>eco-friendly dredging</strong>, and{" "}
                        <strong>seamless logistics</strong> across Nigeria.
                    </p>
                    <div className="row">
                        <div className="col-md-6 mb-3" data-aos="fade-right">
                            {/* Dredging */}
                            <img
                                src="/assets/services/page7_img1.jpeg" // Updated image
                                alt="Sand Dredging"
                                className="img-fluid rounded mb-3"
                            />
                            <h4>Sand Dredging</h4>
                            <p>
                                Our dredging operations are designed for maximum
                                output with minimal environmental impact.
                            </p>
                            <ul className="custom-list">
                                <li>High-quality sand supply</li>
                                <li>Eco-friendly methods</li>
                                <li>Reliable, prompt delivery</li>
                            </ul>
                        </div>

                        <div className="col-md-6 mb-3" data-aos="fade-left">
                            {/* Water Production & Logistics */}
                            <img
                                src="/assets/services/page8_img1.jpeg" // Updated image
                                alt="Water Production & Logistics"
                                className="img-fluid rounded mb-3"
                            />
                            <h4>Water Production & Logistics</h4>
                            <p>
                                Our table water is produced under strict quality
                                controls and delivered nationwide.
                            </p>
                            <ul className="custom-list">
                                <li>Stringent quality checks</li>
                                <li>Clean & safe packaging</li>
                                <li>Fast delivery across regions</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section
                id="values"
                className="py-5"
                style={{ backgroundColor: darkMode ? "#222" : "#f8f9fa" }}
                data-aos="fade-up"
            >
                <Container>
                    <h2 className="text-center mb-4 fw-bold" data-aos="zoom-in">
                        Our Values
                    </h2>
                    <div className="row text-center">
                        <div className="col-md-4 mb-3" data-aos="zoom-in">
                            <h4>Quality</h4>
                            <p>
                                Every product and service is held to the highest
                                standards.
                            </p>
                        </div>
                        <div className="col-md-4 mb-3" data-aos="zoom-in">
                            <h4>Sustainability</h4>
                            <p>
                                We operate responsibly, protecting the
                                environment long-term.
                            </p>
                        </div>
                        <div className="col-md-4 mb-3" data-aos="zoom-in">
                            <h4>Customer First</h4>
                            <p>Your needs drive everything we do.</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-5" data-aos="fade-up">
                <Container>
                    <h2 className="text-center mb-4 fw-bold" data-aos="zoom-in">
                        Gallery
                    </h2>
                    <div className="row">
                        {[
                            "/assets/gallery/page6_img1.jpeg", // Updated image
                            "/assets/gallery/page7_img1.jpeg", // Updated image
                            "/assets/gallery/page9_img1.jpeg", // Updated image
                            "/assets/gallery/page10_img1.jpeg", // Updated image
                            "/assets/gallery/page11_img1.jpeg", // Updated image
                        ].map((img, i) => (
                            <div
                                key={i}
                                className="col-md-4 mb-3"
                                data-aos="zoom-in"
                                data-aos-delay={i * 150}
                            >
                                <img
                                    src={img}
                                    alt="gallery"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-5 gradient-animate"
                style={{
                    background: darkMode
                        ? "linear-gradient(135deg, #1e1e1e, #111)"
                        : "linear-gradient(135deg, #0077b6, #00b894)",
                    color: "white",
                }}
                data-aos="fade-up"
            >
                <Container>
                    <h2 className="text-center mb-4" data-aos="zoom-in">
                        Contact Us
                    </h2>
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Type your message"
                                    />
                                </Form.Group>
                                <Button type="submit" variant="light">
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <h5>Email</h5>
                            <p>
                                <a
                                    href="mailto:info@ribabusplaceltd.com"
                                    className="text-white"
                                >
                                    info@ribabusplaceltd.com
                                </a>
                            </p>
                            <h5>Phone</h5>
                            <p>+234 (0) 800-123-4567</p>
                            <h5>Location</h5>
                            <p>
                                Road 4, Plot 859 Uratta Housing Estate, Owerri,
                                Imo State, Nigeria
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Footer */}
            <Footer darkMode={darkMode} />
        </div>
    );
}

export default App;
