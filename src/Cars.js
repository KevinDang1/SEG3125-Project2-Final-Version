import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { IoPeople } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { TbManualGearboxFilled } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";

const Cars = () => {
    const navigate = useNavigate();

    const carList = [
        { name: "Lamborghini Urus", price: "$1,500/day", rating: "4.3 (1250 reviews)", passengers: "5 Passengers", transmission: "Automatic", airConditioning: "Air Conditioning", doors: "4 Doors", image: `${process.env.PUBLIC_URL}/images/urus.png`, alt: "Lamborghini Urus" },
        { name: "Porsche 911 Turbo S", price: "$1,750/day", rating: "4.8 (1436 reviews)", passengers: "2 Passengers", transmission: "Automatic", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/turboS.png`, alt: "Porsche 911 Turbo S" },
        { name: "McLaren 765LT Spider", price: "$1,650/day", rating: "4.5 (1783 reviews)", passengers: "2 Passengers", transmission: "Automatic", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/765s.png`, alt: "McLaren 765LT Spider" },
        { name: "Nissan R35 GTR Premium", price: "$900/day", rating: "4.1 (1336 reviews)", passengers: "2 Passengers", transmission: "Automatic", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/gtr.png`, alt: "Nissan R35 GTR Premium" },
        { name: "Rolls-Royce Ghost", price: "$2,500/day", rating: "5.0 (2036 reviews)", passengers: "5 Passengers", transmission: "Automatic", airConditioning: "Air Conditioning", doors: "4 Doors", image: `${process.env.PUBLIC_URL}/images/rolls.png`, alt: "Rolls-Royce Ghost" },
        { name: "BMW M5 CS", price: "$850/day", rating: "4.4 (1433 reviews)", passengers: "5 Passengers", transmission: "Automatic", airConditioning: "Air Conditioning", doors: "4 Doors", image: `${process.env.PUBLIC_URL}/images/m5cs.png`, alt: "BMW M5 CS" },
        { name: "Mercedes-Benz Sprinter", price: "$2,000/day", rating: "4.3 (892 reviews)", passengers: "15 Passengers", transmission: "Automatic", airConditioning: "Air Conditioning", doors: "4 Doors", image: `${process.env.PUBLIC_URL}/images/van.png`, alt: "Mercedes-Benz Sprinter" },
        { name: "Lamborghini Huracan", price: "$1,000/day", rating: "4.0 (1203 reviews)", passengers: "2 Passengers", transmission: "Automatic", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/huracan.png`, alt: "Lamborghini Huracan" },
        { name: "Ferrari 458 Italia", price: "$1,450/day", rating: "4.6 (1316 reviews)", passengers: "2 Passengers", transmission: "Automatic", airConditioning: "Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/458.png`, alt: "Ferrari 458 Italia" },
        { name: "Lamborghini Murcielago LP640", price: "$2,000/day", rating: "5.0 (1141 reviews)", passengers: "2 Passengers", transmission: "Manual", airConditioning: "No Air Conditioning", doors: "2 Doors", image: `${process.env.PUBLIC_URL}/images/murci.png`, alt: "Lamborghini Murcielago LP640" }
    ];
    

    const [filters, setFilters] = useState({
        carType: [],
        transmission: [],
        manufacturer: []
    });

    const handleFilterChange = (category, value) => {
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (newFilters[category].includes(value)) {
                newFilters[category] = newFilters[category].filter(item => item !== value);
            } else {
                newFilters[category] = [...newFilters[category], value];
            }
            return newFilters;
        });
    };

    const carType = (carName) => {
        if (["Lamborghini Urus", "Rolls-Royce Ghost", "Mercedes-Benz Sprinter", ].includes(carName)) {
            return "Luxury";
        }
        if (["Porsche 911 Turbo S", "Nissan R35 GTR Premium", "BMW M5 CS", "Lamborghini Huracan", "Ferrari 458 Italia", "Lamborghini Murcielago LP640"].includes(carName)) {
            return "Sport";
        }
        if (["McLaren 765LT Spider"].includes(carName)) {
            return "Convertible";
        }
        return "";
    };

    const carManufacturer = (carName) => {
        return carName.split(' ')[0];
    };

    const filteredCars = carList.filter(car => {
        const matchesCarType = filters.carType.length === 0 || filters.carType.includes(carType(car.name));
        const matchesTransmission = filters.transmission.length === 0 || filters.transmission.includes(car.transmission);
        const matchesManufacturer = filters.manufacturer.length === 0 || filters.manufacturer.includes(carManufacturer(car.name));

        return matchesCarType && matchesTransmission && matchesManufacturer;
    });

    const handleRentNowClick = (car) => {
        navigate("/book", { state: { car } });
    };

    return (
        <div>
            <div className='centerText'>
                <h1>All Available Cars</h1>
            </div>
            <div className="cars-page">
                <div className="filters">
                    <h3>Filter(s)</h3>
                    <div className="filter-category">
                        <h4>Car Type</h4>
                        <ul>
                            <li><input type="checkbox" onChange={() => handleFilterChange('carType', 'Luxury')} /> Luxury</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('carType', 'Sport')} /> Sport</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('carType', 'Convertible')} /> Convertible</li>
                        </ul>
                    </div>
                    <div className="filter-category">
                        <h4>Transmission</h4>
                        <ul>
                            <li><input type="checkbox" onChange={() => handleFilterChange('transmission', 'Manual')} /> Manual</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('transmission', 'Automatic')} /> Automatic</li>
                        </ul>
                    </div>
                    <div className="filter-category">
                        <h4>Car Manufacturer</h4>
                        <ul>
                            <li><input type="checkbox" onChange={() => handleFilterChange('manufacturer', 'BMW')} /> BMW</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('manufacturer', 'Ferrari')} /> Ferrari</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('manufacturer', 'Lamborghini')} /> Lamborghini</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('manufacturer', 'McLaren')} /> McLaren</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('manufacturer', 'Mercedes-Benz')} /> Mercedes-Benz</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('manufacturer', 'Nissan')} /> Nissan</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('manufacturer', 'Porsche')} /> Porsche</li>
                            <li><input type="checkbox" onChange={() => handleFilterChange('manufacturer', 'Rolls-Royce')} /> Rolls-Royce</li>
                        </ul>
                    </div>
                </div>
                <div className="cars-container">
                    <div className="cars-grid">
                        {filteredCars.map((car, index) => (
                            <div className="car-card" key={index}>
                                <img src={car.image} alt={car.name} />
                                <h2>{car.name}</h2>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span>{car.rating}</span>
                                </div>
                                <div className="car-details">
                                    <div><IoPeople className="caricon" /> {car.passengers}</div>
                                    <div><TbManualGearboxFilled className="caricon" /> {car.transmission}</div>
                                    <div><FaRegSnowflake /> {car.airConditioning}</div>
                                    <div><GiCarDoor className="caricon" /> {car.doors}</div>
                                </div>
                                <p className="price">{car.price}</p>
                                <button className="rent-button" onClick={() => handleRentNowClick(car)}>Rent Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cars;
