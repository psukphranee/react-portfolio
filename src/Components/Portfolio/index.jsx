import './index.scss'
import PortfolioItem from '../PortfolioList'
import math_eqn from '../../images/math_eqn.jpg'

function Portfolio() {

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {/* <PortfolioItem title="Featured" />
                <PortfolioItem title="Web App" />
                <PortfolioItem title="Mobile App" />
                <PortfolioItem title="Design" />
                <PortfolioItem title="Brandin" /> */}
                <li className='active'>Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design </li>
                <li>Brandin </li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src={math_eqn} />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={math_eqn} />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={math_eqn} />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={math_eqn} />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={math_eqn} />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src={math_eqn} />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;