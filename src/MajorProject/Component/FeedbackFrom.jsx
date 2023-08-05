import React, { useState } from 'react';


const FeedbackFrom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', {
      name,
      email,
      feedback,
      feedbackType,
      selectedCountry,
      selectedCity,
    });

    setName('');
    setEmail('');
    setFeedback('');
    setFeedbackType('');
    setSelectedCountry('');
    setSelectedCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src='img/taj.jpeg' id='feed-img'/>
      <div className='feed-h1'>
        <center><h1>Share Your Feedback</h1></center>
      </div>
      <center><p>Please use the form below to share your feedback with us. Your feedback plays an important role in helping us better the user experience.</p></center>
      <div class="card" id='feed-card' style={{boxShadow:"hsl(240, 82%, 26%)"}}>
          <div class="card-body" >
      <div>
        <label htmlFor="name" className='feed-lebal' >Name:</label>
        <input
          type="text1"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className='feed-lebal'>Email:</label>
        <input
          type="email1"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="feedbackType" className='feed-lebal' >Feedback Type:</label>
        <select
          id="feedbackType"
          value={feedbackType}
          onChange={(e) => setFeedbackType(e.target.value)}
        >
          <option value="">Select type</option>
          <option value="suggestion">Suggestion</option>
          <option value="complaint">Complaint</option>
          <option value="appreciation">Appreciation</option>
        </select>
      </div>
      <div>
        <label htmlFor="selectedCountry" className='feed-lebal'>Country:</label>
        <select
          id="selectedCountry"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select country</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
          <option value="canada">India</option>
        </select>
      </div>
      <div>
        <label htmlFor="selectedCity" className='feed-lebal'>City:</label>
        <select
          id="selectedCity"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select city</option>
          <option value="newyork">New York</option>
          <option value="london">London</option>
          <option value="toronto">Toronto</option>
          <option value="toronto">Kolkata</option>
          <option value="toronto">Mumbai</option>
        </select>
      </div>
      <div>
        <label htmlFor="feedback" className='feed-lebal' >Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className='feed-text'
        ></textarea>
      </div>
      <center><button type="submit" id='feed-button'>Submit</button></center>
      </div>
      </div>
      
    
    </form>
    
  
  );
};

export default FeedbackFrom;
