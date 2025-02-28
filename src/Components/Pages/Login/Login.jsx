import { useState } from 'react'
import "../../../App.css";
import HeaderContent from '../../HeaderContent/HeaderContent';
import BodyContent from '../../BodyContent/BodyContent';
import './Login.css'
import { FaUser , FaLock , FaEnvelope } from "react-icons/fa";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <HeaderContent />
      <div id="wrapper">
        <BodyContent>
          <div className={`wrapp ${isRegister ? "active" : ""}`}>
            {/* Login Form */}
            <div className={`form-box login ${isRegister ? "hidden" : ""}`}>
              <form action="">
                <h1>Login</h1>
                <div className="input-box">
                  <input type="text" placeholder="Username" required />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Password" required />
                  <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                  <p>
                    Don't have an account?{" "}
                    <a href="#" onClick={() => setIsRegister(true)}>
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* Register Form */}
            <div className={`form-box register ${isRegister ? "" : "hidden"}`}>
              <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                  <input type="text" placeholder="Username" required />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input type="email" placeholder="Email" required />
                  <FaEnvelope className="icon" />
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Password" required />
                  <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" />I agree to the terms & conditions
                  </label>
                </div>

                <button type="submit">Register</button>

                <div className="register-link">
                  <p>
                    Already have an account?{" "}
                    <a href="#" onClick={() => setIsRegister(false)}>
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </BodyContent>
      </div>
    </>
  );
}

export default Login
