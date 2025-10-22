import { useNavigate } from "react-router-dom";
import laptop from "../assets/laptop.svg";

export default function Home() {
  const nav = useNavigate();
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-side-left">
          <div className="text-container">
            <h1 className="welcome-text">Välkommen!</h1>
          </div>
          <h1 className="intro-text">
            Jag skapar moderna och intuitiva webblösningar.
          </h1>
          <p>
            Jag bygger moderna och användarvänliga webbgränssnitt med React och
            CSS.
          </p>
          <div>
            <button className="button button-home" onClick={() => nav("/Projects")}>Se mina projekt</button>
          </div>
        </div>
        <div className="home-side-right">
          <img src={laptop} alt="laptop icon" className="laptop-img" />
        </div>
      </div>
    </section>
  );
}
