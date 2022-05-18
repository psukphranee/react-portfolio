import './index.scss'
import selfie from '../images/santorini.png'
import React from 'react';

const Intro = (props) => {

    var test = props.bio;
    console.log(test);

    return(
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                <img src={selfie} alt="selfie"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Panya Sukphranee</h1>
                    <h3>Mathematics | Web Development</h3>
                </div>
            </div>
        </div>
    )
}

export default Intro