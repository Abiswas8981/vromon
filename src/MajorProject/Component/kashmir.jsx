import HotelCard from "./HotelCard";
import MultiCar from "./MultiCar";
import { NavLink } from "react-router-dom";

const Kashmir = () => {
  return (
    <>
      <img style={{ width: "100%", height: "30rem" }} src="img/kashmir1.jpg"></img>
      <lebal className="privacy-link" style={{ marginLeft: "28rem" }}>
        <NavLink to="/">Home</NavLink>/<NavLink to="/contact">Contact Us</NavLink>/Kashmir tour Package
      </lebal>
      <center><h1 style={{ marginTop: '2rem', color: "coral", backgroundColor: "antiquewhite" }}>Welcome to Kashmir Package</h1></center>
      <center><p id="kas-p1">Known for its breathtaking landscapes, surreal lakes, and picturesque valleys, Jammu and Kashmir is an exquisite destination that is a must-visit for those seeking the perfect summer or winter holiday getaway in India to create unforgettable memories with their loved ones. Now a Union territory, Jammu and Kashmir boasts two capitals for convenience: Jammu for winters and Srinagar for summers.

        Often referred to as “heaven on earth’, Jammu and Kashmir tourism offers picturesque valleys, serene lakes, snow-capped mountains, religious sites, and rich cultural diversity that will truly give you a first-hand experience of heaven. Jammu and Kashmir is not just a hill station for family vacation or romantic honeymoon rather it is filled with adventure and beauty which will surely leave you mesmerised. It encompasses various tourist attractions, natural landscapes, cultural heritage, and adventure activities trekking, skiing, mountaineering, houseboat stays, and visits to historical monuments and religious shrines.</p></center>
      <div className="kas-car">
        <div id="carouselExampleIndicators" class="carousel slide" >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="img/shimla.jpeg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="img/reshikash.jpg" class="d-block w-100" alt=".." />
            </div>
            <div class="carousel-item">
              <img src="img/kashmir.jpg" class="d-block w-100" alt=".." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <ul class="Benfits"><li className="kas-li1"><img className="kas-img1" src="https://www.tourmyindia.com/treks/wp-content/themes/trekking/imagess/meal.svg" alt="meal" />
      </li><li className="kas-li2"><img className="kas-img2" src="https://www.tourmyindia.com/treks/wp-content/themes/trekking/imagess/transport.svg" alt="transport" />
        </li><li className="kas-li3"><img className="kas-img3" src="https://www.tourmyindia.com/treks/wp-content/themes/trekking/imagess/3-star.svg" alt="star hotel" />
        </li></ul>
      <div className="kas-text">
        <h2 style={{ marginTop: "5rem", marginBottom: "-1rem", color: "black", fontFamily: "none", marginLeft: "9rem" }}>Search Your Stay Resorts</h2>
        <div style={{
          marginLeft: "22rem",
          marginTop: "-2rem"
        }}><div>
          <HotelCard /></div>
          <center><h1 style={{ marginTop: '2rem', color: "coral", backgroundColor: "antiquewhite", width: "185%", boxShadow: "0 0 20px #c3690380", marginBottom: "2rem", marginLeft: "-25rem" }}>Kashmir Great Lakes Trek (Detailed Itinerary)</h1></center>

        </div>
        <div >

          <div class="itinerary-cont accordion-box" id="section-5"><div class="itinerary-cont-box accordion-item is-active">
            <span>Day 01</span><div style={{ marginLeft: "4rem" }}><div class="accordion-thumb"><h4 style={{ color: "rgb(245, 160, 128)" }}>Srinagar – Sonamarg (79.4 kms/2 hrs 10 minutes approx)</h4></div><div class="accordion-panel"><h5>Other Benfits (On Arrival)</h5><p>The Kashmir Great Lakes Trekking Tour begins from Srinagar. After arriving, drive to Sonamarg (3 hours drive approx). Overnight stay in camps on the banks of River Sindh. This is extremely important for acclimatisation.&nbsp;</p></div></div></div><div class="itinerary-cont-box accordion-item ">
              <span>Day 02</span><div style={{ marginLeft: "4rem" }}><div class="accordion-thumb"><h4 style={{ color: "rgb(245, 160, 128)" }}>Sonamarg-Nichnai (11 km/6 hours trek)</h4></div><div class="accordion-panel"><p>The trekking route begins from Sonamarg and continues right up to Shekdur. Along the way, you come across pine trees, lush pastures, mountains and glacier streams. You will also cross silver birch forests and encounter several boulders, climbing which will require additional effort on your part. Finally, you reach Nichnai Valley. The altitude of Nichnai Valley is 3,500 meters.</p></div></div><div class="itinerary-cont-box accordion-item"></div>
              <span>Day 03</span><div style={{ marginLeft: "4rem" }}><div class="accordion-thumb"><h4 style={{ color: "rgb(245, 160, 128)" }}>Nichnai-Vishansar Lake (13 km/7 hours trek)</h4></div><div class="accordion-panel"><p>The trekking route starts from Nichnai Valley, where the first 3 hours climb to Nichnai Pass is steep. The Nichnai Pass is located at an altitude of 4,000 meters. Along the way, you encounter meadows that are carpeted with a wide variety of wild flowers and offer gorgeous views of the Himalayas. After reaching the Nichnai Pass, descend towards the Vishansar Lake campsite. This is the first Alpine Lake in the Great Lakes of Kashmir.</p></div></div><div class="itinerary-cont-box accordion-item "></div>
              <span>Day 04</span><div style={{ marginLeft: "4rem" }}><div class="accordion-thumb"><h4 style={{ color: "rgb(245, 160, 128)" }}>Kishansar Lake&nbsp;</h4></div><div class="accordion-panel"><p>Today is a rest day, where you can recover and rest. There will be a short hiking tour to Kishansar Lake, which lies at the base of the Kishansar Peak. The lake is enormous with pure blue water and has a meadow stretching beside it. Enjoy the fabulous views around and take in the beauty of the place.</p></div></div><div class="itinerary-cont-box accordion-item "></div>
              <span>Day 05</span><div style={{ marginLeft: "4rem" }}><div class="accordion-thumb"><h4 style={{ color: "rgb(245, 160, 128)" }}>Vishansar to Gadsar Lake (16 km/8 hours trek)</h4></div><div class="accordion-panel"><p>The trek starts from Vishansar Lake, where the climb to Kishansar Lake is quite easy. From Kishansar Lake, the route to Gadsar Pass at an altitude of almost 4,300 meters, is quite steep. On a clear day, you are treated to views of the Yamsar Lake and Mt. Nanga Parbat, 9th highest mountain in the world at 8,126 meters. The trail is dotted with wild flowers, glaciers, rare herbs and wild animals of various kinds.&nbsp;</p></div></div><div class="itinerary-cont-box accordion-item "></div>
              <span>Day 06</span><div style={{ marginLeft: "4rem" }}><div class="accordion-thumb"><h4 style={{ color: "rgb(245, 160, 128)" }}>Gadsar to Mengendob (10km/4 hours trek)</h4></div><div class="accordion-panel"><p>The trail begins from the Gadsar campsite. After you cross the snow bridge, the climb up to Kustoorkut is moderate. Just opposite to Kustoorjut is a lone permanent settlement called Jawdora. After Kustoorkut, take a left curve to reach the Satsaran campsite. On the way, visit the Satsar Lake.&nbsp;</p></div></div><div class="itinerary-cont-box accordion-item "></div>
              <span>Day 07</span><div style={{ marginLeft: "4rem" }}><div class="accordion-thumb"><h4 style={{ color: "rgb(245, 160, 128)" }}>Megandob to Gangabal Twin Lakes (11km/6 hours trek)</h4></div><div class="accordion-panel"><p>The trail starts by climbing to Mengandon to Zaji Pass, which will take about 3 hours. From Zaji Pass, enjoy the breathtaking views of the Gangabal and Nandkhol lakes, along with Khoulsar Lake. You can also spot Mt. Harmukh, at 5,400 meters, in all its majestic beauty. There are other small spectacular lakes whose spectacular views can be enjoyed from the pass. From Zoji Pass, the descent to Gangabal campsite is a bit difficult.</p></div></div><div class="itinerary-cont-box accordion-item "></div>
              <span>Day 08</span><div style={{ marginLeft: "4rem" }}><div class="accordion-thumb"><h4 style={{ color: "rgb(245, 160, 128)" }}>Gangabal to Naranag Valley (15km/08 hours trek)</h4></div><div class="accordion-panel"><p>Hike up to Trundkhul, Budshare ridge. From the ridge, the descent trail to the Naranag Valley begins, which will take you almost 4 hours. After reaching Naranag, visit the 4,000 years old Naranag Temple. That is followed by a drive to Srinagar. The trek comes to an end.&nbsp;</p></div></div></div></div>
        </div></div>


      <div className="grid-container">

        <div className="grid-row" id="row-1">
          <div className="grid-cell" style={{ color: "coral", fontFamily: "cursive" }}>FOOD</div>
          <div className="grid-cell" style={{ fontSize: "1.2rem" }}>4-Time Food</div>
          <div className="grid-cell" style={{ fontSize: "1.2rem" }}>Freash Food</div>
        </div>

        <div className="grid-row" id="row-2">
          <div className="grid-cell" style={{ color: "coral", fontFamily: "cursive" }}>STAY</div>
          <div className="grid-cell" style={{ fontSize: "1.2rem" }}>Choose resorts</div>
          <div className="grid-cell" style={{ fontSize: "1.2rem" }}>luxury Stay</div>
        </div>
        <div className="grid-row" id="row-3">
          <div className="grid-cell" style={{ color: "coral", fontFamily: "cursive" }}>TRANSFER</div>
          <div className="grid-cell" style={{ fontSize: "1.2rem" }}>Train Journey</div>
          <div className="grid-cell" style={{ fontSize: "1.2rem" }}>BUS Journey</div>
        </div>
      </div>
      <br />
      <br /><br /><br /><br /><br /><br />
      <div id='f6'><center><h1 >Must Visit Destinations</h1></center></div>

      <MultiCar />

    </>
  )
}
export default Kashmir;