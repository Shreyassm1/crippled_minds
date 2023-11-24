import React, { useEffect } from 'react';
import '../css/header.css';

const Header = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
    link.rel = 'stylesheet';
    link.integrity = 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==';
    link.crossOrigin = 'anonymous';
    link.referrerPolicy = 'no-referrer';

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []); 

  return (
    <div>
      <div className="header">
        <div className="searchBar">
          <input type="search" placeholder="Search" />
          <div className="searchIcon"><i className="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div className="navBar">
          <ul>
            <li><i className="fa-solid fa-house"></i></li>
            <li><i className="fa-solid fa-user-group"></i></li>
            <li><i className="fa-solid fa-message"></i></li>
            <li><i className="fa-solid fa-inbox"></i></li>
            <li><i className="fa-solid fa-user"></i></li>
          </ul>
        </div>
      </div>
      <div className="body">
        
      </div>
    </div>
  );
};

export default Header;

