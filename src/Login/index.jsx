import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context'

const Login = () => {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signin, currentUser } = useAuth();

    function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            // setLoading(true)
            signin(usernameRef.current.value, passwordRef.current.value)
            console.log(usernameRef.current.value, passwordRef.current.value)
            console.log("signin" + currentUser)
            navigate("/pet-profile")    
        } catch (error) {
          setError('Failed to signin')  
        }
        
        setLoading(false)
    }
    
  return (
    <div className='signup-page'>
        <div className='signup-box'>
            <h2 className='signup-heading'>
                Login
            </h2>
            <form onSubmit={handleSubmit} className='signup-form'>
                <input className='signup-form-element' placeholder='Username' type='text' ref={usernameRef} name='username-form' required/>
                <input className='signup-form-element' placeholder='Password' type='password' ref={passwordRef} name='password-form' required/>
                <button className='singup-button' disabled={loading} type='submit'>Login</button>
                {error && <p>{error}</p>}
            </form>
            <div className='signup-link'>Dont have an account? <Link to='/signup'>Signup</Link></div>
        </div>
    </div>
  )
}

export default Login