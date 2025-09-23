import { Navbar as BSNavbar, Nav, Container, Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
    return (
        <BSNavbar
            expand="lg"
            sticky="top"
            className="shadow-sm glass-navbar"
            style={{
                backgroundColor: darkMode
                    ? "rgba(34, 34, 34, 0.8)"
                    : "rgba(0, 119, 182, 0.85)", // brand aqua blue
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
            }}
        >
            <Container>
                {/* Logo + Brand */}
                <BSNavbar.Brand
                    href="#home"
                    className="d-flex align-items-center fw-bold text-light"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.2rem",
                    }}
                >
                    <img
                        src="../src/assets/logo/page1_img1.jpeg"
                        style={{
                            width: "150px",
                            height: "40px",
                            borderRadius: "5%",
                            objectFit: "contain",
                            marginRight: "8px",
                        }}
                        alt="Pure Spring Logo"
                    />
                    Pure Spring
                </BSNavbar.Brand>

                {/* Mobile Hamburger */}
                <BSNavbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="border-0"
                />

                {/* Collapsible Menu */}
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="ms-auto text-center"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        <Nav.Link href="#home" className="nav-link-pro">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" className="nav-link-pro">
                            About
                        </Nav.Link>
                        <Nav.Link href="#products" className="nav-link-pro">
                            Products
                        </Nav.Link>
                        <Nav.Link href="#services" className="nav-link-pro">
                            Services
                        </Nav.Link>
                        <Nav.Link href="#gallery" className="nav-link-pro">
                            Gallery
                        </Nav.Link>
                        <Nav.Link href="#contact" className="nav-link-pro">
                            Contact
                        </Nav.Link>
                    </Nav>

                    {/* Dark Mode Toggle */}
                    <Button
                        onClick={() => setDarkMode(!darkMode)}
                        variant={darkMode ? "light" : "warning"}
                        className="ms-3 rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </Button>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}

export default Navbar;
