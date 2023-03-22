import { useState } from "react"
import React  from 'react'
// import { ProviderCard } from "../Components"
import "./index.css"

const Services = () => {
    const [serviceProviders, setServiceProviders]= useState(providers)


function displayProviders() {
    return serviceProviders.map(s => <ProviderCard key={s.id} id={s.id} name={s.name}
                        address={s.address} city={s.city}
                        postcode={s.post_code} phone={s.phone} dog={s.dog} cat={s.cat} rabbit={s.rabbit}bird={s.bird}reptile={s.reptile}daycare={s.daily_care} hotel={s.boarding_hotel}petsitter={s.pet_sitter}dogwalker={s.dog_walker}groomer={s.grooming}vet={s.vet}trainer={s.trainer}
                        />)
}
  return (
    <main className="provider-main">
    <div className="card-holder">
            { displayProviders() }
        </div>
    </main>
  )
}

export default Services

const providers=[{
    "id":1,
    "name": "ARK",
    "address":"127, Albany Road",
    "city": "Hornchurch",
    "post_code": "RM12 4AQ",
    "phone":"12345",
    "email": "ark@gmail.com",
    "latitude":51.560351,
    "longitude":0.196177,
    "dog": true,
    "cat":true,
    "rabbit":false,
    "bird":false,
    "reptile":false,
    "daily_care":false,
    "boarding_hotel": false,
    "pet_sitter": false,
    "dog_walker": false,
    "vet":true,
    "grooming": false,
    "trainer": false,
    },{
        "id":2,
    "name": "Gina",
    "address":"138, Upper Rainham Road",
    "city": "Hornchurch",
    "post_code": "RM12 4AQ",
    "phone": "12345",
    "email": "gina@gmail.com",
    "latitude":51.561068,
    "longitude":0.188231,
    "dog": true,
    "cat": false,
    "rabbit": true,
    "bird":false,
    "reptile": true,
    "daily_care": true,
    "boarding_hotel": false,
    "pet_sitter":true,
    "dog_walker":false,
    "vet": false,
    "grooming": false,
    "trainer":true,
    },{
        "id":3,
    "name": "Bone and Bisquit",
    "address": "300 Hornchurch Road",
    "city": "Hornchurch",
    "post_code": "RM11 1PY",
    "phone":"344556",
    "email": "bb@gmail.com",
    "latitude":51.566099,
    "longitude":0.191953,
    "dog": true,
    "cat":true,
    "rabbit": false,
    "bird": true,
    "reptile": true,
    "daily_care": false,
    "boarding_hotel": true,
    "pet_sitter": false,
    "dog_walker": false,
    "vet": true,
    "grooming": true,
    "trainer": false,
    },{
        "id":4,
    "name": "Paws and fur",
    "address": "156 Suttons Avenue",
    "city": "Hornchurch",
    "post_code": "RM12 4LY",
    "phone":"659639",
    "email":"paf@gmail.com",
    "latitude":51.556175,
    "longitude": 0.210287,
    "dog": true,
    "cat": true,
    "rabbit": true,
    "bird": false,
    "reptile": false,
    "daily_care": false,
    "boarding_hotel": false,
    "pet_sitter":false,
    "dog_walker":false,
    "vet":false,
    "grooming": true,
    "trainer":false,
    },{
        "id":5,
    "name": "Remy",
    "address":"89 Coronation Drive",
    "city": "Hornchurch",
    "post_code": "RM12 5BT",
    "phone":"63252342",
    "email":"remy@gmail.com",
    "latitude":51.548223,
    "longitude":0.199816,
    "dog":true,
    "cat":true,
    "rabbit":false,
    "bird":false,
    "reptile":false,
    "daily_care":false,
    "boarding_hotel":false,
    "pet_sitter":true,
    "dog_walker":true,
    "vet": false,
    "grooming":false,
    "trainer":true,
    },{
        "id":6,
    "name": "Vets for pets",
    "address":"130 Hornchurch Road",
    "city": "Hornchurch",
    "post_code": "RM11 1DP",
    "phone":"7473838",
    "email":"vfp@gmail.com",
    "latitude":51.565114,
    "longitude":0.204909,
    "dog":true,
    "cat":true,
    "rabbit":true,
    "bird":true,
    "reptile":true,
    "daily_care":true,
    "boarding_hotel":false,
    "pet_sitter":false,
    "dog_walker":false,
    "vet":true,
    "grooming":true,
    "trainer":false,
    }]
    