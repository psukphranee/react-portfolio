import './index.scss'
import ProjectCard from './Project Card';

const Projects = (props) => {

    let x = [1,2,3,4,5,6,7,8,9,10];

    return(
        <div className='projects'>
            <h1>Projects</h1>
            <div className='project-content'>
                { 
                    x.map(
                        (currentValue, index) => (
                            <ProjectCard ProjectTitle={index} />
                        )
                    ) 
                }
            </div>
        </div>
    )
}

export default Projects