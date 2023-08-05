import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const hotelsData = [
  {
    name: 'Taj Bengal',
    city: 'Kolkata',
    description: 'Festooned with modern and local art, The Taj Bengal is a leading luxury hotel of Kolkata. It tenders all the comforts of an opulent hotel with contemporary facilities and impeccable services. ',
    image: 'img/tajhotel.jpg',
    price: ' ₹2000',
    rate: '★★★★☆(4/5)',
    room: "205",
    address: "34 B, Belvedere Road, Alipore Kolkata, West Bengal, 700027, India"

  },
  {
    name: 'taj Place Hotel',
    city: 'Delhi',
    description: 'Just minutes away from the Presidential Palace and the famous Greater Kailash market, Taj Palace is positioned within in the popular and ethnically rich area of Sardar Patel, New Delhi.',
    image: 'img/tajpalacehotel.jpg',
    price: ' ₹1800',
    rate: '★★★★☆(4/5)',
    room: "402",
    address: "2, Sardar Patel Marg,Diplomatic Enclave,New Delhi, Delhi, 110021"

  },
  {
    name: 'Leela Palace',
    city: 'Chennai',
    description: 'Spectacular Leela Palace in Chennai is the citys first and only sea-facing five-star hotel.It knits a magical spell upon the guests with its royal grandeurand roses. ',
    image: 'img/leelahotel.jpg',
    price: ' ₹2000',
    rate: '★★★★★(5/5)',
    room: "310",
    address: "Lake Pichola,Udaipur-313001,Rajasthan"
  },
  {
    name: 'Taj Jai Mahal Palace',
    city: 'Jaipur',
    description: 'Taj Jai Mahal Palace mingles the best of Jaipurs old and new. This unparalleled palace was erected in the 1745 A.D on 18 acres of splendid landscaped Moghol Gardens.',
    image: 'img/jaihotel.jpg',
    price: ' ₹1500',
    rate: '★★★★☆(4/5)',
    room: "320",
    address: "Jacob Rd, Madrampura,Civil Lines, Jaipur, RJ 302006, India"
  },
  {
    name: 'Ananda In The Himalayas',
    city: 'Kashmir',
    description: 'Perched amongst Sal forests, overlooking the picturesque sights of River Ganga, Ananda in Himalayas assures its guests to provide the best of comforts.',
    image: 'img/himalayahotel.jpg',
    price: ' ₹1500',
    rate: '★★★☆☆(3/5)',
    room: "401",
    address: "The Palace Estate,Narendra Nagar, Garhwal, Uttaranchal, 249175"
  },
  {
    name: 'The Oberoi Amarvilas',
    city: 'Agra',
    description: 'A name defines, as does The Oberoi Amarvilas in Agra by defining Luxury elaborately.Lawns, fountains, pools and grand pavilion also add to the experience.',
    image: 'img/agrahotel.jpg',
    price: ' ₹1000',
    rate: '★★★★☆(4/5)',
    room: "206",
    address: 'Taj East Gate RoadAgra, Uttar Pradesh- 282001,India'
  },
];

const HotelDetails2 = () => {
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
            <p style={{ fontSize: "1.2rem" }}>Address: {selectedHotel.address}</p>
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

export default HotelDetails2;
