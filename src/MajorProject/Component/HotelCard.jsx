import React, { useState } from 'react';
import Hotelitem from './Hotelitem';

const HotelCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');


  const handlePriceFilter = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredDestinations = Hotelitem.filter(
    (destination) =>
      destination.Type.toLowerCase().includes(searchTerm.toLowerCase()) &&
      destination.price <= parseInt(maxPrice)
  );

  return (
    <div>
      <div>
        <input
          id='hotel-card-f2'
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handlePriceFilter}
        />
      </div>
      <div className="trip-container" style={{ width: "100%"}}>
        {filteredDestinations.map((destination) => (
          <div
            key={destination.id}
            className="trip-card mb-3"
            id='trip-card'
          >
            <img src={destination.image} className="trip-card-img" alt={destination.Hotel} />
            <div className="card-body">
              <h5 className="card-title">{destination.Hotel}</h5>
              <p className="card-text">
                <strong>Place: </strong>
                {destination.Place}
              </p>
              <p className="card-text">
                <strong>Type: </strong>
                {destination.Type}
              </p>
              <p className="card-text">
                <strong>Description: </strong>
                {destination.description}
              </p>
              <p className="card-text">
                <strong>Price: </strong>
                {destination.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCard;
