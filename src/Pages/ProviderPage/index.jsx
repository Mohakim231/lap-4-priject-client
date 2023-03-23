import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css'

const ProviderPage = () => {

    const [loading, setLoading] = useState(false);
    const [provider, setProvider] = useState({});
    const {id} = useParams()

    useEffect(() => {

        setLoading(true);
        async function loadProvider() {

            const response = await fetch(`http://localhost:5000/services/${id}`);
            const data = await response.json();
            setProvider(data);
            console.log(data)
            setLoading(false);
        };

        loadProvider();

    }, [])

    function displayProvider() {
        return <div className='prov-card'>
        <h3>{provider.name}</h3>
        <h4>{provider.address }</h4>
        <h4>{provider.city}</h4>
        <h4>{provider.postcode}</h4>
        <h5>Contact us: {provider.phone}</h5>
        <h5>Our services:</h5>
        <p className="details-holder">
            
            { provider.daily_care? <span className="">DC</span> : ""}
            { provider.boarding_hotel ? <span className="">H</span> : ""}
            { provider.pet_sitter ? <span className="">PS</span> : ""}
            { provider.dog_walker ? <span className="">DW</span> : ""}
            { provider.grooming ? <span className="">G</span> : ""}
            { provider.vet ? <span className="">V</span> : ""}
            { provider.trainer ? <span className="">T</span> : ""}

            {/* <button onClick={() => vote(id, 1)}>+</button>
            <button onClick={() => vote(id, -1)}>-</button> */}
            
        </p>
        <h5>Animals we provide for:</h5>
        <p className="details-holder">
            
            { provider.dog? <span className="">D</span> : ""}
            { provider.cat ? <span className="">C</span> : ""}
            { provider.bird ? <span className="">B</span> : ""}
            { provider.rabbit ? <span className="">RA</span> : ""}
            { provider.reptile ? <span className="">R</span> : ""}

        </p>

        <Link to="/services">Back</Link>
        <br></br>
    </div>
            
        
    }

    return loading ? 
        <div className="paw-prints">
            <h2 className='loading'>Loading...</h2>
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
    : displayProvider();

};

export default ProviderPage;
