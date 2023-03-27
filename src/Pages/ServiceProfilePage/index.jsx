import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Calendar } from '../../Components';
const ServiceProfilePage = () => {

    const [loading, setLoading] = useState(false);
    const [provider, setProvider] = useState({});
    const {userId} = useParams()
    const navigate = useNavigate()
    const[calendar, setCalendar] = useState(false)


    useEffect(() => {

        setLoading(true);
        async function loadProvider() {
console.log(userId)
            const response = await fetch(`http://localhost:5000/services/profile/${userId}`);
            const data = await response.json();
            setProvider(data);
            console.log(data)
            setLoading(false);
            const res = await fetch(`http://localhost:5000/service/calendar/${userId}`)
            if(res.status === 201){
                const dat = await res.json()
                console.log(dat.calendar)
                setCalendar(dat.calendar)
            }
        };

        updateCalendar()
        loadProvider();

    }, [calendar])


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
    const handleCalendar =async ()=>{
       await setCalendar(!calendar)
      
    }
    const updateCalendar = async ()=>{
        console.log(calendar)
        const options = {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sp_id : userId,
                calendar:calendar
            })
        }
        const response = await fetch('http://localhost:5000/service/add-calendar', options)
        const data = await response.json()
console.log(data)
    }

    function displayProvider() {
        return <><div className='prov-card'>
        <h2>Your address:</h2>    
        <h3>{provider.name}</h3>
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
            
            { provider.dog? <span className="">D</span> : ""}
            { provider.cat ? <span className="">C</span> : ""}
            { provider.bird ? <span className="">B</span> : ""}
            { provider.rabbit ? <span className="">RA</span> : ""}
            { provider.reptile ? <span className="">R</span> : ""}

        </p>
<button onClick={handleDeleteButton}>Delete account</button>
<button onClick={handleCalendar}>Show calendar</button>      
        <br></br>
    </div>
    <div className='calendar'>
      {calendar? <Calendar userId = {userId}/>:''}  
    </div>
    </>
        
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

export default ServiceProfilePage;
