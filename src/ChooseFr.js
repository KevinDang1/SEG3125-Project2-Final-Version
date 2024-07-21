import React from 'react';
import './index.css'; 

const ChooseFr = () => {
    return (
        <div className="choose">
            <main className="main">
                <div className="car-image">
                <img src={`${process.env.PUBLIC_URL}/images/car2.png`} alt="Purple Aventador SV" />
                </div>
                <div  className="choose-text">
                    <ul>
                        <h1 className="main-heading">Nous Offrons la Meilleure Expérience de Voiture Exotique</h1>
                        <li>
                            <h2>Garantie Du Prix le Plus Bas</h2>
                            <p>Trouver un prix inférieur pour la même voiture ? Ne vous inquiétez pas, nous égalerons ce prix.</p>
                        </li>
                        <li>
                            <h2>Livraison de Voiture Toute la Journée</h2>
                            <p>Réservez votre voiture à tout moment et nous la livrerons à l'endroit indiqué.</p>
                        </li>
                        <li>
                            <h2>Soutien Technique</h2>
                            <p>Vous ne connaissez pas votre voiture ? Nos techniciens seront là lors de la livraison pour vous aider.</p>
                        </li>
                        <li>
                            <h2>Véhicules Bien Entretenus</h2>
                            <p>Vous n'aimez pas les véhicules sales ? Nous non plus, c'est pourquoi toutes nos voitures sont régulièrement révisées et entretenues.</p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default ChooseFr;
