import React, {useEffect, useState } from "react";
import Projectcard from "../components/ProjectCard";

export default function Projects() {

    const [repos, setRepos] = useState([]);

    const resultinSwedish = {
        calculator: "Kalkylator",
        clicker: "Klickare",
        "coin-flipper": "Slänga slant",
        "dropdown-test": "Droppa ner flik",
        hangman_game: "Hänga gubbe spel",
        "lorem-ipsum-generator" : "Lorem ipsum generator",
        "my-weather" : "Väder applikation",
        "on-off" : "Ljus till mörkläge applikation",
        "smooth-color-changer" : "Mjuk färg förändring"

        
    }

    const descriptioninSwedish = {
    calculator: "En enkel kalkylator byggd med React.",
    clicker: "Ett klickspel för att öva på states i React.",
    "coin-flipper": "Ett myntkast-spel som visar slumpmässiga resultat.",
    "dropdown-test": "En testapp för att skapa en dropdown-meny.",
    hangman_game: "Klassiska Hänga Gubbe byggd i React JavaScript.",
    "lorem-ipsum-generator" : "En generator som skriver mer lorem ipsum text med en knapp",
    "my-weather": "En väderapp som hämtar data från ett API.",
    "on-off": "En app för att växla mellan ljus och mörkt tema.",
    "smooth-color-changer" : "En app för att växla mellan olika färger med en knapp"
    }

    useEffect(() => {
        fetch("https://api.github.com/users/Tim-H-H/repos")
        .then((res) => res.json())
        .then((data) => {
            const result = data.filter(
                (repo) => !repo.fork && repo.description
            );
            console.log("Result: ", result)
            setRepos(result);
        });
    }, []);

    return (
        <section className="projects-container">
            <h2 className="projects-header" style={{ marginTop: "1rem"}}>
                Projekt
            </h2>
            <div className="projects-grid">
                {repos.slice(0, 9).map((repo) => {
                    const swedishName = resultinSwedish[repo.name.toLowerCase()] || repo.name;
                    const swedishDescription = descriptioninSwedish[repo.name.toLowerCase()] || repo.description;
                return (
                    <Projectcard
                        key={repo.id}
                        title={swedishName}
                        description={swedishDescription}
                        github={repo.html_url}
                    />
                )
            })}
            </div>
        </section>

    );
}