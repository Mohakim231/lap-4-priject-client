import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className='welcome-and-image'>
        <h1 className='welcome'>Welcome to PetPal</h1> 
        <img src="../../../paw.png" alt="paw" className='welcome-image'/>
      </div>
      <em>All your pet needs in one convenient place</em>
      <button>login</button>
      <button>signup</button>

      <h2><Link 
          style={{ color: '#1746a2'}}
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