import './index.scss'

const ProjectCard = (props) => {
    return(
        <div className='project-card'>
            <a href={'https://github.com/psukphranee/SAR/blob/main/SAR_Report.ipynb'} target='_blank'>
                <div className='project-title'>
                    <h2>Project Title</h2>
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
