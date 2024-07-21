import React from 'react';
import './index.css';

const ContactFr = () => {
    return (
        <div>
            <div className='centerText'>
                <h1>Nous Contacter</h1>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-section">
                        <h2>Assistance Routière</h2>
                        <p>Appel: +1 123 456 7890</p>
                        <p>Courriel: roadassistance@premierexotics.com</p>
                    </div>
                    <div className="contact-section">
                        <h2>Service Client</h2>
                        <p>Appel: +1 234 456 7890</p>
                        <p>Courriel: customerhelp@premierexotics.com</p>
                    </div>
                    <div className="contact-section">
                        <h2>Heures D'ouverture</h2>
                        <p>Jours de la semaine: 9:00 AM – 5:00 PM</p>
                        <p>Fin de Semaine et Jours Fériés: 10:00 AM – 4:00 PM</p>
                    </div>
                    <div className="contact-section">
                        <h2>Notre Emplacement</h2>
                        <p>123 Apple Street, K1N 4N2</p>
                        <p>Ottawa, Ontario</p>
                    </div>
                </div>
                <div className="contact-image">
                    <img src={`${process.env.PUBLIC_URL}/images/car3.png`} alt="Purple Urus" />

                </div>
            </div>
        </div>
    );
}

export default ContactFr;
