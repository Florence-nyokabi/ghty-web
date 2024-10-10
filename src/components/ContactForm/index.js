import React, { useState } from 'react';
import './style.css'; // Import the external CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the backend)
    console.log('Form Data Submitted:', formData);
    // Reset form after submission (optional)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container" id='contact-us'>
      <h2 className="header">Stay In Touch</h2>
      <p className="subText">
        Have a question or inquiry? We’re here to help! Contact us via phone,<br/>email, 
        or through the convenient inquiry form below. Our dedicated<br/>team is ready to assist 
        you with orders, inquiries, or partnership<br/>opportunities.
      </p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="input"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="textarea"
          required
        />
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
