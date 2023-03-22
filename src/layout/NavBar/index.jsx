
import React from 'react';
import { NavLink,  Outlet } from 'react-router-dom'
import './style.css'


function NavBar() {
  const activeStyle = {
    textDecoration: "underline",
    color: "black",
  };

  return (
    <>

      <nav className="navbar">
        <h2 className="nav-logo">
          <NavLink 
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/'
          >
            
            <img src="../../../paw.png" alt="paw" className="nav-image"/>
          </NavLink>
          
        </h2>
        <ul className="nav-links">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/signup"
            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/pet-profile"
            >
              Pet Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>

    </>
  );
}

export default NavBar;
