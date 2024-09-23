import React from 'react';
import './ContactPage.css'; // We'll use this for custom styling

function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you would like to reach out, feel free to contact me via the following methods:</p>
      <div className="contact-details">
        <p>Email: <a href="mailto:ychen.melanie@gmail.com">ychen.melanie@gmail.com</a></p>
        <p>Phone: (425) 281-9321</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/melanieychen" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      </div>
    </div>
  );
}

export default ContactPage;
