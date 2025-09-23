import { Container } from "react-bootstrap";

function Gallery() {
    const images = [
        "https://source.unsplash.com/400x300/?water,plant",
        "https://source.unsplash.com/400x300/?construction,sand",
        "https://source.unsplash.com/400x300/?dredging,river",
        "https://source.unsplash.com/400x300/?clean,water",
        "https://source.unsplash.com/400x300/?nature,river",
        "https://source.unsplash.com/400x300/?water,bottle",
    ];

    return (
        <Container className="py-5">
            <h2 className="mb-4">Gallery</h2>
            <div className="row">
                {images.map((img, idx) => (
                    <div className="col-md-4 mb-3" key={idx}>
                        <img
                            src={img}
                            alt="gallery"
                            className="img-fluid rounded shadow-sm"
                        />
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default Gallery;
