import React from 'react'

const Filters = ({dogs,setDogs,cats, setCats,rabbits, setRabbits,birds, setBirds, reptiles, setReptiles,daycares, setDaycares,hotels, setHotels,petsitters, setPetsitters,dogwalkers, setDogwalkers,groomers, setGroomers,vets, setVets, trainers, setTrainers}) => {
    
    
    return <div className="filters">
    <label>Daycare:<input type="checkbox"
    checked={daycares}
    onChange={()=> setDaycares(!daycares)}></input></label>
    <label>Boarding hotels:<input type="checkbox"
    checked={hotels}
    onChange={()=> setHotels(!hotels)}></input></label>
    <label>Daycare:<input type="checkbox"
    checked={daycares}
    onChange={()=> setDaycares(!daycares)}></input></label>
    <label>Boarding hotels:<input type="checkbox"
    checked={hotels}
    onChange={()=> setHotels(!hotels)}></input></label>
    
</div>
}

export default Filters

