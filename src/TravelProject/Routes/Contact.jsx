import HeroSec from "../Component/HeroSec";
import Footer from "../Component/Footer";
import "../Routes/Style.css"
function Contact() {
  return (
    <>
      <HeroSec
        cName="hero-Contact"
        heroImg="image\back11.jpg"
        title="Join Our Agency "
        text="Asked Your Query."
      />
      <div><img src="image\back5.png" class="a" /></div>
      <div id="f1">Provide Your Details </div>
      <div class="form">
        <div class="row g-3">
          <div class="col">
            <label for="inputEmail4" class="form-label">First name</label>
            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div class="col">
            <label for="inputEmail4" class="form-label">Last name</label>
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Phone Number</label>
            <input type="number" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address 1</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="location" />
          </div>

          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose</option>
              <option>Gujrat</option>
              <option>Tamil Nadu</option>
              <option>Asam</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
              <option>Bihar</option>
              <option>Rajasthan</option>
              <option>Andaman</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <center><button type="submit" class="btn btn-primary" id="f4">Submit</button></center>
          </div>
        </form>
      </div>
      <div className="map1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.628343150414!2d88.45214526646876!3d22.693591033756462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f6c8fa00d3f%3A0x59b5690302336fcb!2sVROMON%20HOLIDAY&#39;S!5e0!3m2!1sen!2sin!4v1688589738017!5m2!1sen!2sin" width="450" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
      </div>
      <div id="f2"> Contact Us </div>
<div className="from-container">
  <center><h1>Send massage to us!</h1></center>
  <center><from>
    <input placeholder="Name"/>
    <input placeholder="Email"/>
    <input placeholder="subject"/>
    <input placeholder="massage" row="4"></input>
    <button>Send</button>
  </from></center>
</div>

      <div class="c">
        <table>
          <tr>
            <td>Address:-</td>
            <td></td>
            <td>Madhyamgram</td>
          </tr>
          <tr>
            <td>Phone :-</td>
            <td></td>
            <td>8981460588</td>
          </tr>
          <tr>
            <td>Email:-</td>
            <td></td>
            <td>info@Vromon.com</td>
          </tr>
        </table>
    </div>
    <div id="contact-footer">
      <Footer />
      </div>
    </>

  )

}

export default Contact;