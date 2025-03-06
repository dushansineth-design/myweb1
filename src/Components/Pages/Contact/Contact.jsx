import { useState } from 'react';
import axios from 'axios';
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
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/contact', formData, {
        headers: { "Content-Type": "application/json" },
      });
      
      console.log("Server response:", response.data);

      if (response.data.success) {
        setMessage(response.data.message || 'Your message has been sent successfully!');
        setSubmitted(true);
      } else {
        setMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error);
      setMessage(error.response?.data?.error || 'Something went wrong. Try again later.');
    }
    setLoading(false);
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
              <p>{message}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-box">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="input-box">
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="input-box">
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="form-button" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
            </form>
          )}
          {message && !submitted && <p className="message-feedback">{message}</p>}
        </BodyContent>
      </div>
      <FooterContent />
    </>
  );
}

export default Contact;
