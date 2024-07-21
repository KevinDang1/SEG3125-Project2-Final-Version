import React from 'react';
import './index.css'; 

const Choose = () => {
    return (
        <div className="choose">
            <main className="main">
                <div className="car-image">
                <img src={`${process.env.PUBLIC_URL}/images/car2.png`} alt="Purple Aventador SV" />
                </div>
                <div  className="choose-text">
                    <ul>
                        <h1 className="main-heading">We Offer the Best Exotic Car Experience</h1>
                        <li>
                            <h2>Lowest Price Guarantee</h2>
                            <p>Find a lower price for the same car? Don't worry, we'll match that price.</p>
                        </li>
                        <li>
                            <h2>All Day Car Delivery</h2>
                            <p>Book your car anytime and we'll deliver it to your specified location.</p>
                        </li>
                        <li>
                            <h2>Technical Support</h2>
                            <p>Unfamiliar with your car? Our technicians will be there during delivery to help you.</p>
                        </li>
                        <li>
                            <h2>Well Maintained Vehicles</h2>
                            <p>Don't like dirty vehicles? Neither do we, which is why all our cars are regularly detailed and serviced.</p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default Choose;
