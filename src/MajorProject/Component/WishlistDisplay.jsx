import React from 'react';
import { NavLink } from 'react-router-dom';

const WishlistDisplay = ({ wishlist, removeFromWishlist }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "coral", marginTop: "2rem", marginBottom: "2rem", fontFamily: "-webkit-body",backgroundColor:"antiquewhite" }}>Your Wishlist & Collection</h1>
      <center><p style={{ fontSize: "1.3rem", width: "50%" }}>While traveling with us, you can enjoy a journey full of comfort and good memories forever. No matter what travel requirements you have, we will fulfill.</p></center>

      <div className="trip-container" style={{ width: "90%", marginLeft: "5rem" }}>
        {wishlist.length === 0 ? (
          <div style={{fontSize:"2rem",marginLeft:"25rem",width:"100%"}} >
           <p style={{textAlign:"center",backgroundColor:'red'}}>Your wishlist is empty !.</p> 
            <NavLink to="/trip">
              <center><button className="btn btn-primary" style={{marginLeft: "rem"}}>Explore Trips</button></center>
            </NavLink>
          </div>
        ) : (
          wishlist.map((destination) => (
            <div
              key={destination.id}
              className="trip-card mb-3"
              id='trip-card'
            >
              <img src={destination.image} className="trip-card-img" alt={destination.place} />
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
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromWishlist(destination)}
                >
                  Remove from Wishlist
                </button>
                <NavLink to="/booking">
                  <button className="btn btn-primary">Book Now</button>
                </NavLink>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistDisplay;
