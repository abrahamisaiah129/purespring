import { useEffect, useState } from "react";

function Loader() {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), 2000); // loader duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
            {/* Replace with your logo */}
            <img
                src="/assets/logo/page1_img1.jpeg"
                alt="Pure Spring Logo"
                className="loader-logo"
            />
            <h2 className="loader-text">Pure Spring</h2>
        </div>
    );
}

export default Loader;
