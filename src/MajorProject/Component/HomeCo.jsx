import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Design.css"


const HomeCo = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img src="img/tajmahal.jpeg" className="img-fluid rounded-start" alt="Taj Mahal" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title" style={{fontSize:"2.5rem",color:"rgb(245, 160, 128)"}}>Taj Mahal</h5>
                  <p className="card-text">
                    One of the Seven Wonders of the World, the Taj Mahal is a magnificent white marble mausoleum built by Emperor Shah Jahan in memory of his wife. If you’re more pressed for time, you can check out the Taj Mahal on a whirlwind day tour from Delhi. Check out Urban Adventures to see the itinerary that we’d recommend for this. And while you’re at it, check out their day trips in Delhi, Jaipur, Varanasi, and Mumbai!
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img src="img/kolkata.jpeg" className="img-fluid rounded-start" alt="Kolkata" style={{ width: "100%" }} />
              </div>
              <div className="col-md-6 d-flex align-items-center"  >
                <div className="card-body">
                  <h5 className="card-title" style={{fontSize:"2.5rem",color:"rgb(245, 160, 128)"}}>Kolkata</h5>
                  <p className="card-text">
                    The Victoria Memorial is a large marble building on the Maidan in Central Kolkata, having its entrance on the Queen's Way. It was built between 1906 and 1921 by the British government. It is dedicated to the memory of Queen Victoria, Empress of India from 1876 to 1901. Possessing prominent features of the British architecture of the colonial era, it has evolved into one of the most popular places in the city.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img src="img/goldentemple.jpeg" className="img-fluid rounded-start" alt="Golden Temple" style={{ width: "100%" }} />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title" style={{fontSize:"2.5rem",color:"rgb(245, 160, 128)"}}>Golden Temple</h5>
                  <p className="card-text">
                    The Golden Temple is spiritually the most significant shrine in Sikhism.
                    It became a centre of the Singh Sabha Movement between 1883 and 1920s,
                    and the Punjabi Suba movement between 1947 and 1966.The Golden Temple is an open house of worship for all people, from all walks of life and faiths. 
                    It has a square plan with four entrances, and a circumambulation path around the pool.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCo;
