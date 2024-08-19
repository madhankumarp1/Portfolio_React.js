import React, { useState } from 'react';
// import './ContactForm.css'; // Create and style this file as needed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    message: '',
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
    fetch('https://script.google.com/macros/s/AKfycbykVBqaXfKaYB1TorNbpuln7S1HEkPWyOpPN4Afcmk/dev', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again later.'); // Provide a more generic error message
      });
  };
  
  
  return (
    <section className="session_6">
      <div className="contact-form-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <span className="icon">📞</span> +1205 5872 321
            </div>
            <div className="contact-detail">
              <span className="icon">✉️</span> contact@sarajonesdesign.com
            </div>
            <div className="contact-detail">
              <span className="icon">📍</span> 1234 Design Street, Creativeville, Webland, Imaginary State, 98765
            </div>
          </div>
          <div className="social-icons">
            <span className="icon">🐦</span>
            <span className="icon">📸</span>
            <span className="icon">🎨</span>
            <span className="icon">📘</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
