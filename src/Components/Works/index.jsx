import './index.scss'
import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {worksData} from '../../data'

const Works = (props) => {

    var test = props.bio;
    console.log(test);

    return(
        <div className='works' id='works'>
            <h1>Works</h1>

            <ArrowBackIosIcon className='arrow left' />
            <ArrowForwardIosIcon className="arrow right" />

            <div className='slider'>
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