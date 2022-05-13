import './index.scss'

const Navbar = (props) => {
    return(
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#about" className='logo'>
                        panya.
                    </a>
                </div>
                <div className='right'>
                    RIGHT
                </div>
            </div>
        </div>
    )
}

export default Navbar;