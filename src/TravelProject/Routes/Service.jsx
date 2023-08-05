import Footer from "../Component/Footer";
import HeroSec from "../Component/HeroSec";
import HomeRecentTrip from "../Component/HomeRecentTrip";
import Train1 from "../Component/Train1";
import "../Routes/Style.css"

function Service() {
    return (
        <>
            <HeroSec
                cName="hero-Service"
                heroImg="image\img3.jpg"
                title="Let us plan you a
        perfect India Holiday"
                text="You Like Tour,Tour Likes You"
            />
            <HomeRecentTrip />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h3 id="service-f1">SPECIAL</h3>
                    </div>
                    <div class="col">
                        <h1 style={{ color: "#F87208", marginLeft: "-45vh" }}>| DISCOUNT</h1>
                    </div>
                </div>
            </div>
            <div className="img-service">
                <div className="coupon1">
                    <img src="image\coupon1.png" alt="" />
                </div>
                <div className="coupon2">
                    <img src="image\coupon2.png" alt="" />
                </div>
            </div>
            <Train1 />

            <div class="container text-center" style={{ backgroundColor: "darkkhaki", marginTop: "69px" }}>
                <div class="row" >
                    <div class="col" >
                        <h3 id="service-f2">Book Your</h3>
                    </div>
                    <div class="col">
                        <h1 style={{ color: "#F87208", marginLeft: "-51vh", marginTop: "0px" }}>| HOTEL</h1>
                    </div>
                </div>
            </div>
            <div className="serv-card1">
                <div className="card" id="card3">
                    <div className="card-img">
                        <img alt="image" src="image\HOTEL1.jpg" />
                    </div>
                    <h4>HOTEL CH 2, SRINAGAR</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porta ex, a elementum lectus porta vitae.</p>
                </div>
            </div>

            <div className="serv-card2">
                <div className="card" id="card3">
                    <div className="card-img">
                        <img alt="image" src="image\HOTEL2.jpg"/>
                    </div>
                    <h4>HOTELS IN ANDHRA PRADESH</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porta ex, a elementum lectus porta vitae.</p>
                </div>
            </div>
            <div className="serv-card3">
                <div className="card" id="card3">
                    <div className="card-img">
                        <img alt="image" src="image\HOTEL3.jpg"/>
                    </div>
                    <h4>HOTEL NORTH EAST & ASSAM</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porta ex, a elementum lectus porta vitae.</p>
                </div>
            </div>
            <div className="serv-card4">
                <div className="card" id="card3">
                    <div className="card-img">
                        <img alt="image" src="image\HOTEL4.jpg"/>
                    </div>
                    <h4>HOTELS IN WEST BENGAL</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar porta ex, a elementum lectus porta vitae.</p>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default Service;