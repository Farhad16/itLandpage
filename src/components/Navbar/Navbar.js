import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');



    const changeNavbar = () => {
        if (window.scrollY > 20) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbar);

    return (
        <nav className={navbar ? 'navsection active' : 'navsection'}>
            <div className="max-width">
                <div className="logo">
                    <a href="/">Company<span>Logo</span></a>
                </div>

                <ul className={toggle ? 'menu toggle' : 'menu'}>
                    <li>
                        <a href="/" className={active === 'home' ? 'nav-active' : ''} onClick={() => setActive('home')}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className={active === 'about' ? 'nav-active' : ''} onClick={() => setActive('about')}>About</a>
                    </li>
                    <li>
                        <a href="#services" className={active === 'services' ? 'nav-active' : ''} onClick={() => setActive('services')}>Services</a>
                    </li>
                    <li>
                        <a href="#tools" className={active === 'technology' ? 'nav-active' : ''} onClick={() => setActive('technology')}>Tools</a>
                    </li>
                    <li>
                        <a href="#contact" className={active === 'contact' ? 'nav-active' : ''} onClick={() => setActive('contact')}>Contact</a>
                    </li>
                    <li>
                        <Link to="/uploadImage" className={active === 'uploadImage' ? 'nav-active' : ''} onClick={() => setActive('uploadImage')}>Upload Image</Link>
                    </li>
                    <li>
                        <Link to="/writeText" className={active === 'writeText' ? 'nav-active' : ''} onClick={() => setActive('writeText')}>Write Text</Link>
                    </li>
                </ul>

                <div className="menu-btn">
                    {toggle ? <FontAwesomeIcon icon={faTimes} onClick={() => setToggle(!toggle)}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)}></FontAwesomeIcon>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;