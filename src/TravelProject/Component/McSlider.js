import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Plan from './Plan';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4
  },
};
const McSlider = () => {
  return (
    <div className="App">
      <center>
        <h1>Trekking</h1>
      </center>
      <center>
        <div className="carousel">
          <Carousel responsive={responsive}>
            {Plan.map(course => (
              <div className="Mccard" style={{width:"30rem",height:"28rem",}} key={course.id}>
                <img src={course.img} className="card-img-top"style={{width:"18rem",height:"20rem"}} alt={course.title} />
                <div className="card-body"style={{marginTop:"20rem",width:"18rem"}} >
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <a href="#" className="btn btn-primary" id="button1">Explore</a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </center>
    </div>
  );
};

export default McSlider;