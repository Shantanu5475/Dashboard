import React, { useContext } from 'react';
import './Header.css';
import { FaBell, FaUserCircle } from 'react-icons/fa'; // Importing icons from react-icons
import { sidebarContext } from '../context/sidebarContext';

const Header = ({ progress }) => {
  const {isOpen, setIsOpen} = useContext(sidebarContext);
  const toggleSidebar = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className="header">
      <div className="header-left">
        <button onClick={toggleSidebar} class="responsive-icon">☰</button>
      </div>
      
      {/* Right side - Notification and User profile */}
      <div className="header-right">
        <div className="header-icons">
          <FaBell className="icon notification-icon" />
          <FaUserCircle className="icon user-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
