import React from 'react';
import { Link } from 'react-router-dom';

const Navbarfr = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <Link to="/homefr">
                    <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} alt="Premier Exotics" />
                    </Link>
                </div>
                <div className="menu">
                    <Link to="/carsfr" className='navLink'>Voitures Disponibles</Link>
                    <Link to="/worksfr" className='navLink'>Comment Ca Marche</Link>
                    <Link to="/choosefr" className='navLink'>Pourquoi Nous Choisir</Link>
                    <Link to="/contactfr" className='navLink'>Nous Contacter</Link>
                    <Link to="/faqfr" className='navLink'>FAQ</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbarfr;