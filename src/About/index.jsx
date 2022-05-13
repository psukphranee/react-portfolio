import './index.scss'
import selfie from '../images/santorini.png'
import React from 'react';

const About = (props) => {

    var test = props.bio;
    console.log(test);

    return(
        <div className='about' id='about'>
            <h1>About</h1>
            <div className='about-content'>
                <p>
                {props.info.bio}
                </p>
                <img src={selfie} alt="selfie"/>
            </div>
        </div>
    )
}

export default About