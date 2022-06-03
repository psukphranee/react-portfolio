import './index.scss'
import React, { useEffect } from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {worksData} from '../../data'
import { Translate } from '@mui/icons-material';
import { useState } from 'react';

const Works = (props) => {

    var test = props.bio;
    console.log(test);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        console.log(offset);
    }
    , [offset]);

    function clickCallback(direction){
        direction == "left" ? setOffset(offset - 100) : setOffset(offset + 100);
    };
    console.log(offset);
    return(
        <div className='works' id='works'>
            <h1>Works</h1>

            <ArrowBackIosIcon className='arrow left' onClick={() => clickCallback("left") }/>
            <ArrowForwardIosIcon className="arrow right" onClick={() => clickCallback("right") }/>

            <div className="slider" style={ {transform : `translateX(${offset}vw)`} }>
                {
                    worksData.map(
                        d => (
                            <div className="container">
                                <div className="item">
                                    <div className='left'>
                                        <div className="leftContainer">
                                            <div className="imgContainer">
                                                <PhoneIphoneIcon className='img'/>
                                            </div>
                                            <h2>{d.title}</h2>
                                            <p>
                                            {d.desc}
                                            </p>
                                            <span>
                                                Projects
                                            </span>
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <img src={d.img} />
                                    </div> 
                                </div>     
                            </div>
                        )
                    )
                }
                
            </div>
        </div>
    )
}

export default Works