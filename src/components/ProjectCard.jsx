export default function projectcard({ title, description, github, live}) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-buttons">
                <a href={live} target="_blank" rel="noopener noreferrer" className="button button-live">
                    Live Demo
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
                    Github
                </a>
            </div>
        </div>
    );
}
