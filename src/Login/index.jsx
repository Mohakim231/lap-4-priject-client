import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context'

const Login = () => {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { setUser, user } = useAuth();

    function handleSubmit(e) {
        e.preventDefault()

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
                Login
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
                <button disabled={loading} type='submit'>Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
        <div>Dont have an account? <Link to='/signup'>Signup</Link></div>
    </>
  )
}

export default Login