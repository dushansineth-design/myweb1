import { useState } from 'react'
import "../../../App.css";
import HeaderContent from '../../HeaderContent/HeaderContent';
import BodyContent from '../../BodyContent/BodyContent';
import './Contact.css';
import FooterContent from '../../FooterContent/FooterContent';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <>
      <HeaderContent />
      <div className="contact-container">
        <BodyContent>
          <h3 className='title'>Contact Us</h3>
          {submitted ? (
            <div className="thank-you-message">
              <h4>Thank you for contacting us!</h4>
              <p>We will get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="form-button">Send Message</button>
            </form>
          )}
        </BodyContent>
        
      </div>
      <FooterContent />
    </>
  )
}

export default Contact
