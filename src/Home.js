import React from 'react';
import { Link } from 'react-router-dom';
import {FaLanguage } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="container">
            <div className="text">
                <h1>Feeling the urge to drive <span className="highlight">fast?</span></h1>
                <p>Get access to your dream car anytime and anywhere by booking with us!</p>
                <Link to="/cars">
                    <button>View Cars</button>
                </Link>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/car1.png`} alt="Purple Mclaren 765lt" className="mainImage" />
            <Link to="/homefr" className="translate-icon">
                <FaLanguage />
            </Link>
        </div>
    );
}

export default Home;