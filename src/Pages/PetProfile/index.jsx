// import { CardProfile } from "../../Components";
// import { PetProfileForm } from "../../Components/PetProfileForm";
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context';

const PetProfile = () => {
  const [pets, setPets] = useState([]);
  const {user_id} = useAuth()

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch(`http://localhost:5000/users/${user_id}/pets`);
        if (!response.ok) {
          throw new Error(`Failed to get user pets: ${response.statusText}`);
        }
        const petsData = await response.json();
        setPets(petsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPets();
  }, [user_id]);

  return (
    <div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <p>Animal type: {pet.animal_type}</p>
          <p>Pet age: {pet.animal_age}</p>
          <p>Comment: {pet.comment}</p>
        </div>
      ))}
    </div>
  );
}
export default PetProfile;
