import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

function NavBar() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

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
          <ul className="nav-links">
            <li className="navbar-list-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="navbar-list-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/signup"
              >
                Signup
              </NavLink>
            </li>
            <li className="navbar-list-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/pet-profile"
              >
                Pet Profile
              </NavLink>
              <NavLink to="/message">Message</NavLink>
            </li>
          </ul>
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

            {/* <h2 className="pet-pal">PetPal</h2> */}
            <div
              className={hamburgerClicked ? "clicked" : "container"}
              onClick={openMenu}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>

          {hamburgerClicked ? <div className="menu-list">
            <ul className="nav-links-menu">
              <li className='menu-list-item' onClick={closeMenu}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className='menu-list-item' onClick={closeMenu}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/signup"
                >
                  Signup
                </NavLink>
              </li>
              <li className='menu-list-item' onClick={closeMenu}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/pet-profile"
                >
                  Pet Profile
                </NavLink>
              </li>
            </ul>
          </div> : null}
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
