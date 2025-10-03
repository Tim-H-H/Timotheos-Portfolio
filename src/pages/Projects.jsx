import React, {useEffect, useState } from "react";
import Projectcard from "../components/ProjectCard";

export default function Projects() {

    const [repos, setRepos] = useState([]);

// TODO: Change clean to a better variable name

    useEffect(() => {
        fetch("https://api.github.com/users/Tim-H-H/repos")
        .then((res) => res.json())
        .then((data) => {
            const result = data.filter(
                (repo) => !repo.fork && repo.description
            );
            setRepos(result);
        });
    }, []);

    return (
        <section className="projects-container">
            {/* <h2 className="projects-header"></h2> */}
            {/* <div className="project-grid">
                {curated.map((project, index) => (
                    <Projectcard
                        key={index}
                        title={project.title}
                        description={project.description}
                        github={project.github}
                    />
                ))}
            </div> */}

            <h2 className="projects-header" style={{ marginTop: "3rem"}}>
                Projects
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