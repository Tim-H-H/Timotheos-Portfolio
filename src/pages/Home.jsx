import { useNavigate } from "react-router-dom";

export default function Home() {
    const nav = useNavigate();
    return (
        <section className="home">
            <div className="home-container">
                <div className="text-container">
                    <h1 className="welcome-text">Välkommen!</h1> 
                </div>
                <h1 className="intro-text">Jag skapar moderna och intuitiva webblösningar.</h1>                
                <p>Jag bygger moderna och användarvänliga webbgränssnitt med React och CSS.</p>
                <div className="">
                    <button onClick={() => nav("/Projects")}>Se mina projekt</button>
                </div>
            </div>
        </section>
    );
}