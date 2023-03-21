import React from 'react'

const ProviderCard = ({ id, name,address, city,postcode, phone, dog, cat, rabbit,bird,reptile,daycare, hotel,petsitter,dogwalker,groomer,vet,trainer 
}) => {

    return <div className='prov-card'>
        <h3>{name}</h3>
        <h4>{address + city + postcode}</h4>
        <h5>Contact us: {phone}</h5>
        <h5>Our services:</h5>
        <p className="details-holder">
            
            { daycare? <span className="">DC</span> : ""}
            { hotel ? <span className="">H</span> : ""}
            { petsitter ? <span className="">PS</span> : ""}
            { dogwalker ? <span className="">DW</span> : ""}
            { groomer ? <span className="">G</span> : ""}
            { vet ? <span className="">V</span> : ""}
            { trainer ? <span className="">T</span> : ""}

            {/* <button onClick={() => vote(id, 1)}>+</button>
            <button onClick={() => vote(id, -1)}>-</button> */}
        </p>
        <h5>Animals we provide for:</h5>
        <p className="details-holder">
            
            { dog? <span className="">D</span> : ""}
            { cat ? <span className="">C</span> : ""}
            { bird ? <span className="">B</span> : ""}
            { rabbit ? <span className="">RA</span> : ""}
            { reptile ? <span className="">R</span> : ""}

        </p>

        
        <br></br>
    </div>
};

export default ProviderCard
