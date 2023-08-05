import React from 'react';
import HomeCo from './HomeCo';
import MultiCar from "./MultiCar";
import HotelCard from './HotelCard';

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="title">Explore Incredible India</h1>
        <p className="subtitle">Discover the rich cultural heritage, breathtaking landscapes, and vibrant traditions</p>
      </header>
      <section className="featured-destinations">

        <HomeCo />
        <div>
          <center><h1 id='home-f3'>Top Trending India Holiday Destinations</h1></center>
        </div>
      </section>
      <div id='home-f1' style={{ marginTop: "-2rem" }}>
        <section className="explore-options">
          <div className="option-card1">
            <img src="img/sea.jpg" alt="Beach" className="option-image" style={{ width: "15rem" }} />
            <h3 className="option-title">Beach Getaways</h3>
            <p className="option-description">Experience the sun, sand, and sea at India's stunning beach destinations.</p>
          </div>
          <div className="option-card2">
            <img src="img/adventure.jpg" alt="Adventure" className="option-image" style={{ width: "15rem" }} />
            <h3 className="option-title">Thrilling Adventures</h3>
            <p className="option-description">Embark on exciting adventures like trekking through the majestic Himalayas .</p>
          </div>
          <div className="option-card3">
            <img src="img/rath.jpg" alt="Culture" className="option-image" style={{ width: "15rem" }} />
            <h3 className="option-title">Festival Holiday</h3>
            <p className="option-description">Immerse yourself in India's rich cultural heritage, vibrant festivals, and ancient traditions.</p>
          </div>
          <div className="option-card4">
            <img src="img/adv.jpg" alt="Culture" className="option-image" style={{ width: "15rem" }} />
            <h3 className="option-title">Treakking</h3>
            <p className="option-description">Kedarkantha Trek, Kheerganga Trek, Chadar Trek, Brahmatal Trek, Nag Tibba Trek, .</p>
          </div>
          <div className="option-card5">
            <img src="img/amberfort.jpg" alt="Culture" className="option-image" style={{ width: "15rem" }} />
            <h3 className="option-title">Heritage</h3>
            <p className="option-description">Kedarkantha Trek, Kheerganga Trek, Chadar Trek, Brahmatal Trek, Nag Tibba Trek,.</p>
          </div>
        </section>
      </div>

      <div class="container text-center">
        <center><div class="row" style={{ marginTop: "7.5rem" }}>
          <div class="col">
            <h3 style={{ fontFamily: "unset", marginLeft: "26rem", marginTop: "1rem" }}>SPECIAL</h3>
          </div>
          <div class="col">
            <h1 style={{ color: "#F87208", marginRight: "20rem" }}>| DISCOUNT</h1>
          </div>
        </div></center>
      </div>
      <div className="img-service">
        <div className="coupon1">
          <img src="image\coupon1.png" alt="" />
        </div>
        <div className="coupon2">
          <img src="image\coupon2.png" alt="" />
        </div>
      </div>
      <div>
        <div id='home-f6'><center><h1 >Must Visit Destinations</h1></center></div>

        <div style={{ width: "130%", marginLeft: "-10.5rem" }}>
          <MultiCar />
        </div>
        <h1 style={{ marginTop: "5rem", marginBottom: "-1rem", color: "black", fontFamily: "none", marginLeft: "-7rem" }}>Search Your Stay Resorts</h1>
        <HotelCard />
      </div>

      <div><center><h1 id='home-f6'>Place to Stay Luxury Hotels</h1></center></div>
      <div className='home-card'>
        <div class="home-card1" >
          <img src="img/HOTEL1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 style={{ color: "coral" }}>HOTELS UTTARAKHAND</h4>
            <p class="card-text" style={{ width: "15rem", marginLeft: "-0.5rem", textAlign: "inherit" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porta ex, a elementum lectus porta vitae.</p>
          </div>
        </div>
        <div class="home-card2" >
          <img src="img/HOTEL2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 style={{ color: "coral" }}>HOTEL CH 2, SRINAGAR</h4>
            <p class="card-text" style={{ width: "15rem", marginLeft: "-0.5rem", textAlign: "inherit" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porta ex, a elementum lectus porta vitae.</p>
          </div>
        </div>
        <div class="home-card3" >
          <img src="img/HOTEL3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 style={{ color: "coral" }}>HOTEL DARJEELING</h4>
            <p class="card-text" style={{ width: "15rem", marginLeft: "-0.5rem", textAlign: "inherit" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porta ex, a elementum lectus porta vitae.</p>
          </div>
        </div>
        <div class="home-card4">
          <img src="img/HOTEL4.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 style={{ color: "coral" }}>HOTEL WEST BENGAL</h4>
            <p class="card-text" style={{ width: "15rem", marginLeft: "-0.5rem", textAlign: "inherit" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porta ex, a elementum lectus porta vitae.</p>
          </div>
        </div>
        <div class="home-card5">
          <img src="img/HOTEL5.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 style={{ color: "coral" }}>HOTEL EAST ASSAM</h4>
            <p class="card-text" style={{ width: "15rem", marginLeft: "-0.5rem", textAlign: "inherit" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porta ex, a elementum lectus porta vitae.</p>
          </div>
        </div>

      </div>


    </div >
  );
};

export default Home;