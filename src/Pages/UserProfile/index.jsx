import React from 'react'
import { PetProfileForm } from '../../Components'
import { useAuth } from '../../context'

const UserProfile = () => {
    const { username } = useAuth()
  return (
    <>
    <p>this is: {username}</p>
    <PetProfileForm/>
    </>
  )
}

export default UserProfile