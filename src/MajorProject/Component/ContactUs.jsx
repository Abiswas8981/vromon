import React, { useState } from 'react';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Address:', address);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Reason:', reason);

    setFirstName('');
    setLastName('');
    setAddress('');
    setEmail('');
    setPhone('');
    setReason('');
  };

  return (
    <>
      <img className='contact-img' src='img/banner1.jpg' />
      <div className='contact-title'>
        <h1 >VROMON MEANS COMFORT JOURNEY</h1>
        <p>While traveling with us, you can enjoy a journey full of comfort and good memories forever. No matter what travel requirements you have, we will fulfill.</p>
      </div>
      <div className="contact-us">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h3 id="contact-f2">| Us</h3>
            </div>
            <div class="col">
              <h1 style={{ color: "#F87208", marginLeft: "-41rem", marginTop: "-4rem" }}> Contact</h1>
              <img src='img/logo2.png' id='contact-logo'></img>
            </div>
          </div>
        </div>
        <p className="contact-us-description">
          We would love to hear from you! If you have any questions, feedback, or inquiries, please fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason to Contact:</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.628343150414!2d88.45214526646876!3d22.693591033756462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f6c8fa00d3f%3A0x59b5690302336fcb!2sVROMON%20HOLIDAY&#39;S!5e0!3m2!1sen!2sin!4v1688589738017!5m2!1sen!2sin" width="450" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map" style={{ width: "40rem" }}></iframe>
      </div>
      <div className='contact-info'>
        <div class="card" style={{width:"80%",marginLeft:"6rem"}}>
          <div class="card-body">

            <h1 style={{ color: "rgb(248, 114, 8)", fontFamily: "revert", fontWeight: "bold" }}>Contact Information</h1>
            <p>Email: vromo@gmail.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main Street, Madhyamgram main road, kolkata-130</p>
          </div>
        </div>
      </div>
      <div id="contact-f9">
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

    </>
  );
};

export default ContactUs;
