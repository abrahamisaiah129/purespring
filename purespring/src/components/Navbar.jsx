import {
  Navbar as BSNavbar,
  Nav,
  Container,
  Button,
  Modal,
} from "react-bootstrap";
import { FaMoon, FaSun, FaPlayCircle } from "react-icons/fa";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [showVideo, setShowVideo] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <BSNavbar
        expand="lg"
        sticky="top"
        expanded={expanded}
        onToggle={(isOpen) => setExpanded(isOpen)}
        className={`shadow-sm glass-navbar ${
          darkMode ? "navbar-dark-mode" : "navbar-light-mode"
        }`}
        style={{
          backgroundColor: darkMode
            ? "rgba(34, 34, 34, 0.8)"
            : "rgba(0, 119, 182, 0.85)",
          transition: "all 0.3s ease",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container>
          <BSNavbar.Brand
            href="#home"
            className="d-flex align-items-center fw-bold text-light"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.2rem",
            }}
          >
            <img
              src="/assets/logo/page1_img1.jpeg"
              style={{
                width: "110px",
                height: "50px",
                borderRadius: "5%",
                objectFit: "contain",
                marginRight: "8px",
              }}
              alt="Logo"
            />
            Place
          </BSNavbar.Brand>

          <BSNavbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 custom-toggler"
          >
            <span className="custom-toggler-icon" />
          </BSNavbar.Toggle>

          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto text-center"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Nav.Link
                href="#home"
                className="nav-link-pro"
                onClick={handleNavClick}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className="nav-link-pro"
                onClick={handleNavClick}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#products"
                className="nav-link-pro"
                onClick={handleNavClick}
              >
                Products
              </Nav.Link>
              <Nav.Link
                href="#services"
                className="nav-link-pro"
                onClick={handleNavClick}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#gallery"
                className="nav-link-pro"
                onClick={handleNavClick}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="nav-link-pro"
                onClick={handleNavClick}
              >
                Contact
              </Nav.Link>
              <Button
                variant="outline-light"
                size="sm"
                className="ms-3 d-flex align-items-center"
                onClick={() => {
                  handleNavClick();
                  setShowVideo(true);
                }}
              >
                <FaPlayCircle className="me-2" /> Watch Video
              </Button>
            </Nav>

            <Button
              onClick={() => {
                setDarkMode(!darkMode);
                setExpanded(false);
              }}
              variant={darkMode ? "light" : "warning"}
              className="ms-3 rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      <Modal
        show={showVideo}
        onHide={() => setShowVideo(false)}
        size="lg"
        centered
      >
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9">
            <iframe
              src="/assets/defImg/video1.mp4"
              title="Promo Video"
              allowFullScreen
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
