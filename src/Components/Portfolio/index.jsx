import { useState, useEffect } from 'react'

import './index.scss'
import PortfolioItem from '../PortfolioItem'
import math_eqn from '../../images/math_eqn.jpg'
import {
    featuredPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
    webPortfolio
} from '../../data.js'

function Portfolio() {

    const [selected, setSelected] =  useState("featured");
    const [data, setData] = useState([]);

    useEffect(
        () => {
            switch(selected){
                case "featured":
                    setData(featuredPortfolio);
                    break;
                case "mobile":
                    setData(mobilePortfolio);
                    break;
                case "webapp":
                    setData(webPortfolio);
                    break;
                case "design":
                    setData(designPortfolio);
                    break;
                default:
                    setData(featuredPortfolio);
                    break;              
            }

            //console.log(data);
        }
    , [selected]);

    const itemList = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'mobile',
            title: 'Mobile App'
        },
        {
            id: 'webapp',
            title: 'Web App'
        },
        {
            id: 'design',
            title: 'Design'
        },
        {
            id: 'branding',
            title: 'Branding'
        }
    ]

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    itemList.map(item => (
                            <PortfolioItem 
                                title={item.title} 
                                id={item.id} 
                                active={item.id === selected} 
                                setSelected={setSelected} 
                                key={item.id}
                            />)
                        )
                }
            </ul>
            <div className="container">
                {
                    data.map((d) => (
                        <div className="item">
                            <img src={d.img} />
                            <h3>{d.title}</h3>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Portfolio;