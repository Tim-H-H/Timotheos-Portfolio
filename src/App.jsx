import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

function App() {
    return (
        <div className="app">
            <Header />
            <main className="layout-container">
                <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    {/* <Route path="/projects" element={<Projects/>} /> */}
                    {/* <Route path="/contact" element={<Contact/>} /> */}
                </Routes>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default App
