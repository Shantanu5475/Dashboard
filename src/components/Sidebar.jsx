import React, { useContext, useState } from 'react';  // Import useState for managing sidebar state
import './Sidebar.css';
import icon from '../images/logo512.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faSuitcase, faBars } from '@fortawesome/free-solid-svg-icons'; // Add FontAwesome bar icon for hamburger
import { sidebarContext } from '../context/sidebarContext';

const Sidebar = () => {
  // State to manage if sidebar is collapsed or not
  // const [isCollapsed, setIsCollapsed] = useState(false);
  
  const {isOpen, setIsOpen} = useContext(sidebarContext);
  // Toggle sidebar state when hamburger icon is clicked
  // const toggleSidebar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
    <div className={`sidebar ${isOpen ? 'collapsed' : ''}`}> {/* Conditionally apply collapsed class */}
      <div className="logo">
        <img src={icon} alt="img" className="img" />
        Jur
      </div>

      {/* Hamburger menu to toggle sidebar */}
      {/* <div className="hamburger-menu" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} /> {/* Display hamburger icon */}
      {/* </div> */} 

      <nav className="nav-menu">
        <ul>
          <li><FontAwesomeIcon icon={faKeyboard} /> &nbsp; Dashboard</li>
          <li><FontAwesomeIcon icon={faSuitcase} /> &nbsp;My Cases</li>
          <li><FontAwesomeIcon icon={faSuitcase} /> &nbsp;Activities</li>
          <li><FontAwesomeIcon icon={faSuitcase} /> &nbsp;Calendar</li>
          <li><FontAwesomeIcon icon={faSuitcase} /> &nbsp;Files</li>
          <li><FontAwesomeIcon icon={faSuitcase} /> &nbsp;Open a Dispute</li>
        </ul>
      </nav>

      <div className="promo-section">
        <img
          src="promo_img.png"
          alt="Promo"
          className="promo-image"
        />
      </div>
    </div>
  );
};

export default Sidebar;
