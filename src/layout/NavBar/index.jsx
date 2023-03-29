import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context";
import "./style.css";

function NavBar() {
  const { username } = useAuth();
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = {
    // textDecoration: "underline",
    color: "white",
    textShadow: "2px 2px black",
  };
  function openMenu() {
    setHamburgerClicked(!hamburgerClicked);
  }
  function closeMenu() {
    setHamburgerClicked(false)
  }

  const handleButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="desktop">
          <div className="nav-logo">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              <img src="../../../paw.png" alt="paw" className="nav-image" />
            </NavLink>
          </div>
          {/* <h1 className="pet-pal">PetPal</h1> */}
          {
            username ? <ul className="nav-links">
            <li className="navbar-list-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/pet-profile"
              >
                My Pet Profile
              </NavLink>
            </li>
            {/* <li className="navbar-list-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/petinfo"
              >
                Pet Tips
              </NavLink>
            </li> */}
            <li className="navbar-list-item">
              <NavLink 
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/message"
              >
                  Messages
              </NavLink>
            </li>
          </ul> : null
          }
          
        </div>
        <div className="mobile-display">
          <div className="nav-section">

          <div className="nav-logo">
          <NavLink 
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/'
          >
            <img src="../../../paw.png" alt="paw" className="nav-image"/>
            
            
          </NavLink>
          
        </div>

            {
              username ? <div
              className={hamburgerClicked ? "clicked" : "container"}
              onClick={openMenu}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div> : null
            }
            
            
          </div>

          {hamburgerClicked ? <div className="menu-list">
            <ul className="nav-links-menu">
              
              <li className='menu-list-item' onClick={closeMenu}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/pet-profile"
                >
                  My Pet Profile
                </NavLink>
              </li>
             
              <li className='menu-list-item' onClick={closeMenu}>
              <NavLink 
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/message"
              >
                  Messages
              </NavLink>
            </li>
            </ul>
          </div> : null}
        </div>
      </nav>
      <Outlet />
      <div
      className={`message-container-navbar ${isOpen ? 'open' : 'closed'}`}
      style={{ width: '0px', height: '0px' }}
    >
      <div>
        <button className="message-button-navbar" onClick={handleButtonClick}>
          {isOpen ? 'Hide' : 'Show'}
        </button>
      </div>
      <div>
        
      </div>
    </div>
    </>
  );
}

export default NavBar;
