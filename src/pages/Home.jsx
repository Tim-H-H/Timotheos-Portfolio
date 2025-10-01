import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const nav = useNavigate();
    return (
        <section className="home">
            <div className="hero">
                <h1>Välkommen! Jag skapar moderna och intuitiva webblösningar.</h1>
                <br />
                <p>Jag bygger moderna och användarvänliga webbgränssnitt med React och CSS.</p>
                <div className="hero-actions">
                    <button onClick={() => nav("/Projects")}>Se mina projekt</button>
                </div>
            </div>
        </section>
    );
}