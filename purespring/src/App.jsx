import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Carousel,
  Button,
} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Hero data
  const heroSlides = [
    {
      src: "/assets/video-thumbnail/waterbottles.webp",
      alt: "Bottled water",
      comment: "Hero image: water bottles",
      heading: "Pure Water, Pure Life",
      subtext: "Clean and ecofriendly hydration",
    },
    {
      src: "/assets/video-thumbnail/wateringlass.jpeg",
      alt: "Drinking water",
      comment: "Hero image: clean drinking water",
      heading: "Refresh Your Life",
      subtext: "Hydration you can trust every day",
    },
    {
      src: "/assets/video-thumbnail/man-drinking-water.jpg",
      alt: "Eco-friendly packaging",
      comment: "Hero image: eco packaging concept",
      heading: "Eco & Clean",
      subtext: "Sustainable packaging, safe for the planet",
    },
  ];

  // Example other data arrays (you already had these)
  const sustainabilityImages = [
    {
      src: "/assets/defImg/eco-friendly-bottle.jpg",
      alt: "Eco-Friendly Bottling",
      comment: "Show bottles with eco labels or packaging",
      title: "Eco-Friendly Bottling",
      text: "We use recyclable and biodegradable packaging to reduce waste.",
    },
    {
      src: "/assets/defImg/water-purifier.webp",
      alt: "Water Conservation",
      comment: "Show water source / conservation imagery",
      title: "Water Conservation",
      text: "Our purification methods save thousands of liters yearly.",
    },
    {
      src: "/assets/defImg/closeup-doctor-drinking-water-glass.webp",
      alt: "PH Neutral Water",
      comment: "Show water testing or lab imagery",
      title: "PH Neutral Water",
      text: "Our water is tested to ensure it is perfectly balanced.",
    },
  ];

  const deliveryImages = [
    {
      src: "/assets/defImg/water-delivery-truck-service-.webp",
      alt: "On-Time Delivery",
      comment: "Image of a delivery truck in city environment",
      title: "On-Time Guarantee",
      text: "We deliver fresh water right when you need it.",
    },
    {
      src: "/assets/defImg/nationwide.jpg",
      alt: "Wide Service Coverage",
      comment: "Show map or multiple delivery vans",
      title: "Wide Coverage",
      text: "Serving homes, offices, and businesses across regions.",
    },
    {
      src: "/assets/defImg/portrait-black-customer-support-consultant-receptionist-call-center-agent-with-headset-happy-expert-professional-woman-employee-working-ecommerce-telemarketing-company.jpg",
      alt: "Customer Support",
      comment: "Call center or support agent image",
      title: "24/7 Support",
      text: "Need urgent delivery? Our team is always ready.",
    },
  ];

  const purificationSteps = [
    {
      src: "/assets/defImg/natural-springsource.jpg",
      alt: "Water Collection",
      comment: "Image of natural spring or source",
      title: "1. Collection",
      text: "Sourced from natural springs and verified clean reserves.",
    },
    {
      src: "/assets/defImg/filtration-stage.jpg",
      alt: "Filtration Stage",
      comment: "Filter units or membranes",
      title: "2. Filtration",
      text: "Multi-stage filters remove sediments and impurities.",
    },
    {
      src: "/assets/defImg/purification-stage.jpg",
      alt: "Purification",
      comment: "RO / UV purification equipment",
      title: "3. Purification",
      text: "Advanced RO + UV purification ensures absolute safety.",
    },
    {
      src: "/assets/defImg/packaging-stage.webp",
      alt: "Packaging",
      comment: "Packaging line or sealed bottles",
      title: "4. Packaging",
      text: "Hygienically sealed to keep every drop pure.",
    },
  ];

  const certifications = [
    {
      src: "/assets/defImg/ISO 22000 certification logo.png",
      alt: "ISO 22000",
      comment: "ISO 22000 certification logo",
      text: "ISO 22000 Food Safety",
    },
    {
      src: "/assets/defImg/WHO.png",
      alt: "WHO Standards",
      comment: "WHO drinking water standards logo",
      text: "WHO Drinking Water Guidelines",
    },
    {
      src: "/assets/defImg/NAFDAC.png",
      alt: "NAFDAC Approved",
      comment: "NAFDAC logo (Nigeria regulatory body)",
      text: "NAFDAC Certified",
    },
    {
      src: "/assets/defImg/Halal.jpeg",
      alt: "Halal Certified",
      comment: "Halal certification logo",
      text: "Halal Certified",
    },
  ];

  const testimonials = [
    {
      text: "The water tastes amazing, and I love the eco-friendly packaging!",
      author: "Constance R.",
    },
    {
      text: "Fast delivery and top-notch purification. My family only trusts them now.",
      author: "Emeka K.",
    },
    {
      text: "Best water service I’ve experienced. Always reliable and refreshing.",
      author: "Jerry L.",
    },
  ];

  const galleryImages = [
    {
      src: "/assets/defImg/gallery1.jpg",
      alt: "Factory interior view",
      comment: "Inside the bottling factory, production line",
    },
    {
      src: "/assets/defImg/gallery2.jpg",
      alt: "Delivery van on road",
      comment: "Water delivery van in action",
    },
    {
      src: "/assets/defImg/gallery3.jpg",
      alt: "Customer drinking water",
      comment: "Happy customer drinking a glass of water",
    },
    {
      src: "/assets/defImg/gallery4.jpg",
      alt: "Eco packaging display",
      comment: "Display of eco-friendly packaging",
    },
    {
      src: "/assets/defImg/gallery5.jpg",
      alt: "Purification equipment",
      comment: "Water purification machinery / equipment",
    },
    {
      src: "/assets/defImg/gallery6.jpg",
      alt: "Bottling line closeup",
      comment: "Closeup of bottles on filling line",
    },
    {
      src: "/assets/defImg/gallery7.jpg",
      alt: "Staff at plant",
      comment: "Workers handling bottles in plant",
    },
    {
      src: "/assets/defImg/gallery8.jpg",
      alt: "Pipes and valves",
      comment: "Industrial piping and valves",
    },
    {
      src: "/assets/defImg/gallery9.jpg",
      alt: "Water tank outdoors",
      comment: "Storage tanks in plant outdoors",
    },
    {
      src: "/assets/defImg/gallery10.jpg",
      alt: "Quality control lab",
      comment: "Lab equipment for quality control testing",
    },
    {
      src: "/assets/defImg/gallery11.jpg",
      alt: "Warehouse storage",
      comment: "Warehouse full of packaged water bottles",
    },
    {
      src: "/assets/defImg/gallery12.jpg",
      alt: "Delivery loading dock",
      comment: "Loading trucks at dock for delivery",
    },
    {
      src: "/assets/defImg/gallery13.jpg",
      alt: "Bottle caps station",
      comment: "Station applying caps to bottles",
    },
    {
      src: "/assets/defImg/gallery14.jpg",
      alt: "Water filtration membranes",
      comment: "Membrane filters in purification stage",
    },
    {
      src: "/assets/defImg/gallery15.jpg",
      alt: "Cleanroom environment",
      comment: "Sterile / clean area of production",
    },
    {
      src: "/assets/defImg/gallery16.jpg",
      alt: "Transport trucks queue",
      comment: "Multiple delivery trucks in queue",
    },
    {
      src: "/assets/defImg/gallery17.jpg",
      alt: "Employees at inspection",
      comment: "Staff inspecting bottles for defects",
    },
    {
      src: "/assets/defImg/gallery18.jpg",
      alt: "Finished product display",
      comment: "Final packaged water bottles ready for sale",
    },
  ];
  const videoData = {
    thumbnail: "/assets/video-thumbnail/wateringlass.jpeg",
    videoUrl: "/assets/defImg/video1.mp4",
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Gallery: decide how many to show
  const initialCount = 8;
  const imagesToShow = showFullGallery
    ? galleryImages
    : galleryImages.slice(0, initialCount);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero / Banner */}
      <section id="home" className="hero-section">
        <Carousel fade controls={false} indicators={false}>
          {heroSlides.map((slide, idx) => (
            <Carousel.Item key={idx}>
              <div className="hero-slide-wrapper">
                <img
                  className="hero-slide-img"
                  src={slide.src}
                  alt={slide.alt}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                  <h1 className="hero-title">{slide.heading}</h1>
                  <p className="hero-subtext">{slide.subtext}</p>
                  <Button className="hero-btn" variant="light">
                    Order Now
                  </Button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Sustainability Section */}
      <section id="about" className="py-5 mt-2">
        <Container>
          <h2 className="text-center mb-4">Our Sustainability Commitment</h2>
          <Row>
            {sustainabilityImages.map((img, idx) => (
              <Col md={4} key={idx} data-aos="fade-up">
                <Card
                  className="shadow-sm"
                  onClick={() =>
                    openModal(
                      <img src={img.src} alt={img.alt} className="img-fluid" />
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img variant="top" src={img.src} />
                  <Card.Body>
                    <Card.Title>{img.title}</Card.Title>
                    <Card.Text>{img.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Delivery Section */}
      <section id="services" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Reliable Delivery</h2>
          <Row>
            {deliveryImages.map((img, idx) => (
              <Col md={4} key={idx} data-aos="fade-up">
                <Card
                  className="shadow-sm"
                  onClick={() =>
                    openModal(
                      <img src={img.src} alt={img.alt} className="img-fluid" />
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img src={img.src} />
                  <Card.Body>
                    <h5>{img.title}</h5>
                    <p>{img.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Purification Process */}
      <section id="products" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Purification Process</h2>
          <Row>
            {purificationSteps.map((step, idx) => (
              <Col md={3} key={idx} data-aos="zoom-in">
                <Card
                  className="shadow-sm"
                  onClick={() =>
                    openModal(
                      <img
                        src={step.src}
                        alt={step.alt}
                        className="img-fluid"
                      />
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img src={step.src} />
                  <Card.Body>
                    <Card.Title>{step.title}</Card.Title>
                    <Card.Text>{step.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Certifications */}
      <section id="gallery" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Certifications</h2>
          <Row className="text-center">
            {certifications.map((cert, idx) => (
              <Col md={3} key={idx} data-aos="fade-up">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="img-fluid"
                  style={{
                    maxHeight: "100px",
                    cursor: "pointer",
                    objectFit: "contain",
                  }}
                  onClick={() =>
                    openModal(
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className="img-fluid"
                      />
                    )
                  }
                />
                <p>{cert.text}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Testimonials</h2>
          <Row>
            {testimonials.map((t, idx) => (
              <Col md={4} key={idx} data-aos="fade-up">
                <Card className="shadow-sm p-3">
                  <Card.Body>
                    <Card.Text>“{t.text}”</Card.Text>
                    <h6>- {t.author}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section id="gallery-images" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Gallery</h2>
          <Row>
            {imagesToShow.map((img, idx) => (
              <Col md={3} key={idx} data-aos="zoom-in">
                <Card
                  className="shadow-sm"
                  onClick={() =>
                    openModal(
                      <img src={img.src} alt={img.alt} className="img-fluid" />
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img src={img.src} />
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            {showFullGallery ? (
              <Button
                variant="secondary"
                onClick={() => setShowFullGallery(false)}
              >
                See Less
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => setShowFullGallery(true)}
              >
                See More
              </Button>
            )}
          </div>
        </Container>
      </section>

      {/* Video Section */}
      <section id="contact" className="py-5 text-center">
        <Container>
          <h2 className="mb-4">Watch Our Story</h2>
          <div
            style={{ cursor: "pointer", display: "inline-block" }}
            onClick={() =>
              openModal(
                <div className="ratio ratio-16x9">
                  <iframe
                    src={videoData.videoUrl}
                    title="Water Video"
                    allowFullScreen
                  ></iframe>
                </div>
              )
            }
          >
            <img
              src={videoData.thumbnail}
              alt="Video Thumbnail"
              className="img-fluid rounded shadow-sm"
            />
            <p className="text-muted">click thumbnail to watch our story</p>
          </div>
        </Container>
      </section>

      <Footer darkMode={darkMode} />

      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
    </>
  );
}

export default App;
