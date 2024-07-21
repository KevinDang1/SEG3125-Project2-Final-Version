import React from 'react';
import './index.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCar} from 'react-icons/fa';

const Works = () => {
    return (
        <div>
            <div className="works-container">
                <h1>Follow These Steps to Rent a Car</h1>
                <div className="steps-container">
                    <div className="step">
                        <div className="icon-container">
                            <FaCar className="icon" />
                        </div>
                        <h2>Select Car</h2>
                        <p>Choose a car you wish to drive during the rental period</p>
                    </div>
                    <div className="step">
                        <div className="icon-container">
                            <FaMapMarkerAlt className="icon" />
                        </div>
                        <h2>Select Location</h2>
                        <p>Choose a specified location for us to deliver the car</p>
                    </div>
                    <div className="step">
                        <div className="icon-container">
                            <FaCalendarAlt className="icon" />
                        </div>
                        <h2>Select Delivery Date</h2>
                        <p>Choose the date and time for us to deliver the car</p>
                    </div>
                    <div className="step">
                        <div className="icon-container">
                            <FaClock className="icon" />
                        </div>
                        <h2>Select Duration</h2>
                        <p>Choose the how long you wish to rent the car (in days)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;

