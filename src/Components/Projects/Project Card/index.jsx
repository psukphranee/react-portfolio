import './index.scss'

const ProjectCard = (props) => {
    return(
        <div className='project-card'>
            <a href={"'" + props.ProjectTitle + "'"}>
                <div className='project-title'>
                    <h2>{props.ProjectTitle}</h2>
                </div>
                <div className='project-description'>
                    <p>
                        project description
                    </p>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard;
