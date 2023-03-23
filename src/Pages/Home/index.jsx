import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {

  return (
    <div className="home-page">
      <div className='welcome-and-image'>
        {/* <h1 className='welcome'>Welcome</h1>  */}
        <h1 className="pet-pal">Pet <img src="../../../paw.png" alt="paw" className='welcome-image'/> Pal</h1>
      </div>
      
      <em>All your pet needs in one convenient place</em>

      <div className="buttons-home">
        <button ><Link style={{ color: '#1746a2', textDecoration: "none"}} to="/login">Login</Link></button>
        <button className="signup-home"><Link style={{ color: '#1746a2', textDecoration: "none"}} to="/signup">Signup</Link></button>
        
      </div>

      <div className="paw-prints">
        <div className="paw-print-1">
           <img className="pad" src="../../../paw.png" alt="paw" />
        </div>
            
        <div className="paw-print-2">
            <img src="../../../paw.png" alt="paw" className="pad"/>
        </div>    
            
        <div className="paw-print-3">
        <img src="../../../paw.png" alt="paw" className="pad"/>
        </div>    
            
        <div className="paw-print-4">
        <img src="../../../paw.png" alt="paw" className="pad"/>
        </div>

        
            
        <div className="paw-print-5">
        <img src="../../../paw.png" alt="paw" className="pad"/>
        </div>
            
        <div className="paw-print-6">
        <img src="../../../paw.png" alt="paw" className="pad"/>
        </div>
            
        <div className="paw-print-7">
        <img src="../../../paw.png" alt="paw" className="pad"/>
        </div>

        <div className="paw-print-8">
        <img src="../../../paw.png" alt="paw" className="pad"/>
        </div>
      </div> 

      <h2><Link 
          style={{ color: '#1746a2', textDecoration: "none"}}
          to="/services"
        >
          Explore Services
        </Link></h2>

        <div className="services">
          <div className='service'>
            Sitters
          </div>
          <div className='service'>
            Walkers
          </div>
          <div className='service'>
            Groomers
          </div>
          <div className='service'>
            Vets
          </div>
          <div className='service'>
            Trainers
          </div>
        </div>
      
      
    </div>
  )
}

export default Home
