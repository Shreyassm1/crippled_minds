import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse,faBriefcase,faMessage,faUser,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  const handleIconClick = (route) => {
    window.location.href = route;
  };

  return (
    <div className="header">
      <div className="searchBar">
        <input type="search" placeholder="Search" />
        <div className="searchIcon" onClick={() => handleIconClick('/search')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="navBar">
        <ul>
          <li onClick={() => handleIconClick('/home')}>
            <FontAwesomeIcon icon={faHouse} />
          </li>
          <li onClick={() => handleIconClick('/jobs')}>
            <FontAwesomeIcon icon={faBriefcase} />
          </li>
          <li onClick={() => handleIconClick('/messages')}>
            <FontAwesomeIcon icon={faMessage} />
          </li>
          <li onClick={() => handleIconClick('/profile')}>
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
