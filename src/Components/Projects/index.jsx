import './index.scss'
import ProjectCard from './Project Card';
import { useState, useEffect } from 'react';

const Projects = (props) => {

    let x = [1,2,3,4,5,6,7,8,9,10];

    const [selected, setSelected] = useState("MATLAB");
    

    return(
        <div className='projects-section' id="projects">
            <h1>Machine Learning Projects</h1>
            <div className='project-container'>
                <div className="project-categories">
                    <ul>
                        <li onClick={() => {setSelected("MATLAB")}} className={(selected === "MATLAB" ? "active" : "")}>MATLAB</li>
                        <li onClick={() => setSelected("SKL")}>Sci-kit Learn</li>
                        <li onClick={() => setSelected("TSF")}>Tensorflow</li>
                    </ul>
                </div>
                <div className='project-items'>
                    test-test-testicle
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