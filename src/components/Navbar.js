import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/welcome" className="navbar-logo" onClick={closeMobileMenu}>MTBX <i class="fa-solid fa-mountain-sun"></i></Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/welcome" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bikes" className='nav-links' onClick={closeMobileMenu}>
                                Bikes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/trails" className='nav-links' onClick={closeMobileMenu}>
                                Trails
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'> SIGN UP </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar