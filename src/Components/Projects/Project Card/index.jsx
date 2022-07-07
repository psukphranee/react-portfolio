import './index.scss'

const ProjectCard = (props) => {

    const project = props.project;

    return(
        <div className='project-card'>
            <a href={project.url} target='_blank'>
                <div className='project-title'>
                    <h2>{project.Title}</h2>
                </div>
                <div className='project-description'>
                    <p>
                        {project.Tags}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard;
