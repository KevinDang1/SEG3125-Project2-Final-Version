import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Confirmation = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <div className="confirmation-container">
            <h1>Enjoy Your New Ride!</h1>
            <div className="confirm-icon-container">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#3f50b5" strokeWidth="1" />
                    <path d="M9 12.5L11 14.5L15 10.5" stroke="#3f50b5" strokeWidth="1.5" />
                </svg>
            </div>
            <p>Thank you for choosing Premier Exotics!</p>
            <p>You will receive an email shortly with the details of your rental</p>
            <button className="back-home-button" onClick={handleBackHome}>Back Home</button>
        </div>
    );
}

export default Confirmation;
