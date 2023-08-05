import React from 'react';
import Packages from './Packages';
import MultiCar from './MultiCar';
import { NavLink } from 'react-router-dom';

const Trips = ({ wishlist, addToWishlist }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDestinations = Packages.filter(
    (destination) =>
      destination.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToWishlist = (destination) => {
    addToWishlist(destination);
  };

  return (
    <div>
      <h1 id='trip-f1'>Tourist Destinations in India</h1>
      <MultiCar/>
      <center>
        <div className="container text-center">
          <div className="row" style={{ marginTop: "1rem", marginLeft: "3rem",marginBottom:"-10rem" }}>
            <div className="col">
              <h3 id="home-f2">All</h3>
            </div>
            <div className="col">
              <h1 style={{ color: "#F87208", marginLeft: "-35rem", marginBottom: "-5rem" }}>| PACKAGES</h1>
            </div>
          </div>
        </div>
      </center>
      
      
      <h2 style={{ fontFamily: "none", marginLeft: "68rem", marginBottom: "-2rem", marginTop: "-2rem",fontSize:"1.8rem"}}>Search Your Packages</h2>
      <input
        id='trip-f2'
        type="text"
        placeholder="Search by place or state"
        value={searchTerm}
        onChange={handleSearch}
      />
      
      <div className="trip-container" style={{ width: "92%", marginLeft: "4rem",marginTop:"3rem"}}>
        {filteredDestinations.map((destination) => (
          <div
            key={destination.id}
            className="trip-card mb-3"
            id='trip-card'
          >
            <img  src={destination.image} className="trip-card-img" alt={destination.place} />
            <div className="card-body">
              <h5 className="card-title">{destination.place}</h5>
              <p className="card-text">
                <strong>Category: </strong>
                {destination.category}
              </p>
              <p className="card-text">
                <strong>Description: </strong>
                {destination.description}
              </p>
              <p className="card-text">
                <strong>Price:₹ </strong>
                {destination.price}
              </p>
              <p className="card-text">
                <strong>Duration: </strong>
                {destination.duration}
              </p>
              <p className="card-text">
                <strong>Rating: </strong>
                {destination.rating} 
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToWishlist(destination)}
              >
                Add to Wishlist
              </button>
              <NavLink to="/booking">
                <button className="btn btn-primary">Book Now</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
