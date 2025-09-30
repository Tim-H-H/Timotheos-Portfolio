import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const nav = useNavigate();
    return (
        <section className="home">
            <div className="hero">
                <h1>Tjenare</h1>
                <br />
                <p>Jag bygger användarvänliga webbgänssnitt med React och modern CSS</p>
                <div className="hero-actions">
                    <button onClick={() => nav("/projects")} className="btn">Se mina projekt</button>
                </div>
            </div>
        </section>
    );
}