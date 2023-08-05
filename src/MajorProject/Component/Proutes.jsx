import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Trips from './Trips';
import ContactUs from './ContactUs';
import Privacy from './Privacy';
import TermCondition from './TermCondition';
import "./Design.css" ;
import Navbar from './Navbar';
import Footer from './Footer';
import FeedbackFrom from './FeedbackFrom';
import HotelCard from './HotelCard';
import BookingForm from './BookingFrom';
import Kashmir from './kashmir';
import Delhi from './Delhi';
import Uttarakhand from './Uttarakhand';
import Himachal from './Himachal';
import Sundarban from './Sundarban';
import Rajasthan from './Rajasthan';
import Auroville from './Auroville';
import Andaman from './Andaman';
import Darjeeling from './Darjeeling';
import WishlistDisplay from './WishlistDisplay';
import HotelBook from './HotelBook';
import Disclaimer from './Disclaimer';

const Proutes = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (destination) => {
    setWishlist([...wishlist, destination]);
  };

  const removeFromWishlist = (destination) => {
    setWishlist(wishlist.filter((item) => item.id !== destination.id));
  };
  
  return (
    <Router>
      <>
        <Navbar wishlistCount={wishlist.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/trip" element={<Trips wishlist={wishlist} addToWishlist={addToWishlist} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termcondition" element={<TermCondition />} />
          <Route path="/feedbackfrom" element={<FeedbackFrom />} />
          <Route path="/hotelcard" element={<HotelCard />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/kashmir" element={<Kashmir />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/uttarakhand" element={<Uttarakhand />} />
          <Route path="/himachal" element={<Himachal />} />
          <Route path="/sundarban" element={<Sundarban />} />
          <Route path="/rajasthan" element={<Rajasthan />} />
          <Route path="/auroville" element={<Auroville />} />
          <Route path="/andaman" element={<Andaman />} />
          <Route path="/darjeeling" element={<Darjeeling />} />
          <Route path="/wishlist" element={<WishlistDisplay wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />
          <Route path="/hotelbook" element={<HotelBook/>}/>
          <Route path="/disclaimer" element={<Disclaimer/>}/>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default Proutes;
