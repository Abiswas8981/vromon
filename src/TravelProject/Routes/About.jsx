import HeroSec from "../Component/HeroSec"
import Footer from "../Component/Footer";
import AboutInner from "../Component/AboutInner";
import Activity from "../Component/Activity";
import "../Routes/Style.css"
function About (){
    return(
        <>
        <HeroSec
        cName="hero-About"
        heroImg="image\img2.jpg"
        title="Your Journey Your Story"
        />
         <div className="Destination">
                <center><h1 style={{color:"#F87208"}}>Who WE | Are</h1>
                    <p>Tours give you the opportunity to see a lot, within a time frame.</p></center>
                <div className="des-head">
                    <div className="des-text">
                        <h1 style={{color:"#F87208"}}>About Vromon</h1>
                        <p>Born in 2014, Vromon Holidays ever since growing, has learnt very well how to be companion at every step you take while you travel far away from home. We are the authorized marketing agents of 15 state tourism development corporations and have tie-up with leading hotels comprising of all categories of accommodations – economy, budget, deluxe and star hotels including camps, palaces and resorts. These have been very carefully selected keeping in mind the standards of necessary amenities, ideal locations and proper ambiance to offer the best quality to price ratio. — We cater to all types of tours for every pocket, budget and taste, either for individual, groups or corporate clients. You just relax and feel the perfection as our tour escorts with the experience of last thirty years, take care of everything. — Definitely, as such, before planning your next vacation, just let us know your desired destination and days in hand, we would plan the most ideal tour with competitive quotations. Remember, with us travel is always smarter, safer and simpler.
                        </p>
                    </div>
                    <div className="image">
                        <img alt="img" src="image\hill.jpg" />
                        <img alt="img" src="image\img.jpg" />
                    </div>
                </div>
            </div>
            <div>
                <h1>About this activity</h1>
                <ul>
  {Activity.map((item, index) => (
    <li key={index}>
        <h3 className={item.title}>{item.title}</h3>
      <p style={{color:"black"}} className={item.Description}>{item.Description}</p>
      
      <i className={item.icon}></i>
    </li>
  ))}
</ul>
            </div>

        <AboutInner/>
        <Footer/>

        </>
    )
}

export default About;