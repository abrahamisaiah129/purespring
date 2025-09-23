import { Container, Button } from "react-bootstrap";

function Home() {
    return (
        <div className="bg-light">
            <div
                className="text-center text-white d-flex align-items-center justify-content-center"
                style={{
                    height: "70vh",
                    background:
                        "url('https://source.unsplash.com/1600x900/?water,nature') center/cover",
                }}
            >
                <div>
                    <h1 className="fw-bold">Pure Spring</h1>
                    <p className="lead">
                        Refreshing Hydration & Reliable Sand Dredging Services
                    </p>
                    <Button href="/contact" variant="success" size="lg">
                        Contact Us
                    </Button>
                </div>
            </div>
            <Container className="py-5">
                <h2 className="text-center mb-4">Our Expertise</h2>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="p-4 shadow rounded bg-white h-100">
                            <h4>Table Water Production</h4>
                            <p>
                                Delivering pure, safe, and refreshing drinking
                                water for every household and business.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="p-4 shadow rounded bg-white h-100">
                            <h4>Sand Dredging</h4>
                            <p>
                                Reliable sand dredging services, ensuring
                                quality supply for construction and
                                infrastructure projects.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
