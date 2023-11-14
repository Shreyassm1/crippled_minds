
import React from 'react';
import { useState } from "react";
import './Login.css'; // Make sure to import your CSS file
import Home from './Home';
import { useNavigate } from "react-router-dom";
// import img0 from '../images/img0.svg';
// import img1 from '../images/img1.svg';
// import img2 from '../images/img2.jpg';
// <script src="https://kit.fontawesome.com/cefd2220cb.js" crossorigin="anonymous"></script>

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
   // post data to backend using API and then redirect to home page
   navigate("/home"); 
  };
  return (
    <div>
      <p>Welcome Back</p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="password"
        name="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default Login;


{/* <div> */}
{/*         

<main>
<img className="wave" src="../images/img2.jpg" alt="Wave" />
  <div className="container">
    <div className="img">
      <img src={img0} alt="Image" />
    </div>
    <div className="wrapper">
      <div className="grid-two--column">
        <div className="login-content">
          <form action="index.html">
            <div className="login">
              <img src={img1} alt="Login Icon" />
              <h2 className="title">Welcome</h2>
              <h5 className="title">Enter your details to continue</h5>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input type="text" className="input" placeholder="Username/Email" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <input type="password" className="input" placeholder="Password" />
                </div>
              </div>
              <div className="form-text">
                <a href="#">Forgot Password?</a>
                <button className="login-btn" type="submit">Login</button>
              </div>
              <div className="login-register">
                <p>Don't have an account?<a href="#" className="register-link">Register</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="register">
        <img src={img1} alt="Register Icon" />
        <h2 className="title">Welcome</h2>
        <h5 className="title">Enter your details to join</h5>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user"></i>
          </div>
          <div className="div">
            <input type="text" className="input" placeholder="Username" />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock"></i>
          </div>
          <div className="div">
            <input type="password" className="input" placeholder="Password" />
          </div>
        </div>
        <div className="form-text">
          <a href="#">Forgot Password?</a>
          <button className="login-btn" type="submit">Register</button>
        </div>
        <div className="login-register">
          <p>Already have an account<a href="#" className="login-link">Login</a></p>
        </div>
      </div>
    </div>
  </div>
</main>
<script src="main.js"></script>
</div> */}

// <div>
//         <header className="registration-header">
//           <div className="container0">
//             <div className="logo">
//               <a href="index.html">BeepBop</a>
//             </div>
//             <nav>
//               <ul>
//                 <li className="link">
//                   <a href="index.html">Home</a>
//                 </li>
//                 <li className="link">
//                   <a href="about.html">About</a>
//                 </li>
//                 <li className="link">
//                   <a href="#">Help</a>
//                 </li>
//                 <li className="link">
//                   <a href="registration.html">Registration</a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </header>

//         <main>
//           <img className="wave" src="./images/img2.jpg" alt="Wave" />
//           <div className="container">
//             <div className="img">
//               <img src="images/img0.svg" alt="Image" />
//             </div>
//             <div className="wrapper">
//               <div className="grid-two--column">
//                 <div className="login-content">
//                   <form action="index.html">
//                     <div className="login">
//                       <img src="..images/img1.svg" alt="Login Icon" />
//                       <h2 className="title">Welcome</h2>
//                       <h5 className="title">Enter your details to continue</h5>
//                       <div className="input-div one">
//                         <div className="i">
//                           <i className="fas fa-user"></i>
//                         </div>
//                         <div className="div">
//                           <input type="text" className="input" placeholder="Username/Email" />
//                         </div>
//                       </div>
//                       <div className="input-div pass">
//                         <div className="i">
//                           <i className="fas fa-lock"></i>
//                         </div>
//                         <div className="div">
//                           <input type="password" className="input" placeholder="Password" />
//                         </div>
//                       </div>
//                       <div className="form-text">
//                         <a href="#">Forgot Password?</a>
//                         <button className="login-btn" type="submit">Login</button>
//                       </div>
//                       <div className="login-register">
//                         <p>Don't have an account?<a href="#" className="register-link">Register</a></p>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//               <div className="register">
//                 <img src="..images/img1.svg" alt="Register Icon" />
//                 <h2 className="title">Welcome</h2>
//                 <h5 className="title">Enter your details to join</h5>
//                 <div className="input-div one">
//                   <div className="i">
//                     <i className="fas fa-user"></i>
//                   </div>
//                   <div className="div">
//                     <input type="text" className="input" placeholder="Username" />
//                   </div>
//                 </div>
//                 <div className="input-div pass">
//                   <div className="i">
//                     <i className="fas fa-lock"></i>
//                   </div>
//                   <div className="div">
//                     <input type="password" className="input" placeholder="Password" />
//                   </div>
//                 </div>
//                 <div className="form-text">
//                   <a href="#">Forgot Password?</a>
//                   <button className="login-btn" type="submit">Register</button>
//                 </div>
//                 <div className="login-register">
//                   <p>Already have an account<a href="#" className="login-link">Login</a></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//         <script src="main.js"></script>
//       </div>
    
