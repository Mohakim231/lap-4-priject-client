import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const linkStyle = {
    color: '#699759',
    textDecoration: 'none',
  };


const ProviderCard = ({ id, name,address, city,postcode, phone, dog, cat, rabbit,bird,reptile,daycare, hotel,petsitter,dogwalker,groomer,vet,trainer 
}) => {

    return <div className='prov-card'>

        <div className='details1'>
            <h3 className='service-name'><Link to={`/services/${id}`} style={linkStyle}>{name}</Link></h3>
            <h4>{address + city + postcode}</h4>
            <h5>Contact us: {phone}</h5>
            <h5>Our services:</h5>
        </div>
        
        <div className="details2">
            <ul className="details-holder">
                
                { daycare? <img src="../../daycare.png" alt="daycare" className='icons'/> : ""}
            { hotel ? <img src="../../pet-hotel.png" alt="grooming" className='icons'/> : ""}
            { petsitter ? <img src="../../dog_sitter3.png" alt="sitting" className='icons'/> : ""}
            { dogwalker ? <img src="../../dog_walker.png" alt="walking" className='icons'/> : ""}
            { groomer ? <img src="../../dog_groomer.png" alt="grooming" className='icons'/> : ""}
            { vet ? <img src="../../vet.png" alt="vet" className='icons'/> : ""}
            { trainer ? <img src="../../dog_trainer.png" alt="training" className='icons'/> : ""}

           

                {/* <button onClick={() => vote(id, 1)}>+</button>
                <button onClick={() => vote(id, -1)}>-</button> */}
            </ul>
            <h5>Animals we provide for:</h5>
            <p className="details-holder">
                
                { dog? <img src="../../dog-icon.png" alt="dog" className='icons'/> : ""}
                { cat ? <img src="../../cat-icon.png" alt="cat" className='icons'/> : ""}
                { bird ? <img src="../../bird.png" alt="bird" className='icons'/> : ""}
                { rabbit ? <img src="../../rabbit.png" alt="rabbit" className='icons'/> : ""}
                { reptile ? <img src="../../reptile-icon.png" alt="reptiles" className='icons'/> : ""}

            </p>
        </div>

        <br></br>
    </div>
};

export default ProviderCard
