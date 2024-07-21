import React, { useState } from 'react';
import './index.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        {question}
        <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQList = () => {
  const faqs = [
    { question: 'Que faut-il pour louer une voiture?', answer: 'Pour louer une de nos voitures, vous devez posséder un permis de conduire complet G ou un permis de conduire valide d’un autre pays.' },
    { question: 'À quelle vitesse puis-je conduire les voitures de location?', answer: 'Veuillez respecter la limite de vitesse pendant votre période de location. Nos voitures sont équipées de moniteurs qui enregistrent votre vitesse. Dépasser la limite de vitesse mettra fin à votre période de location.' },
    { question: 'Puis-je louer pour quelques heures?', answer: 'Malheureusement, notre période de location standard est d’au moins 1 jour et nous n’offrons actuellement pas de tarifs horaires.' },
    { question: 'Comment puis-je récupérer ma voiture de location?', answer: 'Veuillez vous présenter à l’emplacement spécifié avec votre permis de conduire. Après la livraison de la voiture, le technicien vous aidera à vous familiariser avec votre voiture.' },
    { question: 'Puis-je fumer dans la voiture de location?', answer: 'Il est strictement interdit de fumer ou de vapoter dans nos voitures. S’il y a des preuves de fumer ou de vapoter, des frais de nettoyage seront facturés.' },
    { question: 'Dois-je faire le plein de la supercar?', answer: 'Oui, vous êtes responsable du coût du carburant pendant la période de location. De plus, vous devez rendre la voiture avec un réservoir plein.' },
    { question: 'Puis-je emmener la voiture sur un circuit?', answer: "Nos voitures ne sont pas autorisées à être utilisées sur un circuit, pour des courses de rue ou des courses de dragsters. Faire l'une de ces activités mettra fin à votre période de location." },
    { question: 'Que se passe-t-il si j’endommage la voiture de location?', answer: 'Tout dommage physique ou esthétique causé par le conducteur sera entièrement payé par celui-ci.' },
    { question: 'Quelqu’un d’autre peut-il conduire la voiture de location pendant la période de location?', answer: 'Seul le conducteur qui a loué notre voiture est autorisé à la conduire. S’il y a des preuves qu’un autre conducteur a conduit la voiture, des frais supplémentaires seront facturés.' },
    { question: 'Que se passe-t-il si je rencontre un problème avec ma voiture?', answer: 'Si vous rencontrez des problèmes mécaniques, veuillez appeler l’assistance routière au +1 123 456 7890 et ils vous aideront à résoudre le problème.' }
  ];

  return (
    <div className="faq-list">
      <div className="faq-column">
        {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="faq-column">
        {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const Faqfr = () => {
  return (
    <div className="faq-container">
      <div className="centerText">
        <h1>Foire Aux Questions (FAQ)</h1>
      </div>
      <FAQList />
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Faqfr />
    </div>
  );
};

export default App;
