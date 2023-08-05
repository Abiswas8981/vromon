import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const hotelsData = [
    {
        name: 'Mahal Resort',
        city: 'Andaman',
        description: 'Taj Jai Mahal Palace mingles the best of Andaman old and new. This unparalleled palace was erected in the 1745 A.D on 18 acres of splendid landscaped Moghol Gardens.',
        image: 'img/andamanhotel.jpg',
        price: ' ₹2500',
        rate: '★★★★★(5/5)',
        room: "320",
        other: "Car Parking,Doctor on Call,24 hours service."

    },
    {
        name: 'Citrus Goa Hotel',
        city: 'Goa Beach',
        description: 'Citrus Goa is a 4 star hotel located at a walking distance from the renowned Calangute Beach of North Goa.',
        image: 'img/goahotel.jpg',
        price: ' ₹2000',
        rate: '★★★★★(5/5)',
        room: "409",
        other: "Car Parking,Doctor on Call,A.c,24 hours service."


    },
    {
        name: 'Sunrise',
        city: 'Puri',
        description: 'Hotel Puri Beach Resort is a beautiful 2 star seaside resort that is engaged in offering a comfy and relaxing accommodation to the visitors looking for affordable seaside lodging in Puri. ',
        image: 'img/tajhotel.jpg',
        price: ' ₹1500',
        rate: '★★★★☆(4/5)',
        room: "205",
        other: "Car Parking,Doctor on Call,A.c,Food."
    },

    {
        name: 'Neelams The Grand',
        city: 'Digha',
        description: 'Hotel Neelam The Grand is an amazing lodging option available for the tourists visiting Digha and seeking for eco friendly accommodation near the exotic Calangute Beach of Digha.',
        image: 'img/neelamhotel.jpg',
        price: ' ₹1000',
        rate: '★★★☆☆(3/5)',
        room: "110",
        other: "Car Parking,Doctor on Call,A.c,24 hours service."

    },
];

const HotelDetails3 = () => {
    const [selectedHotel, setSelectedHotel] = useState(null);

    const handleHotelClick = (hotel) => {
        setSelectedHotel(hotel);
    };

    const handleCloseModal = () => {
        setSelectedHotel(null);
    };

    return (
        <div>
            {hotelsData.map((hotel) => (
                <li key={hotel.name}>
                    <button className="dropdown-item" onClick={() => handleHotelClick(hotel)}>
                        {hotel.city}
                    </button>
                </li>
            ))}
            {selectedHotel && (
                <Modal show={selectedHotel !== null} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: "coral", fontSize: "2rem" }}>{selectedHotel.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3 style={{ textAlign: 'center' }}>Choose your Luxury Hotel</h3>
                        <img src={selectedHotel.image} alt={selectedHotel.name} style={{ maxWidth: '100%', marginBottom: '1rem' }} />
                        <p style={{ fontSize: "1.2rem" }}>{selectedHotel.description}</p>
                        <b><p style={{ fontSize: "1.2rem", color: "coral" }}>City: {selectedHotel.city}</p></b>
                        <p style={{ fontSize: "1.2rem" }}>Services: {selectedHotel.other}</p>
                        <p style={{ fontSize: "1.2rem" }}>Price: {selectedHotel.price}</p>
                        <p style={{ fontSize: "1.2rem" }}>No. of room:{selectedHotel.room}</p>
                        <p style={{ fontSize: "1.2rem" }}>Rate: {selectedHotel.rate}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <NavLink to="hotelbook"><Button variant="primary">
                            Book Now
                        </Button></NavLink>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default HotelDetails3;
