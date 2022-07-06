import './index.scss'
import ProjectCard from './Project Card';

const Projects = (props) => {

    let x = [1,2,3,4,5,6,7,8,9,10];

    return(
        <div className='projects-section' id="projects">
            <h1>Programming Projects</h1>
            <div className='project-container'>
                <div className="project-categories">
                    <ul>
                        <li>MATLAB</li>
                        <li>Python/Sci-kit Learn</li>
                        <li>C++</li>
                        <li>Tensorflow</li>
                    </ul>
                </div>
                <div className='project-items'>
                    <div className='projectCard'>
                        <ProjectCard />
                    </div>
                </div>
                {/* { 
                    x.map(
                        (currentValue, index) => (
                            <ProjectCard ProjectTitle={index} />
                        )
                    ) 
                } */}
            </div>
        </div>
    )
}

export default Projects