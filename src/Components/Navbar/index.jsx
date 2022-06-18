import './index.scss'
import {Person, Mail} from '@mui/icons-material'

const Navbar = (props) => {

    return(
        <div className={'navbar ' + (props.activeState && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className='logo'>
                        panya.
                    </a>
                    <div className='itemContainer'>
                        <Person className='icon' />
                        <span>(805)242-3252</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => props.activeCallback(!props.activeState)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;