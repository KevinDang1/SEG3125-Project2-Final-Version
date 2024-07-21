import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Homefr from './HomeFr'; 
import Choose from './Choose';
import Contact from './Contact';
import Works from './Works';
import Cars from './Cars';
import Book from './Book'; 
import Confirmation from './Confirmation';
import Faq from './Faq';
import WorksFr from './WorksFr';
import Navbarfr from './Navfr'; 
import ChooseFr from './ChooseFr';
import ContactFr from './ContactFr';
import CarsFr from './CarsFr';
import BookFr from './BookFr';
import ConfirmationFr from './ConfirmationFr';
import Faqfr from './Faqfr';

function App() {
    const location = useLocation();

    const renderNavbar = () => {
        if (location.pathname === '/worksfr' || location.pathname === '/homefr' || location.pathname === '/choosefr' || location.pathname === '/contactfr' || location.pathname === '/carsfr'
            || location.pathname === '/bookfr' || location.pathname === '/confirmationfr' || location.pathname === '/faqfr') {
            return <Navbarfr />;
        }
        return <Navbar />;
    };

    return (
        <div>
            {renderNavbar()}
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/homefr" element={<Homefr />} />
                    <Route path="/choose" element={<Choose />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/book" element={<Book />} /> 
                    <Route path="/confirmation" element={<Confirmation />} /> 
                    <Route path="/worksfr" element={<WorksFr />} />
                    <Route path="/choosefr" element={<ChooseFr />} />
                    <Route path="/contactfr" element={<ContactFr />} />
                    <Route path="/carsfr" element={<CarsFr />} />
                    <Route path="/bookfr" element={<BookFr />} />
                    <Route path="/confirmationfr" element={<ConfirmationFr />} /> 
                    <Route path="/faq" element={<Faq />} /> 
                    <Route path="/faqfr" element={<Faqfr />} /> 
                </Routes>
            </div>
        </div>
    );
}

const MainApp = () => (
    <Router>
        <App />
    </Router>
);

export default MainApp;
