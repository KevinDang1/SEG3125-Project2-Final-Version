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
    { question: 'What do you need to rent a car?', answer: 'To rent one of our cars, you need to have a full G driver’s license or a valid driver’s license from another country.' },
    { question: 'How fast can I drive the rental cars?', answer: 'Please adhere to the speed limit during your rental period. Our cars have monitors that record your speed. Execeding the speed limit will terminate your rental period.' },
    { question: 'Can I rent a for a few hours?', answer: 'Unfortunately, our standard rental period is a minimum of 1 day and we do not currently offer hourly rates.' },
    { question: 'How do I collect my rental car?', answer: 'Please arrive at the specified location with your drivers license. After the car has been delivered, the technician will help you get familiar with your car.' },
    { question: 'Can I smoke in the rental car?', answer: 'Smoking or Vaping is strictly prohibited in our cars. If there is evidence of either smoking or vaping, a cleaning fee will be charged.' },
    { question: 'Am I required to refuel the supercar?', answer: 'Yes, you are responsible for the cost of refueling the car during the rental period. Also, you must return the car with a full tank of gas.' },
    { question: 'Can I take the car to a racetrack?', answer: 'Our cars are not permitted for use on any racetrack, street racing, or drag racing. Doing any of these activites will terminate your rental period.' },
    { question: 'What happens if I damage the rental car?', answer: 'Any physical/cosmetic damage that was caused by the driver will be entirely paid by the them.' },
    { question: 'Can someone else drive the rental car during the rental period?', answer: 'Only the driver who has rented out our car is permitted to drive it. If there is any evidence of another driver, an additional fee will be charged.' },
    { question: 'What happens if I encounter a problem with my car?', answer: 'If you encounter any mechanical issues, please call roadside assistance at +1 123 456 7890 and they will assist you to get the issue sorted.' },
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

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="centerText">
        <h1>Frequently Asked Questions (FAQ)</h1>
      </div>
      <FAQList />
    </div>
  );
};

export default Faq;

