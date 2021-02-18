import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import MainContent from "../MainContent.js";

function App() {
    return (
        <div className="general-container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
