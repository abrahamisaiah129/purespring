import { Container } from "react-bootstrap";

function Services() {
    return (
        <Container className="py-5">
            <h2 className="mb-4">Our Services</h2>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="p-4 shadow rounded bg-white h-100">
                        <h4>Sand Dredging</h4>
                        <p>
                            Our sand dredging operations provide high-quality
                            sand for construction and infrastructure projects.
                            With modern equipment and skilled teams, we ensure
                            efficiency and environmental responsibility.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="p-4 shadow rounded bg-white h-100">
                        <h4>Logistics & Delivery</h4>
                        <p>
                            We handle prompt delivery of water and dredged sand,
                            ensuring our clients receive their supplies on time,
                            every time.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Services;
