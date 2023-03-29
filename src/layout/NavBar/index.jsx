import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Conversation from "../../Components/Conversation";
import { useAuth } from "../../context";
import "./style.css";

function NavBar() {
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

  const { user_id } = useAuth()
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  // async function getConversationsByUser(userId) {
  //   const response = await fetch(`http://localhost:5000/conversations?user_id=${userId}`);
  //   const data = await response.json();
  //   setConversations(data.conversations);
  // }

  // useEffect(() => {
  //   // getConversationsByUser(user.id);
  //   console.log(user_id)
  //   getConversationsByUser(user_id);
  // }, []);

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
                to="/pet-profile"
              >
                Pet Profile
              </NavLink>
            </li>
            <li className="navbar-list-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/petinfo"
              >
                Pet Tips
              </NavLink>
            </li>
            <li className="navbar-list-item">
              <NavLink 
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/message"
              >
                  Message
              </NavLink>
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
              <li className='menu-list-item' onClick={closeMenu}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/petinfo"
                >
                  Pet Tips
                </NavLink>
              </li>
              <li className='menu-list-item' onClick={closeMenu}>
              <NavLink 
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/message"
              >
                  Message
              </NavLink>
            </li>
            </ul>
          </div> : null}
        </div>
      </nav>
      <Outlet />
      {/* <div
      className={`message-container-navbar ${isOpen ? 'closed' : 'open'}`}
      style={{ width: '400px', height: '600px' }}
      >
      <div className="message-heading-navbar">
        <p>Messages</p>
        <button className="message-button-navbar" onClick={handleButtonClick}>
          {isOpen ? 'Hide' : 'Show'}
        </button>
      </div>
      <div>
      <h2>Conversations</h2>
      {conversations.map((conversation) => (
        <div
          className='conversation-box'
          key={conversation.conversation.id}
          onClick={() => setSelectedConversation(conversation.conversation.id)}
        >
          <p>User: {conversation.user.username}</p>
          <p>Service: {conversation.service.username}</p>
        </div>
      ))}
      {selectedConversation && (
        <div>
        <div id='messages'>
          <Conversation conversationId={selectedConversation} />
        </div>
        </div>
      )}
    </div>
    </div> */}
    </>
  );
}

export default NavBar;
