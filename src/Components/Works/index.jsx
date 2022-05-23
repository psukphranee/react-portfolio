import './index.scss'
import React from 'react';

const Works = (props) => {

    var test = props.bio;
    console.log(test);

    return(
        <div className='works' id='works'>
            <h1>Works</h1>
            <div className='works-content'>
                <div className='left'>
                </div>
                <div className='right'>
                    
                </div>
            </div>
        </div>
    )
}

export default Works