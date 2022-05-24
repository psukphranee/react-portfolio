import './index.scss'
import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Works = (props) => {

    var test = props.bio;
    console.log(test);

    return(
        <div className='works' id='works'>
            <h1>Works</h1>
            <div className='slider'>
                <div className="container">
                    <div className="item">
                        <div className='left'>
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <PhoneIphoneIcon className='img'/>
                                </div>
                                <h2>Title</h2>
                                <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                </p>
                                <span>
                                    Projects
                                </span>
                            </div>
                        </div>
                        <div className='right'>
                            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" />
                        </div> 
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default Works