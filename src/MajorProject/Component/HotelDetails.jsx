import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const hotelsData = [
  {
    name: 'Taj Hotel',
    city: 'Agra',
    description: 'Amar Vilas Palace,Hotel Description Positioned at the distance of just 600 meters from one of the Seven Wonders of the World- the Taj Mahal. ',
    image: 'img/hotel12.jpg',
    price: ' ₹1000',
    rate: '★★★★☆(4/5)',
    others:"Car Parking,Doctor on Call,A.c,Food."

  },
  {
    name: 'JaiPuria Hotel',
    city: 'Jaipur',
    description: 'Jaipur is the capital city of Rajasthan offering a blend of prehistoric traditions and modern thoughts.',
    image: 'img/hotel11.jpg',
    price: ' ₹1500',
    others:"Car Parking,Doctor on Call,A.C,24 hours Room Services.",
    rate: '★★★☆☆(3/5)'
  },
  {
    name: 'Top Point Hotel',
    city: 'darjeeling',
    description: 'Darjeeling shimmering lakes, rocky mountains make it an unforgettable place to visit. This rustic land owns old and new charming attractions hemmed in by the lofty mountains. This popular destination is famous amongst the adventurers, family vacationers as well as honeymooners.',
    image: 'img/HOTEL8.JPG',
    price: ' ₹1000',
    others:"Car Parking,Doctor on Call,24 hours Room Services.",
    rate: '★★★☆☆(3/5)'
  },
  {
    name: 'Sunrice Resort',
    city: 'Simla',
    description: 'Located at a quaint location in the lap of the nature, Sunrise Villa is a perfect accommodation option for ones who are on a holiday to the beautiful hill station of Shimla. guests can enjoy ultra modern amenities in the calm and peaceful environment in the suburbs of Shimla.',
    image: 'img/HOTEL4.jpg',
    price: ' ₹1500',
    others:"Car Parking,Doctor on Call,Food.",
    rate: '★★★★☆(4/5)'
  },
  {
    name: 'A.B Hotel',
    city: 'Kashmir',
    description: 'The Sand Dunes Village, Khimsar Fort and Jain temples, not to mention the beauty of the vast desert, make Khimsar a major tourist spot in Rajasthan that attracts an impressive number of visitors throughout the year. ',
    image: 'img/HOTEL2.jpg',
    price: ' ₹1200',
    rate: '★★★☆☆(3/5)',
    others:"Car Parking,Doctor on Call,Food."
  },
  {
    name: ' Raga resort',
    city: 'Rishikash',
    description: 'The Raga on the Ganges is one of the best resorts set on the bank of holy river Ganga in the midst of picturesque views.  ',
    others:"Car Parking,Doctor on Call,A.C,Food.",
    image: 'img/HOTEL1.jpg',
    price: ' ₹1000',
    rate: '★★★★★(5/5)'
  },
];

const HotelDetails = () => {
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
        <Modal show={selectedHotel !== null} onHide={handleCloseModal} style={{width:"100%"}}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"coral",fontSize:"2rem"}}>{selectedHotel.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 style={{textAlign:'center'}}>Choose your Luxury Hotel</h3>
            <img src={selectedHotel.image} alt={selectedHotel.name} style={{ maxWidth: '100%', marginBottom: '1rem' }} />
            <p style={{fontSize:"1.2rem"}}>{selectedHotel.description}</p>
            <p style={{fontSize:"1.2rem"}}>Service:{selectedHotel.others}</p>
            <b><p style={{fontSize:"1.2rem", color: "coral" }}>City: {selectedHotel.city}</p></b>
            <p style={{fontSize:"1.2rem"}}>Price: {selectedHotel.price}</p>
            <p style={{fontSize:"1.2rem"}}>Rate: {selectedHotel.rate}</p>
            
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

export default HotelDetails;
