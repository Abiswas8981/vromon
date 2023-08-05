import "../Routes/Style.css"
const AboutInner = () => {
    return (
        <>
           
            <div className="Destination">
                <h1 style={{color:"#F87208"}}> Why Choose Us?</h1>

                <div className="about-p">
                    <p>More Than 20 Years Of Experience, Variety Of Tour Packages, Best Deals And Personalised Services.</p>
                    <div class="container text-center">
                        <div class="row" style={{ marginLeft: "-20vh", width: "180vh" }}>
                            <div class="col" style={{ textAlign: "justify", marginLeft: "-5vh" }}>
                                <h2 style={{color:"#F87208"}}>Experience</h2>
                                <p>Our dedicated travel team diligently works round-the-clock to design the best travel experiences for the customers. The skilled team spends considerable amounts of time ideating tour packages that guarantee to make traveling with us an experience like no other.
                                     We select the finest hotels in every category and boast an excellent personal fleet of vehicles for transportation.
                                </p>
                            </div>
                            <div class="col" style={{ marginLeft: "18vh" }}>
                                <img src="image\ganga.jpg" alt="" />
                            </div>
                            <div class="col" style={{ textAlign: "justify", marginLeft: "10vh" }}>
                                <h2 style={{color:"#F87208"}}>Recognition</h2>
                                <p>We are proud to be accredited by major tour and travel associations in India and world like IATA, IATO, TAAI, IMF, MOT and TOFT. It is an honour for us to be able to be a part of crucial initiatives towards safeguarding animal rights, protection of endangered species, and responsible mountaineering and trekking ventures.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row" style={{ marginTop: "-29vh", marginLeft: "-20vh", width: "120vh" }}>
                        <div class="col-6" style={{ textAlign: "justify", marginLeft: "18vh", width: "68vh" }}>
                            <h2 style={{color:"#F87208"}}>Positive Customer Feedback</h2>
                            <p>We're truly humbled to have received volumes of positive customer feedback for our services.This appreciation from our prestigious clients is more valuable than any award for us. As a customer-driven travel company, our priority has always been their satisfaction. Therefore, our dedicated team of experts endeavours to achieve the goal of making our customers happy.
                            </p>
                        </div>
                        <div class="col-6" style={{ marginTop: "-32vh", marginLeft: "151vh", width: "55vh", marginTop:"-28vh"}}>
                            <h2 style={{color:"#F87208"}}>WHAT WE | DO</h2>
                            <ul id="list1">
                                <li>First Class Flights</li>
                                <li>Five Star Accomodations</li>
                                <li>Inclusive Packages</li>
                            </ul>
                            <ul id="list2">
                                <li>Handpicked Hotels</li>
                                <li>Accesibility Management</li>
                                <li>10 Languages Available</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>







        </>
    )
}
export default AboutInner;