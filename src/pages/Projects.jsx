import React, {useEffect, useState } from "react";
import Projectcard from "../components/ProjectCard";

export default function Projects() {
    const curated = [
        {
            title: "Weather App",
            description: "Weather forecast app using Openweather API",
            github: "https://github.com/Tim-H-H/weather-app"
        },
    ];


const [repos, setRepos] = useState([]);

useEffect(() => {
    fetch("https://api.github.com/users/Tim-H-H/repos")
    .then((res) => res.json())
    .then((data) => {
        const clean = data.filter(
            (repo) => !repo.fork && repo.description
        );
        setRepos(clean);
    });
}, []);

return (
    <section className="projects-container">
        <h2 className="projects-header">Featured Projects</h2>
        <div className="project-grid">
            {curated.map((project, index) => (
                <Projectcard
                    key={index}
                    title={project.title}
                    description={project.description}
                    github={project.github}
                />
            ))}
        </div>

        <h2 className="projects-header" style={{ marginTop: "3rem"}}>
            Other Github Repos
        </h2>
        <div className="projects-grid">
            {repos.slice(0, 8).map((repo) => (
                <Projectcard
                    key={repo.id}
                    title={repo.name}
                    description={repo.description}
                    github={repo.html_url}
                />
            ))}
        </div>
    </section>
)
}