
import HeroSec from "../Component/HeroSec";
import Footer from "../Component/Footer";
import "../Routes/Style.css";
import AboutInner from "../Component/AboutInner";
import McSlider from "../Component/McSlider";
import HomeRecentTrip from "../Component/HomeRecentTrip";
function Home() {
   
    return (
        <>
            <HeroSec
                cName="hero"
                heroImg="image\img1.jpg"
                title="Let us plan you a perfect India Holiday"
                text="Choose Your Favourite destination."
                buttontext="Travel Plan"
                url="/"
                btnClass="show" />
            {/* Popular destination  */}
            <div className="Destination">
                <center><h1>Popular Destination</h1>
                    <p>Tours give you the opportunity to see a lot, within a time frame.</p></center>
                <div className="des-head">
                    <div className="des-text">
                        <h2>Char Dham,Uttrakhand</h2>
                        <p>All Chardham tour packages usually begin from Haridwar.
                            You can either fly to Dehradun and then go to Haridwar or reach the holy city directly by train or car.
                            Thereafter, you have to travel to Yamunotri from Haridwar, which is around 6-7 hours drive by road.
                            Your tour may also start from Dehradun if you choose to travel by helicopter to the Dhams.The Char Dhams in the country are spread in four directions.
                             These are Badrinath and Rameswaram in the north and south along with Puri and Dwarka in the east and west respectively.
                            However, the Char Dhams or temples in the Himalayas are the following:
                            • Yamunotri
                            • Gangotri
                            • Kedarnath
                            • Badrinath
                        </p>
                    </div>
                    <div className="image">
                        <img alt="img" src="image\kedar1.jpg" />
                        <img alt="img" src="image\uttarkhand.jpg" />
                    </div>
                </div>

                <div className="des-head-reverse">
                    <div className="des-text">
                        <h2>Gangtok,Sikkim</h2>
                        <p>Sikkim is a tiny hill state tucked in North Eastern part of India.
                            Known for its lofty mountains, quaint villages, pristine scenery, a holiday in Sikkim is sure to bring you close to nature providing you ample peace and solitude.
                            Sikkim is also a paradise for adventure freaks, trekkers and mountaineers owing to its myriad adventure activities.Best Places to See in East Sikkim – GangtokBest Places to Visit in North Sikkim – Lachung, LachenMust Visit Places in West Sikkim – Pelling, YuksomTop Places to Visit South Sikkim – Namchi, Ravangla

                        </p>
                    </div>
                    <div className="image">
                        <img alt="img" src="image\gangtok.jpg" />
                        <img alt="img" src="image\sikkim.jpg" />
                    </div>
                </div>
            </div>
            
            <McSlider/>
            <HomeRecentTrip/>
            <div id="home-about">
                <AboutInner />
            </div>
            <Footer />

        </>
    )
}

export default Home;