import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context'

const SignUp = () => {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { setUser, user } = useAuth();

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
        // signup(usernameRef.current.value, passwordRef.current.value)    
        } catch (error) {
          setError('Failed to create an account')  
        }
        
        setLoading(false)
    }
    
  return (
    <>
        <div>
            <h2>
                Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username-form'>
                    Username: 
                </label>
                <input type='text' ref={usernameRef} name='username-form' required/>
                <label htmlFor='password-form'>
                    Password: 
                </label>
                <input type='password' ref={passwordRef} name='password-form' required/>
                <label htmlFor='passwordConfirm-form'>
                     Confirmation: 
                </label>
                <input type='password' ref={passwordConfirmRef} name='passwordConfirm-form' required/>
                <button disabled={loading} type='submit'>Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </div>
        <div>Already have an account? <Link to='/login'>Login</Link></div>
    </>
  )
}

export default SignUp