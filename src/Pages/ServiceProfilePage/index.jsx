import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css'


const ServiceProfilePage = () => {

    const [loading, setLoading] = useState(false);
    const [provider, setProvider] = useState({});
    const {userId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        setLoading(true);
        async function loadProvider() {
console.log(userId)
            const response = await fetch(`http://localhost:5000/services/profile/${userId}`);
            const data = await response.json();
            setProvider(data);
            console.log(data)
            setLoading(false);
        };

        loadProvider();

    }, [])


    const handleDeleteButton = async () => {
        console.log("in")
        const options = {
        method:"GET"
        }
        const response = await fetch(`http://localhost:5000/services/providers/delete/${userId}`, options)
        console.log('response', response)
        if (response.status === 201) {
           
            navigate("/")
        }

    }

    function displayProvider() {
        return <div className='prov-card profile-card'>
        {/* <h2>Your Company:</h2>     */}
        <h2>{provider.name}</h2>
        <h4>{provider.address }</h4>
        <h4>{provider.city}</h4>
        <h4>{provider.postcode}</h4>
        <h5>Your contact number: {provider.phone}</h5>
        <h5>Your services:</h5>
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
        <h5>Animals you provide for:</h5>
        <p className="details-holder">
            
            { provider.dog? <img src="../../dog-icon.png" alt="dog" className='icons'/> : ""}
            { provider.cat ? <img src="../../cat-icon.png" alt="cat" className='icons'/> : ""}
            { provider.bird ? <img src="../../bird.png" alt="bird" className='icons'/> : ""}
            { provider.rabbit ? <img src="../../rabbit.png" alt="rabbit" className='icons'/> : ""}
            { provider.reptile ? <img src="../../reptile-icon.png" alt="reptiles" className='icons'/> : ""}

        </p>
<button onClick={handleDeleteButton}>Delete account</button>
       
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
    : 
    <div className="provider-profile">
        {displayProvider()}
    </div>
    



};

export default ServiceProfilePage;
