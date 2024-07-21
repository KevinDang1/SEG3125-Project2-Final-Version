import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const ConfirmationFr = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/homefr');
    };

    return (
        <div className="confirmation-container">
            <h1>Profitez de Votre Nouveau Trajet!</h1>
            <div className="confirm-icon-container">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#3f50b5" strokeWidth="1" />
                    <path d="M9 12.5L11 14.5L15 10.5" stroke="#3f50b5" strokeWidth="1.5" />
                </svg>
            </div>
            <p>Merci d'avoir choisi Premier Exotics!</p>
            <p>Vous recevrez sous peu un email avec les détails de votre location</p>
            <button className="back-home-button" onClick={handleBackHome}>Retour</button>
        </div>
    );
}

export default ConfirmationFr;
