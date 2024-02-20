import './project.css';

export default function Project ({project}) {
    return (
        <div className="card container">
            <img src={project.image}></img>
            <div className="card-body">
                <h5 class="card-title">{project.name}</h5>
                <a href={project.links.github} class="btn btn-primary">Github</a>
            </div>
        </div>
    );
}