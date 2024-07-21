import React from 'react';
import './index.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCar} from 'react-icons/fa';

const WorksFr= () => {
    return (
        <div>
            <div className="works-container">
                <h1>Suivez Ces Etapes Pour Louer Une Voiture</h1>
                <div className="steps-container">
                    <div className="step">
                        <div className="icon-container">
                            <FaCar className="icon" />
                        </div>
                        <h2>Sélectionnez une Voiture</h2>
                        <p>Choisissez une voiture que vous souhaitez conduire pendant la période de location</p>
                    </div>
                    <div className="step">
                        <div className="icon-container">
                            <FaMapMarkerAlt className="icon" />
                        </div>
                        <h2>Sélectionnez L'emplacement</h2>
                        <p>Choisissez un endroit spécifié pour que nous livrions la voiture</p>
                    </div>
                    <div className="step">
                        <div className="icon-container">
                            <FaCalendarAlt className="icon" />
                        </div>
                        <h2>Sélectionnez la Date de Livraison</h2>
                        <p>Choisissez la date et l'heure pour que nous puissions livrer la voiture</p>
                    </div>
                    <div className="step">
                        <div className="icon-container">
                            <FaClock className="icon" />
                        </div>
                        <h2>Sélectionnez la Durée</h2>
                        <p>Choisissez la durée pendant laquelle vous souhaitez louer la voiture (en jours)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorksFr;

