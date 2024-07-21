import React from 'react';
import './index.css';

const Contact = () => {
    return (
        <div>
            <div className='centerText'>
                <h1>Contact Us</h1>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-section">
                        <h2>Road Side Assistance</h2>
                        <p>Call: +1 123 456 7890</p>
                        <p>Email: roadassistance@premierexotics.com</p>
                    </div>
                    <div className="contact-section">
                        <h2>Customer Service</h2>
                        <p>Call: +1 234 456 7890</p>
                        <p>Email: customerhelp@premierexotics.com</p>
                    </div>
                    <div className="contact-section">
                        <h2>Hours of Operation</h2>
                        <p>Weekdays: 9:00 AM – 5:00 PM</p>
                        <p>Weekends and Holidays: 10:00 AM – 4:00 PM</p>
                    </div>
                    <div className="contact-section">
                        <h2>Our Location</h2>
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

export default Contact;
