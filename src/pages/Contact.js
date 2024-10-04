import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => (
  <div className="contact-page">
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to get in touch, feel free to reach out to me via email or phone.</p>
      <div className="contact-details">
        <div className="contact-item">
          <h2>Email</h2>
          <p><a href="mailto:suryast.03@gmail.com">suryast.03@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <h2>Phone</h2>
          <p><a href="tel:+12707915969">+1-270-791-5969</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;