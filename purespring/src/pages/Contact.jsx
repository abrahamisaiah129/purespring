import { Container, Form, Button } from "react-bootstrap";

function Contact() {
    return (
        <Container className="py-5">
            <h2 className="mb-4">Contact Us</h2>
            <div className="row">
                <div className="col-md-6">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Type your message"
                                required
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Send Message
                        </Button>
                    </Form>
                </div>
                <div className="col-md-6">
                    <h5>Email</h5>
                    <p>
                        <a href="mailto:purespringconcept@gmail.com">
                            purespringconcept@gmail.com
                        </a>
                    </p>
                    <h5>Location</h5>
                    <p>
                        Our office and plant are located within easy reach for
                        our customers.
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </Container>
    );
}

export default Contact;
