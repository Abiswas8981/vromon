
import "../Routes/Style.css"
const Footer = () => {
    return (
        <>
            <div className="log">
                <ul><center>
                    <label class="patners-img2"><img src="image\5.png" class="k" /></label>
                    <label class="patners-img"><img src="image\2.png" class="l" /></label>
                    <label class="patners-img1"><img src="image\3.png" class="m" /></label>
                    <label class="patners-img3"><img src="image\4.png" class="n" /></label>
                </center> </ul>
            </div>
            <div className="footer">
                <div className="top">
                    <div>
                        <a href="/"><img src="image\logo2.png" className="logo2" alt="Tour My India" /></a>
                        <p class="p">Choose Your Favourite destination.</p>
                    </div>

                    <div id="f9">
                        <a href="#" target="_blank"><i class="bi bi-whatsapp" ></i></a>
                        <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
                        <a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
                        <a href="#" target="_blank"><i class="bi bi-youtube"></i></a>
                    </div>

                </div>
                <div className="bottom"></div>
                <div className="Section1">
                    <h4 className="Head">In The Main Section</h4>
                    <a href="/" className="a">Register Hotel</a>
                    <a href="/" className="a">Recent trip</a>
                    <a href="/" className="a">Service</a>
                    <a href="/" className="a">Tripe Plan</a>
                    <a href="/" className="a">Top Travel Destination</a>
                </div>
                <div className="Section2">
                    <h4 className="Head">Help</h4>
                    <a href="/" className="a">Support</a>
                    <a href="/" className="a">Trouble shooting</a>
                    <a href="/" className="a">Contact Us</a>
                </div>
                <div className="Section3">
                    <h4 className="Head">Others</h4>
                    <a href="/" className="a">terms of service</a>
                    <a href="/" className="a">Privacy Policy</a>
                    <a href="/" className="a">License</a>
                </div>
            </div>
        </>
    )

}
export default Footer;