import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Packages from './Packages';
import { NavLink } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4
  },
};

const MultiCar = () => {
  const chunkSize = 5;
  const chunks = Packages.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; 
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div className="App">
      <center>
        <div className="carousel">
          <Carousel responsive={responsive}>
            {chunks.map((chunk, chunkIndex) => (
              <Carousel.Item key={chunkIndex}>
                <div className="d-flex">
                  {chunk.map(course => (
                    <div className="Mccard" key={course.id}>
                      <img src={course.image} className="card-img-top" alt={course.title} />
                      <div className="card-body">
                        <h5 className="card-title">{course.place}</h5>
                        <p className="card-text">{course.description}</p>
                        <NavLink to={course.route} className="btn btn-primary" id="Mc-btn">
                          Explore
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </center>
    </div>
  );
};

export default MultiCar;
