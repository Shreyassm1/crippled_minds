
// import React from 'react';
// import { useState } from "react";
// import './Login.css'; // Make sure to import your CSS file
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault()
//    // post data to backend using API and then redirect to home page
//    navigate("/home"); 
//   };
//   return (
 
//     <div className="login-container">
//     <div className="background-image"></div>
//     <div className="login-form-container">
//       <div className='heading'>
//         <h2>Welcome Back!!</h2>
//       </div>
//       <form onSubmit={handleSubmit}>
//         {/* <label>Email:</label> */}
//         <input
//         type="text"
//         placeholder="user name / email"
//         name="Username"
//         value={username}
//         onChange={(e) => setusername(e.target.value)}
//       />
//         {/* <label>Password:</label> */}
//         <input
//         type="password"
//         name="Password"
//         placeholder="password"
//         value={password}
//         onChange={(e) => setpassword(e.target.value)}
//       />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   </div>
//   )
// };

// export default Login;

import React from 'react';
import { useState } from "react";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import img0 from '../Asset/Images/img0.svg';
import img1 from '../Asset/Images/img1.svg';
import img2 from '../Asset/Images/img2.jpg';

const Login = () => {
  const handleIconClick = () => {
    // Handle redirection logic here
    window.location.href = '/home';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    handleIconClick(); // Redirect on successful login
  };

  return (
    <>
      <header className="registration-header">
        <div className="container0">
          <div className="logo">
            <a href="index.html">BeepBop</a>
          </div>

        </div>
      </header>

      <main>
        <img className='wave' src={img2} alt="img2" />
        <div className="container">
          <div className="img">
            <img src={img0} alt="img0" />
          </div>
          <div className="wrapper">
            <div className="grid-two--column">
              <div className="login-content">
                <form onSubmit={handleSubmit}>
                  <div className="login">
                    <img src="img1" alt="img1" />
                    <h2 className="title">Welcome</h2>
                    <h5 className="title">Enter your details to continue</h5>
                    <div className="input-div one">
                      <div className="i">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div className="div">
                        <input type="text" className="input" placeholder="Username/Email" />
                      </div>
                    </div>
                    <div className="input-div pass">
                      <div className="i">
                        <FontAwesomeIcon icon={faLock} />
                      </div>
                      <div className="div">
                        <input type="password" className="input" placeholder="Password" />
                      </div>
                    </div>
                    <div className="form-text">
                      <a href="#">Forgot Password?</a>
                      <button type="submit" className="login-btn">
                        Login
                      </button>
                    </div>
                    <div className="login-register">
                      <p>Don't have an account?<a href="#" className="register-link">Register</a></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
