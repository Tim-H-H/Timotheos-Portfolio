export default function projectcard({ title, description, github}) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={github} target="_blank" rel="noopener noreferrer">
                Github
            </a>
        </div>
    );
}
