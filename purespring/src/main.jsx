// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Global Styles
import "./index.css";

// React
import React from "react";
import ReactDOM from "react-dom/client";

// React Router
import { BrowserRouter } from "react-router-dom";

// App Component
import App from "./App.jsx";

// Render App
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
