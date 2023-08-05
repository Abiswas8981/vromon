import React, { useState } from 'react';
import AboutInner from './AboutInner';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submitted:', {
      name,
      email,
      phone,
      address,
      selectedPackage,
    });

    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setSelectedPackage('');
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "2rem", color: "coral" }}>Vromon Package Booking</h1>
      <p style={{ marginLeft: "26rem", width: "40rem", textAlign: "center", fontSize: '1.1rem' }}>While traveling with us, you can enjoy a journey full of comfort and good memories forever. No matter what travel requirements you have, we will fulfill.</p>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{ backgroundColor: "white",boxShadow:"0 0 15px rgba(0, 0, 0, 0.5)" }}>
              <div className="card-body">
                <div class="container text-center">
                  <center><div class="row" style={{ marginLeft: "-.8rem" }}>
                    <div class="col">
                      <h3 style={{ marginTop: ".5rem" }}>BOOKING</h3>
                    </div>
                    <div class="col">
                      <h1 style={{ color: "#F87208", marginLeft: "-18rem" }}>| DETAILS<img id='bookfrom-logo' src='img/logo2.png' /></h1>
                    </div>
                  </div></center>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={address}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="package" className="form-label">Choose your Package:</label>
                    <select
                      className="form-select"
                      id="package"
                      value={selectedPackage}
                      onChange={handlePackageChange}
                      required
                      style={{ marginLeft: "-.2rem" }}
                    >
                      <option value="">Select Package</option>
                      <option value="Package 1">Jaipur</option>
                      <option value="Package 2">Kerala</option>
                      <option value="Package 4">Varanasi</option>
                      <option value="Package 5">Goa</option>
                      <option value="Package 6">Kolkata</option>
                      <option value="Package 7">Sundarbans</option>
                      <option value="Package 8">Delhi</option>
                      <option value="Package 9">Shimla</option>
                      <option value="Package 10">Darjeeling</option>
                      <option value="Package 11">Srinagar</option>
                      <option value="Package 12">Rishikesh</option>
                      <option value="Package 13">Kaziranga</option>
                      <option value="Package 14">Mumbai</option>
                      <option value="Package 15">Maghalay</option>
                    </select>
                  </div>
                  <center><button style={{ width: "8rem", borderRadius: "1rem" }} type="submit" className="btn btn-primary">Book Now</button></center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="bookfrom-f9" >
          <div id='i-whatsapp' style={{ marginTop: "-20rem", position: "absolute", fontSize: "5rem" }}>
            <a href="#" target="_blank" style={{ marginTop: "2rem", position: "absolute", fontSize: "3rem", marginLeft: "-10rem" }}><i class="bi bi-whatsapp"></i></a>
          </div>
          <div id='i-facebook'>
            <a href="#" target="_blank" style={{ marginTop: "-14rem", position: "absolute", fontSize: "3rem", marginLeft: "-10rem" }}><i class="bi bi-facebook"></i></a>
          </div>
          <div id='i-instagram'>
            <a href="#" target="_blank" style={{ marginTop: "-10rem", position: "absolute", fontSize: "3rem", marginLeft: "-10rem" }}><i class="bi bi-instagram"></i></a>
          </div>
          <div id='i-youtube'>
            <a href="#" target="_blank" style={{ marginTop: "-6rem", position: "absolute", fontSize: "3rem", marginLeft: "-10rem" }}><i class="bi bi-youtube"></i></a>
          </div>

        </div>


        <AboutInner />
      </div>

    </div>


  );
};

export default BookingForm;
