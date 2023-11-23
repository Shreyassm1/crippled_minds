import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUserFriends, faUser, faGear, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { setAuthToken } from '../controller/authController';
const HomePage = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        setAuthToken(token);
        const response = await axios.get('http://localhost:8000/home');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    // <div className='main'>
      
    //   <div className="header">
    //     <div className='search-bar'>
    //       <form>
    //         <input type='text' placeholder='search...'></input>
    //       </form>
    //     </div>
    //     <div className='nav-bar'>
    //       <ul>
    //         <li><FontAwesomeIcon icon={faHome}></FontAwesomeIcon><div className='item'>Home</div></li>
    //         <li><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon><div className='item'>Jobs</div></li>
    //         <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><div className='item'>Messages</div></li>
    //         <li><FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon><div className='item'>Connections</div></li>
    //         <li><FontAwesomeIcon icon={faUser}></FontAwesomeIcon><div className='item'>Profile</div></li>
    //         <li><FontAwesomeIcon icon={faGear}></FontAwesomeIcon><div className='item'>Settings</div></li>     
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="body">
    //     <div className='content'>
    //       <div className='content-head'>
    //         <div className='pfp'>
              
    //         </div>
    //       </div>
    //       <div className='content-body'>

    //       </div>
    //       <div className='content-foot'>

    //       </div>
    //     </div>
    //     <div className='comments'>
    //       <div className='comment-prompt'>

    //       </div>
    //       <div className='comment-body'>
            
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='test'>
        <h1>Welcome to l</h1>
        {userData.message && <p>{userData.message}</p>}
        {userData.email && <p>Email: {userData.email}</p>}
    </div>
  );
};

export default HomePage;
