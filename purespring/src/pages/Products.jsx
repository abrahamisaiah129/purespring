import { Container } from "react-bootstrap";

function Products() {
    return (
        <Container className="py-5">
            <h2 className="mb-4">Our Products</h2>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                        <img
                            src="https://source.unsplash.com/400x300/?bottle,water"
                            className="card-img-top"
                            alt="Bottled Water"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Bottled Water</h5>
                            <p className="card-text">
                                Crystal clear bottled water in various sizes for
                                homes and offices.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                        <img
                            src="https://source.unsplash.com/400x300/?water,glass"
                            className="card-img-top"
                            alt="Sachet Water"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Sachet Water</h5>
                            <p className="card-text">
                                Affordable sachet water produced under strict
                                hygienic conditions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                        <img
                            src="https://source.unsplash.com/400x300/?pure,water"
                            className="card-img-top"
                            alt="Bulk Supply"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Bulk Supply</h5>
                            <p className="card-text">
                                Bulk water delivery for events, companies, and
                                large-scale needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Products;
