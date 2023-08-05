import React, { useState } from 'react';

const HotelBook = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [hotelCategory, setHotelCategory] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleAdultsChange = (event) => {
    setAdults(parseInt(event.target.value));
  };

  const handleChildrenChange = (event) => {
    setChildren(parseInt(event.target.value));
  };

  const handleHotelCategoryChange = (event) => {
    setHotelCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (phone.trim() === '') {
      errors.phone = 'Phone number is required';
    }
    if (country.trim() === '') {
      errors.country = 'Country is required';
    }
    if (adults <= 0 && children <= 0) {
      errors.guests = 'Please select number of guests';
    }
    if (hotelCategory === '') {
      errors.hotelCategory = 'Hotel category is required';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert('Book Now: Hotel Booking Done');
      setName('');
      setEmail('');
      setPhone('');
      setCountry('');
      setAdults(0);
      setChildren(0);
      setHotelCategory('');
      setDescription('');
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <center><div class="row" style={{ marginLeft: "11rem", marginTop: "2rem", width: "40%" }}>
        <div class="col">
          <h3 style={{ marginTop: ".5rem", marginLeft: "rem" }}>BOOKING</h3>
        </div>
        <div class="col">
          <h1 style={{ color: "#F87208", marginLeft: "-18rem" }}>| HOTEL</h1>
        </div>
      </div></center>

      <div className="container">
        <div className="card">
          <div className="card-body">


            <form style={{ width: '100%', marginLeft: '1rem' }} onSubmit={handleSubmit}>
              <div className="form-left-box-panel">

                <h3>
                  <sup>*</sup> represents compulsory fields
                </h3>
                <div className="main-row-panel">
                  <div className="row">
                    <label>
                      <sup>*</sup> Your Name :
                    </label>
                    <input style={{ width: "93%", marginLeft: "2rem", height: "3rem" }} name="name" value={name} onChange={handleNameChange} />
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                  </div>
                  <div className="row">
                    <label> <sup>*</sup> Your E-Mail Address :</label>
                    <input style={{ width: "50%", marginLeft: "2rem" }} name="email" value={email} onChange={handleEmailChange} />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                  </div>
                  <div className="row">
                    <label style={{ marginLeft: '43rem', marginTop: "-3.5rem" }}>  Phone  : (Include Country/Area Code)</label>
                    <input style={{ width: "40%", marginLeft: "45rem", marginTop: "-1.8rem" }} name="phone" value={phone} onChange={handlePhoneChange} />
                    {errors.phone && <span className="text-danger">{errors.phone}</span>}
                  </div>
                  <div className="row">
                    <label> <sup>*</sup>Your Country </label>
                    <input style={{ width: "93%", marginLeft: "2rem", height: "3rem" }} name="country" value={country} onChange={handleCountryChange} />
                    {errors.country && <span className="text-danger">{errors.country}</span>}
                  </div>
                  <div className="row">
                    <label>  Total Number of persons : </label>
                    <span>
                      <select style={{ width: '30rem' }} name="adults" size="1" value={adults} onChange={handleAdultsChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                      Adults
                    </span>
                    <span>
                      <select style={{ marginLeft: "36rem", width: "30rem", marginTop: "-4rem", display: "flex" }} name="children" size="1" value={children} onChange={handleChildrenChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                      <div style={{ marginTop: "-3rem", marginLeft: "66rem" }}>
                        Children [Below 12 Years]</div>
                    </span>
                    {errors.guests && <span className="text-danger">{errors.guests}</span>}
                  </div>
                  <div className="row">
                    <label> Category of Hotel : </label>
                    <span>
                      <input style={{ marginLeft: "2rem" }}
                        name="Hotel_Category"
                        type="radio"
                        value="Budget"
                        checked={hotelCategory === 'Budget'}
                        onChange={handleHotelCategoryChange}
                      />{' '}
                      Budget
                    </span>
                    <span>
                      <input style={{ marginLeft: "2rem" }}
                        name="Hotel_Category"
                        type="radio"
                        value="Standard"
                        checked={hotelCategory === 'Standard'}
                        onChange={handleHotelCategoryChange}
                      />{' '}
                      Standard
                    </span>
                    <span>
                      <input style={{ marginLeft: "2rem" }}
                        name="Hotel_Category"
                        type="radio"
                        value="3_Star"
                        checked={hotelCategory === '3_Star'}
                        onChange={handleHotelCategoryChange}
                      />{' '}
                      3 Star
                    </span>
                    <span>
                      <input style={{ marginLeft: "2rem" }}
                        name="Hotel_Category"
                        type="radio"
                        value="4_Star"
                        checked={hotelCategory === '4_Star'}
                        onChange={handleHotelCategoryChange}
                      />{' '}
                      4 Star
                    </span>
                    <span>
                      <input style={{ marginLeft: "2rem" }}
                        name="Hotel_Category"
                        type="radio"
                        value="5_Star"
                        checked={hotelCategory === '5_Star'}
                        onChange={handleHotelCategoryChange}
                      />{' '}
                      5 Star
                    </span>
                    <span>
                      <input style={{ marginLeft: "2rem" }}
                        name="Hotel_Category"
                        type="radio"
                        value="Heritage"
                        checked={hotelCategory === 'Heritage'}
                        onChange={handleHotelCategoryChange}
                      />{' '}
                      Heritage
                    </span>
                    {errors.hotelCategory && <span className="text-danger">{errors.hotelCategory}</span>}
                  </div>
                  <div className="row rowtextarea">
                    <label> <sup>*</sup> Any other preferences or requirements :</label>
                    <textarea cols="51" name="Description" value={description} onChange={handleDescriptionChange} rows="5" />
                  </div>
                </div>
                <div className="main-row-panel">
                  <div className="row rowtextarea">
                    <button name="submit" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelBook;
