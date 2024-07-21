import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'; 

const BookFr = () => {
    const location = useLocation();
    const { car } = location.state || {};
    const navigate = useNavigate();
    const [duration, setDuration] = useState(1);
    const [deliveryDate, setDeliveryDate] = useState('');
    const increaseDuration = () => setDuration(prev => prev + 1);
    const decreaseDuration = () => setDuration(prev => (prev > 1 ? prev - 1 : 1));
    const handleDateChange = (event) => setDeliveryDate(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/confirmationfr');
    };

    return (
        <div className="book-form">
            <h1>Réservez la Voiture de Vos Rêves</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Votre Nom<span className="asterisk">*</span></label>
                        <input type="text" id="name" className="text-field" placeholder="Nom et Prénom" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Votre Courriel<span className="asterisk">*</span></label>
                        <input type="email" id="email" className="text-field" placeholder="courriel@domaine.com" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="address">Votre Adresse<span className="asterisk">*</span></label>
                        <input type="address" id="address" className="text-field" placeholder="Votre Adresse" required />
                    </div>
                    <div className="form-group car-model">
                        <label htmlFor="model">Modèle de Voiture<span className="asterisk">*</span></label>
                        <input type="text" id="model" className="text-field" value={car?.name || ''} readOnly />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="date">La Date de Livraison<span className="asterisk">*</span></label>
                        <input
                            type="date"
                            id="date"
                            className="text-field"
                            value={deliveryDate}
                            onChange={handleDateChange}
                            required
                        />
                    </div>
                    <div className="form-group delivery-time">
                        <label htmlFor="time">Délai de Livraison<span className="asterisk">*</span></label>
                        <input type="time" id="time" className="text-field" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group duration-group">
                        <label>Durée<span className="asterisk">*</span> (jours)</label>
                        <div className="duration-controls">
                            <button type="button" onClick={decreaseDuration}>-</button>
                            <span>{String(duration).padStart(2, '0')}</span>
                            <button type="button" onClick={increaseDuration}>+</button>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <button type="submit" className="submit-btn">Terminer la Réservation</button>
                </div>
            </form>
        </div>
    );
};

export default BookFr;
