import './index.scss'
import selfie from '../images/santorini.png'
import React from 'react';

const Intro = (props) => {

    var test = props.bio;
    console.log(test);

    return(
        <div className='intro' id='intro'>
            <h1>About</h1>
            <div className='intro-content'>
                <p>
                {props.info.bio}
                </p>
                <img src={selfie} alt="selfie"/>
            </div>
        </div>
    )
}

export default Intro