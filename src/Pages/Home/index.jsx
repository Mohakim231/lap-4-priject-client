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
      <div className='line'></div>
      <em >All your pet needs in one convenient place</em>
      

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
      <div className='link-and-dog'>
        
            <h2 className='find-service'><Link 
              style={{ color: '#1746a2', textDecoration: "none"}}
              to="/services"
            >
              Find a Service
            </Link></h2>
            <img src="../../Subject.png" alt="dog" className='dog-pic'/>
      </div>
      

        <div className="services">
          <div className='service'>
            Sitters
            <img src={'../../public/dog_sitter3.png'} className='service-icon' />
          </div>
          <div className='service'>
            Walkers
            <img src={'../../public/dog_walker.png'} className='service-icon' />
          </div>
          <div className='service'>
            Groomers
            <img src={'../../public/dog_groomer.png'} className='service-icon' />
          </div>
          <div className='service'>
            Vets
            <img src={'../../public/vet.png'} className='service-icon' />
          </div>
          <div className='service'>
            Trainers
            <img src={'../../public/dog_trainer.png'} className='service-icon' />
          </div>
        </div>
      
      
    </div>
  )
}

export default Home
