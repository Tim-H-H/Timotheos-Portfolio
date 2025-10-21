import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
    return (
        <>
        <Header />
            <main className="layout-container">
                <div className="main-content">
                <Suspense fallback={<div className="loading">Laddar...</div>}>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </Suspense>
                </div> 
            </main>
        <Footer />
        </>
    );
}

