import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} alt="Premier Exotics" />
                    </Link>
                </div>
                <div className="menu">
                    <Link to="/cars" className='navLink'>Available Cars</Link>
                    <Link to="/works" className='navLink'>How It Works</Link>
                    <Link to="/choose" className='navLink'>Why Choose Us</Link>
                    <Link to="/contact" className='navLink'>Contact Us</Link>
                    <Link to="/faq" className='navLink'>FAQ</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
