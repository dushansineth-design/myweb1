import { useState } from 'react';
import axios from 'axios';
// ... other imports
import "../../../App.css";
import HeaderContent from '../../HeaderContent/HeaderContent';
import BodyContent from '../../BodyContent/BodyContent';
import './Login.css'
import { FaUser , FaLock , FaEnvelope } from "react-icons/fa";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const endpoint = isRegister ? '/register' : '/login';
      const response = await axios.post(`http://localhost:3001${endpoint}`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(response.data.message || (isRegister ? 'Registration successful! Please login.' : 'Login successful!'));
      if (response.data.success) {
        if (isRegister) {
          setIsRegister(false);
          setFormData({ username: '', email: '', password: '' });
        } else {
          window.location.href = '/';
        }
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'Something went wrong');
      console.error('API Error:', error);
    }
    setLoading(false);
  };

  return (
    <>
      <HeaderContent />
      <div id="wrapper">
        <BodyContent>
          <div className={`wrapp ${isRegister ? "active" : ""}`}>
            <div className={`form-box login ${isRegister ? "hidden" : ""}`}>
              <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                  <FaEnvelope className="icon" />
                </div>
                <div className="input-box">
                  <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                  <FaLock className="icon" />
                </div>
                <button type="submit" disabled={loading}>{loading ? 'Processing...' : 'Login'}</button>
                <p className="message">{message}</p>
                <div className="register-link">
                  <p>Don't have an account? <button type="button" onClick={() => setIsRegister(true)} className="switch-btn">Register</button></p>
                </div>
              </form>
            </div>

            <div className={`form-box register ${isRegister ? "" : "hidden"}`}>
              <form onSubmit={handleSubmit}>
                <h1>Registration</h1>
                <div className="input-box">
                  <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                  <FaEnvelope className="icon" />
                </div>
                <div className="input-box">
                  <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                  <FaLock className="icon" />
                </div>
                <button type="submit" disabled={loading}>{loading ? 'Processing...' : 'Register'}</button>
                <p className="message">{message}</p>
                <div className="register-link">
                  <p>Already have an account? <button type="button" onClick={() => setIsRegister(false)} className="switch-btn">Login</button></p>
                </div>
              </form>
            </div>
          </div>
        </BodyContent>
      </div>
    </>
  );
}

export default Login;