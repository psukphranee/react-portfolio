import './index.scss'

const PortfolioItem = (props) => {
    return (
        <li 
            className={(props.active ? 'portfolioItem active' : 'portfolioItem')} 
            onClick={() => props.setSelected(props.id)}
            key={props.id}
        >
            {props.title}
        </li>
    );
}

export default PortfolioItem;