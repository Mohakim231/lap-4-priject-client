import React from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom'
// import './style.css'

const LocationDisplay = () => {
    const location = useLocation()
    return <span>{location.pathname}</span>
}

function NavBar() {

    const activeStyle = {
        textDecoration: 'underline',
        color: 'darkblue'
    }

  return (
    <>
        <nav className="navbar">
            <h2><LocationDisplay /></h2>
            <ul className="nav-links">
                <li>
                    <NavLink
                        style={({ isActive }) => (isActive ? activeStyle : undefined)} 
                        to="/login">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        style={({ isActive }) => (isActive ? activeStyle : undefined)} 
                        to="/signup">
                        Signup
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default NavBar;