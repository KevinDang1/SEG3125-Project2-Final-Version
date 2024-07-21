import React from 'react';
import { Link } from 'react-router-dom';
import {FaLanguage } from 'react-icons/fa';

const HomeFr = () => {
    return (
        <div className="container">
            <div className="text">
                <h1>Ressentir le Besoin de Conduire <span className="highlight">Vite?</span></h1>
                <p>Accédez à la voiture de vos rêves à tout moment et n'importe où en réservant avec nous!</p>
                <Link to="/cars">
                    <button>Voir les Voitures</button>
                </Link>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/car1.png`} alt="Purple Mclaren 765lt" className="mainImage" />
            <Link to="/" className="translate-icon">
                <FaLanguage />
            </Link>
        </div>
    );
}

export default HomeFr;